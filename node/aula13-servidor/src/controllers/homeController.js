exports.paginaInicial = (req, res) => {
  console.log(req.flash('error'), req.flash('success'), req.flash('info'));
  // req.flash("info", "Olá, Mundo!");
  // req.flash("error", "blablabla");
  // req.flash("success", "Opa");
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
