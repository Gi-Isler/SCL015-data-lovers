

export const filterTypes= (pokemons,type)=>{
let pokemonFilter=[]
    for (let index=0;index<pokemons.length;index++){
        let types= pokemons[index].type;
        if (types.includes(type)){
          pokemonFilter.push(pokemons[index]) 
        }
    }
  return pokemonFilter;  
  };
 
  export const aZorder = (dev, next) => {
    if (dev.name < next.name){
      return -1;
    }
    if (dev.name > next.name){
      return 1;
    }
    return 0;
  }
  
// export const ordenIn= (pokemons)=>{
//   pokemons.sort((dev,next)=>{
//     if (dev.name < next.name){
//           return -1;
//         }
//         if (dev.name > next.name){
//           return 1;
//         }
//         return 0;
//   }

/*export const orderPokemons= (pokemons,name) => {
  let pokemonOrderAZ=[]
  // let pokemonOrderZA=[]
      for (let index=0;index<pokemons.length;index++){
        let order=pokemons[index].name;
        if (order.sort =="A-Z"){
          pokemonOrderAZ.includes(name);
          pokemonOrderAZ.push(pokemons[index])
          
        
        }
        return pokemonOrderAZ;
    
      }  
  }*/
