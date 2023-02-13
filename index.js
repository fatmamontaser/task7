let addInput=document.getElementById('AddInput')
let add = document.querySelector('#add')
 let items=[]
add.addEventListener('click',()=>{
 let vAdd =addInput.value
 console.log(vAdd)
 items.push(vAdd)
 displayItem()
})

function displayItem(){
  let  contanier =''
for(let i =0;i< items.length; i++){
    contanier+=`
    <tr id="display">
    <td class="conatnt">${ items[i]}</td>
<td ><button id="icon" onclick=' deletet()' ><i class="fa-solid fa-trash"></i></button></td>
</tr>
  
`
}
document.getElementById('itemDisplay').innerHTML=contanier

}


function deletet(e){
 let a= items.splice(e,1)
 console.log(a)
    displayItem()
}


