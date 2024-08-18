
const form = document.querySelector(".login-form");

const bt = document.querySelector("#btn")

bt.addEventListener("click", async (e) =>{
    console.log("hello")
})


form.addEventListener("submit", async (e)=>{
    e.preventDefault();



    const username = document.querySelector("#username").value
    const pswd = document.querySelector("#password").value

    console.log(username)
    console.log(pswd)
try{
    const data = await fetch("http://localhost:8081/user/customer-login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username:username, password : pswd})
    })

    if(data.ok){
        const value = await data.text()
        alert('success');
    console.log(value)
    }
    else{
        const err = await data.text()
        
       alert(err)
    }}
    catch (error){
        alert(error.message)
    }



})

