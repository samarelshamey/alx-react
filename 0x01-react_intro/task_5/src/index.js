// src/index.js
import './styles.css';
import exampleImage from './example.png';

const app = document.getElementById('app');
app.innerHTML = `
<h1>Hello, Webpack!</h1>
<img src="${exampleImage}" alt="Example Image" />
`;
