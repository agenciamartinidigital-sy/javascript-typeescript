const {html} = require('./base');

console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)) // greedy [ '<p>Olá Mundo</p> <p>Olá de novo</p>' ]
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greedy [ '<p>Olá Mundo</p>', '<p>Olá de novo</p>' ]
console.log(html.match(/<p?>.+?<\/p?>/g)) // non-greedy [ '<p>Olá Mundo</p>', '<p>Olá de novo</p>' ]
console.log(html.match(/<div?>.+?<\/div?>/g)) // non-greedy [ '<p>Olá Mundo</p>', '<p>Olá de novo</p>' ]

// <.+>.+<\/.+>
// /^(\d{3}\.?){3}\-?\d{2}$/ - cpf
