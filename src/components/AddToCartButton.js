import { PlusIcon, TrashIcon} from "@radix-ui/react-icons"
import { useState } from "react"

const AddCartButton = ({ product }) => {
    const [count, setCount] = useState(0)
    const handleAdd = (e) => {
        e.stopPropagation()
        setCount(prev=> prev + 1)
    }
    const handleRemove = (e) => {
        e.stopPropagation()
        setCount(prev=>prev - 1)
    }
    let isAdd = count > 0
    //如果count > 0，
    return (
        <div className="flex absolute top-6 right-6 p-2 bg-black rounded-full font-bold hover:bg-gray-700 cursor-pointer" >
            <PlusIcon className="text-white"  onClick={handleAdd}/>
            {
                isAdd && (
                    <div>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center select-none">{count}</span>
                        <TrashIcon className="text-white mx-2" onClick={handleRemove}/>
                    </div>
                )
            }
            

        </div>
    )
}

export default AddCartButton