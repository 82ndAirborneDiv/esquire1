using System;
using System.Linq;
using esquire1.Models;

namespace esquire1.Data
{
    public class DbInitializer
    {
        public static void Initialize(ProjectContext context)
        {
            context.Database.EnsureCreated();

            // Look for any projects.
            if (context.Projects.Any()) {
                return;   // DB has been seeded
            }

            var projects = new Project[] {
                new Project { Name = "Project 1", IsComplete = false},
                new Project { Name = "Project 2", IsComplete = false},
                new Project { Name = "Project 3", IsComplete = false},
            };

            // seed the DB
            foreach (Project p in projects) {
                context.Projects.Add(p);
            }
            context.SaveChanges();
        }
    }
}
