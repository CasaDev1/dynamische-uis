const aantal_per_rij = 5;
const aantal_buttons = 30;
const container = document.getElementById('container');


for (let w = 0; w < aantal_buttons;w++){
    const button = document.createElement('button');
    button.style.backgroundColor = 'green';
    button.textContent = w + 1;
    container.appendChild(button);

    let klik = 0;

    button.addEventListener("click", function() { 
      klik++;
      
      if (klik  === 1){
        button.style.backgroundColor = 'red';
        console.log(`Button ${w+1} is ${klik} keer aangeklikt!`);
      } else if (klik === 2){
        button.style.backgroundColor = 'purple';
        console.log(`Button ${w+1} is ${klik} keer aangeklikt!`);
      } else if (klik === 3){
        button.style.backgroundColor = 'blue';
        console.log(`Button ${w+1} is ${klik} keer aangeklikt!`);
      } else if (klik === 4){
        button.style.backgroundColor = 'black';
        console.log(`Button ${w+1} is ${klik} keer aangeklikt!`);
      } else{
        button.remove()
        console.log(`Button ${w+1} is ${klik} keer aangeklikt!`);
      }
    });

  

    if ((w + 1) % aantal_per_rij === 0) {
        container.appendChild(document.createElement("br"));
      }
}