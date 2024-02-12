import { TrashIcon, PlusIcon } from "@radix-ui/react-icons";

const DetailCard = (item) => {
	if (!item) return null;
    const itemData = item?.item;
	return (
		<div className="flex w-[600px]">
			<div
				className="w-1/2 min-h-[400px] bg-slate-300 bg-cover bg-center"
				style={{ backgroundImage: `url(${itemData.image})` }}
			/>
			<div className="flex-1 px-6 py-8">
				<div className="mb-5">
					<h1 className="text-3xl font-bold">{itemData.title}</h1>
					<p className="text-xl text-slate-900 mt-2">{`${itemData.price}`}</p>
					<ul className="text-sm mt-4 list-disc ml-4 text-slate-500">
						<li>麵粉</li>
						<li>牛奶</li>
						<li>雞蛋</li>
					</ul>
				</div>
 
				<div
					className="text-white inline-flex
items-center rounded-full transition-all
bg-black hover:opacity-75 justify-between px-4 py-2"
				>
					<TrashIcon data-testid="remove-btn" className="cursor-pointer" />
					<div className="text-sm px-4" data-testid="count">
						0
					</div>
					<PlusIcon data-testid="add-btn" className="cursor-pointer" />
				</div>
			</div>
		</div>
	);
};




export default DetailCard;