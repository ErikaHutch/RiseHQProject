/* Keys:
username
*/

function getUserName(){
    return window.localStorage.getItem("name");
}
function setUserName(name){
    window.localStorage.setItem("name",name);
}