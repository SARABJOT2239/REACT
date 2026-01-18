import { useEffect } from "react";

const RestaurantMenu = () => {

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
      try{
         const data = await fetch(
            "https://corsproxy.io/" +
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.6676888&lng=76.7858452&restaurantId=1002256&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        console.log(json);
      }
      catch(err){
        console.error("Fetch failed:", err);

      }
    }; 
     


  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu;
