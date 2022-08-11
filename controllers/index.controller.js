module.exports = {
  index: async (req, res) => {
    const name = 'Doe';

    return res.render('index', {
      name,
    });
  },
  rumahadat: async (req, res) => {
    const name = 'Doe';

    return res.render('rumahadat', {
      name,
    });
  },
  galeri: async (req, res) => {
    const name = 'Doe';

    return res.render('galeri', {
      name,
    });
  },
  tempat: async (req, res) => {
    const name = 'Tempat yang wajib dikunjungi';

    return res.render('tempat', {
      name,
    });
  },
  budaya: async (req, res) => {
    const name = 'Doe';

    return res.render('budaya', {
      name,
    });
  },
  profil: async (req, res) => {
    const name = 'Places';

    return res.render('profil', {
      name,
    });
  },
  kuliner: async (req, res) => {
    const name = 'Kuliner';

    return res.render('kuliner', {
      name,
    });
  },
};
