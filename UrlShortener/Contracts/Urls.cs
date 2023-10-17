using System.Text.Json.Serialization;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using UrlShortener.Abstraction.Services;
using UrlShortener.Entities;

namespace UrlShortener.Contracts;

public record CreateUrlRequest(string? ShortUrl, string TargetUri);
public record CreateUrlResponse(string ShortUrl, string TargetUri);

public record GetUrlRequest(string ShortUrl);
public record GetUrlResponse(string ShortUrl, string TargetUri);


public class CreateUrlRequestValidator : AbstractValidator<CreateUrlRequest>
{
    public CreateUrlRequestValidator(IUrlService urlService)
    {
        When(c => c.ShortUrl is not null, () =>
        {
            RuleFor(c => c.ShortUrl)
                .MinimumLength(UrlModel.ShortUrlMinLength)
                .WithMessage("{PropertyValue} должен иметь не меньше {MinLength} символов")
                .Must(su => urlService.GetUrl(su).GetAwaiter().GetResult() is null)
                .WithMessage("{PropertyValue} занят, воспользуйтесь другой ссылкой");
        });

        RuleFor(c => c.TargetUri)
            .Matches(UrlModel.TargetUriRegexPattern)
            .WithMessage("{PropertyValue} не является абсолютной ссылкой на ресурс");
    }
}

public class GetUrlRequestValidator : AbstractValidator<GetUrlRequest>
{
    public GetUrlRequestValidator()
    {
        RuleFor(g => g.ShortUrl)
            .NotEmpty()
            .WithMessage("{PropertyValue} обязателен и не должен иметь пустую строку")
            .MinimumLength(UrlModel.ShortUrlMinLength)
            .WithMessage("{PropertyValue} должен иметь минимульную длину {MinLength}")
            .Matches(UrlModel.ShortUrlRegexPattern)
            .WithMessage("{PropertyValue} не должен содержать недопустимых символов");
    }
}