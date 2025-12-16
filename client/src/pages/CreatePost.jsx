import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'

const CreatePost = () => {

  const [content, setContent] = useState('')
  const [images, setImages] = useState('')
  const [loading, setLoading] = useState(flase)

  const user = dummyUserData;

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <div className='max-w-6xl mx-auto p-6'>
        {/* Title */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-slate-900 mb-2'>Create Post</h1>
          <p className='text-slate-600'>Share your thoughts with the world</p>
        </div>

        {/* Form */}
        <div className='max-w-xl bg-white p-4 sm:pb-3 rounded-xl shadow-md space-y-4'>
          {/* Header */}
          <div className='flex items-center gap-3'>
            <img src={user.profile_picture} alt='' className='w-12 h-12 rounded-full shadow'/>
            <div>
              <h2 className='font-semibold'>{user.full_name}</h2>
              <p className='text-sm text-gray-500'>@{user.username}</p>
            </div>
          </div>

          {/* Text Area */}
          <textarea className='w-full resize-none max-h-20 mt-4 text-sm outline-none placeholder-gray-400' placeholder="What's happening?" onChange={(e)=>setContent(e.target.value)} value={console} />
            {/* Images */}
            {
              images
            }
        </div>
      </div>
    </div>
  )
}

export default CreatePost
