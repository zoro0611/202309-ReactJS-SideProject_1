import AddCartButton from "../AddToCartButton"
// import { useSelector, useDispatch } from "react-redux";
// import { add, remove } from "@/datas/slice/cartSlice";

import withStock from "@/core/stock/withStock";

const MenuCategoryItem = ({
        data,
        count,
        stock,
        finished,
        handleAdd,
        handleRemove,
        onClick
    }) => {
    //重構 => 利用withStock HOC 內部封裝useCart的hook
    const keyId = `${data.id}-${data.title}` // '15-煙燻三文魚漢堡'
    return (
        <div className="w-[200px] p-4 mr-3 mb-10 relative  hover:shadow-xl cursor-pointer" onClick={()=>onClick(data)}>
            <div className=" flex items-center justify-center select-none text-[14px]"data-testid="stock">庫存: {stock}</div>
            <img className="w-full h-[100px] select-none" alt="itemImg" src={data.image} />
            {!finished && (
					<AddCartButton 
                    // data-testid={keyId}
                    testId = {keyId}
                    count={count}
                    onAdd={handleAdd} 
                    onRemove={handleRemove}
                />
				)}
				{finished && (
					<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
						<div className="bg-white rounded-full text-stone-950 text-sm font-bold p-4">
							Sold Out
						</div>
					</div>
            )}
            <h3>{data.title}</h3>
            <p>$ {data.price}</p>
        </div>
    )
}

export default withStock(MenuCategoryItem);