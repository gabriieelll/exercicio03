
const hobbies = ['jogar', 'tocar guitarra', 'desenhar'];


console.log(hobbies);


console.log(hobbies[0]); 
console.log(hobbies[1]); 
console.log(hobbies[2]); 


hobbies[0] = 'ler livros'; 
console.log(hobbies); 


console.log(hobbies.length); 

hobbies.push('cozinhar'); 
console.log(hobbies); 


hobbies.pop(); 
console.log(hobbies); 


const hobbyARemover = 'tocar guitarra'; 
const indexDoHobby = hobbies.indexOf(hobbyARemover); 
if (indexDoHobby !== -1) {
  hobbies.splice(indexDoHobby, 1); 
}
console.log(hobbies); 


const hobbiesDoAmigo = ['cantar', 'dançar', 'tocar violão'];
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);
console.log(todosOsHobbies); 

const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar música'];
const hobbiesEsportivos = ['correr', 'jogar futebol', 'nadar'];
const hobbiesCriativos = ['desenhar', 'escrever histórias', 'fazer esculturas'];
const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];


const primeiroHobbyMusical = categoriasDeHobbies[0][0];
console.log(primeiroHobbyMusical); 
const terceiroHobbyMusical = categoriasDeHobbies[0][2];
console.log(terceiroHobbyMusical); 
