import React from 'react'
import { dummyStoriesData } from '../assets/assets'

const StoriesBar = () => {

    const [storiess, setStories] = useState([])

    const fetchStories = async () => {
        setStories(dummyStoriesData)
    }
    useEffect(() => {
        fetchStories()
    }, [])
  return (
    <div className='w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4'>
      
    </div>
  )
}

export default StoriesBar
