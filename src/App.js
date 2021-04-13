import { Coursework } from './components/Coursework'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Introduction } from './components/Introduction'
import Navbar from './components/Navbar'
import { Projects } from './components/Projects'

function App() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Introduction/>
      {/* <Coursework/>
      <Experience/>
      <Projects/> */}
      <Footer/>
    </main>
  );
}

export default App;
