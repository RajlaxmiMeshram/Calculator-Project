let input = document.getElementById('inputBox');
var buttons = document.querySelectorAll("#add, #subtract, #multiply, #divide, #btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn0, #del, #percent, #dot, #eqqual, #AC");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) =>
        {
        
        if (e.target.id == "eqqual")
        {
            string = eval(string);
            input.value = string;
        } 

            
        else if (e.target.id == 'AC') 
        {
            input.value = "";
            string = "";
        } 

            
        else if (e.target.id == 'del') 
        {
            input.value = input.value.slice(0, -1);
            string = input.value;
        } 

            
        else if (e.target.id == 'percent') 
        {
            // Calculate percentage directly
            string = (eval(string) / 100).toString();
            input.value = string;
        } 

            
        else 
        {
            string += e.target.innerHTML;
            input.value = string;
        }
            
    });
});
