/*const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  }]

//FASE1

let body = document.querySelector("body");

for (let i = 0; i < books.length; i++) {
  let div = document.createElement('div');
  div.setAttribute("class", `div-number${i + 1}`);
  body.appendChild(div);

  let img = document.createElement('img');
  img.setAttribute("class", `img-number${i + 1}`);
  div.appendChild(img);
  img.src = "./" + books[i].imageLink;

  let parrafoContenedor = document.createElement('div');
  parrafoContenedor.setAttribute("class", `contenedor`);
  div.appendChild(parrafoContenedor);

  let parrafo1 = document.createElement('p');
  parrafoContenedor.appendChild(parrafo1);
  let txt1 = document.createTextNode(`author: ${books[i].author}`);
  parrafo1.appendChild(txt1);

  let parrafo2 = document.createElement('p');
  parrafoContenedor.appendChild(parrafo2);
  let txt2 = document.createTextNode(`country: ${books[i].country}`);
  parrafo2.appendChild(txt2);

  let parrafo3 = document.createElement('p');
  parrafoContenedor.appendChild(parrafo3);
  let txt3 = document.createTextNode(`language: ${books[i].language}`);
  parrafo3.appendChild(txt3);

  let parrafo4 = document.createElement('p');
  parrafoContenedor.appendChild(parrafo4);
  let txt4 = document.createTextNode(`link: ${books[i].link}`);
  parrafo4.appendChild(txt4);

  let parrafo5 = document.createElement('p');
  parrafoContenedor.appendChild(parrafo5);
  let txt5 = document.createTextNode(`pages: ${books[i].pages}`);
  parrafo5.appendChild(txt5);

  let parrafo6 = document.createElement('p');
  parrafoContenedor.appendChild(parrafo6);
  let txt6 = document.createTextNode(`title: ${books[i].title}`);
  parrafo6.appendChild(txt6);

  let parrafo7 = document.createElement('p');
  parrafoContenedor.appendChild(parrafo7);
  let txt7 = document.createTextNode(`year: ${books[i].year}`);
  parrafo7.appendChild(txt7);
}
*/

//FASE 2


  const books = [
      {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      },
      {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
      },
      {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
      },
      {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
      }]

  
  let cards = "";

  for (let i = 0; i < books.length; i++) {
    cards += `<div>
                <img  src="./${books[i].imageLink}" ></img>
                <div class="contenedor">
                  <p>${books[i].author}</p>
                  <p>${books[i].country}</p>
                  <a href="${books[i].link}">${books[i].link}</a>
                  <p>${books[i].pages}</p>
                  <p>${books[i].title}</p>
                  <p>${books[i].year}</p>
                </div>
              </div>`
              console.log();
}

document.querySelector("body").innerHTML +=cards;