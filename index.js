let textbox=document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text=this.value;

    //word count
    let char=text.length;
    document.getElementById("char").innerHTML=char;

    //word counter
    text=text.trim();
    let words=text.split(" ");
    let cleanList=words.filter(function(elm){
            return elm !="";
    });
    document.getElementById("word").innerHTML=cleanList.length;
});