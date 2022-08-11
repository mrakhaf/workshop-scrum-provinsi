const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/rumahadat', indexController.rumahadat);
router.get('/galeri', indexController.galeri);
router.get('/tempat', indexController.tempat);
router.get('/profil', indexController.profil);
router.get('/budaya', indexController.budaya);
router.get('/kuliner', indexController.kuliner);
router.get('/posts', postController.index);
router.get('/posts/create', postController.create);
router.post('/posts/store', postController.store);
router.get('/posts/edit/:id', postController.edit);
router.post('/posts/update/:id', postController.update);
router.post('/posts/delete/:id', postController.destroy);

module.exports = router;
