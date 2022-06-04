import React from 'react'

const NewsItem = (props)=>{

    let { title, discription, url, newsUrl, date, source} = props;
    return (
      <div>
        <div className="card my-3">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right:'0'
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={!url ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" : url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <p className='card-text'><small className='text-muted'>Published on {new Date(date).toLocaleTimeString()}</small></p>
            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
