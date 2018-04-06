function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name ="ingredientsList">' + ingredient + '</li>');
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = getRecipe()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipe() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

function displayEditForm(){
  var name = document.getElementById('nameHeader').innerText;
  var description = document.getElementById('recipeDescription').innerText;
  var ingredientsNodes = document.getElementsByName("ingredientsList");
  var ingredients = [];
  for (let i=0; i<ingredientsNodes.length; i++){
      ingredients.push(ingredientsNodes[i].innerText)
    }

    let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

    let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
    let template = Handlebars.compile(recipeFormTemplate)

    document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe(){

}
