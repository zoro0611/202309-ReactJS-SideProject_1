import BestSales from "../BestSales";
import Menu from "../Menu";
// import rawData from "@/datas/mockData";
import {  useEffect, useState } from "react";


const MainShop = ({rawData}) => {
    const [category, setRefinedCategory] = useState([]);
    const [data, setRefinedData] = useState([]);


    useEffect(()=>{
        //1. define Category
        const refinedCategory = rawData.map(x=>x.category).filter((item, ind, arr) => arr.indexOf(item) === ind);
        setRefinedCategory(refinedCategory);
        //2. define Data
        const refinedData = rawData.reduce((acc, cur)=>{
            let cateName = cur.category;
            let cateData = cur;
            let cate = acc.find(x=>x.CategoryName === cateName);
            if(cate){
                cate.Data.push(cateData);
            }else{
                acc.push({
                    "CategoryName": cateName,
                    "Data": [cateData]
                })
            }
            return acc;
        }, [])
        setRefinedData(refinedData);
    }, [])
    
    return (
        // <div className="flex w-full mt-5 relative">
        <div className="flex items-start relative min-h-screen px-14 pt-8">

            <div className="w-[270px] pr-5 sticky top-0 left-0">
                <BestSales data={category}/>
            </div>

            <div className="flex-1">
                <Menu data={data}
                />
            </div>

          


        </div>
    )
}

export default MainShop