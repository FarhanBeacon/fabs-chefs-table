import PropType from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";

const Recipe = ({recipe, cookingItemHandler}) => {
  const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
  
  return (
    <div>
      <div className="card bg-base-100 h-full drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
        <figure className="px-6 pt-6">
          <img
            src={recipe_image}
            alt={recipe_name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <div className='border-b-2 py-4'>
            <h2 className="card-title">{recipe_name}</h2>
            <p className='text-[#878787]'>{short_description}</p>
          </div>
          <div className='h-full border-b-2'>
            <h3 className='text-lg font-semibold'>Ingredients: {ingredients.length}</h3>
            <ul className='list-disc text-[#878787] ps-[10%] py-4'>
              {
                ingredients.map((ingredient, idx)=><li key={idx}>{ingredient}</li>)
              }
            </ul>
          </div>
          <div className='flex text-[#282828cc] py-4'>
            <p className='flex items-center gap-1'><IoMdTime /> {preparing_time} minutes</p>
            <p className='flex items-center gap-1'><FaFireAlt /> {calories} calories</p>
          </div>
          <div className="card-actions">
            <button onClick={()=>cookingItemHandler(recipe)} className="btn bg-[#0BE58A] rounded-[50px] py-[13px] px-[24px]">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
    recipe: PropType.object,
    cookingItemHandler: PropType.func,
}

export default Recipe;
