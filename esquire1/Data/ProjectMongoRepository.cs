using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

using esquire1.Interfaces;
using esquire1.Models;
using MongoDB.Bson;


namespace esquire1.Data
{
    public class ProjectMongoRepository : IProjectMongoRepository
    {
        private readonly ProjectMongoContext _context = null;

        public ProjectMongoRepository(IOptions<Settings> settings)
        {
            _context = new ProjectMongoContext(settings);
        }

        public async Task<IEnumerable<ProjectMongo>> GetAllProjects()
        {
            try
            {
                return await _context.ProjectMongo.Find(_ => true).ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        
        public async Task<ProjectMongo> GetProject(string id)
        {
            var filter = Builders<ProjectMongo>.Filter.Eq("Id", id);

            try
            {
                return await _context.ProjectMongo.Find(filter).FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task AddProject(ProjectMongo item)
        {
            try
            {
                await _context.ProjectMongo.InsertOneAsync(item);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<DeleteResult> RemoveProject(string id)
        {
            try
            {
                return await _context.ProjectMongo.DeleteOneAsync(Builders<ProjectMongo>.Filter.Eq("Id", id));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<UpdateResult> UpdateProject(string id, string body)
        {
            var filter = Builders<ProjectMongo>.Filter.Eq(s => s.Id, id);
            var update = Builders<ProjectMongo>.Update
                .Set(s => s.Body, body)
                .CurrentDate(s => s.UpdatedOn);
            try
            {
                return await _context.ProjectMongo.UpdateOneAsync(filter, update);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task<DeleteResult> RemoveAllProjects()
        {
            return await _context.ProjectMongo.DeleteManyAsync(new BsonDocument());
        }
        
      
    }
}