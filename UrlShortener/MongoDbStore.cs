using MongoDB.Driver;
using UrlShortener.Models;

namespace UrlShortener;

public sealed class MongoDbStore
{
    public IMongoCollection<Url> Urls { get; init; }

    public MongoDbStore(string host, string databaseName)
    {
        MongoClient mongoClient = new MongoClient(host);
        
        IMongoDatabase mongoDatabase = mongoClient.GetDatabase(databaseName);
        
        Urls = mongoDatabase.GetCollection<Url>("Urls");
    }
}
