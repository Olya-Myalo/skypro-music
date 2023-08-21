import './App.css';
import Bar from './components/Bar';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import CenterBlock from './components/Centerblock';

function App() {
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <div className="container">
              <main className="main">
                <Nav />
                <CenterBlock />
                <Sidebar />
              </main>
                <Bar />
              <footer className="footer"></footer>
            </div>
          </div>
        </body>
      </div>
  );
}

export default App;
