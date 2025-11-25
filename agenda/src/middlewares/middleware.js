// src/middlewares/middleware.js

exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Valor da variável';
  next();
};

exports.checkCSRFError = (err, req, res, next) => {
  if (err) { //  && err.code === "EBADCSRFTOKEN"
    return res.render("404"); // precisa existir views/404.ejs
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); // corrigido: csrfToken
  next();
};


// module.exports = { middlewareGlobal, checkCSRFError, csrfMiddleware };
