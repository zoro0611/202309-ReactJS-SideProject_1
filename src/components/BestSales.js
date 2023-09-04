import { TriangleRightIcon } from "@radix-ui/react-icons";
const breakfastItems = [
    "經典鬆餅",
    "班尼迪克蛋",
    "酪梨吐司",
    "法式吐司",
    "芝士煎蛋餅",
    "培根煎蛋",
    "煙燻三文魚貝果",
    "希臘優格芭菲",
    "純素早餐捲",
    "肉桂捲",
    "水果沙拉",
    "早餐墨西哥煎餅",
    "藍莓鬆餅",
    "早餐牛角包",
    "草莓鬆餅",
    "花生醬冰沙碗",
    "香腸早餐捲",
    "燕麥片和牛奶",
    "早餐捲",
    "炸薯餅",
    "蛋白炒蛋",
    "蔬菜煎蛋餅",
    "比利時鬆餅",
    "辣味肉煎餅捲",
    "榛果巧克力薄餅",
    "巴西莓碗",
    "英式早餐",
    "菠菜芝士餡餅",
    "香蕉鬆餅",
    "早餐玉米餅",
];

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
                            <a className="px-3 py-1 hover:bg-slate-300 hover:rounded-full" href="#">{item}</a>
                        </li>
                    )
                })
            }
            </ul>
            
        </div>
    )
};

export default BestSales;