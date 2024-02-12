import { useState } from "react";
import useCart from "@/hooks/useCart";

const withStock = (Component) => {
    const WithStockComponent = (props) => {
        const [stock, setStock] = useState(5);
        const { count, handleAdd, handleRemove } = useCart(props.data.id);

        const handleAddWithStock = (e) => {
            e.stopPropagation();
            if (stock === 0) return;
            handleAdd(props.data.id);
            setStock(prev => prev - 1);
        }

        const handleRemoveWithStock = (e) => {
            e.stopPropagation();
            if (count === 0) return;
            handleRemove(props.data.id);
            setStock(prev => prev + 1);
        }

        return (
            <Component
                {...props}
                count={count}
                finished={stock===0}
                stock={stock}
                handleAdd={handleAddWithStock}
                handleRemove={handleRemoveWithStock}
            />
        );
    }

    WithStockComponent.displayName = `withStock(${Component.displayName || Component.name})`;

    return WithStockComponent;
}

export default withStock;
