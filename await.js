//https://swapi.dev/documentation#base

const loadstarwars = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log(data);

        res2 = await fetch("https://swapi.dev/api/people/2");
        const data2 = await res2.json();
        console.log(data2);
    }
    catch (e) {
        console.log("error")
        console.log(e)
    }
}


loadstarwars()