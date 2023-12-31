using UrlShortener.Routes.Error;
using UrlShortener.Routes.Urls;

namespace UrlShortener.Routes;

public static class GroupsDefinition
{
    public static void MapMinimalApi(this IEndpointRouteBuilder routeBuilder)
    {
        RouteGroupBuilder global = routeBuilder.MapGroup("/api").WithOpenApi();

        global.MapError();

        global.MapGroup("/urls")
            .WithTags(Urls._Definition.GroupName)
            .MapUrls();
    }
}