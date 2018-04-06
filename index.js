function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipe = getRecipe()
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipe() {
  let ingredientsNodes = document.getElementsByName("ingredients")
  let ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let recipe = {name, ingredients, description}
  return(recipe)
}

function displayEditForm(){
  let name = document.getElementById('nameHeader').innerText;
  let description = document.getElementById('recipeDescription').innerText;
  let ingredientsNodes = document.getElementsByName("ingredientsList");
  let ingredients = [];
  for (let i=0; i<ingredientsNodes.length; i++){
    ingredients.push(ingredientsNodes[i].innerText)
  }
  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)

  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe(){
  let recipe = getRecipe();
  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}
