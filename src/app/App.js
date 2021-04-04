import '../assets/css/main_style.css'
import { Contact, Coursework, Experience, Footer, Header, Introduction, NavBar, Projects, Resume } from "../components";
import { useEffect, useState } from "react";
import { getData } from "../assets/data/data";

const App = () => {  
  const [data, setData] = useState(null)
  useEffect(() => {
    const loadData = async () => {
      const result = await getData();
      setData(result)
    }
    loadData();
  }, [])
  return (
      <>
        <NavBar data={data}/>
        <Header data={data}/>
        <Introduction data={data}/>
        <Coursework data={data}/>
        <Experience data={data}/>
        <Projects data={data}/>
        <Resume data={data}/>
        <Contact data={data}/>
        <Footer data={data}/>
      </>
  );
}

export default App;
