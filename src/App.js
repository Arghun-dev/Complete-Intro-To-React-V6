import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me'),
    [1, 2, 3, 4].map((i) => React.createElement('h2', {}, i)),
    React.createElement(Pet, {
      name: 'Arghun',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
