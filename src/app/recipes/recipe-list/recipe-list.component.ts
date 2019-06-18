import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test Wrong recipe",
      "Desc",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      []
    ),
    new Recipe(
      "A test Wrong recipe",
      "Desc2",
      "https://pixnio.com/free-images/2017/05/23/2017-05-23-17-26-29-900x428.jpg",
      []
    )
  ];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
