using System;
using System.Security.Cryptography.X509Certificates;
using MongoDB.Bson.Serialization.Attributes;

namespace esquire1.Models
{
    public class ProjectMongo
    {
        [BsonId]
        public string Id { get; set; }
        public string Body { get; set; } = string.Empty;
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
        public DateTime Createdon { get; set; } = DateTime.Now;
    }
}
