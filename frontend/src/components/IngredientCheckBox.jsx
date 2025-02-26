export default function IngredientCheckBox({ingredient}){
    return(
        <div className="checkbox">
            <input type="checkbox" name="ingrident" id="custom-check" />
            <label htmlFor="ingrident">{ingredient}</label>
        </div>
    )
}