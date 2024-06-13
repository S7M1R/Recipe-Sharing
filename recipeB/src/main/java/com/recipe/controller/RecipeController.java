package com.recipe.controller;

import com.recipe.entity.Recipe;
import com.recipe.entity.User;
import com.recipe.service.RecipeServices;
import com.recipe.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/app.chat.api/recipe")
public class RecipeController {
    @Autowired
    private RecipeServices recipeServices;

    @Autowired
    private UserServices userServices;

    @PostMapping("/new/{userId}")
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe, @PathVariable Long userId){
        User user = userServices.findByUserId(userId);
        Recipe newRecipe = recipeServices.createRecipe(recipe, user);
        return new ResponseEntity<>(newRecipe, HttpStatus.CREATED );
    }

    @GetMapping("/find/{recipeId}")
    public ResponseEntity<Recipe> findRecipeById(@PathVariable Integer recipeId){
        Recipe recipe = recipeServices.findRecipe(recipeId);
        if (recipe==null){
            return new ResponseEntity<>(recipe, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(recipe, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Recipe>> getAllRecipe(){
        List<Recipe> allRecipe = recipeServices.findAllRecipe();
        return new ResponseEntity<>(allRecipe, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{recipeId}")
    public ResponseEntity<String> deleteRecipeById(@PathVariable Integer recipeId){
        recipeServices.deleteRecipe(recipeId);
        return new ResponseEntity<>("recipe Deleted", HttpStatus.OK);
    }

    @PutMapping("/update/{recipeId}")
    public ResponseEntity<Recipe> updateRecipeById(@PathVariable Integer recipeId, @RequestBody Recipe recipe){
        Recipe updatedRecipe = recipeServices.updateRecipe(recipe, recipeId);
        return new ResponseEntity<>(updatedRecipe, HttpStatus.OK);
    }

    @PutMapping("/like/{recipeId}/{userId}")
    public ResponseEntity<Recipe> likeRecipe(@PathVariable Integer recipeId, @PathVariable Long userId){
        User user = userServices.findByUserId(userId);
        Recipe likeRecipe = recipeServices.likeRecipe(recipeId, user);
        return new ResponseEntity<>(likeRecipe, HttpStatus.OK);
    }
}
