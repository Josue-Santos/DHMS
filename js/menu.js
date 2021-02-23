function menu(){
    if(screen.width <= 812){
        document.getElementById("main_page").style.webkitFilter = "blur(3px)";
        document.getElementById("menu_div").style.width="150px";
        document.getElementById("menu_div").style.borderRight= "5px solid white";
        document.getElementById("closebtn").style.fontSize="50px";
        document.getElementById("menu_pic").style.width="300px";
        links = document.getElementsByClassName('menu_options');
        for(var i = 0; i<5;i++){
            links[i].style.fontSize="25px";
        }
        
    }
    else{
        document.getElementById("main_page").style.webkitFilter = "blur(3px)";
        document.getElementById("menu_div").style.width="400px";
        document.getElementById("menu_div").style.borderRight= "5px solid white";
        document.getElementById("closebtn").style.fontSize="50px";
        document.getElementById("closebtn").style.fontSize="50px";
        document.getElementById("menu_pic").style.width="450px";
        links = document.getElementsByClassName('menu_options');
        for(var i = 0; i<5;i++){
            links[i].style.fontSize="50px";
        }
    }      

}
function closeMenu(){
    document.getElementById("main_page").style.webkitFilter="blur(0px)";
    document.getElementById("menu_div").style.width="0px";
    document.getElementById("closebtn").style.fontSize="0px";
    document.getElementById("menu_pic").style.width="0px";
    links = document.getElementsByClassName('menu_options');
    for(var i = 0; i<5;i++){
        links[i].style.fontSize="0px";
    }

}

/*document.getElementById("contact_form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    let name = document.getElementById("contact_form_div_name").value;
    let email = document.getElementById("contact_form_div_email").value;
    let message = document.getElementById("contact_form_div_textarea").value;

    //document.getElementById("contact_form").reset();

    sendEmail(name,email,message);
}

function sendEmail(name,email,message){
    Email.send({
        Host:"smtp.gmail.com",
        Username:'josuesantosfls@gmail.com',
        Password:"kbkcogrxjzwqkgyc",
        To: 'josuesantosfls@gmail.com',
        From:'josuesantosfls@gmail.com',
        Subject:`${name} sent you a message`,
        Body:`Name: ${name} <br/> Email: ${email} <br/> Message : ${message}`,
    }).then((message)=>alert("Mail Sent Successfully"));
}
*/

