module.exports = {
  secret: 'manda ',
  tokens: {
    access: {
      type: 'access',
      expiresIn: '2m',
    },
    refresh: {
      type: 'refresh',
      expiresIn: '20m',
    },
  },
};
