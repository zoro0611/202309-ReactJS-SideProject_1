import { TriangleRightIcon } from "@radix-ui/react-icons";
import { Link } from 'react-scroll';
import { useRef } from "react";

const BestSales = ({data}) => {
    const el = useRef(null)

    const handleClick = () => {
        console.log(el.current)
        //get the element's position
        const rect = el.current.getBoundingClientRect();
        console.log(rect)
    }
    return (
        <div className="max-h-screen overflow-auto scrollbar-hide"
        ref={el}
        onClick={handleClick}
        >
            <div className="pb-20">
                <div className="mb-1 underline font-bold text-stone-950 text-[22px]">最熱門</div>
                
                <ul className="">
                {
                    data?.map((item, index) => {
                        const key = `${item}-${index}`
                        return (
                            <li key={index} className="flex items-center relative "

                            >
                                <TriangleRightIcon className=""/>
                                <Link className="px-3 py-1 hover:bg-slate-200 hover:rounded-full cursor-pointer" 
                                    // href={`#${key}`}  
                                    to={`${key}`} 
                                    smooth={true} 
                                    duration={500}
                                >
                                    {item}
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
            
        </div>
    )
};

export default BestSales;

