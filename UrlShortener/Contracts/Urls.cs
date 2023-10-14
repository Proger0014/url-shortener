namespace UrlShortener.Contracts;

public record CreateUrlRequest(string? ShortUrl, string TargetUri);
public record CreateUrlResponse(string ShortUrl, string TargetUri);

public record GetUrlRequest(string ShortUrl);
public record GetUrlResponse(string ShortUrl, string TargetUri);