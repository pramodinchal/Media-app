import { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'

import {
    setLoading,
    setError,
    setResults
} from '../redux/features/searchSlice'

import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()

    const {
        query,
        activeTab,
        results,
        loading,
        error
    } = useSelector((store) => store.search)

    useEffect(() => {
        if(!query) return;
        const getData = async () => {

            try {

                dispatch(setLoading())

                let data = []

                if (activeTab === 'photos') {

                    const response = await fetchPhotos(query)

                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html
                    }))
                     console.log(data)
                }

                if (activeTab === 'videos') {

                    const response = await fetchVideos(query)

                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))
                }

                dispatch(setResults(data))
                console.log(data)

            } catch (err) {
                

                console.log(err)

                dispatch(setError(err.message))
            }
        }

        if(query){
            getData()
        }

    }, [query, activeTab])

    if (error) return <h1>Error</h1>

    if (loading) return <h1>Loading.....</h1>

    return (
        <div className='flex flex-wrap justify-center gap-6 overflow-auto'>
            {
                results.map((item, idx) => (
                    <h1 key={idx}>
                       
                       <ResultCard item={item}/>
                    </h1>
                ))
            }
        </div>
    )
}

export default ResultGrid