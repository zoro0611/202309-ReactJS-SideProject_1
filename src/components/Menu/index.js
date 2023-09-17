import MenuCategory from "../MenuCategory";
// import AllItems from "@/datas/AllMenuItems";
import { useState, useRef } from "react";
import DetailCard from "@/components/DetailCard";

const Menu = ({data}) => {
    // const el = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    return (
        <div className="flex-1 p-3">
            {
                data?.map((cate, index) => {
                    const keyId = `${cate.CategoryName}-${index}`
                    
                    return (
                        <MenuCategory key={index} itemId={keyId} 
                        category={cate.CategoryName} cateItems={cate.Data} 
                        onClick={handleItemClick}  
                        />
                        
                    )
                })
            }
              {/* 新增Modal的地方 */}
              {selectedItem && (
                <div>
                    {/** A 最底层 */}
                    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                        {/** B 半透明的第二层 */}
                        <div
                            className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-slate-950/40"
                            onClick={() => setSelectedItem(null)}
                        />

                        {/** C 最上层 */}
                        <div className="shadow-2xl transition-all relative z-30 border border-slate-300 rounded-lg bg-white">
                            <DetailCard data={selectedItem} />
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Menu;