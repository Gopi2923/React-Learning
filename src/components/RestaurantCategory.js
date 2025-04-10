import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
    console.log(data)

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
      setShowItems(!showItems);
    }
    return (
        <div>
            {/* Header */}
            <div className=" items-center p-4 mt-4 shadow bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>


                {/* Accordion Body*/}
               {showItems &&  <ItemList items={data.itemCards} /> }


            </div>

        </div>
    )
}

export default RestaurantCategory;