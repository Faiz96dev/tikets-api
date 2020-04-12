module.exports = {
  errors: {
    common: {
      500: 'Sorry, something went wrong. Please, try again later',
      401: 'Unauthorized user',
    },
    tickets: {
      NOT_FOUND: 'Tickets not found',
    },
    user: {
      EXIST: { message: 'This user already exist' },
      USER_NOT_FOUND: { message: 'User not found' },
      WRONG_PASS: { message: 'Password is wrong' },
    },
  },
};
