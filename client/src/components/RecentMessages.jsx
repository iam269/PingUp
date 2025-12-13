import React, { use } from 'react'
import { dummyRecentMessagesData } from '../assets/assets';

const RecentMessages = () => {

    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        setMessages(dummyRecentMessagesData);
    }

    useEffect(() => {
        fetchMessages();
    }, []);

  return (
    <div className='bg-white max-w-xs mt-4 p-4 min-h-20 rounded-md shadow text-xs text-slate-800'>
      <h3 className='font-semibold text-slate-8 mb-4'>Recent messages</h3>
      <div className='flex flex-col max-h-56 overflow-y-scroll no-scrollbar'>
        {
            messages
        }
      </div>
    </div>
  )
}

export default RecentMessages
