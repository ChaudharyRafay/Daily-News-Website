import React,{useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{
   const [articles, setarticles] = useState([]);
   const [loading, setloading] = useState(true);
   const [page, setpage] = useState(1);
   const [totalResults, settotalResults] = useState(0);

    // program to convert first letter of a string to uppercase
const capitalizeFirstLetter=(str)=> {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
    const updatenews=async()=>{
        props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e1e47ac7763a4d1795ceb8844b2ebb92&page=${page}&pageSize=${props.pagesize}`;
        setloading(true);
        let data=await fetch(url);
        props.setProgress(50);
        let parsedata=await data.json();
        props.setProgress(0);
        setarticles(parsedata.articles);
        settotalResults(parsedata.totalResults);
        setloading(false)
        props.setProgress(100);
    }
 // yeh method jb nichay render wala method run hojai ga fr yeh run hogs 
    useEffect(() => {
      //eslint-disable-next-line
        updatenews();
         document.title=`News -${capitalizeFirstLetter(props.category)}`;
       //means kay jo warning a ri ha nichay empty danay ki waja say wo ab ni ai gi
       /* eslint-disable */
      
    },[])
    
   
 
//page size 20 means kitnay article aik page pay dikhanaya ha
//aur page mtlb kay total kitnay oage honay chahay ya konsa page kb dikana ha jaisay page no 1 pay 20 article ha wo dikhao fr next ka button dbay tu page no 2 may remaing article dikhao
    // handleNext=async()=>{
    //     //agr ham next page pay click kray aur wo page no bara hu is math.ceil say tu kuch bi na render krwao 
    //     // if(page+1 > Math.ceil(totalresults/10))//yeh hamhay total pages cal kr kay day day ga math.ceil mtlb agr 1.6 ans aya tu 2 day day ga 
    //     // {

    //     // }
    //     // else{
    //     //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e1e47ac7763a4d1795ceb8844b2ebb92&page=${page+1}&pageSize=${props.pagesize}`;
    //     //     setState({loading:true});
    //     //     let data=await fetch(url);
    //     // let parsedata=await data.json();
    //     // // console.log(parsedata);
    // setarticles(parsedata.articles);
    // setloading(false);
    // setpage(page+1);//yeh next say aik state ko update kr day ga  page add kr day ga 
    //     
    //     updatenews();
    //     // }
        
    
    // handlePrevious=async()=>{
    //    
    //         setpage(page-1)//yeh next say aik state ko update kr day ga  page add kr day ga 
    //    updatenews();
    // }
    const fetchMoreData = async() => {
        
       
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e1e47ac7763a4d1795ceb8844b2ebb92&page=${page+1}&pageSize=${props.pagesize}`;
        // setState(loading:true);
        setpage(page+1);
        let data=await fetch(url);
        let parsedata=await data.json();
        // setState(loading:false);
        setarticles(articles.concat(parsedata.articles));//mtl kay jitnay article pahlay display ho chukay ha unhay remove na kro screen say blkay aur anay walay artic;es ko milla kay saray display kra do
        settotalResults(parsedata.totalResults);
      };
    return (
      <div className="container my-3">
        <h2 className='text-center ' style={{marginTop:'90px'}}>Top Headlines - {capitalizeFirstLetter(props.category)} </h2>
        {/* means kay jb loadind true ho tu spineer ka compoenet dikha do loading is tara likhnay say mtlb kay true ha  */}
        {loading && <Spinner/>}
        {/* key means kay jitnay bi div ha woreturn krtay waqt uniquely identify hoskay kisi var say */}
       
        
        {/* //for InfiniteScroll */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          //has more mtlb kay frst time mount eala func run hoa total results state may store kra diay aur article store kra diay stata may fr has more chck kray ga kay jitnay article ki length ha aur un may say kitnay display kr chuka ha screen pay agr tu article.length mtlb jitnay display hoay ha un ki length equal ni ha total results say tu fr has more wali functionality run kro else na kro
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
         <div className="row" >
        {articles.map((element)=>{
          return   <div className="col-md-4 my-3" key={element.url}>
          {/* slice method means kay 0 say 45 characters tk titile nzr ai ui may aur description 0 say 88 character tk dikahy baqi ignore ya read more pay dikha day */}
                   <Newsitem  title={element.title?element.title.slice(0,45):"No Title"} description={element.description?element.description.slice(0,70):"No Description"} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                   </div>
        })}
        </div>
      </div>
      </InfiniteScroll>
      {/* next previous buttons */}
      {/* <div className="container d-flex justify-content-between my-3 mx-3">
      <button hidden={loading && 'hidden'} disabled={page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
      <button hidden={loading && 'hidden'} disabled={page+1 > Math.ceil(totalresults/props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
      </div> */}
</div>
    )
  }
 News.defaultProps={
    country:"in",
    pagesize:10,
    category:"general"
}
News.propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
}

export default News