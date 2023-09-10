import MenuCategory from "../MenuCategory";
// import AllItems from "@/datas/AllMenuItems";
const Menu = ({data}) => {
    // console.log(data)
    return (
        <div className="flex-1 p-3">
            {
                data?.map((cate, index) => {
                    const key = `${cate.CategoryName}-${index}`
                    
                    return (
                        <MenuCategory itemId={key} category={cate.CategoryName} cateItems={cate.Data}/>
                        
                    )
                })
            }
            
        </div>
    )
}

export default Menu;