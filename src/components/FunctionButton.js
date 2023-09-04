import { PlusIcon } from "@radix-ui/react-icons";

const FunctionButton = ({ funcName, iconName }) => {
  return (
    <div className="bg-slate-100 text-gray-850 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:bg-slate-200 transition-opacity flex items-center gap-1">
      {iconName === "PlusIcon" && <PlusIcon />}
      <button className="text-[16px]">{funcName}</button>
    </div>
  );
};

export default FunctionButton;
