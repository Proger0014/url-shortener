namespace UrlShortener.Entities;

public class UrlModel : BaseModel
{
    public string ShortUrl { get; set; } = string.Empty;
    public string TargetUri { get; set; } = string.Empty;
}