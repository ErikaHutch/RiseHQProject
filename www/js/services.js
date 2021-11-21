class Service{
    constructor(imgLink, type, text, description, link, location){
        this.imgLink = imgLink;
        this.type = type;
        this.text =text;
        this.description = description;
        this.link = link;
        this.location = location;
        
    }
    articlePreview(){
        var out  = "";
        out += "<div class='article-wrapper border"+this.type+"'>";
        out += '<button id="'+this.id+'" class="heartButton" onclick="HeartClick(this)"></button>';
        out += '<a href="'+this.link+'"><h2 id="article-title" class="col'+this.type+'">'+this.title+'</h2>';
        out += '<p id="article-body">'+this.description+'</p>';
        out += '</div></a>'
        return out;
    }
}


services = [];
services.push( new Service(
    
));