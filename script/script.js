
let timerZone = document.getElementById('timer');
let StartButton = document.getElementById('start_btn');
let FormNewPlaeyr = document.getElementById('new_player');
let AddNewplaer = document.getElementById('add_new_player');
let ScoreTable = document.getElementById('scores_block');
let RunButton = document.getElementById('runbutton');
let playerRoundScore = 0;
let choose = 0;
let roundResult = document.getElementById('roundResult');
let MarkLabel = document.getElementById('mark');
let printBlock = document.getElementById("printBlock");
let var1 = document.getElementById('var1');
let var2 = document.getElementById('var2');

StartButton.onclick = function() {
    StartButton.classList.add("hide_block");
    FormNewPlaeyr.classList.remove("hide_block");
} 

function pressBtn(event){
    let t = getRandomInt(1, terminzzz.rows.length);
  console.log(t);
printBlock2.textContent = terminzzz.rows[t].cells[0].textContent ;

    if (terminzzz.rows[t].cells[1].textContent == event.key) {
        playerRoundScore++;
        roundResult.textContent = playerRoundScore;
        console.log(playerRoundScore);
    }
}

var keyBox = document.NewPlaForm.player;
 
// обработчик изменения текста
function onchange(e){
    // получаем элемент printBlock
    printBlock = document.getElementById("printBlock");
    // получаем новое значение
    var val = e.target.value;
    // установка значения
    printBlock.textContent = val;
}
// обработка потери фокуса
function onblur(e){
     
    // получаем его значение и обрезаем все пробелы
    var text = keyBox.value.trim();
    if(text==="")
        keyBox.style.borderColor = "red";
    else
        keyBox.style.borderColor = "green";
}
// получение фокуса
function onfocus(e){
     
    // установка цвета границ поля
    keyBox.style.borderColor = "blue";
    roundResult.classList.add('hide_block');
}



keyBox.addEventListener("change", onchange);
keyBox.addEventListener("blur", onblur);
keyBox.addEventListener("focus", onfocus);




AddNewplaer.onclick = function() {
    MarkLabel.classList.add('hide_block');
    FormNewPlaeyr.classList.add("hide_block");
    console.log (document.getElementById("printBlock"));
    var tableBody = document.getElementById("tableBody");
    var newRow = document.createElement("tr");
        for (var i=0; i<2; i++) {
            var newCell=document.createElement("td");
        newRow.appendChild(newCell);
         }
    tableBody.appendChild(newRow);
    NewRow = document.getElementById('scores').lastElementChild.lastElementChild;
    console.log(NewRow);
    NewRow.firstElementChild.textContent = printBlock.textContent;
    console.log(NewRow.firstElementChild.textContent);
    ScoreTable.classList.remove('hide_block');
    RunButton.classList.remove('hide_block');

}


RunButton.onclick = function() {
    RunButton.classList.add('hide_block');
    
    ScoreTable.classList.add('hide_block');
    printBlock.classList.add('hide_block');
    timerZone.classList.remove('hide_block');
    printBlock2.classList.remove('hide_block');
    terminzzz = document.getElementById('termins'); 
    console.log(terminzzz);
    console.log (terminzzz.rows.length);
    playerRoundScore = 0;
    roundResult.textContent = playerRoundScore;
    let t = getRandomInt(1, terminzzz.rows.length);


    printBlock2.textContent = terminzzz.rows[t].cells[0].textContent ;
    
    var1.classList.remove('hide_block');
    var2.classList.remove('hide_block');
    document.addEventListener('keydown', pressBtn);
    /*document.addEventListener('keydown', function pressBtn(event){
        let t = getRandomInt(1, terminzzz.rows.length);
      console.log(t);
    printBlock2.textContent = terminzzz.rows[t].cells[0].textContent ;
    
        if (terminzzz.rows[t].cells[1].textContent == event.key) {
            playerRoundScore++;
            roundResult.textContent = playerRoundScore;
            console.log(playerRoundScore);
        }
    });*/
    
    

    i = 60;  
    var idInt = setInterval(function() {
        
        if (i <= 20) {
            document.getElementById("timer").style.color = "red";
        }
        document.getElementById("timer").innerHTML = i;
        if (i == 0) {
            clearInterval(idInt);
            timerZone.classList.add('hide_block');
            printBlock2.classList.add('hide_block');
            roundResult.classList.remove('hide_block');
            tableBody.lastElementChild.cells[1].textContent = roundResult.textContent;
            ScoreTable.classList.remove('hide_block');
            FormNewPlaeyr.classList.remove('hide_block');
            printBlock.classList.remove('hide_block');
            document.removeEventListener('keydown', pressBtn);
            var1.classList.add('hide_block');
            var2.classList.add('hide_block');
            //document.getElementByTagName("p").innerHTML = "Вы опоздали";
        }
        i = i - 1;
        
        
    }, 1000);

    
    
    
}






/*function terminChecks() {
    console.log(terminzzz);
    for (t = 1;t<=terminzzz.rows.length && pressBtn.event.type == "keydown";t++) {
        console.log(t);
        printBlock2.textContent = terminzzz.rows[t].cells[0].textContent ;
        if (terminzzz.rows[t].cells[1].textContent == event.key) {
            playerRoundScore++;
            console.log(playerRoundScore);q
        }
     }


}*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум и минимум включаются
  };
//var rowrand = Math.floor(Math.random() * terminzzz.rows.length)
