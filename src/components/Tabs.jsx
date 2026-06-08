import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos']
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
    return (
        <div className='flex gap-120 p-10'>
            {tabs.map((elem, idx) => {
                return (<button className={`${(activeTab == elem?'bg-gray-400' : 'bg-emerald-500')} transition cursor-pointer p-2 rounded active:scale-95 uppercase`} 
                key={idx}
                    onClick={() => {
                        dispatch(setActiveTabs(elem))
                    }}
                >
                    {elem}
                </button>
                )
            })}
        </div>
    )
}

export default Tabs
