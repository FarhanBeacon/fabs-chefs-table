import PropType from 'prop-types';

const CookingItem = ({cookingItem, index, currentlyCookedHandler}) => {
    const {recipe_name, preparing_time, calories} = cookingItem;
    return (
        <tr className="bg-base-200 text-[#878787]">
            <th>{index}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td className="text-center"><button onClick={()=>currentlyCookedHandler(cookingItem)} className="btn bg-[#0BE58A] rounded-[50px] py-[13px] px-[24px]">Preparing</button></td>
        </tr>
    );
};

CookingItem.propTypes = {
    cookingItem: PropType.object,
    index: PropType.number,
    currentlyCookedHandler: PropType.func,
}

export default CookingItem;