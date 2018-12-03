/*
exempel recept:
{
    title: 'Mormors pannkakor',
    ingredients: 'Mjölk, mjöl, smör'
}

recipes = [{},{},{}]
*/



window.onload = function () {
    updateView();
    document.getElementById('newRecipe').addEventListener('click', function () {
        let recipes = loadRecipes();

        recipes.push(newRecipe(getAvailID(recipes)));
        /*  1. första som händer är att getAvailID behöver argumentet recipes.
            2. newRecipe körs med resultatet från getAvailID, t.ex 2
            3. recipe.push({id:3, title: 'balbla', ingredients: 'sdasdas'})

            */
        console.log(recipes);
        saveRecipes(recipes);
        updateView();
    })
    document.getElementById('nukeRecipes').addEventListener('click', function () {
        nukeRecipes();
        updateView();
    })
}
function loadRecipes () {
    return JSON.parse(localStorage.getItem('recipes') ? localStorage.getItem('recipes') : '[]');
}

function saveRecipes (rec) {
    localStorage.setItem('recipes', JSON.stringify(rec));;
}

function deleteRecipe (id) {
    let recipes = loadRecipes();
    let newRecipes = recipes.filter(r => (r.id != id));
    saveRecipes(newRecipes);
    updateView();

}
// function getAvailID (rec) {
//     return (rec.length > 0) ? (Math.max(...rec.map(r => r.id), 0) + 1) : 0; 
//     // if (rec.length > 0) {
//     //     return (Math.max(...rec.map(r => r.id), 0) + 1);
//     // } else {
//     //     return 0;
//     // }
// }

const getAvailID = (rec) => (rec.length > 0) ? (Math.max(...rec.map(r => r.id), 0) + 1) : 0; 

function nukeRecipes () {
    localStorage.setItem('recipes', JSON.stringify([]));
}
function updateView () {
    let recipes = loadRecipes();
    document.getElementById("recipes").innerHTML='<h1>Stored recipes</h1>';
    recipes.forEach((r) => {
        let newDiv = document.createElement("div"); 
        let currentSection = document.getElementById("recipes");
        //currentSection.appendChild(newDiv);
        let newP = document.createElement("p");
        let newTitle = document.createTextNode(r.title);
        let newIng = document.createTextNode(r.ingredients);
        let newButton = document.createElement("button");
        let newButtonText = document.createTextNode('Delete me!');
        newButton.setAttribute('onclick','deleteRecipe(' + r.id + ');');
        newDiv.setAttribute('data-id', r.id);
        newButton.appendChild(newButtonText);
        newP.appendChild(newTitle);
        newDiv.appendChild(newP);
        newDiv.appendChild(newIng);
        newDiv.appendChild(newButton);
        
        currentSection.appendChild(newDiv);

    })
}

function newRecipe (id) {
    // {id: 0, title: "pannkakor", ingredients: "Mjöl etc"}
    var ipsum = new LoremIpsum();
    
    let newRecipe = {};
    newRecipe.title = ipsum.sentence(1) + id;
    newRecipe.ingredients = ipsum.sentence(12);
    newRecipe.id = id;
    return newRecipe;
}