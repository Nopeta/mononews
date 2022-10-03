// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('https://hihl.herokuapp.com/message');
      const responseJson = await response.json()
      // console.log(responseJson);

      setData(responseJson.data)
    }
    fetchMyAPI()
  }, [])

  console.log(data);

  const Get_news = () => {
    return (
      <>
        {
          data.map((data, i) => (

            <div id={i} className="card">

              <div>{data.title}</div>
              <div className="underright">{data.date}</div>

            </div>


          ))
        }
      </>
    )

  }



  return (
    <div>
      <div className="outer">
        <div className="inner">
          <p>MONO NEWS</p>
        </div>
      </div>
      <div className="center">
        <Get_news />
      </div>
    </div>
  );
}

export default App;
