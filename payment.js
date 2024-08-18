
const form = document.querySelector("#pay-form");


form.addEventListener("submit", async (e)=>{
    e.preventDefault();



    const name = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const amount = document.querySelector("#pay").value

    console.log(name)
    console.log(email)
    console.log(amount)
    try{
        const data = await fetch("http://localhost:8081/user/user-payment",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({senderUsername:name, email : email, amount:amount})
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

