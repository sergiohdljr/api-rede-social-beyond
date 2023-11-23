/* eslint-disable no-undef */
const Post = require("./Post.js");
const User = require("./User.js");

describe("Post Model Class", () => {
  test("deve ser criado um objeto da instância Post", () => {
    const user = new User("fotoPerfil", "Danilo", "danilo@gmail.com");
    const post = new Post("uiid", "24/11/2023", "fotoPost", "8:00", "Bom dia", user);

    expect(post).toBeInstanceOf(Post);
  });
});
