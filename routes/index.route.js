const authController = require('../controllers/auth.controller');
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
router.get('/register', authController.index);
router.post('/auth/register', authController.register);
router.get('/login', authController.login);
router.post('/auth/login', authController.loginProcess);
module.exports = router;
