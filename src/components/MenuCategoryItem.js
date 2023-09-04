
const MenuCategoryItem = ({item}) => {
    return (
        <div className="w-[200px] mr-8 mb-10">
            <img className="w-full h-[100px]" src={item.image}/>
            <h3>{item.title}</h3>
            <p>$ {item.price}</p>
        </div>
    )
}

export default MenuCategoryItem