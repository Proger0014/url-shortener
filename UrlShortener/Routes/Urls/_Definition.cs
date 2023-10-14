using System.Net.Mime;
using UrlShortener.Contracts;
using UrlShortener.Contracts.Problems;

namespace UrlShortener.Routes.Urls;

public static class _Definition
{
    public static RouteGroupBuilder MapUrls(this RouteGroupBuilder routeGroupBuilder)
    {
        routeGroupBuilder.MapGet("/{shortUrl}", GetUrlRoute.GetUrl)
            .Produces<GetUrlResponse>(statusCode: StatusCodes.Status200OK)
            .Produces<ProblemResponse>(statusCode: StatusCodes.Status404NotFound);
        
        routeGroupBuilder.MapPost("/", CreateUrlRoute.CreateUrl)
            .Accepts<CreateUrlRequest>(contentType: MediaTypeNames.Application.Json)
            .Produces<CreateUrlResponse>(statusCode: StatusCodes.Status201Created)
            .Produces<ProblemResponse>(statusCode: StatusCodes.Status400BadRequest)
            .WithName(CreateUrlRoute.Name);
        
        return routeGroupBuilder;
    }
}