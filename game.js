var box = document.querySelectorAll(".colorBox");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var message = document.getElementById("message");
var reset = document.querySelector("#reset");
var mode = document.getElementsByClassName("mode");

var color = colorArray(6);
var trueColor = color[randomNumber(6)];
colorDisplay.textContent = trueColor;

gameOn();

function gameOn()
{
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < mode.length; i++)
    {
        mode[i].addEventListener("click", function()
        {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy")
            {
                for(var i = 3; i < 6; i++)
                {
                    box[i].style.display = "none";
                }
                resetGame(3);
            }
            else
            {
                for(var i = 3; i < 6; i++)
                {
                    box[i].style.display = "block";
                }
                resetGame(6);
            }
        });
    }
    for(var i = 0; i < box.length; i++)
    {
        box[i].style.backgroundColor = color[i];
        box[i].addEventListener("click", function()
        {
            if(this.style.backgroundColor === trueColor)
            {
                reset.textContent = "Play again?";
                assignColor();
                message.textContent = "Correct";
            }
            else
            {
                this.style.backgroundColor = "#232323";
                message.textContent = "Incorrect";
            }
            
        });
    }
}

function assignColor()
{
    for(var i = 0; i < box.length; i++)
    {
        box[i].style.backgroundColor = trueColor;
    }
    h1.style.backgroundColor = trueColor;
}

function randomNumber(num)
{
    var no = Math.floor(Math.random() * num);
    return no;
}

function colorArray(no)
{
    var arr = [];
    for(var i = 0; i < no; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function resetGame(no)
{
    h1.style.backgroundColor = "#steelblue";
    reset.textContent = "New Game";
    message.textContent = "";
    color = colorArray(no);
    trueColor = color[randomNumber(no)]; 
    colorDisplay.textContent = trueColor;
    gameOn();
}

reset.addEventListener("click", function()
{
    resetGame(6);
});