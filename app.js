class Pokemon{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    describe(){
        return `${this.name} is a ${this.type} type pokemon.`;
    }
}


// Starter Pokemon
let pokemonOne = new Pokemon('squirtle', 'water');
let pokemonTwo = new Pokemon('charmander', 'fire');
let pokemonThree = new Pokemon('bulbasaur', 'grass');
let pokemonFour = new Pokemon('pikachu', 'electric');


//Starter Pokemon array
let pokemonList = [pokemonOne, pokemonTwo, pokemonThree, pokemonFour];
// console.log(pokemonList);







class Trainer{
    constructor(name){
        this.name = name;
        this.partner = null;
    }

    
    addPokemon(pokemon){
        if(pokemon instanceof Pokemon){

            return this.partner = pokemon;
        }
    }

    deletePokemon(){
        // return this.partner = null;
        return this.partner = null;

    }
}





//New Pokemon Trainer Created
let trainerNew = new Trainer('Ash');


//Trainer choose a pokemon for journey
trainerNew.addPokemon(pokemonOne);
// console.log(trainerNew);



//Trainer gave up pokemon
trainerNew.deletePokemon(pokemonOne);
// console.log(trainerNew);


//Trainer choose a new pokemon
trainerNew.addPokemon(pokemonFour);
// console.log(trainerNew);













//This function will start the Menu

const startJourneyMenu = function(){


    let selection = 0;
    while(selection <= 4 && !0){
    
        //Add your pokemon so you can start your journey
        let choose = prompt(`Welcome Trainer, choose your pokemon from this list below so you can start your journey.
        ------------------------------------------------------------------------ 
        1) ${pokemonOne.name}
        2) ${pokemonTwo.name}
        3) ${pokemonThree.name}
        4) ${pokemonFour.name}
        Write which pokemon you want in lowercase letters.  `);
        // alert(`you choose ${choose}`);
    
    
        if(choose == 'squirtle' && ('squirtle' == pokemonOne.name)){

            // console.log(true);
            selection = 1;

            trainerNew.addPokemon(pokemonOne);

            console.log(trainerNew);
        
            alert(`You chose squirtle, a(n) ${pokemonOne.type} type.`);
            break;



        } else if(choose == 'charmander' &&('charmander' == pokemonTwo.name)){

        
            selection = 2;

            trainerNew.addPokemon(pokemonTwo);
        
            console.log(trainerNew);
        
            alert(`You chose charmander, a(n) ${pokemonTwo.type} type.`);
            break;


        } else if(choose == 'bulbasaur' && ('bulbasaur' == pokemonThree.name)){


            selection = 3;

            trainerNew.addPokemon(pokemonThree);

            console.log(trainerNew);

            alert(`You chose bulbasaur, a(n) ${pokemonThree.type} type.`);
            break;


        } else if(choose == 'pikachu' && ('pikachu' == pokemonFour.name)){

            selection = 4;

            trainerNew.addPokemon(pokemonFour);

            console.log(trainerNew);

            alert(`You chose pikachu, a(n) ${pokemonFour.type} type.`);
            break;


        } else{


            // console.log(false)
            selection = 0;
            alert('You did not choose an available pokemon. Try again!')

        }
    
    }


}





startJourneyMenu();




// //Do you want to delete your pokemon?
let keep = prompt('Are you sure you want to keep you this pokemon? Write: "yes" to start your adventure or "no" to give up your pokemon. (Without quotes)');


if(keep == `no`){
    alert(`Farewell Buddy`);
    alert(`Choose another Pokemon`);
    trainerNew.deletePokemon()
    startJourneyMenu();
} else if(keep == 'yes'){
    alert('Lets start our journey. I want to become a pokemon master!')
}



































































































































