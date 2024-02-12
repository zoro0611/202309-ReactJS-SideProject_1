import MenuCategoryItem from "../MenuCategoryItem"

const MenuCategory = ({ itemId, category, cateItems = [], onClick }) => {
    return (
        <div className="mt-3">
            <h1 className="text-[30px] font-bold" id={itemId}>{category}</h1>
            <div className="flex flex-wrap mt-3">
                {
                    cateItems?.map((item, index) => {
                        return (
                            <MenuCategoryItem key={index}  data={item} onClick={onClick}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default MenuCategory