let data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana){
      case 0: 
      diaSemanaTexto = 'Domingo';
      break;

      case 1: 
      diaSemanaTexto = 'segunda';
      break;

      case 2: 
      diaSemanaTexto = 'terça';
      break;

      case 3: 
      diaSemanaTexto = 'quarta';
      break;

      case 4: 
      diaSemanaTexto = 'quinta';
      break;

      case 5: 
      diaSemanaTexto = 'sexta';
      break;

      case 6: 
      diaSemanaTexto = 'sábado';
      break;
    }
console.log(diaSemana, diaSemanaTexto);