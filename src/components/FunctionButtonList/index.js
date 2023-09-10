import FunctionButton from '../FunctionButton'

const functionList = [
    { funcName: '查看類似商品', iconName: '' },
    { funcName: '團購訂單', iconName: 'PlusIcon'}
]

const ButtonList = () => {
    return (
        <ul className='px-12 flex gap-4'>
        {
            functionList.map((obj, index) => {
                return(
                    <li className="mx-2" key={index}>
                        <FunctionButton 
                            funcName={obj.funcName} iconName={obj.iconName} 
                        />
                    </li>
                )
            })
        }
        </ul>
    )
}

export default ButtonList