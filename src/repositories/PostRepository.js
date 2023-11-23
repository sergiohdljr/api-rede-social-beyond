const db = require("../db/firestore.js");

class PostRepository {
  #firestore;

  constructor() {
    this.firestore = db;
  }

  async getAllPosts() {
    try {
      const allPosts = await this.firestore.collection("posts").get();
      const posts = [];

      allPosts.forEach((post) => {
        posts.push(post.data());
      });
      return posts;
    } catch (error) {
      throw new Error("Erro ao receber os posts");
    }
  }
}
module.exports = PostRepository;
