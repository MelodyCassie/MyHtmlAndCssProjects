const form = document.forms['Info']

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = form.querySelector("#firstName").value;
    const lastName = form.querySelector("#lastName").value;
    const email = form.querySelector("#email").value;
    const password = form.querySelector("#password").value;


    // const obj = {
    //     "firstName": "Melody",
    //     "lastName": "Oluchi",
    //     "email": "melodyoluchi88@gmail.com",
    //     "password": "pass1234"
    //
    // };

    const obj = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
    };



    // console.log(obj)


const sendData = async (data) => {
    try {
        const response = await fetch("http://localhost:3000/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Success:", result.message);
    } catch (error) {
        console.log("Error:", error);
    }
};
    sendData(obj)
});





