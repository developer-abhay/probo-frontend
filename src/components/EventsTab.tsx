import { Link } from 'react-router-dom'

const EventsTab = () => {
    return (
        <div className=''>
            <Link to='' className="text-xl font-semibold bg-black  px-4 py-3 border-b border-gray-300 text-[#262626] ">
                All events
            </Link>
            <Link to='cricket' className="text-xl font-semibold border-b border-gray-300 text-[#262626] py-3">
                Cricket
            </Link>
            <Link to='crypto' className="text-xl font-semibold border-b border-gray-300 text-[#262626] py-3">
                Crypto
            </Link>
            <Link to='youtube' className="text-xl font-semibold border-b border-gray-300 text-[#262626] py-3">
                Youtube
            </Link>

        </div>
    )
}

export default EventsTab
