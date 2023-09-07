import { TriangleRightIcon } from "@radix-ui/react-icons";
import breakfastItems from "@/datas/breakfastItems";

const BestSales = () => {
    return (
        <div className="max-h-screen overflow-auto scrollbar-hide">
            <div className="pb-20">
                <div className="mb-1 underline font-bold text-stone-950 text-[22px]">最熱門</div>
                
                <ul className="">
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
            
        </div>
    )
};

export default BestSales;

