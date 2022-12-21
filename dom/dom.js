
function selectSec(){
    var sec = document.querySelector('.second');
    sec.style.backgroundColor = 'yellow';
}

 
function selectAll(){
    var selectAll = document.querySelectorAll('li');
    for(var i=0;i<selectAll.length;i++){
        selectAll[i].style.backgroundColor = 'green';
    }
}


function lastSelect(){
    var ul = document.querySelector('.third')
    var last = ul.children[ul.children.length-1].classList.add('background');
    
     
     
}


function divLi(){
    var lastDiv = document.querySelectorAll('div')[1].getElementsByTagName('li')[0].classList.add('active');

}

//divLi()


function selectLi(){
    var active = document.querySelector('.active');
    active.classList.remove('active');
    firstLi = document.querySelector('li').classList.add('active');
    console.log(firstLi);
}

//selectLi()

function navigation(){
    var menu = document.getElementById('menu').getElementsByTagName('li')[0];
     
    window.alert(menu.textContent)


}

//navigation();



function access(text){
    var lastLi = document.querySelectorAll('li');
    var last = lastLi[lastLi.length-1]
    last.innerText = text;
}

//access('dddd')


//InnerHTML

function dropdown(array){
    var first = document.querySelector('.first');
    var last = document.querySelector('.last');
    var select = document.querySelector('#firstSelect');
    var select2 = document.querySelector('#secondSelect')
    for(var i =0;i<array.length;i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = array[i];
        select.appendChild(opt)
    }
    first.appendChild(select)
    last.appendChild(select2)


}
//dropdown(['apple','peach','mango'])

 
function inputs(){
    var select = document.createElement("select");
    select.innerText=
    document.body.appendChild(select)

    var option = document.createElement("option");
    option.value = 'dddd';
    option.text ='aaaa';
    document.body.appendChild(option);
}

inputs()