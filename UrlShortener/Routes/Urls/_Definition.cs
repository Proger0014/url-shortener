using System.Net.Mime;
using UrlShortener.Contracts;

namespace UrlShortener.Routes.Urls;

public static class _Definition
{
    public const string GroupName = "Urls";
    
    public static RouteGroupBuilder MapUrls(this RouteGroupBuilder routeGroupBuilder)
    {
        routeGroupBuilder.MapGet("/{shortUrl}", GetUrlRoute.GetUrl)
            .Produces<GetUrlResponse>(statusCode: StatusCodes.Status200OK)
            .Produces<ProblemDefaultResponse>(statusCode: StatusCodes.Status404NotFound)
            .WithDisplayName(GetUrlRoute.Name)
            .WithSummary("Get Url by ShortUrl");

        routeGroupBuilder.MapPost("/", CreateUrlRoute.CreateUrl)
            .Accepts<CreateUrlRequest>(contentType: MediaTypeNames.Application.Json)
            .Produces<CreateUrlResponse>(statusCode: StatusCodes.Status201Created)
            .Produces<ProblemValidationResponse>(statusCode: StatusCodes.Status400BadRequest)
            .WithName(CreateUrlRoute.Name)
            .WithSummary("Create Url");

        
        return routeGroupBuilder;
    }
}