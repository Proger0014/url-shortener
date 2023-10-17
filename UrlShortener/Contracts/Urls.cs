using FluentValidation;
using UrlShortener.Entities;

namespace UrlShortener.Contracts;

public record CreateUrlRequest(string? ShortUrl, string TargetUri);
public record CreateUrlResponse(string ShortUrl, string TargetUri);

public record GetUrlRequest(string ShortUrl);
public record GetUrlResponse(string ShortUrl, string TargetUri);


public class CreateUrlRequestValidator : AbstractValidator<CreateUrlRequest>
{
    public CreateUrlRequestValidator()
    {
        When(c => c.ShortUrl is not null, () =>
        {
            RuleFor(c => c.ShortUrl)
                .MinimumLength(UrlModel.ShortUrlMinLength)
                .WithMessage("{PropertyName} должен иметь не меньше {MinLength} символов");
        });

        RuleFor(c => c.TargetUri)
            .Matches(UrlModel.TargetUriRegexPattern)
            .WithMessage("{PropertyName} не является абсолютной ссылкой на ресурс");
    }
}

public class GetUrlRequestValidator : AbstractValidator<GetUrlRequest>
{
    public GetUrlRequestValidator()
    {
        RuleFor(g => g.ShortUrl)
            .NotEmpty()
            .WithMessage("{PropertyName} обязателен и не должен иметь пустую строку")
            .MinimumLength(UrlModel.ShortUrlMinLength)
            .WithMessage("{PropertyName} должен иметь минимульную длину {MinLength}");
    }
}