using esquire1.Models;
using Microsoft.EntityFrameworkCore;

namespace esquire1.Data {
    public class ProjectContext : DbContext {
        public ProjectContext(DbContextOptions<ProjectContext> options) : base(options) { }
        public DbSet<Project> Projects { get; set; }
    }
}
