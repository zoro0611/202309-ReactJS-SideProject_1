import MenuCategory from "../MenuCategory";
import { useState } from "react";
import DetailCard from "@/components/DetailCard";
import { animated, useSpring } from "@react-spring/web";

const Menu = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const modalAnimation = useSpring({
    opacity: selectedItem ? 1 : 0,
    config: {
      duration: 300,
    },
  });

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex-1 p-3">
      {data?.map((cate, index) => {
        const keyId = `${cate.CategoryName}-${index}`;

        return (
          <MenuCategory
            key={index}
            itemId={keyId}
            category={cate.CategoryName}
            cateItems={cate.Data}
            onClick={handleItemClick}
          />
        );
      })}
      {/* 新增Modal的地方 */}
      {selectedItem && (
        <animated.div
          className="fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center"
          style={modalAnimation}
        >

          <div
            className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-slate-950/40"
            onClick={handleCloseModal} 
          />

         
          <animated.div
            className="shadow-2xl transition-all relative z-30 border border-slate-300 rounded-lg bg-white"
            style={modalAnimation}
          >
            <DetailCard item={selectedItem} />
          </animated.div>
        </animated.div>
      )}
    </div>
  );
};

export default Menu;
