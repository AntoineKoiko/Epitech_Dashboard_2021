import logo from './logo.svg';
import './App.css';
import { getTest } from './requestTest'
import React from 'react'
import LoginPage from './Pages/Login/LoginPage';

function Test() {
  const [test, setTest] = React.useState({foo: "KO"});

  React.useEffect(() => {
    async function fetchTest() {
      const myTest = await getTest();
      console.log(myTest)
      setTest(myTest)
    }
    fetchTest()
  }, [])
  console.log(test)
  return <div>{test.foo}</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginPage/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test></Test>
    </div>
  );
}

export default App;
