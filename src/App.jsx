import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'

const App = () => {
  return (
    <div className="w-full bg-gray-800">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Routes>
          <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
    
        
      
     {/* <SearchBar/>
     <Tabs/>
     <ResultGrid/> */}
    </div>
  )
}

export default App
