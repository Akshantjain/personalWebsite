import { useEffect, useState } from 'react'
// import { getData } from './assets/data'
import { Coursework } from './components/Coursework'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Introduction } from './components/Introduction'
import Navbar from './components/Navbar'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import mydata from './assets/test_data.json'


function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      // const result = await getData();
      // setData(result)
      // console.log(result);
    }
    loadData();
    setData(mydata.WebsiteData);
  }, [])
  
  return ( data && 
    <main className="font-desc">
      <Navbar data={data}/>
      <Header data={data}/>
      <Introduction data={data}/>
      <Coursework data={data}/>
      <Experience data={data}/>
      <Projects data={data}/>
      <Resume data={data}/>
      <Footer data={data}/>
    </main>
  );
}

export default App;
