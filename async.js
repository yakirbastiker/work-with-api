// async function hello() {
//     //return a promiss
// }

//arrow function
// const sing = async () => {
//     //return a promiss
// }

// sing.then((date) => {

// }).catch(err => {

//})

const login = async (username, password) => {
    if(!username || !password) throw 'missing credentials'
    if (password === 'yakir') return 'welcome'
    throw 'invalid password'
}


login('user1', 'yakir')
    .then (msg => {
        console.log('logged in');
        console.log(msg);
    })
    .catch(err => {
        console.log('error!!!!');
        console.log(err); 
    })