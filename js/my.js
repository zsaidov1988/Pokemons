
var elDiv = $_('.js-content-div');

pokemons.forEach(function (pokemon) {

  var elDivItem = createElement('div', 'border border-1 border-primary rounded-1 p-2 m-2 wrapper', '', elDiv)
  var elImg = createElement('img', 'img img-fluid js-img', '', elDivItem);
  elImg.setAttribute('src', pokemon.img);
  var elName = createElement('p', 'm-0 js-name', pokemon.name, elDivItem);
  var elType = createElement('p', 'm-0 js-type', pokemon.type.join(', '), elDivItem);
})



