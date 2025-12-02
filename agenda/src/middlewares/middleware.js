// src/middlewares/middleware.js

exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  next();
};

exports.checkCSRFError = (err, req, res, next) => {
  if (err) {
    return res.render("404"); // precisa existir views/404.ejs
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); // corrigido: csrfToken
  next();
};


// module.exports = { middlewareGlobal, checkCSRFError, csrfMiddleware };
