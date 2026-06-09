import React from 'react'
 const addToCollection =(item)=>{
  const oldData = JSON.parse(localStorage.getItem('collection')) || []

  const newData = [...oldData, item]

  localStorage.setItem('collection',JSON.stringify(newData))
 }
const ResultCard = ({item}) => {
    // console.log(item)
  return (
    <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
       
      <a target='_blank' className='h-full' href={item.url}>
         { item.type == 'photo'? <img className='h-full w-full object-center object-cover' src={item.src} alt="img"/> : ''}
         { item.type == 'video'? <video className='h-full w-full object-center object-cover' autoPlay loop muted src={item.src}></video> : ''}
      </a>
      <div id="bottom" className='flex justify-between items-center w-full px-6 py-5 absolute bottom-0 text-white'>
        <h2 className='text-sm font-semibold capitalize h-10 overflow-hidden'>{item.title}</h2>
        <button className='bg-red-500 rounded px-3 py-1 font-medium cursor-pointer active:scale-95'
        onClick={()=>{
            addToCollection(item);
        }
            
        }
        >Save</button>
      </div>
    </div>
  )
}

export default ResultCard
