using MapsterMapper;
using MongoDB.Driver;
using UrlShortener.Abstraction.Repositories;
using UrlShortener.Entities;
using UrlShortener.Models;

namespace UrlShortener.Repositories;

public class UrlRepository : IUrlRepository
{
    private readonly IMapper _mapper;
    
    private readonly MongoDbStore _mongoDbStore;

    public UrlRepository(IMapper mapper, MongoDbStore mongoDbStore)
    {
        _mapper = mapper;
        _mongoDbStore = mongoDbStore;
    }
    
    public async Task<UrlModel?> GetUrl(string shortUrl)
    {
        Url? url = await _mongoDbStore.Urls.FindSync(u => u.ShortUrl == shortUrl)
            .FirstOrDefaultAsync();

        if (url is null) return null;

        return _mapper.Map<UrlModel>(url);
    }

    public async Task<string?> InsertUrl(UrlModel newUrl)
    {
        Url? existsUrl = await (await _mongoDbStore.Urls.FindAsync(u => u.ShortUrl == newUrl.ShortUrl))
            .FirstOrDefaultAsync();

        if (existsUrl is not null) return null;
        
        Url newUrlForStore = _mapper.Map<Url>(newUrl);

        await _mongoDbStore.Urls.InsertOneAsync(newUrlForStore);

        return newUrlForStore.Id;
    }

    public async Task<string?> RemoveUrl(UrlModel removeUrl)
    {
        Url? deletedUrl = await _mongoDbStore.Urls.FindOneAndDeleteAsync(u => u.Id == removeUrl.Id);

        return deletedUrl?.Id ?? null;
    }
}