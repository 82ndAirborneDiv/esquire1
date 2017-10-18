using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using esquire1.Data;

namespace esquire1 {
    public class Program {
        public static void Main(string[] args) {
            var host = BuildWebHost(args);
            using (var scope = host.Services.CreateScope()) {
                var services = scope.ServiceProvider;
                try {
                    var context = services.GetRequiredService<ProjectContext>();
                    DbInitializer.Initialize(context);
                } catch (Exception ex) { }
            }
            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseUrls("http://*:5000")
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();
    }
}
