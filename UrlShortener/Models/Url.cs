using MongoDB.Bson.Serialization.Attributes;

namespace UrlShortener.Models;

public sealed class Url : BaseEntity
{
    public string ShortUrl { get; set; } = string.Empty;
    public string TargetUri { get; set; } = string.Empty;
}