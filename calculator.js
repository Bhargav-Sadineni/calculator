const preview=document.getElementById("preview");
const expression=document.getElementById("expression");
let currentexpression="";
let openparen=true;
document.getElementById("buttons").addEventListener("click", (e) => {
  const btn = e.target;
  if(btn.tagName !== "BUTTON") return;
  const value=btn.getAttribute("data-value");
  const op=btn.getAttribute("data-op");
  const action=btn.getAttribute("data-action");
  if(value){
    currentexpression+=value;
  }
  else if(op){
    currentexpression+=" "+op+" ";
  }
  else if(action){
    switch(action){
        case "clear":
            currentexpression="";
            preview.textContent="";
            break;
        case "backspace":
            currentexpression = currentexpression.trimEnd().slice(0, -1);
            break;
        case "paren":
            currentexpression+=openparen?"(":")";
            openparen=!openparen;
            break;
        case "equals":
            try{
                let result=eval(currentexpression);
                preview.textContent=currentexpression;
                currentexpression=result.toString();

            }catch{
                currentexpression="error";
            }
            break;
    }
   }
   expression.textContent=currentexpression;
});


  
        

    
  

