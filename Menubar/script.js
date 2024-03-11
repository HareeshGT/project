const lists=document.querySelectorAll('.list')
const listicon=document.querySelectorAll('.list .icon')
const nav=document.querySelector('.navigation')
for(let i=0; i<lists.length;i++){
    lists[i].onclick=()=>{
    let j=0;
    while(j<lists.length){
        lists[j++].className="list"
    }
    lists[i].className="list lactive"
}
}
for(let i=0; i<listicon.length;i++){
    listicon[i].onclick=()=>{
    let j=0;
    while(j<listicon.length){
        lists[j++].className="list"
    }
    lists[i].className="list lactive"
}
}
const toggle=document.querySelector('.toggle')
toggle.addEventListener('click',()=>{
    toggle.classList.toggle('tactive')
    nav.classList.toggle('active')

})