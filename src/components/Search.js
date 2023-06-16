import React from 'react'
import icons from '../ultis/Icon'


const { FiSearch } = icons;

const Search = () => {
    return (
        <div className='w-full flex items-center'>
            <span className='h-10 pl-4 bg-[#DDE4E4] flex items-center rounded-l-[20px] justify-center text-gray-500'>
                <FiSearch size={20} />
            </span>
            <input 
                type="text" 
                className='px-4 outline-none py-2 w-full bg-[#DDE4E4] rounded-r-[20px]  h-10 text-gray-500'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            />
        </div>
    )
}

export default Search