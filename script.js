const joke = document.querySelector(".joke")
const btn = document.querySelector(".G-joke")


const generateJoke = async()=>{
    const config = {
        headers : {
            Accept : "application/json"
            },
            }
            const res = await fetch('https://icanhazdadjoke.com', config)
            const data = await res.json()
            joke.innerHTML = data.joke
            console.log(data)
            }
            
    generateJoke()
    btn.addEventListener("click", generateJoke)