namespace UrlShortener.Contracts.Problems;

public class ProblemResponse
{
    public string Type { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public int Status { get; set; }
    public string TraceId { get; set; } = string.Empty;
    public DateTime TimeAt { get; set; }
}