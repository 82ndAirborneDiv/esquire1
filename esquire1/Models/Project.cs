using Microsoft.EntityFrameworkCore;

namespace esquire1.Models {
    public class ProjectContext : DbContext {
        public ProjectContext(DbContextOptions<ProjectContext> options) : base(options) {
            this.Database.EnsureCreated();
        }
        public DbSet<Project> Projects { get; set; }
    }

    public class Project {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
    }
}
