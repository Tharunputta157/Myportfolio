import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Header />
      <main>
        <section id="summary"><Summary /></section>
        <section id="skills"><Skills /></section>
        <section id="experiences"><Experiences /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Tharun Putta</p>
      </footer>
    </div>
  );
}

export default App;
