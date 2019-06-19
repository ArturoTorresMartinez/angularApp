import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Burger",
      "Ton o Shit",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [new Ingredient("Meat", 1), new Ingredient("Fries", 20)]
    ),
    new Recipe(
      "Spaghetto",
      "Moe Shit",
      "https://pixnio.com/free-images/2017/05/23/2017-05-23-17-26-29-900x428.jpg",
      [new Ingredient("Pasta", 1), new Ingredient("Cheese", 20)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
