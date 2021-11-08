class Question{
    constructor(questionHead, question, inputHtml){
        this.head = questionHead;
        this.question = question;
        this.inputHtml = inputHtml
    }
}
var index = 0;
function nextQuestion(){
    index += 1;
    if(index >= questions.length){
        //redirect
        console.log("end");
    }
    else{
        loadQuestion(index);
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
        $(dots).append("<span onclick='loadQuestion("+i+")'></span>");
        
    }
}  
questionIndex = 0;
questions = [];
questions.push(new Question("Preferred Name", "First please, tell us, what is your preferred name?", "<input id='inputName' placeholder='Your Name...'>"));
questions.push(new Question("Welcome [name] to Rise HQ","We know you’re unique, and at RISE HQ we’re all about making sure what you see relates to you.\n So we’d like to take you through some choices so that what you see is what you need.", ""));
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
<input type="checkbox" id="consent" name="consent">
<label for="consent">I have read and agree to all Terms and conditions</label>`));
questions.push(new Question("Choose your journey", `We know you’re unique, and at RISE HQ we’re all about making sure what you see relates to you.
So we’d like to take you through some choices so that what you see is what you need.`,`
<input type="text" list="date" placeholder="Your journey">
<datalist id="date">
    <option value="Puberty">
    <option value="Pregnancy">
    <option value="Periods">
    <option value="Post Fertility">
    <option value="Hormones">
    <option value="Fertility">
    <option value="Infertility">
    <option value="Pregnancy Loss">
    <option value="Contraception">
</datalist>`, ""));
questions.push(new Question("Choose your journey", "Lastly What would you like to know more about in your life?", `<select>
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
</select>`))
questions.push(new Question("Last bits", `Finally, we like to send you posts which cover important information we think all RISERS might
like to know about. Are you happy for us to do this? (you can just swipe left on any content you don’t want
to see).`, `<div class="postsDiv">
<p class="posts"> Example one </p>
<p class="posts">Example two</p>
<p class="posts">Example three</p>
</div>`))
questions.push(new Question("Thanks [name]! That's you set", "We know life’s a journey and things change. If they do you can update your preferences anytime in your settings.", `<div class="links">
<p> Get the</p>
<p class="posts" style="background-color: #3fd4c2;"><a href="#"> Tour </a></p>

<p> or </p>

<p> go straight to</p>
<p class="posts" style="background-color: #3fd4c2;"><a href="../articles.html"> Your Journey </a></p>
</div>`))

$(function() {
    createDots();
    loadQuestion(0);
});