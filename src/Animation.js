const Animation = ()=>{
    const groupHeading = document.querySelector(".group-heading");
    const groupHeadingTextSplit = groupHeading.textContent.split("");
    groupHeading.textContent = "";
    for(let i=0; i<groupHeadingTextSplit.length; i++){
        groupHeading.innerHTML += "<span>" + groupHeadingTextSplit[i] + "</span>";   
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick(){
        const span = groupHeading.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if(char === groupHeadingTextSplit.length){
            clearInterval(timer);
            timer = null;
            return;
        }
    }
}

export default Animation;