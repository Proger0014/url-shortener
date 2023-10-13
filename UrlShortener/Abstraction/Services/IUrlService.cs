using UrlShortener.Entities;

namespace UrlShortener.Abstraction.Services;

public interface IUrlService
{
    Task<UrlModel?> GetUrl(string shortUrl);
    Task<string?> InsertUrl(UrlModel newUrl);
    Task<string?> RemoveUrl(UrlModel removeUrl);
}