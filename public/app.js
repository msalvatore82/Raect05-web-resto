function createSquare(){
    const section = document.querySelector('section');
    const square = document.createElement('span');
    var size = Math.random() * 20;
    
    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    
      // eslint-disable-next-line no-restricted-globals
      square.style.top = Math.random() * innerHeight + 'px';
    // eslint-disable-next-line no-restricted-globals
    square.style.left = Math.random() * innerWidth + 'px';
    
    section.appendChild(square);
      setTimeout(() =>{
      square.remove()
    }, 5000)
  }
  setInterval(createSquare , 150)
  
  
  