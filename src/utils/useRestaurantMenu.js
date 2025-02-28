import { useEffect, useState } from "react";
import { Menu_API } from "./constants";


const useRestaurantMenu = (resId) => {

    const [resInfo, setrResInfo] = useState(null);

    useEffect(() => {
       fetchData()
    }, [])

    const fetchData = async () => {
       const data = await fetch(Menu_API + resId)
       const json = await data.json()
       setrResInfo(json.data)
    }



    return resInfo;
}

export default useRestaurantMenu;
