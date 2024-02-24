import Header from "./components/Header/Header.jsx";
import "./components/Header/header.css";
import CoreConcepts  from './components/CoreConcepts.jsx';
import Example from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </>
  );
}

export default App;
