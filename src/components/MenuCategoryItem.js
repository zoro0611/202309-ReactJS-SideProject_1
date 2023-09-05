import AddCartButton from "./AddToCartButton"
const MenuCategoryItem = ({item}) => {
    return (
        <div className="w-[200px] p-4 mr-3 mb-10 relative  hover:shadow-xl cursor-pointer">
            <AddCartButton product={item}/>
            <img className="w-full h-[100px]" src={item.image}/>
            <h3>{item.title}</h3>
            <p>$ {item.price}</p>
        </div>
    )
}

export default MenuCategoryItem