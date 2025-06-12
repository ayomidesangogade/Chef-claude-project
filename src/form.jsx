import React from "react"

function Form() {
    const [ingredients, setIngredients] = React.useState([])
    const ingredientListItems = ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)

    function chefClaudeForm(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }
    return (
        <main>
            <form className="add-ingredient-form" action={chefClaudeForm}>
                <input
                    aria-label="Add ingredient"
                    type="text"
                    placeholder="e.g oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
                {ingredients.length > 3 ? <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div> : null}
            </section>}
        </main>
    )
}

export default Form