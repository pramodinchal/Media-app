import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text,setText] = useState('')

  
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        // console.log(text)
        dispatch(setQuery(text))
        setText('');
    }
  return (
    <div className="bg-gray-900">
      <form onSubmit={(e)=>{handleSubmit(e)}} className= 'flex p-10'>
        <input value={text}  onChange={(e)=>(setText(e.target.value))} required className='w-full border-2 px-2 py-2 text-xl rounded outline-none bg-gray-200' type="text" placeholder="Search anything...."/>
        <button className='active:scale-95 px-3  mx-2 rounded bg-red-500'>Search</button>
        {/* <h1>{text}</h1> */}
      </form>
    </div>
  )
}

export default SearchBar
