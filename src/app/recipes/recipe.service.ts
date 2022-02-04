import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
            'This is a test description', 
            'https://www.thespruceeats.com/thmb/yK8psUDvXdEKOvzFtLtx-n4ETuQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg',
            [
                new Ingredient('Pork Meat', 5),
                new Ingredient('Potatoes', 3),
            ]),
        new Recipe('Hipon Sinigang', 
            'Sinigang sa Sampalok na Hipon', 
            'https://salu-salo.com/wp-content/uploads/2012/08/Sinigang-Hipon.jpg',
            [
                new Ingredient('Shrimp', 5),
                new Ingredient('Sampalok', 3),
            ])
      ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}