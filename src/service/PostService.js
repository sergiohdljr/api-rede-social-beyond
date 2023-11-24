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

  async find() {
    try {
      const posts = await this.repository.find();
      return posts;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PostService;
