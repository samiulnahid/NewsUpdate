import React from 'react'

const NewsItem =(props)=> {

  

        let {title , description , imgUrl, newsUrl, author , publishedAt, source} = props;

        return (
            <div className="my-3 ">
                <div className="card" >

                    <div  style={{display:"flex", justifyContent:"flex-end", position:"absolute",right:"0"}}>
                        <span className=" badge rounded-pill bg-danger" >
                        {source}
                        </span>

                    </div>

                <img src={imgUrl ? imgUrl : "https://media.istockphoto.com/photos/breaking-news-3d-rendering-virtual-set-studio-picture-id1219965949"} className="card-img-top img-fluid"  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {publishedAt}</small></p>

                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
                </div>
            </div>
        )
    
}

export default NewsItem
