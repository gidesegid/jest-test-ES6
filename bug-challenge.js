export default class BugChallenge {
  //Do NOT change the top10Movies and top10Actors variables to fix your tests
  //believe me: the problem is in bug() functions, not in these arrays ;)
  top10Movies = [
    'AI',
    'Shawshank Redemption',
    'Godfather',
    'Pulp Fiction',
    'Fight club',
    'Forrest Gump',
    'Inception',
    'Goodfellas',
    'The Matrix',
    'Interstellar'
  ]
  top10Actors = [
    'Marlon Brando',
    'Jack Nickolson',
    'Robert De Niro',
    'Al Pacino',
    'Daniel Day-Lewis',
    'Duston Hoffman',
    'Tom Hanks',
    'Anthony Hopkins',
    'Paul Newman',
    'Denzel Washington'

  ]
  //------
  // Bugs
// i fixed this by changing people[person].name 
    bug1() {
      const people = [{
        name: 'Alice',
        age: 25
      }, {
        name: 'Bob',
        age: 27
      }, {
        name: 'Charlie',
        age: 40
      }];

      for (let person in people) {
        console.log(`${people[person].name} is ${people[person].age}`);
      }
    }

  //bug2  i fixed this by using calling twice for the array.pop(),;
    bug2() {
      const array = [1, 2, 3, 4];
      
      for (let i = 0; i < array.length; i++) {
        
         console.log(array.pop());
         console.log(array.pop());
      }
    }

   //bug3 i tried to fix by renaming the obj to array and then the total+=parseInt(key) and then it
//works.
    bug3() {
      const array = {};
      array[0] = 'a';
      array[1] = 'b';
      array[2] = 'c';

      let total = 0;
      for (let key in array) {
        total += parseInt(key);
      }

      console.log(total);
    }

   //bug4 
   //i simpley add the this keyword to the top10Actors.length, which is confidently can analyse the which top10actors
  //are they. 
    bug4() {
      // We list all movies, except the top 3.
      var index = 3;
      for (index; index < this.top10Movies.length; index++) {
        console.log(`movie: ${this.top10Movies[index]}`);
      }

      // We also list all actors, except the top 3.
      var index2=3
      for (index2; index2 < this.top10Actors.length; index2++) {
        console.log(`actor: ${this.top10Actors[index2]}`);
      }
    }

/*bug 5
by default the defaultUseCaching should be false if it is going to be optional.
then if the thing happens then it would be changed to true 
if it would have been not optional yes it would be true
thats why i changed it to false then it works for me.
there is a reason also that fetch() is anonymous function and it will be invoke itself.and then
 when it is invoked seCaching is changed to false but at the top we say that useCaching is equal to
  one of the useCaching or defaultUseCaching.
  */ 
    bug5() {
      const defaultMethod = 'GET';
      const defaultUseCaching = false;

      function fetch(options) {
        const url = options.url;
        const method = options.method || defaultMethod;
        const useCaching = options.useCaching || defaultUseCaching;

        console.log(`fetch: ${method} ${url} (useCaching=${useCaching})`);
      }

      fetch({
        url: 'http://www.example.com',
        useCaching: false
      });
    }

   //bug6 since the output was saying script of undefinde i try to diclar the options as an empty object.
    bug6() {
      function run(options) {
        options={}
        if (options.script == undefined) {
          options.script = 'main.js';
        }

        console.log(`run: script=${options.script}`);
      }

      run();
    }

    //bug7  just adding === this indicates the options.stopOnError should be equal to undefined by type and value
   bug7() {
      function run(options = {}) {
        if (options.stopOnError === undefined) {
          options.stopOnError = 'all';
        }

        console.log(`run: stopOnError=${options.stopOnError}`);
      }

      run();
      run({stopOnError: null});
    }


   /*bug8
 i tried to separate the anonymous function setTimeout from the for loop and then call it again in a forloop 
but arises again different problems which is the separation of this function from inside forloop makes some disturbance in
whole file and then finally i tried to keep the anonymous function inside a regular function with a name of gide
 with a parameter inside it which will be passed to the anonymouse function as well .
 then i call it inside the forlooop and so it works for me .so for every loop the function will be invoked.*/
    bug8() {
      for (var i = 0; i < 5; i++) {
              gide(i);
       
      }
      function gide(i){
         setTimeout(function () {
          console.log(i+1);
        }, 100*i);
      }
    }

   //bug 9 
   // I tried this by three equall at the car.make===make as we use this kind of equallity syntax for 
//type and value are equall
 bug9() {
      const cars = [{
        make: 'Volvo',
        type: 'S90'
      }, {
        make: 'BMW',
        type: 'i8'
      }, {
        make: 'BMW',
        type: 'M3'
      }, {
        make: 'Audi',
        type: 'A6'
      }];

      function findCars(make) {
        return cars.filter(car => car.make === make);
      }

      for (let bmw of findCars('BMW')) {
        console.log(`${bmw.make} ${bmw.type}`);
      }
    }

  //bug 10
  // i tried to solve this problem by inserting a break; expression under each cases
    bug10() {
      const command = 'printHelp';

      switch (command) {
        case 'printMath':
          console.log(`√9=${Math.sqrt(9)}`);
          break;
        case 'printHelp':
          console.log('Help');
          break;
        case 'quit':
          console.log('Quitting');
          break;
      }
    }

   //bug11.
   // i only changed the structure and syntax of this bug11 to es6 syntax standard of javascript.so i changed the 
   //foreach(function()) to arrow function. and it works also.
    bug11() {
      class Game {
        constructor() {
          this.players = [];
        }

        addPlayers(names) {
          names.forEach((name)=> {
            this.players.push({name, points: 0});
          });
        }
      }

      const game = new Game();
      game.addPlayers(['Alice', 'Bob']);

      for (let player of game.players) {
        console.log(`Player ${player.name} has ${player.points} points`);
      }
    }

/*bug 12
i tried this by changing the declaration of y=7 to let y1=7, and it works hahaha.
coz let y=5 is declared as a global variable so the function checks if there is global variable if it finds in a global variable
then the global variable will have greater priority than others inside functions with the same variable declaration.
and thats why inorder to differentiat b/n the two variable declaration i assigned y1=7 to the inside function variable. and it works for me.*/
    bug12() {
      let y = 5;

      function printVector() {
        let x = 6;
            let y1 = 7;

        console.log(`Printing vector at (${x}, ${y1})`);
      }

      printVector();
      console.log(`y=${y}`);
    }

//bug 13
//i simply add the if statment .so if the return is true which is 1
// will return true otherwise will return -1 which is false. and it works also.
    bug13() {
      var notInTop10 =(movieName)=>{
        //this.top10Movies.indexOf(movieName);
        if(movieName){
         return this.top10Movies.indexOf(movieName)===-1;
        }else{
           return this.top10Movies.indexOf(movieName)===1;
        }
      }
      
      console.log('Independence Day is ' + (notInTop10('Independence Day')?'not ':'') + 'in the top 10!');
      console.log('AI is ' + (notInTop10('AI')?'not ':'') + 'in the top 10!');
      console.log('Godfather is ' + (notInTop10('Godfather')?'not ':'') + 'in the top 10!');
      console.log('Inception is ' + (notInTop10('Inception')?'not ':'') + 'in the top 10!');
    }
   //bug14
    //i assigned the returned value is qual to the parameter of the function.
    bug14() {
       var isInFirstPlace =(movieName)=>{
          return this.top10Movies[0] === movieName
      }
     // isInFirstPlace();
      console.log('AI is ' + (isInFirstPlace('AI')?'':'not ') + 'best movie ever')
      console.log('Godfather is ' + (isInFirstPlace('Godfather')?'':'not ') + 'best movie ever')
     
    }
   /*bug15
    i changed the function to arraw function coz the console.log output is es6 standard syntax. so i supposed to
   be the whole structure of the function should meet the requirments of the es6 syntax requirments.or either i should
   have to change the console.log line code to es5 standard.*/
    bug15() {
      var getAlphabeticalFirst =()=> {
        return this.top10Actors.sort()[0]
      }

      console.log(`The first actor when sorted alphabetically is ${getAlphabeticalFirst()}`)
    }
    //bug16  '1' is a string datatype then i changed it to number by removing the string like this 1. and it works. 
    bug16() {
      const ranking = this.top10Actors.indexOf('Al Pacino');
      // var thirdRankedActor = this.top10Actors['2'];
      console.log(`Al Pacino is ranked ${ranking + 1}`)
    }

}
