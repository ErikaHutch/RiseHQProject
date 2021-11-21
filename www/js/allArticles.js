$(function() {
    var articleContainer = $('#articles-area-wrapper');
    for (let i = 0; i < articles.length; i++) {
        $(articleContainer).html(($(articleContainer).html()+articles[i].articlePreview()));
    }
    hearts = $(".heartButton");
    for (let i = 0; i < hearts.length; i++) {
        if(CheckArticle(hearts[i].id)== 1){
            $(hearts[i]).addClass("on");
        }
        
    }
});