import {useState} from 'react'
import "./CarouselStyles.css"

import slides from "../../data/CarouselData.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight,faArrowLeft} from "@fortawesome/free-solid-svg-icons"

function Carousel(){ 
    const carouselSlides = slides;
    
    const [slide,setSlide] = useState(0);

    const nextSlide = () =>{
        setSlide(slide===carouselSlides.length-1? 0 : slide+1);
    }

    const prevSlide = () =>{
        setSlide(slide=== 0? carouselSlides.length-1 : slide-1);
    }
    return(
        <div className="container carousel">
            <FontAwesomeIcon icon={faArrowLeft} className="arrow arrow-left" onClick={prevSlide}/>
            {
                carouselSlides.map((item,index)=>{
                    return <img src={item.src} alt={item.alt} key={index} className={slide===index?"slide":"slide slide-hidden"}/>
                })
            }
            <FontAwesomeIcon icon={faArrowRight} className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators"> 
                {
                    carouselSlides.map((_,index)=>{
                        return <button className={slide===index?"indicator":"indicator indicator-inactive"} key={index} onClick={()=>setSlide(index)}></button>
                    })
                }
            </span>
        </div>
    )
}

export default Carousel;

