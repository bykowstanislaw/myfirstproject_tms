// const numbers=[1,2,3,4,5,6,7,8,9,0]
// function number(){
//     numbers.forEach(element => {
//         let forNumbers=document.createElement(`button`)
//         forNumbers.innerHTML=element
//         document.querySelector(`.num`).appendChild(forNumbers)
        
//     });
// }
// number()
let numberArr=['1','2','3','4','5','6','7','8','9','0',]
let rusArr=['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','.']



function fillButton(arr){
    
        return arr.map(item => ({tag:'input', properties: {type: 'button', value:item, className:'button' , onclick: 'forInput'}}))


}
console.log(fillButton(numberArr))


function renderButtons(arr,place){
    let domElem=arr.map(item=>{
        let element=document.createElement(item.tag);
        Object.entries(item.properties|| {}).forEach( ([key,value]) => {
            element[key]=value;
            })
            place.appendChild(element);
    })
    
}
renderButtons(fillButton(numberArr), document.body)
renderButtons(fillButton(rusArr), document.body)

document.getElementById('key-input').readonly===true;


function forInput(elem){
    document.getElementById(`key-input`).value=+elem.target.value;
}
