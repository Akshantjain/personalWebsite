import { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { getData } from './assets/data'
import Lottie from 'react-lottie-player'
import Signature from './assets/signature.json'
import { MainContent } from './components/MainContent'

function App() {
  const [data, setData] = useState(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      const result = await getData();
      setData(result)
    }
    loadData();
  }, [])
  
  return ( data && 
    <Fragment>
      {/* <div id="welcomeScreen" className="absolute h-screen w-screen bg-gray-100 transition-opacity opacity-100">
        <div className="h-full flex flex-wrap content center absolute">
            <Lottie
              loop={false}
              animationData={Signature}
              play
              onComplete={() => {
                document.getElementById('welcomeScreen').style.opacity = 0;
                setVisible(true);
                document.getElementById('welcomeScreen').style.opacity = 0;
              }}
              style={{ width: '50%', height: '50%', margin: 'auto', }}
            />
          </div>
      </div> */}
      {visible && <MainContent data={data} />}

    </Fragment>
  );
}

export default App;
