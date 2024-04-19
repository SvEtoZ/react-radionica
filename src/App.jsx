import './App.css';
import Form from './component/Form';
import ProductList from './component/ProductList';
import Props from './component/Props';

function App() {
  const someVariable = 'Hello World';

  return (
    <>
      <div>
        <p>
          <center>
            {someVariable}
          </center>
        </p>
      </div>
      <div>
        <Form />
      </div>
      <div>
        {/* <Props title="Hello World" /> */}
      </div>
      <div>
        {/* <ProductList /> */}
      </div>
    </>
  );
}

export default App;
