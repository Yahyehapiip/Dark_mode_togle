const inputEl = document.querySelector('.input')
const body = document.querySelector('body')

inputEl.checked = JSON.parse(localStorage.getItem("mode"))

updateBody()
function updateBody(){
    if(inputEl.checked ){
        body.style.background="black"
    }else{
        body.style.background="white"
    }
}

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStroge()
    
  });
  

  function updateLocalStroge(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked))
  }