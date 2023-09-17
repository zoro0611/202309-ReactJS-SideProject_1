import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Advertisement from '../components/Advertisement';
import ShopInfo from '../components/ShopInfo';
import FunctionButtonList from '../components/FunctionButtonList';
import MainShop from '@/components/MainShop';
import Footer from '@/components/Footer';

import { Provider } from 'react-redux';
import store from '@/datas/store';

const APIURL = "https://www.modernweb.solutions/api/mock";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 添加一个加载状态

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(APIURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApiData([...data.data]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    if (apiData.length === 0) {
      getApiData();
    }
  }, []);

  // 在isLoading为true时渲染加载状态
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-[40px]">
        Loading...
      </div>
    );

  }

  return (
    <Provider store={store}>
      <Header />
      <BreadCrumb />
      <Advertisement />
      <ShopInfo />
      <FunctionButtonList />
      <MainShop rawData={apiData} />
      <Footer />
    </Provider>
  );
};

export default Home;
