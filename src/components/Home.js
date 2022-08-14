import React from 'react'
import '../css/slider.css'
import {useEffect,useState} from 'react'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Homeitems from './Homeitems';

    const Home=(props)=>{
        const [articles, setarticles] = useState([]);
        const [loading, setloading] = useState(true);
        const [page, setpage] = useState(1);
        const [totalResults, settotalResults] = useState(0);

         const updatenews=async()=>{
             props.setProgress(10);
             const url=`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e1e47ac7763a4d1795ceb8844b2ebb92&page=${page}&pageSize=${props.pagesize}`;
             setloading(true);
             let data=await fetch(url);
             props.setProgress(50);
             let parsedata=await data.json();
            //  props.setProgress(0);
             setarticles(parsedata.articles);
             settotalResults(parsedata.totalResults);
             setloading(false)
             props.setProgress(100);
         }
      // yeh method jb nichay render wala method run hojai ga fr yeh run hogs 
         useEffect(() => {
           //eslint-disable-next-line
             updatenews();
              document.title="Home";
            //means kay jo warning a ri ha nichay empty danay ki waja say wo ab ni ai gi
            /* eslint-disable */
           
         },[])
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
    <>
    <div className="title h1 text-center" style={{marginTop:'90px'}}>BBC-NEWS - Top Headlines </div>
    {loading && <Spinner/>}
    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          //has more mtlb kay frst time mount eala func run hoa total results state may store kra diay aur article store kra diay stata may fr has more chck kray ga kay jitnay article ki length ha aur un may say kitnay display kr chuka ha screen pay agr tu article.length mtlb jitnay display hoay ha un ki length equal ni ha total results say tu fr has more wali functionality run kro else na kro
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
    {articles.map((element)=>{
        return <div key={element.url}>
            <Homeitems  title={element.title?element.title.slice(0,45):"No Title"} description={element.description?element.description.slice(0,70):"No Description"} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        
        
        
    })}
    </InfiniteScroll>
	
	

    </>
  )
}
Home.defaultProps={
    country:"in",
    pagesize:10,
    category:"general"
}
Home.propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
}

export default Home