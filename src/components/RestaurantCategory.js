import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    console.log(data)
    return (
        <div>
            {/* Header */}
            <div className=" items-center p-4 mt-4 shadow bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-between">
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>


                {/* Accordion Body*/}
                <ItemList items={data.itemCards} />


            </div>

        </div>
    )
}

export default RestaurantCategory;