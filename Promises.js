window.onload = function () {
    let testDOM = document.getElementById('test');

     fetch("data/text.txt").then(function(response){
        console.log(response)
        response.text().then(function(text){
            testDOM.textContent = text         
        }).catch(function(err){
            console.log('fetch problem:' + err.message);
        });
    });
}

// fetch("data/text.txt").then(function(response) {
//     return response.text()
//   }).then(function(text) {
//     testDOM.textContent = text;
//   });