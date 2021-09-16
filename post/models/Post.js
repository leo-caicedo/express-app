const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 300,
    },
    img: String,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Post", postSchema);
