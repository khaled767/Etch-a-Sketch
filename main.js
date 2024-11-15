const introduction= document.createElement('div');
const h1= document.createElement('h1');
const btn= document.createElement('button');


h1.textContent='Welcome to "Etch a Sketch" game';
btn.textContent="Click Me"
introduction.append(h1, btn);

document.body.appendChild(introduction)



introduction.style.cssText = 'display: flex; flex-direction: column;align-items: center; ';
Object.assign(btn.style, {
    backgroundColor: '#14e714',
    width: '100px',
    height: '40px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    color: 'mintcream'
  });

  

function startOn(){
  let rowColm=prompt('how many lines do u want choose between(1- 99)')
  squreN= parseInt(rowColm,10);
  if(!isNaN(squreN) && squreN >= 1 && squreN <= 99){
    
    introduction.style.display='none'
    const container= document.createElement('div');
    container.classList.add('contain')
    document.body.appendChild(container)
    container.style.cssText=`
    display: grid;
    grid-template-columns: repeat(${squreN}, 1fr);
    grid-template-rows: repeat(${squreN}, 1fr);
    gap: 1px;`

    Object.assign(container.style,{
      // backgroundColor:'#ddd',
      width: '80%',
      height:' 80vh',
      marginTop: '80px',
      marginLeft:'120px'
    })
    for(let i = 0; i < squreN * squreN ; i++){
      const square= document.createElement('div');
      square.classList.add('square')
      square.style.cssText=`
      background-color:#fff;
      color: white;
      border :1px solid #ccc;
      width: 60%;
      height: 80%;
      margin:1px;
      cursor:pointer;
      `
      container.appendChild(square)  
      square.addEventListener('mouseover', () => {
      square.style.backgroundColor='black';
      });
     }
  }
  else{
    startOn()
  }
}

btn.addEventListener('click', () =>{
  startOn()
})