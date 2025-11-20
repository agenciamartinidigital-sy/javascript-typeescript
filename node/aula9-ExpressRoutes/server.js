const express = require("express");
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(routes);


app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
// Jonicemartini060806!
// AiVldMjcepetvXzc
// mongodb+srv://luismartini:<db_password>@projetoaula.nqkerhe.mongodb.net/
// npm install mongodb
// mongodb+srv://luismartini:<db_password>@projetoaula.nqkerhe.mongodb.net/?appName=projetoAula