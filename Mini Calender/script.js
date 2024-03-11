let date=new Date()
let daynum=date.getDay()
const li=document.querySelectorAll('li')
let day=date.getDate()
let year=date.getFullYear()
let h3=document.createElement('h3')
let month=date.getMonth()
let h5=document.createElement('h5')
h3.innerHTML=year
for(let i=0;i<7;i++){
   if(daynum==i){
    li[i].classList.add('active')
   }
}
let h1=document.createElement('h1')
h1.innerHTML=day
console.log(h1)
const active=document.querySelector('.active')
active.appendChild(h1)
active.appendChild(h3)
active.appendChild(h5)
let monthName=['January ','February ','March','April','May','June','July','August','September','October','November','December']
h5.innerHTML=monthName[month]
