package com.recipe.service;
import com.recipe.entity.Recipe;
import com.recipe.entity.User;

import java.util.List;
import java.util.Optional;

public interface RecipeServices {
    public Recipe createRecipe(Recipe recipe, User user);
    public Recipe findRecipe(Integer id);
    public void deleteRecipe(Integer id);
    public Recipe updateRecipe(Recipe recipe, Integer id);
    public List<Recipe> findAllRecipe();
    public Recipe likeRecipe(Integer recipeId, User user);
}
