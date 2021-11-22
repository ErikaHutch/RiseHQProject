class Service{
    constructor(id, imgLink, type, text, description, link, location){
        this.id = id;
        this.imgLink = imgLink;
        this.type = type;
        this.text =text;
        this.description = description;
        this.link = link;
        this.location = location;
        
    }
    createService(){
        var out  = "";
        out += '<div class="servicesContainer">'
        out += '<img src="'+this.imgLink+'">';
        out += '<button class="heartButton" onclick="HeartClick(this)" id="'+this.id+'"></button>';
        out += '<h3>'+this.text+'</h3>';
        out += '<p>'+this.description+'</p>';
        out += '</div>'
        return out;
    }
}

$(function() {
   displayAllServices();

   hearts = $(".heartButton");
   for (let i = 0; i < hearts.length; i++) {
       if(CheckService(hearts[i].id)== 1){
           $(hearts[i]).addClass("on");
       }
       
   }
});
function SelectServices(type){
    console.log(type);
    $("#servicesContainer").empty();
    if(type == "Find your Services"){
        displayAllServices();
    }
    services.forEach(i => {
        if(i.type == type){
            $("#servicesContainer").append(i.createService());
        }
    });
    if($("#servicesContainer").children().length == 0){
        $("#servicesContainer").append("<p>No services found :(</p>")
    }
}
function displayAllServices(){
    for (let i = 0; i < services.length; i++) {
        $("#servicesContainer").append(services[i].createService());
        
    }
}
services = [];
services.push( new Service(
    "1",
    "img/services1.jpg",
    "Health",
    "Sexual Health Clinic",
    "Short service description",
    "#",
    "Edinburgh"
));
services.push( new Service(
    "2",
    "img/services2.jpg",
    "Counselling",
    "Aberdeen Counselling",
    "Short service description",
    "#",
    "Aberdeen"
));



function HeartClick(button){
    art = CheckService(button.id);
    console.log(art);
    if(art == 1){
        $(button).removeClass("on");
        RemoveService(button.id);
    }
    else{
        $(button).addClass("on");
        SaveService(button.id);
    }
    
    
    window.localStorage.getItem("services");
    
}
function SaveService(serviceID){
    out = "";
    art = CheckService(serviceID);
    if(art == -1){
        window.localStorage.setItem("services", serviceID.toString());        
    }
    else if(art == 0){
        out = window.localStorage.getItem("services");
        out += ","+ serviceID.toString();
        window.localStorage.setItem("services", out);
    }
   
}
function RemoveService(serviceId){
    out = "";
    art = CheckService(serviceId);
    if(art ==1 ){
        arts = GetSavedServices();
        out = arts.filter(val => val != serviceId.toString());
        window.localStorage.setItem("services", out.toString());

    }
    
}
function CheckService(serviceId){
    saved  =window.localStorage.getItem("services");
    var split;
    if(saved != null){
        split = saved.split(",");
        if(split.includes(serviceId.toString())){
            return 1;
        }
        else{
            return 0;
        }
    }
    return -1; 
}
function GetSavedServices(){
    saved  =window.localStorage.getItem("services");
    if(saved != null){
        return saved.split(",");
    }
    return null;
}