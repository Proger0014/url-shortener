namespace UrlShortener.Routes.Urls;

public static class _Definition
{
    public static RouteGroupBuilder MapUrls(this RouteGroupBuilder routeGroupBuilder)
    {
        routeGroupBuilder.MapGet("/{id:guid}", GetUrlRoute.GetUrl);
        routeGroupBuilder.MapPost("/", CreateUrlRoute.CreateUrl);
        
        return routeGroupBuilder;
    }
}