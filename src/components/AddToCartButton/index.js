import { PlusIcon, TrashIcon } from "@radix-ui/react-icons"
// import { useState } from "react"

const AddCartButton = ({testId, count, onAdd, onRemove }) => {
    const isAdd = count > 0
    //如果count > 0，
    return (
        <div className="flex absolute top-6 right-2 p-2 bg-black rounded-full font-bold hover:bg-gray-700 cursor-pointer" 
            data-testid={testId}
        >
            
            {
                isAdd && (
                    <div className="flex items-center">
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center select-none"
                            data-testid="count"
                        >{count}</span>
 
                        
                        <TrashIcon className="text-white mx-2" onClick={onRemove}
                            data-testid="removeIcon"
                        />
                    </div>
                )
            }
            <PlusIcon className="text-white first-line"  onClick={onAdd}
                data-testid="plusIcon"
            />
            

        </div>
    )
}

export default AddCartButton