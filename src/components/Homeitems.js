import React from 'react'
import "../css/slider.css"
import moment from 'moment'
function Homeitems(props) {
    let {title,description,imageurl,newsurl,author,date}=props;
    let d=new Date(date);
    const updateddate=moment.utc(d).local().startOf('seconds').fromNow();
  return (
<>

  <div className="container" style={{marginTop:'50px',borderRadius:'80px'}}>
  <div className="card">
    <div className="row ">

      <div className="col-md-7 px-3">
        <div className="card-block px-4 py-4">
          <h4 className="card-title animated bounceInRight" style={{animationDelay: "0.2s"}}>{title}</h4>
          <p className="card-text animated bounceInLeft" style={{animationDelay: "0.5s"}}>
           {description}
          </p>
          <p className="card-text "><small className="text-muted animated bounceInLeft" style={{animationDelay: "0.7s"}} >By  <strong>{!author?"Unknown":author.slice(0,17)} </strong>  </small></p>
          <p className="card-text animated bounceInRight" style={{animationDelay: "0.7s"}}>{updateddate}

          </p>
          <br/>
          <a href={newsurl} className="mt-auto btn btn-dark  ">Read More</a>
        </div>
      </div>
      <div className="col-md-5" >
        <div id="CarouselTest" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" >
            <div className="carousel-item active" id='image' >
              <img className="d-block" src={!imageurl?"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60":imageurl} alt=""/>
            </div>          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
};

export default Homeitems