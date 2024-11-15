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
    color: 'mintcream',
    fontFamily:'cursive',
  });

  // h1 style desgin
  h1.style.color='#e833e9';
  h1.style.fontFamily=' cursive';

function startOn(){
  let rowColm=prompt('how many lines do u want choose between(1- 99)')
  squreN= parseInt(rowColm,10);
  if(!isNaN(squreN) && squreN >= 1 && squreN <= 99){
    introduction.style.display='none'

    // -----------------------------------------
    const buttonsdiv= document.createElement('div');

// Create and configure the RGB Color button
    let rgbColor=document.createElement('button');
    rgbColor.textContent='RGB Color';

// Create and configure the Reset button
    let reset=document.createElement('button');
    reset.textContent=' RESET';
    reset.addEventListener('click', ()=> {

    })

// Create and configure the Exit button
    const exitbtn=document.createElement('button')
    exitbtn.textContent='EXIT'
    buttonsdiv.append(rgbColor,reset,exitbtn)
    document.body.appendChild(buttonsdiv)
    
// Style the container
    buttonsdiv.style.cssText=`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    height: 30px`;
    
// style each button
buttons= [rgbColor,reset,exitbtn]
buttons.forEach(button => {
  button.style.cssText=`
  background-color:#d81be7;
  color:white;
  width:100px;
  padding:10px 30px
  border-radius: 5px;
  border: none; 
  cursor: pointer;
  transition: all 0.5s ease;
  font-family:cursive
  `
});


// Add hover effect to each button
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
      button.style.backgroundColor = 'rgb(235 14 139)';
  });
  button.addEventListener('mouseout', () => {
      button.style.backgroundColor = 'rgb(222 128 229)';
  });
});
    // -----------------------------------------

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
      marginTop: '60px',
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

