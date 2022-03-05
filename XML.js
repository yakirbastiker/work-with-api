window.onload = function(){
    var http = new XMLHttpRequest();

    
    http.open("GET", "data/tweets.json", true);

    http.onreadystatechange = function(){
        //console.log(http);

        if(http.readyState == 4 && http.status == 200) {  //data is reade
            //console.log(http.response);
            let data = JSON.parse(http.response)
            console.log(data);
            console.log(data.tweets[0].content);

            let testDOM = document.getElementById('test');
            testDOM.innerHTML =  data.tweets[0].content;
        }
    };

    http.send();
    
}