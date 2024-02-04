let div1=document.querySelectorAll("div.wrapper")
let div2=document.querySelectorAll("div.circle")


div2.forEach((elem)=>{
    elem.addEventListener("click",function(e){
        if(e.target.nextElementSibling){
            e.target.nextElementSibling.style.backgroundColor="red";

        }
        if(e.target.previousElementSibling){
            e.target.previousElementSibling.style.backgroundColor="white";

        }

    })

})