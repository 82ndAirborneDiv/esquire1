using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using esquire1.Models;
using MongoDB.Driver;

namespace esquire1.Interfaces
{
    public interface IProjectMongoRepository
    {
        Task<IEnumerable<ProjectMongo>> GetAllProjects();
        Task<ProjectMongo> GetProject(string id);
        Task AddProject(ProjectMongo item);
        Task<DeleteResult> RemoveProject(string id);
        Task<UpdateResult> UpdateProject(string id, string body);
//        Task<ReplaceOneResult> UpdateProjectDocument(string id, string body);
        Task<DeleteResult> RemoveAllProjects();
    }
}