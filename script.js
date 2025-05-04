const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginbtn = document.getElementById("submit");
const pArray = Array.from( document.getElementsByTagName("p"));

const p1 = pArray[0];
const p2 = pArray[1];
const p3 = pArray[2];



loginbtn.addEventListener("click", () => {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();


    if (usernamevalue.length === 0) {
        p1.classList.remove("gone");
    }else{
        p1.classList.add("gone");
    }; 
    
    if (emailvalue.length === 0) {
        p2.classList.remove("gone");
    }else{
        p2.classList.add("gone");
    };
    
    if (passwordvalue.length === 0) {
        p3.classList.remove("gone");
    }else{
        p3.classList.add("gone");
    }
});