// models
const Post = require("./models/Post");

class PostController {
  // list posts
  async listPost(req, res, next) {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (err) {
      next(err);
    }
  }

  // get post
  async getPost(req, res, next) {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      res.json(post);
    } catch (err) {
      next(err);
    }
  }

  // create post
  async createPost(req, res, next) {
    const { body: newPost } = req;
    try {
      const postCreated = new Post(newPost);
      await postCreated.save();
      res.status(201).json(postCreated);
    } catch (err) {
      next(err);
    }
  }

  // update post
  async updatePost(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;
    try {
      const postUpdated = await Post.findByIdAndUpdate(id, data, { new: true });
      res.json(postUpdated);
    } catch (err) {
      next(err);
    }
  }

  // delete post
  async deletePost(req, res, next) {
    const { id } = req.params;
    try {
      await Post.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PostController;
