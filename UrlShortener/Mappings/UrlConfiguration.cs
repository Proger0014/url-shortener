using Mapster;
using UrlShortener.Contracts;
using UrlShortener.Entities;
using UrlShortener.Models;

namespace UrlShortener.Mappings;

public class UrlConfiguration : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<Url, UrlModel>().TwoWays();

        config.NewConfig<CreateUrlRequest, UrlModel>();

        config.NewConfig<UrlModel, CreateUrlResponse>();

        config.NewConfig<UrlModel, GetUrlResponse>();
    }
}