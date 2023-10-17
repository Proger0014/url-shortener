namespace UrlShortener.Entities;

public class UrlModel : BaseModel
{
    public const int ShortUrlMinLength = 5;
    public const string ShortUrlRegexPattern = @"^([A-Za-z0-9]+)$";
    public const string TargetUriRegexPattern = @"((https|http)://)?(www\.)([a-zA-Z\./]+)(\.\w+)$";
    
    public string ShortUrl { get; set; } = string.Empty;
    public string TargetUri { get; set; } = string.Empty;
}