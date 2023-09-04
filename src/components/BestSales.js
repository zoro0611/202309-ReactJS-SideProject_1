import { TriangleRightIcon } from "@radix-ui/react-icons";
import breakfastItems from "@/datas/breakfastItems";

const BestSales = () => {
    return (
        <div className="w-[30%] px-8 pt-3 ml-2">
            <h3 className="text-[20px] font-bold relative left-4  underline">最熱門</h3>
            
            <ul className="ml-3">
            {
                breakfastItems.map((item, index) => {
                    return (
                        <li key={index} className="flex items-center relative ">
                            <TriangleRightIcon className=""/>
                            <a className="px-3 py-1 hover:bg-slate-200 hover:rounded-full" href="#">{item}</a>
                        </li>
                    )
                })
            }
            </ul>
            
        </div>
    )
};

export default BestSales;