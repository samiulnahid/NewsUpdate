import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    


   const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }




    const updatenews = async () =>{

        //  props.setProgresses(10);

         //j sob ai class ar vitore a stare ar modhe define korse se gulate (this.state) use korse exmp({this.state.pag})..r j sob pass kore anse se sob a (props) use korse emp({props.category})
        //  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page }&pageSize=${props.pageSize}`
         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page }&pageSize=${props.pageSize}`

        setLoading(true)   
        let data = await fetch(url);

        props.setProgress(30);
        let parsedData = await data.json();

        props.setProgress(70);

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        console.log(parsedData);
        
       props.setProgress(100);
    }



    ///(componentDidMount()) j kaj korse class component a.. function component a ta (useEffect) korbe
    useEffect(() => {
        document.title =`${capitalizeFirstLetter (props.category)} - Newsmonky`;
        updatenews();
        
    }, [])



    const fetchMoreData = async () => {
    
        // setPage(page+1)


    //    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1 }&pageSize=${props.pageSize}`
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`

       setPage(page+1)
        // this.setState({loading:true});    
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);


        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
 
    
  };
    

        return (
            <>
            
                <h2 className="text-center " style={{marginTop:"30px",marginBottom:"30px" }}>tops   {capitalizeFirstLetter (props.category)} Headline </h2>

                {/* niser sentance ar mane holo jodi (this.state.loading) true hoi ta hole spinner dekhabe noile dekhabe na. */}
               {loading && <Spinner/>} 
               {/* after infinite scroll ay spinner sudu page first load houyar somoi dekhabe..porobortite nise j spinner ase oita dekhabe */}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                 <div className="container">
                    <div className="row">
                        {/* niser sentance ar mane holo jodi( !this.state.loading ) ata false hole content dekhabe..r joto khon true thakbe toto khon sudu loading dekhabe onno kono kisu dekhabe na  */} 
                        {/* {!this.state.loading && this.state.articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                            <NewsItem  title={element.title !==null ? element.title.slice(0,42) : ""} description = {element.description !==null ? element.description.slice(0,90) : ""} imgUrl ={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown" }  publishedAt={new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
                        </div>
                    })}  */}

                        { articles.map((element)=>{
                                return <div className="col-md-4" key={element.url}>
                                <NewsItem  title={element.title !==null ? element.title.slice(0,42) : ""} description = {element.description !==null ? element.description.slice(0,90) : ""} imgUrl ={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown" }  publishedAt={new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
                            </div>
                        })} 
                    </div>
                    </div>
                </InfiniteScroll>
                
       
            </>
        )
    
}

///function type component a defaultProps amader end function ar bahire a likha lage . r class type component a defaultprops class ar surute kinba function ar moto akdom end a class ar bahire likha jai likhte hoi

 News.defaultProps = {
        country : "in",
        pageSize :  8,
        category : 'general'
        
    }

    
 News.propTypes = {
        country : PropTypes.string,
        pageSize:PropTypes.number,
    }

export default News;


