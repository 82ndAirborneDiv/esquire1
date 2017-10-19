using System;
using Microsoft.AspNetCore.Mvc;

using esquire1.Interfaces;
using esquire1.Models;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace esquire1.Controllers
{
    [Route("api/[controller]")]
    public class SystemController : Controller
    {
        private readonly IProjectMongoRepository _projectMongoRepository;

        public SystemController(IProjectMongoRepository projectMongoRepository)
        {
            _projectMongoRepository = projectMongoRepository;
        }

        // Call an initialization - api/system/init
        [HttpGet("{setting}")]
        public string Get(string setting)
        {
            if (setting == "init")
            {
                _projectMongoRepository.RemoveAllProjects();
                _projectMongoRepository.AddProject(new ProjectMongo() { Id = "1", Body = "Test Project 1", Createdon = DateTime.Now, UpdatedOn = DateTime.Now});
                _projectMongoRepository.AddProject(new ProjectMongo(){ Id = "2", Body = "Test Project 2", Createdon = DateTime.Now, UpdatedOn = DateTime.Now});
                _projectMongoRepository.AddProject(new ProjectMongo(){ Id = "3", Body = "Test Project 3", Createdon = DateTime.Now, UpdatedOn = DateTime.Now});
                _projectMongoRepository.AddProject(new ProjectMongo() { Id = "4", Body = "Test Project 4", Createdon = DateTime.Now, UpdatedOn = DateTime.Now});

                return "Database NotesDb was created, and collection 'Projects' was filled with 4 sample items";
            }

            return "Unknown";
        }
    }
}