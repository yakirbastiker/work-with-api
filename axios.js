axios.get("https://swapi.dev/api/people/1")
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})



const getDadJoke = async () => {

    const config = { headers: {Accept: 'application/json'} }
    const res = await  axios.get('https://icanhazdadjoke.com/', config)
    console.log(res.data.joke)
}

getDadJoke()