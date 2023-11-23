/* eslint-disable no-undef */
const User = require("./User");

describe("User Class Model", () => {
  it("Deve ser criado um objeto da instância User", () => {
    const user = new User("fotoPerfil", "Kanye West", "Kanye@gmail.com");
    expect(user).toBeInstanceOf(User);
  });
});
