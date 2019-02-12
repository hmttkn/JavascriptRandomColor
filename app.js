function changeit(){  
    var colorcodes = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
    var color = '#';
    for(var i=0 ;i<6;i++){
        color += colorcodes[Math.floor(Math.random() * 16)];
            
    }
    document.body.style.backgroundColor = color;
}
