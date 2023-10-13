using System.Diagnostics;
using System.Net;
using System.Net.Mime;
using UrlShortener.Contracts.Problems;

namespace UrlShortener.Routes;

public static class ErrorRoute
{
    public static RouteGroupBuilder MapError(this RouteGroupBuilder routeGroupBuilder)
    {
        routeGroupBuilder.MapGet("/error", (HttpContext httpContext) =>
            {
                string title = HttpStatusCode.InternalServerError.ToString();
                int statusCode = (int)HttpStatusCode.InternalServerError;

                if (httpContext.Response.StatusCode.ToString().StartsWith("4"))
                {
                    title = ((HttpStatusCode)httpContext.Response.StatusCode).ToString();
                    statusCode = httpContext.Response.StatusCode;
                }

                IResult result = Results.Problem(
                    title: title,
                    statusCode: statusCode,
                    extensions: new Dictionary<string, object?>()
                    {
                        ["traceId"] = Activity.Current?.Id ?? httpContext.TraceIdentifier,
                        ["timeAt"] = DateTime.Now
                    });

                return result;
            })
            .Produces<ProblemResponse>(StatusCodes.Status500InternalServerError, MediaTypeNames.Application.Json)
            .Produces<ProblemResponse>(StatusCodes.Status404NotFound, MediaTypeNames.Application.Json);

        return routeGroupBuilder;
    }
}