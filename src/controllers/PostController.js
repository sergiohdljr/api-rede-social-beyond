const express = require("express");
const PostService = require("../service/PostService.js");

const service = new PostService();
const route = express.Router();

route.get("/posts", async (req, res) => {
  try {
    const posts = await service.findPost();
    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
});

route.post("/post", async (req, res) => {
  const post = req.body;
  try {
    if (!post || !post.id) {
      throw new Error("body não foi definido.");
    }
    await service.createPost(post);
    res.status(201).json({ message: "Post criado com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: true, message: `Erro na criação do post: ${error.message}` });
  }
});

route.delete("/post-delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await service.deletePost(id);
    res.status(200).json({ message: `Post com id ${id} foi deletado com sucesso` });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

route.put("/post-update/:id", async (req, res) => {
  const { id } = req.params;
  const { texto, foto } = req.body;

  try {
    await service.updatePost(id, texto, foto);
    res.status(204).json({ message: `Post com id ${id} atualizado com sucesso!` });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

module.exports = route;
