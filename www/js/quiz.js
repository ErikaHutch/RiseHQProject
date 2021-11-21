class Question{
    constructor(questionHead, question, inputHtml, storage){
        this.head = questionHead;
        this.question = question;
        this.inputHtml = inputHtml

        this.storageKey = storage; 
    }
}
var username ="[name]";
var questionIndex = 0;
function hideFooter(bool){
    var footer = $("#okButton")[0];

    if(bool){
        $(footer).addClass("hidden");
    }
    else{
        $(footer).removeClass("hidden");
    }
}

function nextQuestion(){
   
    if (questionIndex  == 0){
        nameFunc();
    } //replace later
    questionIndex += 1;
    
    if(questionIndex >= questions.length){
        hideFooter(true);
        console.log("end");
    }
    else{
        saveAnswer1(questionIndex-1).then(function(){
            loadQuestion(questionIndex);

            clickDot(questionIndex);
            hideFooter(false);
            if(questionIndex == questions.length-1){
                hideFooter(true);
            }
        }
        );

    }
}
function clickDot(index){
    if (questionIndex  == 0){
        nameFunc();
    } //replace later

    var children = $("#dots").children();
    children.removeClass("selectedDot");
    $(children[index]).addClass("selectedDot");
    saveAnswer1(questionIndex);
    questionIndex = index;
    
    loadQuestion(index);
    if(questionIndex == questions.length-1){
        hideFooter(true);
    }
    else{
        hideFooter(false);
    }
}
function loadQuestion(index){
    console.log(index);
    question = questions[index];
    console.log(question);
    qhead = document.getElementById("questionHead");
    console.log(qhead);
    qhead.innerHTML = question.head;
    pageQuestion = document.getElementById("question");
    pageQuestion.innerHTML = question.question;
    input =  document.getElementById("inputDiv");
    input.innerHTML = question.inputHtml;
}
function createDots(){
    dots = $("#dots");
    for (let i = 0; i < questions.length; i++) {
        $(dots).append("<span onclick='clickDot("+i+")'></span>");
        
    }
}  
questionIndex = 0;
questions = [];
questions.push(new Question("Preferred Name", "First please, tell us, what is your preferred name?", " <input id='answer' class='inputName' placeholder='Your Name...'>", "name"));
questions.push(new Question("Welcome [name] to Rise HQ","We know you’re unique, and at RISE HQ we’re all about making sure what you see relates to you.\n So we’d like to take you through some choices so that what you see is what you need.",null,null));
questions.push(new Question("Disclaimer and consent", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus ipsum, eget facilisis felis. Sed
tincidunt quis felis imperdiet gravida. Etiam ultrices tellus leo. Suspendisse finibus aliquet aliquet.
<br><br>
Proin finibus dolor ex, ac placerat diam mollis nec. Sed tincidunt maximus fermentum. Curabitur facilisis
est at
lobortis porttitor. Mauris elementum fringilla nunc, sit amet scelerisque arcu finibus eu. Integer suscipit
nisl sem, ultricies sollicitudin elit venenatis et.
<br><br><br>
Read all our <a href="#"><span style="color: blue"> Terms and conditions</span></a> here
<br><br><br>
<input type="checkbox" id="answer" name="consent">
<label for="consent">I have read and agree to all Terms and conditions</label>`,"terms" ));
questions.push(new Question("Choose your journey", `We know you’re unique, and at RISE HQ we’re all about making sure what you see relates to you.
So we’d like to take you through some choices so that what you see is what you need.`, `<div class="journeyChoice">
<!--Containre for question element-->
<form id="journeyChoice" action="#">
    <!--<input id="answer" type="text" list="date" placeholder="Your journey">
    <datalist id="date">-->
        <select>
            <option>Your Journey</option>
        <option value="Puberty">Puberty</option>
        <option value="Pregnancy">Pregnancy</option>
        <option value="Periods">Periods</option>
        <option value="Post Fertility">Post Fertility</option>
        <option value="Hormones">Hormones</option>
        <option value="Fertility">Fertility</option>
        <option value="Infertility">Infertility</option>
        <option value="Pregnancy Loss">Pregnancy Loss</option>
        <option value="Contraception">Contraception</option>
        </select>
    <!--</datalist>-->
</form>

</div>`, "journey1"));
questions.push(new Question("Choose your journey", "Lastly What would you like to know more about in your life?", `            <div class="journeyChoice">
<!--Containre for question element-->
<form action="#" id="journeyChoice">
    <!--<input type="text" list="date" id="answer" placeholder="Your journey">
    <datalist id="date">-->
    <select>
        <option>Your Journey</option>
        <option value="Pensions">Pensions</option>
        <option value="Sex">Sex</option>
        <option value="Body Health">Body Health</option>
        <option value="Fitness">Fitness</option>
        <option value="Food">Food</option>
        <option value="Mental Health">Mental Health</option>
        <option value="Finances">Finances</option>
        <option value="Parenthood">Parenthood</option>
        <option value="Relationships">Relationships</option>
    </select>
    <!--</datalist>-->
</form>

</div>`, "journey2"))
questions.push(new Question("Last bits", `Finally, we like to send you posts which cover important information we think all RISERS might
like to know about. Are you happy for us to do this? (you can just swipe left on any content you don’t want
to see).`, `<div class="postsDiv">
<p class="posts"> Example one </p>
<p class="posts">Example two</p>
<p class="posts">Example three</p>
</div>`, "girlIDK"))
questions.push(new Question("Thanks [name]! That's you set", "We know life’s a journey and things change. If they do you can update your preferences anytime in your settings.", `<div class="links">
<p> Get the</p>
<p class="posts" style="background-color: #3fd4c2;"><a href="#"> Tour </a></p>

<p> or </p>

<p> go straight to</p>
<p class="posts" style="background-color: #3fd4c2;"><a href="../articles.html"> Your Journey </a></p>
</div>`))

$(function() {
    createDots();
    clickDot(0);
    loadQuestion(0);
});

function nameFunc(){
    var name = window.localStorage.getItem("name");
    questions.forEach(q => {
       q.head = q.head.replace("[name]", name)
    });
}
async function getAnswer(){
    var val = await document.getElementById("answer");
    if(val != null){
        return await Promise.resolve(val.value);
    }
    return await  Promise.resolve(null);;
}
function getAnswer1(){
    var val = document.getElementById("answer");
    if(val != null){
        return val.value;
    }
    return null;
}
function saveAnswer(index){
    getAnswer().then((value) =>
        window.localStorage.setItem(questions[index].storageKey, value)
    );
}
async function saveAnswer1(index){
    await window.localStorage.setItem(questions[index].storageKey, getAnswer1())
    return  await Promise.resolve(true);;
}