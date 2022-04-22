  module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: Number,
          auteur: String,
          description: String,
          classe: String,
          contentURL: String,
          classesConcernees: Array
      },
      { timestamps: true }
    );
   
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const POSTS = mongoose.model("posts", schema);
    return POSTS;
  };