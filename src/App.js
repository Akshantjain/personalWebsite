import { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { getData } from './assets/data'
import { MainContent } from './components/MainContent'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      const result = await getData();
      setData(result)
    }
    loadData();
  }, [])
  
  return ( data && 
    <Fragment>
      <MainContent data={data} />

    </Fragment>
  );
}

export default App;
