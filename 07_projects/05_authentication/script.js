let username = document.getElementById("username");
let name1 = document.getElementById("name");
let password = document.getElementById("password");
let btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    let usernameValue = username.value;
    let name1Value = name1.value;
    let passwordValue = password.value;


    console.log("Username -",usernameValue);
    console.log("Name -",name1Value);
    console.log("Password -",passwordValue);

    const registerData = {
        "username":usernameValue,
        "name":name1Value,
        "password":passwordValue
    }

    if(usernameValue !== "" && name1Value !=="" && passwordValue !==""){

        let users = JSON.parse(localStorage.getItem("user")) || [];
        
        users.push(registerData);
        
        const successfullyStored = localStorage.setItem("user",JSON.stringify(users));
        
        window.location.href="/login.html"
        
        console.log(userdetails);
    }
    else{
        console.log('please fill the details');
    }
        
    })