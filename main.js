// first thing Create div has 2 elemnts h2
// and button


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

  btn.addEventListener('click', () =>{
    prompt('how many lines do u want choose between(2- 100)')
  })


  const container= document.createElement('div')
  document.body.appendChild(container)

  container.style.cssText=`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
  gap: 1px;
  width: 400px;  
  height: 400px;
  `
  Object.assign(container.style,{
    backgroundColor:'#ddd',
    // border:'2px solid',
    margin: '20px 100px'  
  })
  for(let i =0 ; i < 16*16  ; i++){
    const square= document.createElement('div');
    square.style.cssText = `
    background-color: #fff;
    border: 1px solid #ccc;  /* Add border to each square */
    width: 100%;
    height: 100%;
  `;
  container.appendChild(square);
  }