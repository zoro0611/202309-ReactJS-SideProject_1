import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Advertisement from '../components/Advertisement';
import ShopInfo from '../components/ShopInfo';
import FunctionButtonList from '../components/FunctionButtonList';
import MainShop from '@/components/MainShop';
import Footer from '@/components/Footer';
// import { createClient } from "@supabase/supabase-js";

import { Provider } from 'react-redux';
import store from '@/datas/store';

const APIURL = "https://www.modernweb.solutions/api/mock";
// 改用.env.local的資料
// const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// const supabase = createClient(
//   url,
//   key
// );

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
        // console.log('API data fetched:', data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    if (apiData.length === 0) {
      getApiData();
    }


    // get supabase data
    // const getSupabaseData = async () => {
    //   try {
    //     const { data, error } = await supabase
    //       .from('Menu')
    //       // .select('*')
    //       //拿到除了Menu所有欄位之外，也將categoryid關聯到category table的id，並且把category table的name取出來
    //       // .select('*,Category:categoryid(categoryname)')
    //       //我要平攤categoryid的資料，因為我要用categoryname來做分類
    //       .select('*,Category:categoryid(categoryname)')
    //       const flattenedData = data.map(item => ({
    //         ...item,
    //         category: item.Category ? item.Category.categoryname : null,
    //       }));
      

    //     if (error) throw error
    //     setIsLoading(false);
    //     console.log(flattenedData)
    //     setApiData([...flattenedData]);
    //   } catch (error) {
    //     console.log(error.message)
    //   }
    // }
    // if(apiData.length === 0){
    //   getSupabaseData();
    // }
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
