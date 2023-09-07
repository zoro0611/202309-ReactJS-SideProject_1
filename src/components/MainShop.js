import BestSales from "./BestSales";
import Menu from "./Menu";
const MainShop = () => {
    return (
        // <div className="flex w-full mt-5 relative">
        <div className="flex items-start relative min-h-screen px-14 pt-8">

            <div className="w-[320px] pr-5 sticky top-0 left-0">
                <BestSales/>
            </div>

            <div className="flex-1">
                <Menu/>
            </div>
        </div>
    )
}

export default MainShop