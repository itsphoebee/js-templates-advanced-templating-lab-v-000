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
  var recipe = getRecipe()
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
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
  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)

  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe(){

}
