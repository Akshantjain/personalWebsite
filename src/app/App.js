import { MainLayout } from "../layout/MainLayout";
import '../assets/css/main_style.css'
import { Coursework, Experience, Introduction, Projects } from "../components";
  
const App = () => {
  return (
      <MainLayout>
        <Introduction/>
        <Coursework/>
        <Experience/>
        <Projects/>
      </MainLayout>
  );
}

export default App;
