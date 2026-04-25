import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <Header />
      <Hero />
      <History />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
