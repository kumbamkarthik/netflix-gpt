import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constant'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice'
import lang from '../utils/languageConstants'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      navigate("/");
    })
    .catch((error)=>{
      navigate("/error");
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe(); 
  },[]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44'
        src={LOGO} 
        alt="logo"/>
    {user && <div className='flex p-2'>
      <select className='p-2 m-2 bg-gray-900 text-white'>
        {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>
      <button className='py-2 px-4 mx-4 my-3 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
      <img  className="w-12 h-12" alt='user-icon' 
      src={user?.photoURL} />
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
    </div>}
    </div>
  )
}

export default Header