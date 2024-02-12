import {HamburgerMenuIcon} from '@radix-ui/react-icons'

import Cart from '../Cart'
import Search from '../Search'

const Header = () => {
    return (
      <div className="flex items-center w-full">
        {/* {LOGO} */}
        <div className="px-3 min-h-[100px] w-[300px] flex items-center justify-center">
          <div className="w-[80px] grid justify-items-center">
            <HamburgerMenuIcon className='h-[24px] w-[24px]'/>
          </div>
          
          <div className="flex-1 text-3xl px-4">Modern<b className='mx-2'>Eats</b></div>
        </div>

        <div className="flex flex-1 items-center">
          <Search/>
          <Cart className="flex-1"/>
        </div>
        
      </div>
    
    )
}

export default Header