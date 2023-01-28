import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {FcGoogle} from  'react-icons/fc'
import {BiCopyright} from 'react-icons/bi'
import { Loading } from '../components'
import './login.css'
function Login() {
  const handletime=() => {
    setCheckani(false)
}
const handletime1=()=>{
  setLoading(false)
}
  useEffect(() => {
    const timer=setTimeout(handletime, 200);
    const timer1=setTimeout(handletime1, 1500);
    return () => {
      clearTimeout(timer)
      clearTimeout(timer1)
    };
  }, [handletime,handletime1]);
  const nav=useNavigate()
  const [loading, setLoading] = useState(true);
  const [ins, setIns] = useState('');
  const [ins1, setIns1] = useState('');
  const [checkani, setCheckani] = useState(false);
  const [checked, setChecked] = useState(false);
   return loading?<Loading/>
   :(
    <div className='loginw'>
      <div className="login">
        <div className="login__l">
          <div className="login__texts">
            <h1>Welcome back</h1>
            <p>Welcome back!Please enter your details.</p>
          </div>
          <form action="">
            <div className="login__ins">
              <div className="login__in">
                <label for='email'>Email</label>
                <input type="text" placeholder='Enter your email' id='email'
                autoComplete='off'
                className='login__incom'
                value={ins}
                onChange={e=>{
                  setIns(e.target.value)
                }}
                />
              </div>
              <div className="login__in">
                <label for='password'>Password</label>
                <input type="password" placeholder='Enter your password' id='password'
                className='login__incom'
                value={ins1}
                onChange={e=>{
                  setIns1(e.target.value)
                }}
                />
              </div>
            </div>
            <div className="login__checkw">
              <div className={checkani?'checkani login__checkl':'login__checkl'}>
                <label for='checkbox'
                onClick={e=>{
                  setCheckani(false)
                }}
                >Remember for 30 days</label>
                <input type="checkbox" id='checkbox'
                checked={checked}
                onClick={e=>{
                  setCheckani(false)
                  setChecked(!checked)
                  console.log(1);
                }}
                />
              </div>
              <Link to='/forget' className='login__link'>Forget password</Link>
            </div>
            <button className='login__sign' type='button'
            onClick={e=>{
              if(ins=='123'&&ins1=='123'&&checked==true){
                nav('/')
              }else{
                window.alert('What you typed are wrong,maybe your password or email.')
                setIns('')
                setIns1('')
                setCheckani(true)
                setChecked(true)
              }
            }}
            >Sign in</button>
            <button className='login__google' type='button'>
              <FcGoogle className='login__icon'/>
              Sigin in with Google</button>
              <span className='login__span'>Don't have an account?
              <Link to='/signup' className='login__link'>Sign up</Link>
              </span>
          </form>
          <div className="login__top login__com">
            <div className="login__dot"></div>
            <strong>Untitled UI</strong>
          </div>
          <p className="login__bottom login__com">
            <BiCopyright/>
            Untitled 2077
          </p>
        </div>
        <div className="login__r">
          <div className="login__bigdot"></div>
          <div className="login__cover login__com"></div>
        </div>
      </div>
    </div>
  )
}

export default Login