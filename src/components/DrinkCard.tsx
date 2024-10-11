import { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

  return (
    <div className="shadow-lg rounded-xl bg-slate-200">
        <div className="overflow-hidden rounded-xl">
            <img 
                src={drink.strDrinkThumb} 
                alt={drink.strDrink} 
                className="hover:scale-125 transition-transform hover:rotate-2"
            />
        </div>
        <div className="p-5 ">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button
                type="button"
                className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg rounded-lg"
                onClick={() => selectRecipe(drink.idDrink)}
            > Ver Receta
            </button>
        </div> 
    </div>
  )
}
