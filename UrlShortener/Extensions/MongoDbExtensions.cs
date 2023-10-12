namespace UrlShortener.Extensions;

public static class MongoDbExtensions
{
    private const string SectionName = "UrlShortenerStore";
    private const string Host = "Host";
    private const string DatabaseName = "DatabaseName";
    
    public static string? GetMongoDbHostString(this IConfiguration configuration) => 
        configuration[$"{SectionName}:{Host}"];

    public static string? GetMongoDbDatabaseString(this IConfiguration configuration) =>
        configuration[$"{SectionName}:{DatabaseName}"];
}