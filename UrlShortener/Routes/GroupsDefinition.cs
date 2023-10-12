namespace UrlShortener.Routes;

public static class GroupsDefinition
{
    public static void MapGroups(this IEndpointRouteBuilder routeBuilder)
    {
        RouteGroupBuilder global = routeBuilder.MapGroup("/api");

        global.MapGroup("/hello")
            .MapHelloWorlds();
    }
}