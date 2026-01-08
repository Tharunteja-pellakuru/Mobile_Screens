import './App.css';
import HomeContainer from './components/HomeContainer/HomeContainer';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';
import ServicesShowcase from './components/PortfolioContainer/ServicesShowcase';

function App() {
  return (
    <div className="App">
      <HomeContainer />
      <PortfolioContainer />
      <ServicesShowcase />
    </div>
  );
}

export default App;
