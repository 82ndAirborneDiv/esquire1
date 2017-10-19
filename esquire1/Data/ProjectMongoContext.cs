using Microsoft.Extensions.Options;
using MongoDB.Driver;
using esquire1.Models;

namespace esquire1.Data
{
    public class ProjectMongoContext
    {
        private readonly IMongoDatabase _database = null;

        public ProjectMongoContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<ProjectMongo> ProjectMongo
        {
            get { return _database.GetCollection<ProjectMongo>("Note"); }
        }
    }
}