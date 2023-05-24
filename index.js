const userData = {
    name: "Steve",
    email: "steve@steve.com"
};
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(userData),
};
function submitData(){
    return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(userData => renderId(userData))
    .catch(responseError => renderError(responseError))
};
function renderId(userData){
    const div = document.createElement("div");
    div.textContent = userData.id;
    document.querySelector("body").append(div);
}
function renderError(responseError){
    const div = document.createElement("div");
    div.textContent = responseError.message;
    document.querySelector("body").append(div);
}