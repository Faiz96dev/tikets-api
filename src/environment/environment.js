module.exports = {
  DB: {
    link: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds149382.mlab.com:49382/temp`,
  },
};
