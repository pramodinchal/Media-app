import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const HomePage = () => {
     const {query} = useSelector((store) => store.search)

  return (
    <div>
        <div className='py-4 px-8 bg-blue-900'>
            <h2 className='text-2xl font-bold text-white'>
                Media Search
            </h2>
        </div>
     <SearchBar/>
    {query != '' ? <div> <Tabs/>
     <ResultGrid/></div> : ''}
    </div>
  )
}

export default HomePage
