module.exports = {
  secret: 'MANDA',
  tokens: {
    access: {
      type: 'access',
      expiresIn: '2h',
    },
    refresh: {
      type: 'refresh',
      expiresIn: '20h',
    },
  },
};
