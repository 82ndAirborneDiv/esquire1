using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using esquire1.Interfaces;
using esquire1.Models;

using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using MongoDB.Bson;

namespace esquire1.Controllers
{
  [Route("api/projectmongo")]
  public class ProjectMongoController : Controller
  {
    private readonly IProjectMongoRepository _projectMongoRepository;

    public ProjectMongoController(IProjectMongoRepository projectMongoRepository)
    {
      _projectMongoRepository = projectMongoRepository;
    }

    [HttpGet]
    public Task<IEnumerable<ProjectMongo>> Get()
    {
      return GetProjectInternal();
    }

    private async Task<IEnumerable<ProjectMongo>> GetProjectInternal()
    {
      return await _projectMongoRepository.GetAllProjects();
    }

    // GET api/projectmongo/3
    [HttpGet("{id}")]
    public Task<ProjectMongo> Get(ObjectId id)
    {
      return GetProjectByIdInternal(id);
    }

    private async Task<ProjectMongo> GetProjectByIdInternal(ObjectId id)
    {
      return await _projectMongoRepository.GetProject(id) ?? new ProjectMongo();
    }

    // POST api/projectmongo
    [HttpPost]
    public void Post([FromBody] ProjectMongo project)
    {
      _projectMongoRepository.AddProject(project);
    }

//    [HttpPut("{id}")]
//    public void Put(string id, [FromBody] string value)
//    {
//      _projectMongoRepository.UpdateProject(id, value);
//    }

    [HttpDelete("{id}")]
    public void Delete(ObjectId id)
    {
      _projectMongoRepository.RemoveProject(id);
    }
  }
}
