import './App.css';
import React ,{Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import TopNavbar from './component/TopNavbar/topNavbar'
import {
  BrowserRouter,
   Routes,
  Route
} from "react-router-dom";



 class App extends Component{
  
   pageSize = 5;
  //hiding api key & cumtom environment variables
   apiKey = process.env.REACT_APP_NEWS_API


  state = {
      progress : 0
    }
   setProgress=(progress)=>{
    this.setState({progress : progress})
  }



    render() {
    return (
      <BrowserRouter>
        <div>

          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
            <TopNavbar/>
            <Navbar/>
            {/* <news setProgress ={this.setProgress} pageSize ={this.pageSize} country="us" category = "sport"/> */}

              <Routes>

            <Route path="/" element ={<News setProgress ={this.setProgress}  apiKey={this.apiKey} key="general" pageSize ={this.pageSize} country="us" category = "general"/>}/>

            <Route path="/business" element ={<News setProgress ={this.setProgress}  apiKey={this.apiKey} key="business" pageSize ={this.pageSize} country="us" category = "business"/>}/>
            <Route path="/entertainment" element ={<News setProgress ={this.setProgress}  apiKey={this.apiKey} key="entertainment" pageSize ={this.pageSize} country="us" category = "entertainment"/>}/>
            <Route path="/general" element ={<News setProgress ={this.setProgress}  apiKey={this.apiKey} key="general" pageSize ={this.pageSize} country="us" category = "general"/>}/>
            <Route path="/health" element ={<News setProgress ={this.setProgress}  apiKey={this.apiKey} key="health" pageSize ={this.pageSize} country="us" category = "health"/>}/>
            <Route path="/science" element ={<News setProgress ={this.setProgress}  apiKey={this.apiKey} key="science" pageSize ={this.pageSize} country="us" category = "science"/>}/>
            <Route path="/sports" element ={<News setProgress ={this.setProgress}  apiKey={this.apiKey} key="sport" pageSize ={this.pageSize} country="us" category = "sport"/>}/>
            <Route path="/technology" element ={<News setProgress ={this.setProgress}  apiKey={this.apiKey} key="technology" pageSize ={this.pageSize} country="us" category = "technology"/>}/>

            
       
           </Routes>

        </div>

      </BrowserRouter>
    )
  }
}



export default App;
