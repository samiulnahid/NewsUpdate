import './App.css';
import React ,{useState} from 'react'
import Navbar from './component/Navbar'
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
   Routes,
  Route
} from "react-router-dom";



 const App=()=>{
  
  const pageSize = 5;
  //hiding api key & cumtom environment variables
  const apiKey = process.env.REACT_APP_NEWS_API
  //apiKey te variable add koorar por amer deveopent server k restart korte hobe..noile error dekhabei.

   const [progress, setProgress] = useState(0)
  


    return (
      <BrowserRouter>
        <div>

          <LoadingBar
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
            <Navbar/>
            {/* <news setProgress ={this.setProgress} pageSize ={this.pageSize} country="in" category = "sport"/> */}

              <Routes>

            <Route path="/" element ={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize ={pageSize} country="in" category = "general"/>}/>

            <Route path="/business" element ={<News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize ={pageSize} country="in" category = "business"/>}/>
            <Route path="/entertainment" element ={<News setProgress ={setProgress}  apiKey={apiKey} key="entertainment" pageSize ={pageSize} country="in" category = "entertainment"/>}/>
            <Route path="/general" element ={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize ={pageSize} country="in" category = "general"/>}/>
            <Route path="/health" element ={<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize ={pageSize} country="in" category = "health"/>}/>
            <Route path="/science" element ={<News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize ={pageSize} country="in" category = "science"/>}/>
            <Route path="/sports" element ={<News setProgress={setProgress}  apiKey={apiKey} key="sport" pageSize ={pageSize} country="in" category = "sport"/>}/>
            <Route path="/technology" element ={<News setProgresses ={setProgress}  apiKey={apiKey} key="technology" pageSize ={pageSize} country="in" category = "technology"/>}/>

            
       
           </Routes>

        </div>

      </BrowserRouter>
    )
  
}


export default App;
