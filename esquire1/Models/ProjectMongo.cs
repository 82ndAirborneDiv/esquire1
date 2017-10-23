using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace esquire1.Models
{
  public class ProjectMongo
  {
    [BsonId]
    public ObjectId Id { get; set; }
    public string Body { get; set; } = string.Empty;
  }
}
