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
        _projectMongoRepository.AddProject(new ProjectMongo() { Body = "Test Mongo Project 1" });
        _projectMongoRepository.AddProject(new ProjectMongo() { Body = "Test Mongo Project 2" });
        _projectMongoRepository.AddProject(new ProjectMongo() { Body = "Test Mongo Project 3" });
        _projectMongoRepository.AddProject(new ProjectMongo() { Body = "Test Mongo Project 4" });

        return "Database NotesDb was created, and collection 'Projects' was filled with 4 sample items";
      }

      return "Unknown";
    }
  }
}