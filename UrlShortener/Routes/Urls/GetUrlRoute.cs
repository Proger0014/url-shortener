using FluentValidation;
using FluentValidation.Results;
using MapsterMapper;
using Microsoft.AspNetCore.Mvc;
using UrlShortener.Abstraction.Services;
using UrlShortener.Contracts;
using UrlShortener.Entities;

namespace UrlShortener.Routes.Urls;

public static class GetUrlRoute
{
    public const string Name = "GetUrl";
    
    public static async Task<IResult> GetUrl(
        HttpContext httpContext,
        [FromServices] IMapper mapper,
        [FromServices] IUrlService urlService,
        [FromServices] IValidator<GetUrlRequest> validator,
        string shortUrl)
    {
        ValidationResult validationResult = await validator.ValidateAsync(new GetUrlRequest(shortUrl));

        if (!validationResult.IsValid)
        {
            return Results.ValidationProblem(validationResult.ToDictionary());
        }
        
        UrlModel? targetUrl = await urlService.GetUrl(shortUrl);

        if (targetUrl is null) return Results.NotFound();

        GetUrlResponse response = mapper.Map<GetUrlResponse>(targetUrl);

        return Results.Ok(response);
    }
}