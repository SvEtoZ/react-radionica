import { useEffect } from 'react';
import './App.css';
import sayHi from './files/module'; // Importing default export
import { name, age } from './files/module'; // Importing named exports

// import sayHi, { name, age } from './files/module'; 

function App() {
  useEffect(() => {
    sayHi();
  }, []);

  let x = 10
  x = 20 // moguće

  const y = 5
  // y = 8 nije moguće

  useEffect(() => {
    if (true) {
      let z = 30;
      console.log(z); // output: 30
    }
    // console.log(z); // greška, varijabla "z" nije definisana izvan bloka if
  }, []);

  return (
    <>
      <h3>Named vs default exports</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  )
}

export default App;