using UrlShortener.Abstraction.Repositories;
using UrlShortener.Abstraction.Services;
using UrlShortener.Entities;

namespace UrlShortener.Services;

public class UrlService : IUrlService
{
    private readonly IUrlRepository _urlRepository;

    public UrlService(IUrlRepository urlRepository)
    {
        _urlRepository = urlRepository;
    }
    
    public async Task<UrlModel?> GetUrl(string shortUrl)
    {
        return await _urlRepository.GetUrl(shortUrl);
    }

    public async Task<string?> InsertUrl(UrlModel newUrl)
    {
        if (string.IsNullOrEmpty(newUrl.ShortUrl))
        {
            newUrl.ShortUrl = Guid.NewGuid().ToString().Replace("-", "");
        }
        
        return await _urlRepository.InsertUrl(newUrl);
    }

    public async Task<string?> RemoveUrl(UrlModel removeUrl)
    {
        return await _urlRepository.RemoveUrl(removeUrl);
    }
}