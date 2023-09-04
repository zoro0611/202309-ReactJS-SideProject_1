
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import Advertisement from '../components/Advertisement'
import ShopInfo from '../components/ShopInfo'
import FunctionButtonList from '../components/FunctionButtonList'
import MainShop from '@/components/MainShop'

const Home = ()=>{
  return (
    <div>
      <Header/>
      <BreadCrumb/>
      <Advertisement/>
      <ShopInfo/>
      <FunctionButtonList/>
      <MainShop/>
      
    </div>
  )
}

export default Home
