using Microsoft.AspNetCore.Mvc;

namespace UrlShortener.Routes.Urls;

public static class GetUrlRoute
{
    public static IResult GetUrl(
        HttpContext httpContext,
        [FromRoute] Guid id)
    {
        return Results.Ok(new { Id = id });
    }
}