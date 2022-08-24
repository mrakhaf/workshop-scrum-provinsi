const { RotateWithOffset } = require('@tensorflow/tfjs');
const User = require('../models/User'); 
module.exports = {
    index: async (req, res) => {
      // menampilkan halaman berdasarkan path file
      return res.render('auth/register');
    },

    register: async (req, res) => {
      let message = ""
        const user = await User.findOne({
          where: {
            username: req.body.username
          }
        })
        if (!user) {
            await User.create({
            nama: req.body.nama,
            jeniskelamin: req.body.jeniskelamin,
            username: req.body.username,
            password: req.body.password
          })
          return res.redirect('/')
        } else {
          message = "Username sudah ada"
        }        
        // 
        return res.render('auth/register', {
          message
      })
    },

    login: async(req, res) => {
      return res.render('auth/login')
    },

    loginProcess: async(req, res) => {
      // console.log(req.body.username, req.body.password)
      let message = ""
      // TODO: 1. Dapetin input user
      const username = req.body.username
      const password = req.body.password

      // TODO: 2. Cek apakah username dan password sudah ada di database atau belum
      // ! fungsinya buat apa, ngehasilin apa, hasilnya dikemanain
      const user = await User.findOne({
        where: {
          username: username
        }
      })

      // TODO: 3. Kalau ada, user bisa masuk ke halaman utama
      if (user){
        const loginData = await User.findOne({
          where: {
            username: username,
            password: password
          }
        })
        if (loginData){
          return res.redirect("/")
        } 
        message = "Username atau Password salah"
      } else {
        // TODO: 4. Kalau tidak, tampilkan alert akun belum terdaftar. Maka user akan mengklik halaman register
        message = "Akun tidak terdaftar"
      }
      // TODO: 5. User tidak bisa login karena username salah atau password salah.
      return res.render('auth/login', {
        message
      })
    },
  };