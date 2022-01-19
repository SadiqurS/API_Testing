//using XML to retrive data from an API
// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("ALL DONE WITH REQUEST!!!")
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function () {
//     console.log("ERROR!!!")
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send();


//using fetch to retrive data from an API
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })


//const fetchBitcoinPrice = async () => {
//   try {
//        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//        const data = await res.json();
//       console.log(data.ticker.price)
//    } catch (e) {
//        console.log("SOMETHING WENT WRONG!!!", e)
//    }
//}


// using axios to retrive data
// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//    .then(res =>{
//        console.log(res.data.ticker.price)
//     })
//     .catch(err =>{
//         console.log("error",err)
//     })


//using an async function and axios to retrive data from an api
const btc = document.querySelector("#btc")
const sign = document.querySelector("#sign")
const btcPrice = async () => {
    try{
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
        const request = (res.data.ticker.price)
        btc.innerText = request
        console.log(request)
    }
    catch(e){
        btc.innerText =("error",e)
        sign.remove()
    }
}
btcPrice()

const jokes = document.querySelector("#jokes")
const button = document.querySelector("#btn")
const addNewJoke = async () =>{
    const joketext = await getDadJoke()
    const newLI = document.createElement("LI")
    newLI.append(joketext);
    jokes.append(newLI)

}
const getDadJoke = async () =>{
    try{
        const config = {headers: {Accept: "application/json" } }
        const response = await axios.get("https://icanhazdadjoke.com/",config)
        return response.data.joke;
    }
    catch(e){
        return "ERROR NO JOKES AVAILABLE"
    }
    
}
button.addEventListener("click", addNewJoke)