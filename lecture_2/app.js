var Student = {
  name: '',
  type: 'Student'
};

//Whenever the content of the browser is load it get updated

document.addEventListener('DOMContentLoaded', contentLoaded)

//When keyup in the DOM it will call a function keyUp()

function contentLoaded () {
  document.getElementById('name').addEventListener('keyup', keyUp)
}

//It will call a function to calcualte the numbaric as the ASCII code.

function keyUp (key) {
  CalculateNumaricOutput();
};

function CalculateNumaricOutput(){
    Student.name = document.getElementById('name').value;
    
    let totalCount = 0;
    for(let i = 0; i < Student.name.length; i++){
        totalCount += Student.name.charCodeAt(i);
    }
    

    let outPut = `Total Char count of ${Student.name} is ${totalCount}`;
    document.getElementById('op').innerText = outPut;   
}
