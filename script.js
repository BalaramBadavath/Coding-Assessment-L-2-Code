const contianer = document.getElementById('#sec')

const boxes = document.querySelectorAll('.box')

const colorBoxes = document.querySelectorAll('.box');

function toggleSelection(element) {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        if (box === element) {
            box.querySelector('.tick').style.display = 'block';
            document.getElementById('sec').style.borderColor = box.style.backgroundColor;
        } else {
            box.querySelector('.tick').style.display = 'none';
        }
    });
}



let input = document.getElementById("inp")
let currentValue=0
function inc()
{
    if(input.value)
    {
       currentValue++;
       input.value=currentValue
    }   
}
function dec()
{
    if(input.value==1)
    {
        input.value=1
    }
    else
    {
        input.value-=1
    }
}

function add_to_cart()
{
    document.getElementById("pop").style.display="block";
    
}