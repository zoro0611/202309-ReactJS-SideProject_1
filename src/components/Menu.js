import MenuCategory from "./MenuCategory";
import AllItems from "@/datas/AllMenuItems";
const Menu = () => {
    return (
        <div className="flex-1 p-3">
            {
                AllItems.map((cate, index) => {
                    return (
                        <MenuCategory key={index} category={cate.CategoryName} cateItems={cate.Data}/>
                    )
                })
            }
            
        </div>
    )
}

export default Menu;