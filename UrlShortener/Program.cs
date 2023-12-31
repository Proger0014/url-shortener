using System.Reflection;
using FluentValidation;
using UrlShortener.Extensions;
using UrlShortener.Routes;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMappings();
builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

builder.Services.AddMongoDbStore(
    builder.Configuration.GetMongoDbHostString()!,
    builder.Configuration.GetMongoDbDatabaseString()!);

builder.Services.AddAbstractions();

builder.Services.AddDefaultCors(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/api/error");
}

app.UseStatusCodePagesWithReExecute("/api/error");

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors();

app.MapMinimalApi();

app.Run();