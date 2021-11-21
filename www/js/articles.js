class Article{
    constructor(id, link, title, desc, content, type, tags){
        this.id =id
        this.link = link;
        this.title = title
        this.description =   desc;
        this.content = content;
        this.type = type
        this.tags = tags
        
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

function HeartClick(button){
    art = CheckArticle(button.id);
    console.log(art);
    if(art == 1){
        $(button).removeClass("on");
        RemoveArticle(button.id);
    }
    else{
        $(button).addClass("on");
        SaveArticle(button.id);
    }
    
    
    window.localStorage.getItem("articles");
    
}
function SaveArticle(articleID){
    out = "";
    art = CheckArticle(articleID);
    if(art == -1){
        window.localStorage.setItem("articles", articleID.toString());        
    }
    else if(art == 0){
        out = window.localStorage.getItem("articles");
        out += ","+ articleID.toString();
        window.localStorage.setItem("articles", out);
    }
   
}
function RemoveArticle(articleId){
    out = "";
    art = CheckArticle(articleId);
    if(art ==1 ){
        arts = GetSavedArticles();
        out = arts.filter(val => val != articleId.toString());
        window.localStorage.setItem("articles", out.toString());

    }
    
}
function CheckArticle(articleId){
    saved  =window.localStorage.getItem("articles");
    var split;
    if(saved != null){
        split = saved.split(",");
        if(split.includes(articleId.toString())){
            return 1;
        }
        else{
            return 0;
        }
    }
    return -1; 
}
function GetSavedArticles(){
    saved  =window.localStorage.getItem("articles");
    var split;
    if(saved != null){
        return saved.split(",");
    }
    return null;
}
