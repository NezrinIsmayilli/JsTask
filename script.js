function addDiv() {

    let div = document.createElement('div');
    document.body.appendChild(div);

    //random size
    let width = 50 + Math.random() * 100 | 0;
    let height =50 + Math.random() * 100 | 0;
    div.style.width = width + "px";
    div.style.height= height + "px";
    
    //random color
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));  
    div.style.background='rgb(' + r + ',' + g + ', ' + b + ')';

    //random position
    function getRandomNumber(min,max){
        return Math.random()*(max-min)+min
    }
    div.style.left= getRandomNumber(0, window.innerWidth - width) + 'px'
    div.style.top = getRandomNumber(0, window.innerHeight- height) + 'px'

    //remove div
    div.addEventListener('click', remove);
    function remove(){
        div.remove()
    }
}