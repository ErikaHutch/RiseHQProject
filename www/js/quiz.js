class Question{
    constructor(questionHead, question, inputType){
        this.head = questionHead;
        this.question = question;
        this.inputType = inputType
    }
}
function changeQuestion(){
    questions
}
function loadQuestion(){
    question = questions[0];
    console.log(question);
    qhead = document.getElementById("questionHead");
    console.log(qhead);
    qhead.innerHTML = question.head;
    pageQuestion = document.getElementById("question");
    pageQuestion.innerHTML = question.question;
    input =  document.getElementById("inputDiv");
    input.innerHTML = question.input;
}
questionIndex = 0;
questions = [];
questions.push(new Question("Preferred Name", "First please, tell us, what is your preferred name?", "input"));
questions.push(new Question("Welcome [name] to RiseHQ","We know you’re unique, and at RISE HQ we’re all about making sure what you see relates to you.\n So we’d like to take you through some choices so that what you see is what you need.", ""));
questions.push(new Question("Disclaimer and consent", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus ipsum, eget facilisis felis. Sed
+tincidunt quis felis imperdiet gravida. Etiam ultrices tellus leo. Suspendisse finibus aliquet aliquet.
+<br><br>
+Proin finibus dolor ex, ac placerat diam mollis nec. Sed tincidunt maximus fermentum. Curabitur facilisis
+est at
lobortis porttitor. Mauris elementum fringilla nunc, sit amet scelerisque arcu finibus eu. Integer suscipit
nisl sem, ultricies sollicitudin elit venenatis et.
<br><br><br>
Read all our <a href="#"><span style="color: blue"> Terms and conditions</span></a> here
<br><br><br>`, `<input type="checkbox" id="consent" name="consent">
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
//question.push(new Question())

loadQuestion();