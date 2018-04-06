function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  function renderRecipe() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var html = template(getRecipe();)
  }

  Handlebars.registerHelper('displayIngredient', function(){

  })
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
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}
