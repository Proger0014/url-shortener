using System.Net.Mime;
using UrlShortener.Contracts;

namespace UrlShortener.Routes.Error;

public static class _Definition
{
    public static RouteGroupBuilder MapError(this RouteGroupBuilder routeGroupBuilder)
    {
        routeGroupBuilder.Map("/error", ErrorRoute.Error)
            .Produces<ProblemDefaultResponse>(StatusCodes.Status400BadRequest, MediaTypeNames.Application.Json)
            .Produces<ProblemDefaultResponse>(StatusCodes.Status500InternalServerError, MediaTypeNames.Application.Json)
            .Produces<ProblemDefaultResponse>(StatusCodes.Status404NotFound, MediaTypeNames.Application.Json);

        return routeGroupBuilder;
    }
}