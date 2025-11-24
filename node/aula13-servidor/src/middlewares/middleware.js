module.exports = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
  next();
};

// exports.middlewareGlobal = (req, res, next) => {
//     next();
// };

// exports.outroMiddleware = (req, res, next) => {
//     console.log('Sou seu outro middleware');
//     next();
// }