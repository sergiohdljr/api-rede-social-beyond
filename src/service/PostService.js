const PostRepository = require("../repositories/PostRepository.js");

class PostService {
  constructor() {
    this.repository = new PostRepository();
  }

  async createPost(post) {
    try {
      await this.repository.create(post);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findPost() {
    try {
      const posts = await this.repository.find();
      return posts;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findPostById(id) {
    try {
      const post = await this.repository.findById(id);
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deletePost(id) {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updatePost(id, texto, foto) {
    try {
      await this.repository.update(id, texto, foto);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PostService;
