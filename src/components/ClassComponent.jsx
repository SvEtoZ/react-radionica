import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>This is a simple paragraph rendered by a class component.</p>
      </div>
    );
  }
}

export default MyComponent;

// Klasne komponente pružaju mogućnost korišćenja state-a i životnog ciklusa kao što su componentDidMount, componentDidUpdate, componentWillUnmount, itd.
// Kada su komponente kompleksnije i zahtjevaju unutrašnje upravljanje stanjem ili složenu logiku, klasne komponente su prikladnije.
