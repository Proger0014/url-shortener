using System.Reflection;
using Mapster;
using MapsterMapper;
using UrlShortener.Abstraction.Repositories;
using UrlShortener.Abstraction.Services;
using UrlShortener.Repositories;
using UrlShortener.Services;

namespace UrlShortener.Extensions;

public static class AddExtensions
{
    public static void AddMongoDbStore(this IServiceCollection serviceCollection, string host, string databaseName)
    {
        serviceCollection.AddScoped<MongoDbStore>(serviceProvider => new MongoDbStore(host, databaseName));
    }

    public static void AddMappings(this IServiceCollection serviceCollection)
    {
        TypeAdapterConfig config = new TypeAdapterConfig();
        config.Scan(Assembly.GetExecutingAssembly());

        serviceCollection.AddSingleton(config);
        serviceCollection.AddScoped<IMapper, ServiceMapper>();
    }

    public static void AddAbstractions(this IServiceCollection serviceCollection)
    {
        serviceCollection.AddScoped<IUrlRepository, UrlRepository>();
        serviceCollection.AddScoped<IUrlService, UrlService>();
    }

    public static void AddDefaultCors(this IServiceCollection serviceCollection, IConfiguration configuration)
    {
        string[] origins = configuration.GetSection("Origins")
            .Get<string[]>()!;
        
        serviceCollection.AddCors(options =>
            options.AddDefaultPolicy(policy =>
                policy.WithOrigins(origins)
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()));
    }
}