
const Advertisement = () => {
    return (
        //給我一個div，可以填滿整個width，但是高度只有100px，裡面要有張圖片
        <div className="w-full h-[200px]">
            <img className="w-full h-full object-cover" src="https://moderneat.vercel.app/items/banner.jpeg"/>
        </div>
    )
}

export default Advertisement