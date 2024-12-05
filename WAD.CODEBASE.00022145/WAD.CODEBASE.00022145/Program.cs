using Microsoft.EntityFrameworkCore;

using WAD.CODEBASE._00022145.Data;

using WAD.CODEBASE._00022145.Models;

using WAD.CODEBASE._00022145.Repositories;

using WAD.CODEBASE._00022145.Controllers;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>

    options.AddPolicy(MyAllowSpecificOrigins,
               policy =>
               {
                   policy.WithOrigins("http://localhost:4200")
                           .AllowAnyHeader()
                           .AllowAnyMethod()
                           .AllowAnyOrigin();
               }

    )
);
// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<GeneralDBContext>(
  o => o.UseSqlServer(
    builder.Configuration.GetConnectionString("SqlServerConnection")));

builder.Services.AddScoped<IRepository<Event>, EventRepository>();

builder.Services.AddScoped<IRepository<Category>, CategoryRepository>();









var app = builder.Build();



// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())

{

    app.UseSwagger();

    app.UseSwaggerUI();

}





app.UseCors(MyAllowSpecificOrigins);



app.UseAuthorization();



app.MapControllers();







app.Run();

