//chrome://extensions/
let myLeads=[]
const inputEl=document.getElementById('input-el')
const inputBtn=document.getElementById("input-btn")
const UlEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

const leadsfromlocalstorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsfromlocalstorage)
{
    myLeads=leadsfromlocalstorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
   
 
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

  })

})
function render(leads)
{
let listitems=""

for(let i=0;i<leads.length;i++)
{
    
    listitems += `
    <li>
    <a target='_blank' href='${leads[i]}' >
    ${leads[i]}
    </a>
    </li>
    `
    
   
}

UlEl.innerHTML=listitems
}




inputBtn.addEventListener("click",function(){
myLeads.push(inputEl.value)
inputEl.value=""
localStorage.setItem("myLeads",JSON.stringify(myLeads)) 
render(myLeads)

})
deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  render(myLeads) 

})
