import {HamburgerMenuIcon, DrawingPinFilledIcon, BackpackIcon, DotFilledIcon} from '@radix-ui/react-icons'
const Header = () => {
    return (
      <div className="flex justify-between items-center w-full">
        {/* {LOGO} */}
        <div className="px-3 min-h-[100px] w-[300px] flex items-center justify-center">
          <div className="w-[80px] grid justify-items-center">
            <HamburgerMenuIcon className='h-[24px] w-[24px]'/>
          </div>
          
          <div className="flex-1 text-3xl px-4">Modern<b className='mx-2'>Eats</b></div>
        </div>

        {/* {SEARCH} */}
        <div className='flex flex-1'>
          <div className="min-h-[100px] bg-white flex-1 p-2 flex items-center">
            <div className='w-full border-slate-500 py-3 p-2 bg-slate-100 border-b flex items-center gap-2'>
              <DrawingPinFilledIcon className='w-[20px] h-[20px]'/>
              <input className='bg-transparent hover:outline-none focus:outline-none w-full' placeholder='請輸入外送地址'/>
              
            </div>
          </div>
          
        </div>

        {/* {購物車} */}
        <div className='min-w-[100px] flex items-center justify-around bg-black w-[150px] h-[40px] px-3 mr-6 rounded-full'>
          <BackpackIcon className='text-white w-[20px] h-[20px]'/>
          <div className='text-white'>購物車</div>
          <DotFilledIcon className='text-white'/>
          <div className='text-white'>0</div>
        </div>
        
      </div>
    
    )
}

export default Header