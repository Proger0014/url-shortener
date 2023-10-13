using UrlShortener.Routes.Urls;

namespace UrlShortener.Routes;

public static class GroupsDefinition
{
    public static void MapMinimalApi(this IEndpointRouteBuilder routeBuilder)
    {
        RouteGroupBuilder global = routeBuilder.MapGroup("/api");

        global.MapError();

        global.MapGroup("/urls").MapUrls();
    }
}