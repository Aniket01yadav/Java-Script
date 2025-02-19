const username = document.getElementById("username");
// const name1 = document.getElementById("name").value;
const password = document.getElementById("password");

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{

    let usernameValue = username.value;
    let passwordValue = password.value;
    
    const userdetails = JSON.parse(localStorage.getItem("user")) || [];

    // console.log(userdetails);
    
    const isAuth = userdetails.find( ele => ele.username === usernameValue && ele.password === passwordValue);

    // console.log(isAuth)

    if(isAuth){
        localStorage.setItem("loggedinuser",JSON.stringify(isAuth));
        // console.log(loggedInsuccess);
        window.location.href = "/home.html"
    }

    
})
