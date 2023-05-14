import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push,onValue,remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const settings={
    databaseURL:"https://store-ba3c3-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app=initializeApp(settings)
const database=getDatabase(app)
const shop=ref(database,"shopping")




const input=document.getElementById("san")
const btn=document.getElementById("tan")
const para=document.getElementById("list")

onValue(shop,function(snapshot){

    if(snapshot.exists()){
    let curvalue=Object.entries(snapshot.val())
          anoclear()
    for(let i=0;i<curvalue.length;i++){
        let currentvalue=curvalue[i]
        let currentvalueid=currentvalue[0]
        let currentvalueinfo=currentvalue[1]

        inhtml(currentvalue)
    }

}else{
    para.innerHTML="No Items Added"
}
})

function anoclear(){
    para.innerHTML=""
}

btn.addEventListener("click",function(){
    let val=input.value
    push(shop,val)
    clear()
  
    
})
function clear(){
    input.value=""
}
function inhtml(values){
    let itemid=values[0]
    let itemval=values[1]
    let doc=document.createElement("li")

    doc.textContent=itemval

    doc.addEventListener("click",function(){
        let loc=ref(database,`shopping/${itemid}`)
        remove(loc)

    })
    para.append(doc)
}