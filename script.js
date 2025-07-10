
function addElementListeners() {
  const elements = document.getElementsByClassName('element');

  Array.from(elements).forEach(element => {
    
    element.addEventListener("mouseover",  (e) => {
      element.style.opacity = 1;
      console.log(element.style)
    });

    element.addEventListener("mouseout",  (e) => {
      element.style.opacity = 0
      ;
    });
  });
}

addElementListeners()