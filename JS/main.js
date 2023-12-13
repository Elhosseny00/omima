let btn = document.querySelector(".btn");
let navLinks = document.querySelector(".navlinks");
btn.addEventListener("click", () => {
  btn.classList.contains("change")
    ? btn.classList.remove("change")
    : btn.classList.add("change");
  navLinks.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !btn.contains(e.target)) {
    navLinks.classList.remove("open");
    btn.classList.remove("change");
  }
});
let year = document.getElementById("year");
let currentYear = new Date().getFullYear();
year.innerHTML = currentYear;
//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues = 0;
var lang;
var score = 0;

var Lesson1questions = [

    {
        question: "تعمد بيئة التعلم الالكترونى على توظيف ",
        choices: ["الوسائط الفائقة", "الوسائط المتعددة", "الوسائط ", "الوسائط الفعالة"],
        answer: 2

    },

    {
        question: "يمكن استخدام بيئات التعلم عبر :",
        choices: ["المدارس", "الطلاب", "الشبكة", "المحتوى"],
        answer: 3

    },
    
    {
        question: "جميع بيئات التعلم الالكترونية",
        choices: ["تفاعلية فقط", "تفاعلية وتزامنية","تزامنيةةفقط "],
        answer: 2

    },
    {
        question: "تعرف بيئة التعلم الالكترونى  ",
        choices: ["dبيئة تزامنية ولاتزامنية", "تستخدم عبر الشبكة", "تفاعلية", "كل ماسبق صحيح"],
        answer: 4

    },
    {
        question: "ذيادة الرغبة فى الوصول للمعلومات من ",
        choices: ["مميزات بيئات التعلم"," اسباب ظهور بيئات التعلم", "اهداف بيئة التعلم", "خصائص بيئات التعلم"],
        answer: 2

    },
    

];

