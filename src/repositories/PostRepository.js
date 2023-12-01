const { use } = require("../controllers/PostController.js");
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

  async create(payload) {
    const post = { ...payload, likes: 0, likedBy: [], coments: [] };

    try {
      await this.firestore.collection("posts").doc(post.id).create(post);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async likePost({ userId, id }) {
    try {
      const postRef = this.firestore.collection("posts").doc(id);
      const postDoc = await postRef.get();
      const userList = postDoc.data().likedBy;
      const currentLikes = postDoc.data().likes;
      const newLikes = currentLikes + 1;
      const usersListAtt = [...userList, userId];
      const deslike = currentLikes - 1;
      const removeUserList = userList.filter((likedById) => likedById !== userId);

      if (!userList.includes(userId)) {
        await this.firestore.collection("posts").doc(id).update({
          likes: newLikes,
          likedBy: usersListAtt,
        });
        return;
      }
      await this.firestore.collection("posts").doc(id).update({
        likes: deslike,
        likedBy: removeUserList,
      });
    } catch (error) {
      throw new Error(`error: ${error}`);
    }
  }

  async delete(id) {
    try {
      await this.firestore.collection("posts").doc(id).delete();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id, texto, foto) {
    try {
      if (texto && !foto) await this.firestore.collection("posts").doc(id).update({ texto });
      if (!texto && foto) await this.firestore.collection("posts").doc(id).update({ foto });
      if (texto && foto) await this.firestore.collection("posts").doc(id).update({ texto, foto });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PostRepository;
