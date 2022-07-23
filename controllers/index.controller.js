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
  profile: async (req, res) => {
    const name = 'Doe';

    return res.render('profile', {
      name,
    });
  },
  places: async (req, res) => {
    const name = 'Places';

    return res.render('places', {
      name,
    });
  },
};
