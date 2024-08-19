const  form = document.querySelector("#package-form");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

     const username = document.querySelector('#username').value
    console.log(username)
     const address = document.querySelector('#address').value
    console.log(address)
    const delivery = document.querySelector("#deliver").value
     console.log(delivery);
    const parcel = document.querySelector("#package").value
    console.log(parcel);
    const receiverName = document.querySelector('#name').value
    console.log(receiverName);
    const number = document.querySelector('#number').value
    console.log(number)
     const location = document.querySelector('#option').value

    console.log(location)

    try{
        const data = await fetch("http://localhost:8082/user/send-package",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({senderUsername:username, pickUpAddress : address, deliveryAddress: delivery, packageName: parcel, receiverName: receiverName, receiverPhone: number, deliveryLocation: location })
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

    window.location.href = "payment.html"
})


