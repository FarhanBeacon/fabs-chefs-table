import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingItem from "../CookingItem/CookingItem";
import CurrentlyCooked from "../CurrentlyCooked/CurrentlyCooked";

const MainSection = () => {
  const [recipes, setRecipes] = useState([]);
  const [cookingItems, setCookItems] = useState([]);
  const [currentlyCooked, setCurrentlyCooked] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    fetch("recipeAPI.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const cookingItemHandler = (item) =>{
    const cookingCart = [...cookingItems, item];
    setCookItems(cookingCart);
  }

  const currentlyCookedHandler = (item) =>{
    const cookingCart = [...currentlyCooked, item];
    setCurrentlyCooked(cookingCart);
    const currentTime = totalTime + item.preparing_time;
    const currentCalories = totalCalories + item.calories;
    setTotalTime(currentTime);
    setTotalCalories(currentCalories);

    // Remove From Cooking Items Cart
    const newCookingCart = cookingItems.filter(cookingItem=>cookingItem.recipe_id !== item.recipe_id );

    setCookItems(newCookingCart);
  }


  return (
    <div className="w-[95%] md:w-[85%] mx-auto my-10">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-[40px]">Our Recipes</h2>
        <p className="text-[#150b2b99]">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>

      {/* Section Content */}
      <div className="space-y-8">

        <div className="bg-base-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] py-8 rounded-2xl space-y-12">

          {/* Want To Cook */}
          <div>
            <h2 className="text-2xl font-semibold text-center py-1 border-b-2">
            Want to cook: {cookingItems.length}
            </h2>
            <hr />
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr className="text-lg">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    cookingItems.map((cookingItem, idx)=><CookingItem index={idx+1} currentlyCookedHandler={currentlyCookedHandler} cookingItem={cookingItem} key={idx}></CookingItem>)
                }
                </tbody>
            </table>
            </div>
          </div>

          {/* Currently cooking */}
          <div>
            <h2 className="text-2xl font-semibold text-center py-1 border-b-2">
            Currently cooked: {currentlyCooked.length}
            </h2>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr className="text-lg">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    currentlyCooked.map((cookedItem, i)=><CurrentlyCooked index={i+1} key={i} cookedItem={cookedItem}></CurrentlyCooked>)
                }
                </tbody>
            </table>
            </div>
          </div>

          {/* Total Calculation */}
          <div className="flex justify-center gap-6 border-2 rounded-[24px] w-fit mx-auto py-2 px-4">
            <h3 className="text-xl font-semibold">Total Time = {totalTime} minutes.</h3>
            <h3 className="text-xl font-semibold">Total Calories = {totalCalories} calories.</h3>
          </div>
        </div>

        {/* Recipes */}
        <div className="grid md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <Recipe key={recipe.recipe_id} cookingItemHandler={cookingItemHandler} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
