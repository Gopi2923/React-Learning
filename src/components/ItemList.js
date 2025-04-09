
const ItemList = ({items}) => {
    console.log(items)
    return (
        <div> {items.map((item) => (
            <div key={item.card.info.id}>
                <div>
                    <span>{item.card.info.name}</span>
                    <span>{item.card.info.defaultPrice}</span>
                </div>

                <span>{item.card.info.description}</span>
            </div>

        ))}
        </div>
    )
}

export default ItemList;