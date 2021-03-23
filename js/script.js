// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// 1. seleziono il div dal HTML
const iconsList = $(".icons");

// 2. ciclo tutto l'array
icons.forEach((item) => {
  // 2a. per ogni obj, vado a costruire la struttura da inserire nel DOM
  const {name, family, prefix} = item;
  const singleItem = `<div>
    <i class="${family} ${prefix}${name}"></i>
    <div class="title">${name}</div>
    </div>`;

    iconsList.append(singleItem);
});

// 3. creo array con associazione categoria-colore
const colors = [
  {
    category: "food",
    color: "orange"
  },
  {
    category: "beverage",
    color: "yellow"
  },
  {
    category: "animal",
    color: "green"
  }
];

// 4. ciclo tutto l'array e ad ogni obj aggiungo il colore relativo
const colorIcons = icons.map((icon) => {
  let trueColor;

  // 4a. ciclo l'array dei colori
  colors.forEach((item) => {
    // 4b. confronto la category di icons con quella di colors
    if ( icon.category === item.category ) {
      trueColor = item.color;
    }
  });
  // 4c. assegno il colore giusto
  icon.color = trueColor;

  return icon;
});

console.log(colorIcons);