var Lesson2questions = [

    {
        question: "هو محور العملية التعليمية",
        choices: ["المعلم", "المتعلم", "البيئة", "المعلمون"],
        answer: 2

    },
    {
        question: "من خصائص بيئة التعلم الالكترونى انها",
        choices: ["بيئة تعلم مفتوحة", "بيئة مرنة", "متعلم هو محور العملية التعليمية", "كل ماسبق صحيح"],
        answer: 4

    },
    {
        question: "قدرة النظام على شخصنة المحتوى يقصد به ؟",
        choices: ["المرونة", "التكيف والمرونة", "تحسين التفاعلات التعليمية", "تحليل عمليات التعلم"],
        answer: 2

    },
    {
        question: "التكاملية والاستمرارية من ؟",
        choices: ["مميزات بيئة التعلم", "خصائص بيئة التعلم.", "اهداف بيئة التعلم", " مكونات بيئة التعلم"],
        answer: 2

    },
    {
        question: "بيئة يقوم فيها المتعلمون بادخال افكار",
        choices: ["نشطة", "تعاونية", "بنائية", "تكاملية"],
        answer: 3

    },
    

];
var Lesson3questions = [

    {
        question: "انواع التفاعل فى  بيئات التعلم ؟",
        choices: ["معلم مع معلم", "متعلم مع متعلم", "معلم مع محتوى", "كل ماسبق صحيح"],
        answer: 4

    },
    {
        question: " انماط التفاعل فى بيئات التعلم",
        choices: ["متزامن", "غير متزامن", "الاتنين معا", "غير ذلك"],
        answer: 3

    },
    {
        question: "تفاعل  المعلم مع المتعلم  يطرح الاستفسارارات والمشكلات التى تواجهة",
        choices: ["صح", "غلط"],
        answer: 1

    },
    {
        question: "تفاعل المتعلم مع المتعلم يسمى تفاعل؟",
        choices: ["المذوج", "الاقتران", "المدمج", "غير ذلك"],
        answer: 2

    },
    {
        question: "تفاعل المتعلم مع نفسة يسمى تفاعل ذاتى",
        choices: ["غلط", "صح"],
        answer: 2

    },
    {
        question: "تفاعل المحتوى مع المحتوى يعتبر نمطا حديثا",
        choices: ["صح", "غلط"],
        answer: 1

    },
    

];
var Lesson4questions = [

    {
        question: "مراعاة الفروق الفردية بين المتعلمين من ؟",
        choices: ["مبادئ بيئة التعلم", "معايير بيئه التعلم", "تصميم بيئة التعلم", "مبادئ ومعاير تصميم بيئات التعلم"],
        answer: 4

    },
    {
        question: "فى المتطلبات البشرية لايقتصر التعلم بالبيئات الالكترونية على المتعلمين فقط",
        choices: ["صح", "غلط"],
        answer: 1

    },
    {
        question: "بدات البئة التعليمية فى دمج الوسائط المتعددة مثل",
        choices: ["الفديو", "الصوت", "الصورة", "جميع ماسبق"],
        answer: 4

    },
    {
        question: "تعلم المدمج يعتبر مزج بين الدروس ",
        choices: ["غلط", "صح"],
        answer: 2

    },
    {
        question: "متطلبات تقنية تختص بالبرمجيات والشبكات",
        choices: ["غلط", "صح"],
        answer: 2

    },
    {
        question: " متطلبات المادية تتمثل فى توافر الاجهزه ",
        choices: ["صح", "غلط"],
        answer: 1

    },
    

];
var Lesson5questions = [

    {
        question: "يركز التعلم المدمج على دمج العناصر فى العملية التعليمية",
        choices: ["صح", "غلط"],
        answer: 1

    },
    {
        question: "مساعدة الطلاب ذوى الاحتياجات الخاصة من اهمية؟",
        choices: ["بيئات التعلم الالكترونى", "بيئات التعلم المدمج", "المفتوح", "غير ذلك"],
        answer: 2

    },
    {
        question: "توفير وقت وجهد المتعلم من ",
        choices: ["عيوب بيئات التعلم المدمج", "خصائص التعلم المدمج", "مميزات التعلم المدمج", "لا يوجد اجابة صحيحة"],
        answer: 3

    },
    {
        question: "بيئة الكترونية خاصة بالمتعلم",
        choices: ["التشاركية", "بيئة الرقمية", "بيئة شخصية", "جميعهم صحيح"],
        answer: 3

    },
    {
        question: "توافر النبية التحتية لازمة للبيئة",
        choices: ["التشاركية", "الرقمية", "النقالة", "الهيكلية"],
        answer: 3

    },
    {
        question: "خادم بيئة التعلم من مكونات بيئه ؟",
        choices: ["البئة الفردية", "البئة التشاركية", "البيئة النقالة", "البئة الشخصية"],
        answer: 3

    },
    

];





//alert(questions.length);
document.getElementById("score").textContent = "Score : " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";








document.querySelector(".choose-lang").addEventListener("click", function () {

    lang = document.getElementById("language").value + "questions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;

    //    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/For loop Closed/

    //    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click", function () {
    //     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
    //     alert(document.querySelector('input[name="options"]:checked').value);

    if (document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {

        score += 10;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";

    } else {

        score -= 5;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    };

    if (countQues < window[lang].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/For loop Closed/

});

document.querySelector(".view-results").addEventListener("click", function () {

    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = "You Solved " + (countQues + 1) + " questions of " + document.getElementById("language").value;

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".right-wrong").innerHTML = correct + " were Right and " + ((countQues + 1) - correct) + " were Wrong";

    document.getElementById("display-final-score").innerHTML = "Your Final Score is: " + score;

    if (correct / (countQues + 1) > 0.8) {
        document.querySelector(".remark").innerHTML = "Remark: OutStanding ! :)";
    } else if (correct / (countQues + 1) > 0.6) {
        document.querySelector(".remark").innerHTML = "Remark: Good, Keep Improving.";

    } else if (correct / (countQues + 1)) {
        document.querySelector(".remark").innerHTML = "Remark: Satisfactory, Learn More.";
    } else {
        document.querySelector(".remark").innerHTML = "Remark: Unsatisfactory, Try Again.";
    }

    //    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();

});

document.getElementById("about").addEventListener("click", function () {
    alert("Quiz Website Project Created By Digvijay Singh");

});


/Smooth Scroll/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



