function getAllPosts(userId){
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId=" +userId);
    request.responseType = "json"
    request.send();
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
            let posts = request.response
            document.getElementById("posts").innerHTML = "";
            for (post of posts) {
                let content = `
                    <div class="post p-2 rounded mb-2">
                        <h4>${post.title}</h4>
                        <hr>
                            ${post.body}
                    </div>
                `
                document.getElementById("posts").innerHTML += content;

            }
        }else{
            alert("Error");
        }
    }
}
function getAllusers(){
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/users");
    request.responseType = "json"
    request.send();
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
            let users = request.response
            document.getElementById("users").innerHTML = "";
            for (user of users) {
                let content = `
                <div id="user" class="users  ps-4 pt-4 mb-3" onclick="userClicked(${user.id},this)">
                <div>
                    <h4>${user.name}</h4>
                    <h6>${user.email}</h6>
                </div>
            </div>
                `
                document.getElementById("users").innerHTML += content;

            }
        }else{
            alert("Error");
        }
    }
}

getAllPosts(1)
getAllusers()

function userClicked(id,element){
    getAllPosts(id);
    let selectedClass = document.getElementsByClassName("selected")
    for(ele of selectedClass){
        ele.classList.remove("selected")
    }
    element.classList.add("selected");
}



