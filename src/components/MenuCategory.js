import MenuCategoryItem from "./MenuCategoryItem"

const MenuCategory = ({ ind, category, cateItems = [] }) => {
    return (
        <div key={ind} className="mt-3">
            <h1 className="text-[30px] font-bold">{category}</h1>
            <div className="flex flex-wrap mt-3">
                {
                    cateItems.map((item, index) => {
                        return (
                            <MenuCategoryItem key={index} item={item}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default MenuCategory