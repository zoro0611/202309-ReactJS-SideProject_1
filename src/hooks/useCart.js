import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "@/datas/slice/cartSlice";


const useCart= (id) =>{
    const dispatch = useDispatch()
    const count = useSelector((state) => state.cart?.[id]);
    
    const handleAdd = (id) => {
        dispatch(add({id}));
    }
    const handleRemove = (id) => {
        dispatch(remove({id}));
    }

    return {
        handleAdd,
        handleRemove,
        count,
    }

}

export default useCart;