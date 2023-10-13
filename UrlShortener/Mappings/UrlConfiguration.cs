using Mapster;
using UrlShortener.Entities;
using UrlShortener.Models;

namespace UrlShortener.Mappings;

public class UrlConfiguration : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<Url, UrlModel>().TwoWays();
    }
}