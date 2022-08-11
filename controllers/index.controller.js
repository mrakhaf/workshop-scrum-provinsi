module.exports = {
  index: async (req, res) => {
    const name = 'Doe';

    return res.render('index', {
      name,
    });
  },
  adat: async (req, res) => {
    const name = 'Doe';

    return res.render('adat', {
      name,
    });
  },
  gallery: async (req, res) => {
    const name = 'Doe';

    return res.render('gallery', {
      name,
    });
  },
  places: async (req, res) => {
    const name = 'Places';

    return res.render('places', {
      name,
    });
  },
  culture: async (req, res) => {
    const name = 'Doe';

    return res.render('culture', {
      name,
    });
  },
  profil: async (req, res) => {
    const name = 'Places';

    return res.render('profil', {
      name,
    });
  },
  culinary: async (req, res) => {
    const name = 'Culinary';

    return res.render('culinary', {
      name,
    });
  },
};
