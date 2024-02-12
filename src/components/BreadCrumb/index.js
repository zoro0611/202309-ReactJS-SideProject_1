import {ChevronRightIcon} from '@radix-ui/react-icons'

const BreadCrumb = () => {
    const breadArray = ['台灣', '台北市', '台北', '中正區','寵物可愛小屋'];
    return (
        <div className="w-max text-left">
            <nav aria-label="breadcrumb">
                <ol className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
                    {
                        breadArray.map((item, index) => {
                            return(
                                <li key={index} className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 ">
                                    {
                                        index !== breadArray.length - 1 ? (
                                            <a className="text-gray-400 hover:text-pink-500" href="#">
                                                <span className="text-[16px]">{item}</span>
                                            </a>
                                        ) :
                                        <a className="text-black  hover:text-pink-500" href="#">
                                                <span className="text-[16px] font-bold">{item}</span>
                                        </a>
                                    }
                                    {
                                        index !== breadArray.length - 1 && (
                                            <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                                                <ChevronRightIcon/>
                                            </span>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ol>
            </nav>
        </div>
    )
};

export default BreadCrumb;