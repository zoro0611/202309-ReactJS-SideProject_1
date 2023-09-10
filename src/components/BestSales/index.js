import { TriangleRightIcon } from "@radix-ui/react-icons";
import { Link } from 'react-scroll';
const BestSales = ({data}) => {
    return (
        <div className="max-h-screen overflow-auto scrollbar-hide">
            <div className="pb-20">
                <div className="mb-1 underline font-bold text-stone-950 text-[22px]">最熱門</div>
                
                <ul className="">
                {
                    data?.map((item, index) => {
                        const key = `${item}-${index}`
                        console.log(key)
                        return (
                            <li key={index} className="flex items-center relative ">
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

