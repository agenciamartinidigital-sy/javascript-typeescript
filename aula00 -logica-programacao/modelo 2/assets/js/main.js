const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
// console.log(backgroundColorBody)


for (let p of ps) {
        p.style.backgroundColor = backgroundColorBody;
        p.style.color = '#FFFFFF';
    }
    
    // const cores = ['red', 'blue', 'green', 'purple'];
    
    // for (let i = 0; i < cores.length; i++){
    //     ps[i].style.backgroundColor = cores [i % cores.length];
    // }