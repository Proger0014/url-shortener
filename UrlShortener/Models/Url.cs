using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace UrlShortener.Models;

public sealed class Url
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonElement("_id")]
    public string Id { get; set; } = string.Empty;
    [BsonElement("short_url")]
    public string ShortUrl { get; set; } = string.Empty;
    [BsonElement("target_uri")]
    public string TargetUri { get; set; } = string.Empty;
}