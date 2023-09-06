//import很多Icon from "@radix-ui/react-icons";
import ChildCom from "./TrySingleChild";

import { DotFilledIcon, SketchLogoIcon, PlusIcon  } from "@radix-ui/react-icons";

const TryChildren = ()=>{
    return (
        <div className="bg-slate-300">
            <ChildCom>
                <DotFilledIcon/>
                <SketchLogoIcon/>
            </ChildCom>
        </div>
    )
}

export default TryChildren