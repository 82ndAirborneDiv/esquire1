using MongoDB.Bson;
 
namespace esquire1.Models
{
    public class ProjectMongo
    {
        public ObjectId _id { get; set; }
        public string name { get; set; }
        public bool isComplete { get; set; }
    }
}