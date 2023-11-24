/* eslint-disable no-undef */
const PostRepository = require("./PostRepository");

const mockFireStoreDatabase = {
  collection: jest.fn(() => ({
    get: jest.fn(() => ({
      forEach: jest.fn((callback) => callback({ data: jest.fn(() => ({ post: "data" })) })),
    })),
  })),
};

const mockFireStoreDatabaseError = {
  collection: jest.fn(() => ({
    get: jest.fn(() => Promise.reject(new Error("Firestore error"))),
  })),
};

describe("Post Repository Class", () => {
  let postRepository;

  beforeEach(() => {
    postRepository = new PostRepository();
    postRepository.firestore = mockFireStoreDatabase;
  });

  test("deve recuperar todos os posts", async () => {
    const allPosts = await postRepository.find();
    expect(allPosts).toEqual([{ post: "data" }]);
  });

  test("should throw an error when getAllPosts fails", async () => {
    postRepository.firestore = mockFireStoreDatabaseError;
    await expect(postRepository.find()).rejects.toThrow("Erro ao receber os posts");
  });
});
