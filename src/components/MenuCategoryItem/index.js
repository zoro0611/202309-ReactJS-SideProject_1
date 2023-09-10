import AddCartButton from "../AddToCartButton"
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "@/datas/slice/cartSlice";

const MenuCategoryItem = ({data}) => {
    const count = useSelector((state) => state.cart?.[data.id]);
    const dispatch = useDispatch()
    
    const handleAdd = (e) => {
        e.stopPropagation()
        dispatch(add({ id: data.id }));
    }
    const handleRemove = (e) => {
        e.stopPropagation()
        dispatch(remove({ id: data.id }));
    }

    const cartCount = count || 0;
    return (
        <div className="w-[200px] p-4 mr-3 mb-10 relative  hover:shadow-xl cursor-pointer">
            <AddCartButton 
                count={cartCount}
                onAdd={handleAdd} 
                onRemove={handleRemove}
            />
            <img className="w-full h-[100px] select-none" src={data.image} />
            <h3>{data.title}</h3>
            <p>$ {data.price}</p>
        </div>
    )
}

export default MenuCategoryItem