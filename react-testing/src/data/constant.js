import {MdOutlineKeyboardArrowLeft} from  'react-icons/md'
import {RiArrowRightSLine} from 'react-icons/ri'
import './data.css'
const Pre=({onClick})=>{
    return(
        <MdOutlineKeyboardArrowLeft
        className='arrow__icon arrow_l'
        onClick={onClick}
        />
    )
}
const Next=({onClick})=>{
    return(
        <RiArrowRightSLine 
        className='arrow__icon arrow_r'
        onClick={onClick}
        />
    )
}
export const sliderSettings={
    dots:true,
    infinity:false,
    prevArrow:<Pre/>,
    nextArrow:<Next />,
    speed:800,
    slidesToScroll:1,
    slidesToShow:3,
    initialSlide:1,
    centerPadding: 0,
    centerMode:true,
    touchMove:true,
    // autoplay:true,
    autoplaySpeed:3000,
    responsive:[
        {
            breakpoint:768,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:0,
                centerMode:false,
            }
        },
        {
        breakpoint:468,
        settings:{
            slidesToShow:1,
            slidesToScroll:1,
            initialSlide:0,
            centerMode:false,
        }
    }
    ]
}