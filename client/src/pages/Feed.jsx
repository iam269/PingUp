import React, { useEffect } from 'react'
import { dummyPostsData } from '../assets/assets'
import StoriesBar from '../components/StoriesBar'

const Feed = () => {

  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData)
    setLoading(false)
  }

  useEffect(() => {
    fetchFeeds()
  }, [])

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/*Stories and post list*/}
      <div>
        <StoriesBar />
        <div className='p-4 space-y-6'>
          List of post
        </div>
      </div>
      {/*Right sidebar*/}
      <div>
        <div>
          Sponsored
        </div>
        <h1>Recent messages</h1>
      </div>
    </div>
  ) : <Loading />
}

export default Feed
