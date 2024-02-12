import {DrawingPinFilledIcon} from '@radix-ui/react-icons'

const Search = ({ search, setSearch }) => {
    return (
        <div className='flex items-center flex-1 min-h-[100px] bg-white w-full p-2'>
            <div className='w-full border-slate-500 py-3 p-2 bg-slate-100 border-b flex items-center gap-2'>
                <DrawingPinFilledIcon className='w-[20px] h-[20px]'/>
                <input className='bg-transparent hover:outline-none focus:outline-none w-full' placeholder='請輸入外送地址'/>
            </div>
        </div>
    )
}

export default Search