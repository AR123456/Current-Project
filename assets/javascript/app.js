// the astrics is the notation to make this a yeild function 
function* listPeople() {
  // with yield this function would need to be run 3 times to get all the names 
  let i = 0;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
  // yield "Anne";
  // yield "Alicia";
  // yield "Becky";

};

//  to invoke this function and store it in a variable 
const people = listPeople();
//call .next on the generator, this returns an object  (in the console)

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858
  },
];

function* loop(arr) {
  console.log(inventors)
  for (const item of arr) {
    yield item;
  }
}
const inventorGen = loop(inventors);