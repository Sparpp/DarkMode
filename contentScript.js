if(document.querySelector(".popup")) { 
  let buttonOn = false;

  const circle = document.querySelector(".circle");
  const button = document.querySelector(".button");
  const button1 = document.querySelector(".button1");

  button.addEventListener("click", ()=>{
    if(!buttonOn){
        buttonOn = true;
        circle.style.animation = "moveCircleRight 1s forwards";
        button.style.animation = "backgroundCycle 1s forwards";
        (async () => {
          const message = await chrome.runtime.sendMessage({command: "darken"});
        })();
    }

    else {
        buttonOn = false;
        circle.style.animation = "moveCircleLeft 1s forwards";
        button.style.animation = "backgroundDecycle 1s forwards";
        (async () => {
          const message = await chrome.runtime.sendMessage({command1: "lighten"});
        })();
    }
  })

  button1.addEventListener("click", ()=>{
    button1.style.animationName='replace';
    (async () => {
      const message = await chrome.runtime.sendMessage({command2: "picker"});
    })();
  })

  button1.addEventListener('animationend', function() { button1.style.animationName='';});

}

