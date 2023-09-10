import BestSales from "./BestSales";
import Menu from "./Menu";
import rawData from "@/datas/AllMenuItems_Raw";

const MainShop = () => {
    // console.log(rawData)
    let refinedData = [];
    rawData.map(x=>{
        let cateName = x.category;
        let cateData = x;
        let cate = refinedData.find(x=>x.CategoryName === cateName);
        if(cate){
            cate.Data.push(cateData);
        }else{
            refinedData.push({
                "CategoryName": cateName,
                "Data": [cateData]
            })
        }
    })
    console.log(refinedData)
    return (
        // <div className="flex w-full mt-5 relative">
        <div className="flex items-start relative min-h-screen px-14 pt-8">

            <div className="w-[320px] pr-5 sticky top-0 left-0">
                <BestSales/>
            </div>

            <div className="flex-1">
                <Menu/>
            </div>
        </div>
    )
}

export default MainShop