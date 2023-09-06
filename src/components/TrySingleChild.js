import React from 'react';
const Child = ({children})=>{
    return (
        <div className='flex items-center'>
            <div>練習Children用法</div>
            {
                children.map((icon,index)=>{
                    return (
                        <div key={index}>
                            {React.cloneElement(icon, { className: 'w-[30px] h-[30px]' })}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Child