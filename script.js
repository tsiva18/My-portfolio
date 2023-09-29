const a=document.querySelector('.humbar');
const b=document.querySelector('ul');


a.addEventListener('click',()=>{
    b.classList.toggle('slide');
    a.children[0].classList.toggle('toggle0');
    a.children[1].classList.toggle('toggle1');
    a.children[2].classList.toggle('toggle2');
});

const c=document.getElementById('menu');

c.addEventListener('click',()=>{
    c.classList.remove('slide')
});

c.addEventListener('click',()=>{
    a.children[0].classList.toggle('toggle0');
    a.children[1].classList.toggle('toggle1');
    a.children[2].classList.toggle('toggle2');
});

function SendMail(){
    var params={
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_oebnr28","template_3ym7hia",params).then(function (res){
        alert("Success!") ;
    })
    
}
    