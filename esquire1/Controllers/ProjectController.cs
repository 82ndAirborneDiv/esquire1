using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using esquire1.Models;
using  esquire1.Data;

namespace esquire1.Controllers {
    [Route("api/[controller]s")]
    public class ProjectController : Controller {
        private readonly ProjectContext _context;

        public ProjectController(ProjectContext context) {
            _context = context;
        }

        [HttpOptions]
        [HttpGet]
        public IEnumerable<Project> GetAll() {
            return _context.Projects.ToList();
        }

        [HttpGet("{id}", Name = "GetProjects")]
        public IActionResult GetById(long id) {
            var item = _context.Projects.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Project project) {
            if (project == null) {
                return BadRequest();
            }

            _context.Projects.Add(project);
            _context.SaveChanges();

            return CreatedAtRoute("GetProjects", new { id = project.Id }, project);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Project updatedProject) {
            if (updatedProject == null || updatedProject.Id != id) {
                return BadRequest();
            }

            var oldProject = _context.Projects.FirstOrDefault(t => t.Id == id);
            if (oldProject == null) {
                return NotFound();
            }

            oldProject.IsComplete = updatedProject.IsComplete;
            oldProject.Name = updatedProject.Name;

            _context.Projects.Update(oldProject);
            _context.SaveChanges();
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id) {
            var project = _context.Projects.FirstOrDefault(t => t.Id == id);
            if (project == null) {
                return NotFound();
            }

            _context.Projects.Remove(project);
            _context.SaveChanges();
            return new NoContentResult();
        }
    }
}
