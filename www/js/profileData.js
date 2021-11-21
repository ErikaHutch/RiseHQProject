/* Keys:
username
*/

function getUserName(){
    window.localStorage.getItem("name");
}
function setUserName(name){
    window.localStorage.getItem("name",name);
}