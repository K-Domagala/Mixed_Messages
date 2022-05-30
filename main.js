//List of breakfasts
const breakfasts = [
    "cereal; simply just put cereal in a bowl and add milk, yum.",
    "toast; two slices of break in a toaster, put some butter on it and maybe a cheeky slice of ham.",
    "toasties; very unhealthy but gets the job done, quick and easy.",
    "some of last nights dinner; I know you don't want it, but someone has to eat it."
]

//List of dinners
const dinners = [
    "nandos chicken; easy to make, takes somew time but worth it.",
    "carbonara; you know you make the best ones, it will always taste good.",
    "burgers; who doesn't love a burger.",
    "salad; maybe you should have some healthy food once in a while.",
    "takeaway; expensive but it's the easiest and quickest option, requires no effort.",
    "salmon; chuck some pasta in there, make a nice sauce, healthy and always tastes good.",
    "pasta bake; because you ran out of ideas."
]

//List of deserts
const deserts = [
    "doughnut; you still have some left over.",
    "takeaway; treat yourself, because you have had a hard day.",
    "pancakes; the ingredients are always there."
]

//Randomly chooses and element from a given array
function chooseRand(array){
    let randIndex = Math.floor(Math.random()*array.length);
    return array[randIndex];
}

//Used to display a randomly generated message
function displayMessage(){
    //Assign a random meal to each variable
    let breakfast = chooseRand(breakfasts);
    let dinner = chooseRand(dinners);
    let desert = chooseRand(deserts);

    //Output messages using the randomlyu selected meals
    console.log(`Today for breakfast you should have ${breakfast}`);
    console.log(`And because you want to actually eat more, you should also have some dinner: ${dinner}`);
    console.log(`Because you deserve it, for deser you should have ${desert}`);
}

displayMessage();