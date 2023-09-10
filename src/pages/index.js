
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import Advertisement from '../components/Advertisement'
import ShopInfo from '../components/ShopInfo'
import FunctionButtonList from '../components/FunctionButtonList'
import MainShop from '@/components/MainShop'
import Footer from '@/components/Footer'


import { Provider } from 'react-redux'; // 引入Provider
import store from '@/datas/store'; 


const Home = ()=>{
  return (
    // <div>
    //   <Header/>
    //   <BreadCrumb/>
    //   <Advertisement/>
    //   <ShopInfo/>
    //   <FunctionButtonList/>
    //   <MainShop/>
    //   <Footer/>
    // </div>
      
      <Provider store={store}>
            <Header/>
            <BreadCrumb/>
            <Advertisement/>
            <ShopInfo/>
            <FunctionButtonList/>
            <MainShop/>
            <Footer/>
      </Provider>

  )
}

export default Home
