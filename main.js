const pokeArray=[];
const obtenerData=async()=>{
   const response = await fetch ("https://pokeapi.co/api/v2/pokemon/")
   const data     = await response.json()
   data.results.forEach(item => {
      pokeArray.push(item.name)

   });
   console.log(pokeArray)
  
}



/**const lista=document.getElementById("lista-dinamica")

const li=document.createElement("li")

li.textContent="item "

lista.appendChild(li)
*/

const lista=document.getElementById("lista_de_nomres")
const mylist=["carlos","andres","juan","diana"]

const fragment=document.createDocumentFragment();
mylist.forEach((item)=>{
   const li =document.createElement("li")
   li.textContent=item
   fragment.appendChild(li)
});
lista.appendChild(fragment)





/*import class personas {

   nombre
   apellido
   edad
   genero
   constructor(paramNombre, paramApellido, paramEdad, paramGenero) {
      this.nombre = paramNombre
      this.apellido = paramApellido
      this.edad = paramEdad
      this.genero = paramGenero
   }

   nombreCompleto() {
      return this.nombre + '' + this.apellido
   }

   eaddNueva(suma) {
      return this.edad + suma
   }

}
const persona1 = new personas('carlos', 'romo', 30, 'M')
const persona2 = new personas('andres', 'peres', 30, 'M')

console.log(persona1.nombreCompleto())
console.log(persona1.eaddNueva(5))
console.log(persona2.eaddNueva(5))*/
