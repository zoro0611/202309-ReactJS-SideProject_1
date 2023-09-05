
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import Advertisement from '../components/Advertisement'
import ShopInfo from '../components/ShopInfo'
import FunctionButtonList from '../components/FunctionButtonList'
import MainShop from '@/components/MainShop'

const Home = ()=>{
  return (
    <div id='root'>
      <Header/>
      <BreadCrumb/>
      <Advertisement/>
      <ShopInfo/>
      <FunctionButtonList/>
      <MainShop/>
      <div className="p-3">
        <a className="text-gray-400" target='_blank' href='https://moderneat.vercel.app/'>@All CopyRight belongs to Modern Eat</a>
      </div>
    </div>
  )
}

export default Home
