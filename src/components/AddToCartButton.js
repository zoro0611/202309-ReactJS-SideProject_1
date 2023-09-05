import { PlusIcon} from "@radix-ui/react-icons"
const AddCartButton = ({ product }) => {
    return (
        <div className="absolute top-6 right-6 p-2 bg-black rounded-full font-bold hover:bg-gray-700 cursor-pointer" >
            <PlusIcon className="text-white"/>
        </div>
    )
}

export default AddCartButton