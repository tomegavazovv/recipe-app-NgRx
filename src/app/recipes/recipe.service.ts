import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_Iq4Fo80aWVyK3BA_dxwDYyoiVmZHf4DHg&usqp=CAU'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_Iq4Fo80aWVyK3BA_dxwDYyoiVmZHf4DHg&usqp=CAU'
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
