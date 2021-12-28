import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Api';


ReactDOM.render(<App />, document.getElementById('root'));

// const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'Logo.png';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild('logo');
// app.appendChild('container');

// let request = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// request.onload = function() {
//     let data = JSON.parse(this.response);
    
//     if(request.status >= 200 && request.status < 400) {
//         data.forEach(movie => {
//             const card = document.createElement('div');
//             card.setAttribute('class', 'card');

//             const h1 = document.createElement('h1');
//             h1.textContent = movie.title;

//             const p = document.createElement('p');
//             movie.description = movie.description.substring(0, 300);
//             p.textContent = `${movie.description}...`;
//         });
//     } else {
//         const errorMessage = document.createElement('marquee');
//         errorMessage.textContent = `Gah, it's not working!`;
//         app.appendChild(errorMessage);
//     }
// }
// request.send();