import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthAsync, setAuth } from '../actions/authAction';

export default function Signin() {
  const {loading,error} = useSelector(state=>state.status)
  const {user} = useSelector(state=>state.auth)
  const dispatch = useDispatch();
  
  const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    !user ?
    <div className='form' >
      <input type="text" name='username' value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={()=>dispatch(fetchAuthAsync(username,password))}>{loading?'Loading...':'Submit'}</button>
      {error && <p style={{color:'red', fontSize:'12'}}>{error}</p>}
    </div>
    :
    <div>เข้าสู่ระบบแล้ว</div>
  )
}
