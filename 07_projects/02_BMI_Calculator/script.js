const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    // console.log("A")
    e.preventDefault();
    // console.log("A")
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");


    let bmi;

    if(height === "" || height < 0 || isNaN(height)){

        result.innerHTML = `Invalid height`;
        result.style.color = "red";
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){

        result.innerHTML = `Invalid weight`;
        result.style.color = "red";
    }
    else{
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
        console.log(bmi);
    }
    if(bmi < 18.6){
        guide.innerHTML = "Under weight!";
        guide.style.color = 'red'
    }
    if(bmi > 18.6 && bmi < 24.9){
        guide.innerHTML = "Normal weight!"

    }
    if(bmi > 24.9){
        guide.innerHTML = "Over weight!"

    }

})