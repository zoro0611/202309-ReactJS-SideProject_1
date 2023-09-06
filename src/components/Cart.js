import { BackpackIcon, DotFilledIcon } from '@radix-ui/react-icons';



const Cart = () => {

  return (
    <div id='cart' className='min-w-[100px] flex items-center justify-around bg-black w-[150px] h-[40px] px-3 mr-6 rounded-full cursor-pointer hover:bg-slate-700'>
      <BackpackIcon className='text-white w-[20px] h-[20px]' />
      <div className='text-white'>購物車</div>
      <DotFilledIcon className='text-white' />
      <div className='text-white'>0</div>
    </div>
  );
}

export default Cart;
