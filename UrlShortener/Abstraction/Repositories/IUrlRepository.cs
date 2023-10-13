using UrlShortener.Entities;

namespace UrlShortener.Abstraction.Repositories;

public interface IUrlRepository
{
    Task<UrlModel> GetUrl(string shortUrl);
    Task<string> InsertUrl(UrlModel newUrl);
    Task<string> RemoveUrl(UrlModel removeUrl);
}