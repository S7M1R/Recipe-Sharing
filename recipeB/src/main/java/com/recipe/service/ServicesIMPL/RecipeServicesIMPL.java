package com.recipe.service.ServicesIMPL;

import com.recipe.entity.Recipe;
import com.recipe.entity.User;
import com.recipe.repository.RecipeRepository;
import com.recipe.service.RecipeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeServicesIMPL implements RecipeServices {

    @Autowired
    private RecipeRepository recipeRepository;

    @Override
    public Recipe createRecipe(Recipe recipeDto, User user) {
        Recipe recipe = new Recipe();
        recipe.setTitle(recipeDto.getTitle());
        recipe.setImage(recipeDto.getImage());
        recipe.setDescription(recipeDto.getDescription());
        recipe.setUser(user);
        recipe.setCreatedAt(LocalDateTime.now());
        return recipeRepository.save(recipe);
    }

    @Override
    public Recipe findRecipe(Integer id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isPresent()){
            return recipe.get();
        }
        return null;
    }

    @Override
    public void deleteRecipe(Integer id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isPresent()){
            recipeRepository.deleteById(id);
        }
    }

    @Override
    public Recipe updateRecipe(Recipe recipe, Integer id) {
        Optional<Recipe> recipe1 = recipeRepository.findById(id);
        if (recipe1.isEmpty()){
            return recipe;
        }
        Recipe oldRecipe = recipe1.get();
        oldRecipe.setTitle(recipe.getTitle());
        oldRecipe.setImage(recipe.getImage());
        oldRecipe.setDescription(recipe.getDescription());
        recipeRepository.save(oldRecipe);
        return null;
    }

    @Override
    public List<Recipe> findAllRecipe() {
        return recipeRepository.findAll();
    }

    @Override
    public Recipe likeRecipe(Integer recipeId, User user) {
        Optional<Recipe> recipeById = recipeRepository.findById(recipeId);
        Recipe recipe = recipeById.get();
        if (recipe.getLikes().contains(user.getId())){
            recipe.getLikes().remove(user.getId());
        } else {
            recipe.getLikes().add(user.getId());
        }
        return recipeRepository.save(recipe);
    }


}
