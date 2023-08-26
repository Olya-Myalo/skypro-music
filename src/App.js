import './App.css';
import Bar from './components/Bar';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import CenterBlock from './components/Centerblock';
import { useState, useEffect } from "react";
import SidebarSceleton from './components/SidebarSceleton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <div className="container">
              <main className="main">
                <Nav />
                <CenterBlock />
                 {isLoading ? <SidebarSceleton />: <Sidebar />}
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
