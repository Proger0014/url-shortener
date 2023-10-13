namespace UrlShortener.Routes.Urls;

public static class CreateUrlRoute
{
    public static IResult CreateUrl(
        HttpContext httpContext)
    {
        return Results.Ok(1);
    }
}