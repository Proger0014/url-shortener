namespace UrlShortener.Contracts;

public record ProblemDefaultResponse(string Type, string Title, int Status, string TraceId, DateTime TimeAt);

public record ProblemValidationResponse(string Type, string Title, int Status, Dictionary<string, string[]> Errors);