
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import Advertisement from '../components/Advertisement'
import ShopInfo from '../components/ShopInfo'
import FunctionButtonList from '../components/FunctionButtonList'
import MainShop from '@/components/MainShop'
import Footer from '@/components/Footer'
import TryChildren from '@/components/TryChildren'

const Home = ()=>{
  return (
    <div id='root'>
      <Header/>
      <BreadCrumb/>
      <Advertisement/>
      <ShopInfo/>
      <FunctionButtonList/>
      <MainShop/>
      
      <TryChildren/>
      
      <Footer/>
    </div>

  )
}

export default Home
