using FluentValidation;
using FluentValidation.Results;
using MapsterMapper;
using Microsoft.AspNetCore.Mvc;
using UrlShortener.Abstraction.Services;
using UrlShortener.Contracts;
using UrlShortener.Entities;

namespace UrlShortener.Routes.Urls;

public static class CreateUrlRoute
{
    public const string Name = "CreateUrl";
    
    public static async Task<IResult> CreateUrl(
        HttpContext httpContext,
        [FromServices] IValidator<CreateUrlRequest> validator,
        [FromServices] LinkGenerator linkGenerator,
        [FromServices] IMapper mapper,
        [FromServices] IUrlService urlService,
        [FromBody] CreateUrlRequest createUrlRequest)
    {
        ValidationResult validationResult = await validator.ValidateAsync(createUrlRequest);

        if (!validationResult.IsValid)
        {
            return Results.ValidationProblem(validationResult.ToDictionary());
        }
        
        UrlModel newUrl = mapper.Map<UrlModel>(createUrlRequest);

        await urlService.InsertUrl(newUrl);
        
        CreateUrlResponse response = mapper.Map<CreateUrlResponse>(newUrl);

        string uri = linkGenerator.GetUriByName(
            httpContext: httpContext,
            endpointName: Name)!;
        
        return Results.Created(uri, response);
    }
}