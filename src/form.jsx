import React from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromMistral } from "./ai"

function Form() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const recipeSection = React.useRef(null)

    function chefClaudeForm(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    React.useEffect(() => {
        recipeShown !== "" && recipeSection.current !== null ? recipeSection.current.scrollIntoView({behavior : "smooth"}) : undefined
    }, [recipeShown])

    async function fetchRecipe() {
        setLoading(true)
        const result = await getRecipeFromMistral(ingredients)
        setRecipeShown(result)
        setLoading(false)
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
                ref={recipeSection}
                ingredients={ingredients} 
                recipeShown={fetchRecipe}
                loading={loading}
            />}
            {recipeShown && <ClaudeRecipe htmlContent={recipeShown} />}
        </main>
    )
}

export default Form