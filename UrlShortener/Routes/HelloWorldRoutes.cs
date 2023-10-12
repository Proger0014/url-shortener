namespace UrlShortener.Routes;

public static class HelloWorldRoutes
{
    public static RouteGroupBuilder MapHelloWorlds(this RouteGroupBuilder routeGroupBuilder)
    {
        routeGroupBuilder.MapGet("/world", () => 
            Results.Ok(new { Result = "Ok", StatusCode = StatusCodes.Status200OK }));
        
        return routeGroupBuilder;
    }
}