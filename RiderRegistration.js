const form = document.querySelector("#rider-form")

form.addEventListener("submit", async (e)=> {
    e.preventDefault();

    const fname = document.querySelector('#firstname').value
    console.log(fname)
    const lname = document.querySelector('#lastName').value
    console.log(lname)
    const username = document.querySelector("#userName").value
    console.log(username);
    const  email = document.querySelector("#email").value
    console.log(email)
    const pswd = document.querySelector("#password").value
    console.log(pswd);
    const number = document.querySelector('#phoneNumber').value
    console.log(number);
    const address = document.querySelector('#address').value
    console.log(address)

    try{
        const data = await fetch("http://localhost:8082/rider/rider-registration",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({firstName:fname, lastName : lname, userName: username, email: email, password: pswd, phoneNumber: number, address: address })
        })

        if(data.ok){
            const value = await data.text()
            alert('success');
            console.log(value)
        }
        else{
            const err = await data.text()

            alert(err)
        }
    }
    catch (error){
        alert(error.message)
    }

    window.location.href = "Login.html"


})