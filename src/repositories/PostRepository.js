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

  async findById(id) {
    try {
      const post = await this.firestore.collection("posts").doc(id).get();
      return post.data();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createPost(post) {
    const postRef = this.firestore.collection("posts").doc(post.id);
    try {
      await postRef.create(post);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deletePost(id) {
    try {
      await this.firestore.collection("posts").doc(id).delete();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async edit(id, texto) {
    try {
      await this.firestore.collection("posts").doc(id).update({ texto });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PostRepository;
