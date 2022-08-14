import React from 'react'
import '../css/ribbon.css'
import moment from 'moment'
const Newsitem=(props)=>{

    let {title,description,imageurl,newsurl,author,date,source}=props;
    let d=new Date(date);
    const updateddate=moment.utc(d).local().startOf('seconds').fromNow();
    return (
        <div className="card animated bounceInLeft" style={{boxShadow: 'rgb(151 149 149) 0px 0px 6px 1px',animationDelay: "0.5s"}}>
  <div className="ribbon red"><span>{source}</span></div>
 <div className='image'>
        <img src={!imageurl?"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60":imageurl} className="card-img-top" alt="..."/>
</div>
        <div className="card-body">
          <h5 className="card-title ">{title} ...</h5>
          <p className="card-text " >{description} ...</p>
          <p className="card-text "><small className="text-muted">By  <strong>{!author?"Unknown":author.slice(0,17)} </strong> <br/>  <strong>{updateddate}</strong> </small></p>
          <a rel='noreferrer' href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  
}

export default Newsitem;