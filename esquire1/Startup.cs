using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using esquire1.Data;
using esquire1.Interfaces;
using esquire1.Models;
using Microsoft.EntityFrameworkCore;

namespace esquire1 {
    public class Startup {
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.AddCors();
            var hostname = Environment.GetEnvironmentVariable("SQLSERVER_HOST") ?? "localhost";
            var password = Environment.GetEnvironmentVariable("SQLSERVER_SA_PASSWORD") ?? "1qazXSW@.";
            var connString = $"Data Source={hostname};Initial Catalog=Esquire1;User ID=sa;Password={password};";

            services.AddDbContext<ProjectContext>(options => options.UseSqlServer(connString));
            services.AddTransient<IProjectMongoRepository, ProjectMongoRepository>();
            services.Configure<Settings>(options =>
            {
                options.ConnectionString = Configuration.GetSection("MongoConnection:ConnectionString").Value;
                options.Database = Configuration.GetSection("MongoConnection:Database").Value;
            });
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true,
                    ConfigFile = System.IO.Path.Combine("ClientApp", "config", "webpack.dev.config.js")
                });
            } else {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseCors(builder => {
                builder.AllowAnyHeader();
                builder.AllowAnyMethod();
                builder.AllowCredentials();
                builder.AllowAnyOrigin();
            });

            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new {controller = "Home", action = "Index"});
            });
        }
    }
}
