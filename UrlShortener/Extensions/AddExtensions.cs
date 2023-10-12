namespace UrlShortener.Extensions;

public static class AddExtensions
{
    public static void AddMongoDbStore(this IServiceCollection serviceCollection, string host, string databaseName)
    {
        serviceCollection.AddScoped<MongoDbStore>(serviceProvider => new MongoDbStore(host, databaseName));
    }
}