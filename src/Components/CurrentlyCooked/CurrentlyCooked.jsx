import PropType from 'prop-types';

const CurrentlyCooked = ({cookedItem, index}) => {
    const {recipe_name, preparing_time, calories} = cookedItem;
    return (
        <tr className="bg-base-200 text-[#878787]">
            <th>{index}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </tr>
    );
};

CurrentlyCooked.propTypes ={
    cookedItem: PropType.object,
    index: PropType.number,
}

export default CurrentlyCooked;