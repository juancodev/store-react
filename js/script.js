const h1 = document.querySelector('h1');
const h1Title = document.querySelector('.title');
const p = document.querySelector('p');
const paragraph = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('#inputExample');

console.log({
  h1,
  p,
  paragraph,
  pid,
});

console.log(h1);

h1.innerHTML = '<strong>Learning the fundamentals of JavaScript </strong>' //Mucho cuidado, ya que se puede agregar cualquier etiqueta HTMl

h1.innerText = '<strong>Learning the fundamentals of JavaScript </strong>'

// Para obtener el nombre un atributo en html desde js:

console.log(h1Title.getAttribute('class'));

// Para modificar el atributo en html desde js:

console.log(h1Title.setAttribute('class', 'subtitle'));

// Para agregar clases sin modificar el principal:

h1Title.classList.add('title');

// Para remover clases sin modificar el principal:

h1Title.classList.remove('subtitle');

// Para agregar un valor al input por defecto:

input.value = '123456';

const img = document.createElement('img');
img.setAttribute('src', 'https://manz.dev/manz-logo.png');

pid.innerHTML = ""
pid.appendChild(img);


// Para obtener eventos mediante el html y sean interactivos por JS:

const inputValor1 = document.querySelector('#valor1');
const inputValor2 = document.querySelector('#valor2');
const pResult = document.querySelector('#result');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form');

form.addEventListener('submit', calcular);

function calcular(event) {
  // Esto nos sirve para evitar que el formulario haga por defecto sus envíos a otra url
  event.preventDefault();
  let result = parseInt(inputValor1.value) + parseInt(inputValor2.value);
  pResult.innerText = "El resultado es: " + result;
  console.log(btn);
}