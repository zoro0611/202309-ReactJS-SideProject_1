import shopInfo from "@/datas/shopInfo"
import { DotFilledIcon, SketchLogoIcon, PlusIcon } from "@radix-ui/react-icons"

const shopRatings = [...shopInfo.Ratings]
const shopAvgRating = (shopRatings.reduce((a, b) => a + b) / shopRatings.length).toFixed(1)
const shopMealOptions = [...shopInfo.MealOptions]
const shopMealOptionsString = shopMealOptions.join('和')

const ShopInfo = () => {
    
    return (
        <div className="px-12 mt-7 mb-4">
            <h1 className="text-[40px] font-bold">
                {shopInfo.ShopName} {shopInfo.Branch}
            </h1>
            <p className="leading-loose text-gray-400 flex items-center mt-2">
                {shopAvgRating} {`${shopRatings.length}評分`}
                <DotFilledIcon className="inline"/>
                {shopMealOptionsString}
                <DotFilledIcon className="inline"/>
                <SketchLogoIcon className="inline"/>
                詳細資訊
            </p>
            <p className="leading-loose text-gray-400 flex items-center">
                {shopInfo.DelieverTime}
                <DotFilledIcon className="inline"/>
                {shopInfo.DelieverFee}運費
            </p>
            <p className="leading-loose text-gray-400">在上方輸入地址，即可查看外送及自取預估時間。</p>
        </div>
    )
}

export default ShopInfo