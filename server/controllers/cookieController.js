const cookieController = {};

cookieController.createCookie = (req, res, next) => {
  if (res.locals.userId) {
    res.cookie('userId', `${res.locals.userId}`);
  } else {
    return next({
      log: 'cookieController.createCookie: ERROR: userId not found',
      status: '400',
      message: {
        err: 'Error occured in cookieController.createCookie. userId not found.',
      },
    });
  }
  return next();
};

cookieController.checkCookie = (req, res, next) => {
  if (!req.cookies.userId) {
    res.redirect('/login');
  } else {
    return next();
  }

  //   else {
  //     return next({
  //       log: 'cookieController.createCookie: ERROR: userId not found',
  //       status: '400',
  //       message: {
  //         err: 'Error occured in cookieController.createCookie. userId not found.',
  //       },
  //     });
  //   //   }
  //   return next();
};

module.exports = cookieController;
