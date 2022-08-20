const { RotateWithOffset } = require('@tensorflow/tfjs');
const User = require('../models/User'); 
module.exports = {
    index: async (req, res) => {
      
  
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
          // message = "Registrasi Sukses"
        } else {
          message = "Username sudah ada"
        }
        
        
        return res.render('auth/register', {
          message
      })
    },
  };