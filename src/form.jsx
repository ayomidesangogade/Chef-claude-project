import React from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

function Form() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    function chefClaudeForm(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }
    function isRecipeShown() {
        setRecipeShown(prev => !prev)
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
            {ingredients.length > 0 && <IngredientsList 
                ingredients={ingredients} 
                recipeShown={isRecipeShown}
            />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}

export default Form