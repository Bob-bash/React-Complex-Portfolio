import React,{useState,useEffect,useCallback} from 'react'
import './header.css'
import {Link,useNavigate} from 'react-router-dom'
import {BiPhoneCall,BiHomeCircle} from 'react-icons/bi'
import {AiOutlineExperiment} from 'react-icons/ai'
import { useDispatch,useSelector} from 'react-redux'
import {TbCameraSelfie} from 'react-icons/tb'
import { Indicator } from '../components'
import {SiSpeedtest} from 'react-icons/si'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {HiMenuAlt1} from  'react-icons/hi'
function Header() {
  const links=[
    {link:'services',content:'Services',icon:<BiHomeCircle/>},
    {link:'experience',content:'Experience',icon:<AiOutlineExperiment/>},
    {link:'portfolio',content:'Portfolio',icon:<TbCameraSelfie/>},
    {link:'testimonials',content:'Testimonials',icon:<SiSpeedtest/>},
    {link:'contact',content:'+001(313)345678',icon:<MdOutlinePermContactCalendar/>},
  ]
  const [selected, setSelected] = useState('services');
  const [shadowshow, setShadowshow] = useState(false);
  const [textcount, setTextcount] = useState(1);
  const [y,setY] = useState(document.scrollingElement.scrollHeight);
  const [headershow, setHeadershow] = useState(false);
  const [maxsize, setMaxsize] = useState(1.2);
  const handleresize=e=>{
    if(window.innerWidth<768){
        setMaxsize(1.1)
    }else{
        setMaxsize(1.2)
    }
  }
  useEffect(() => {
    handleresize()
    window.addEventListener('resize',handleresize)
    return () => {
    window.removeEventListener('resize',handleresize)
    };
  }, [handleresize]);
  const handleNavigation = useCallback((e) => {
    if (y > window.scrollY) {
      setTextcount(pre=>pre>=1?pre-0.02:1)
    } else if (y < window.scrollY) {
      setTextcount(pre=>pre<=maxsize?pre+0.02:maxsize)
    }
    setY(window.scrollY)
  }, [y]);
  const handlescroll=e=>{
    if(window.scrollY>0){
      setShadowshow(true)
      handleNavigation()
    }else{
      setShadowshow(false)
      setTextcount(1)
      handleNavigation()
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handlescroll)
    return () => {
      window.removeEventListener('scroll',handlescroll)
    };
  }, [handlescroll]);
  const nav=useNavigate()
  const dispatch=useDispatch()
  const items=useSelector(state=>state.items)

  return (
    <div className='header'
    style={{
      boxShadow:shadowshow?'0 0 10px rgba(0,0,0,.6)':'none'
    }}
    >
      <Indicator/>
          <Link to='/check' className='header__logo'
          style={{
            transform:`scale(${textcount})`
          }}
          >Binjan <span>{items.length} items</span></Link>
      <div className="header__links">
        <div className="header__linksw"
            style={{top:headershow?'0':'-100%'}}
          >
          {links.map(link=>(
            <div className="linkiconw"
            key={`${link.link}_100`}
            >
              <div className="link__rwd__icon"
              key={`${link.link}_200`}
              >
                {link.icon}
              </div>
              <div className='header__linkw'
              key={`${link.link}__1`}
              onClick={e=>setSelected(link.link)}
              >
                <a  href={`/#${link.link}`} className='header__link'
                key={`${link.link}__2`}
                onClick={e=>{
                  setHeadershow(!headershow)
                }
              }
                style={{
                  color:selected==link.link?'rgba(0,0,0,200)':'rgba(56,76,90,1)'
                }}
                >{link.content}</a>
                <div className="link__line"
                key={`${link.link}__3`}
                style={{
                  width:selected==link.link?'70%':'0'
                }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="header__icons">
          <Link className="callcon"
          to='/login'
          onClick={e=>{
            dispatch({type:'HEADERSHOW',payload:false})
          }}
          >
            <div className="header__iconw">
              <BiPhoneCall className='header__icon'/>
            </div>
            <b>hds</b>
          </Link>
          <div className="header__iconw header__iconw1">
            <HiMenuAlt1 className='header__menu header__icon'
            onClick={e=>{
              setHeadershow(!headershow)
            }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header