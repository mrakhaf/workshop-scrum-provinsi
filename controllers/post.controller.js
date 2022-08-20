const Post = require('../models/Post');

module.exports = {
  index: async (req, res) => {
    const posts = await Post.findAll();

    return res.render('post/index', {
      posts,
    });
  },

  create: async (req, res) => {
    return res.render('post/create');
  },

  store: async (req, res) => {
    await Post.create({
      title: req.body.title,
      content: req.body.content, 
    });

    return res.redirect('/posts');
  },

  edit: async (req, res) => {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.redirect('/posts');
    }

    return res.render('post/edit', {
      post,
    });
  },

  update: async (req, res) => {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.redirect('/posts');
    }

    await post.update({
      title: req.body.title,
      content: req.body.content,
    });

    return res.redirect('/posts');
  },

  destroy: async (req, res) => {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.redirect('/posts');
    }

    await post.destroy();

    return res.redirect('/posts');
  },
};
