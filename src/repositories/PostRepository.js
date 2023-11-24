const db = require("../db/firestore.js");

class PostRepository {
  constructor() {
    this.firestore = db;
  }

  async find() {
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

  async findById(id) {
    try {
      const post = await this.firestore.collection("posts").doc(id).get();
      return post.data();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(post) {
    try {
      await this.firestore.collection("posts").doc(post.id).create(post);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(id) {
    try {
      await this.firestore.collection("posts").doc(id).delete();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id, texto) {
    try {
      await this.firestore.collection("posts").doc(id).update({ texto });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PostRepository;
