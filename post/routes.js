const router = require("express").Router();

// controller
const PostController = require("./controllers");
const postController = new PostController();

router.get("/", postController.listPost);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
