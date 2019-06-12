var language = "ar"

function setLangButton() {
if (language == "en") {
    return setLang('ar');
  } else if (language == "ar") {
    return setLang('en');
  }
}


setLang(language);

function setLang(language){
    document.getElementById("title").innerHTML = localize("Title", language);
    document.getElementById("title2").innerHTML = localize("Title2", language);
    document.getElementById("langpicker").innerHTML = localize("langPicker", language);
    document.getElementById("preorder").innerHTML = localize("preOrder", language);

    document.getElementById("home1").innerHTML = localize("homeButton", language);
    document.getElementById("aboutus").innerHTML = localize("aboutusButton", language);
    document.getElementById("ourproject").innerHTML = localize("ourProject", language);
    // document.getElementById("storie").innerHTML = localize("storiesButton", language);
    document.getElementById("careers").innerHTML = localize("Careers", language);
    document.getElementById("contactus").innerHTML = localize("contactButton", language);

    document.getElementById("aboutussection").innerHTML = localize("aboutUsSection", language);
    document.getElementById("aboutusp").innerHTML = localize("aboutusP", language);

    document.getElementById("ourprojectsectitle").innerHTML = localize("ourProject", language);
    document.getElementById("ourprojectsecbody").innerHTML = localize("ourProjectSecBody", language);
    document.getElementById("villalalbairgmobarez").innerHTML = localize("albairagMobaraz", language);
    document.getElementById("villalalbairgdammam").innerHTML = localize("villalalbairgDammam", language);
    document.getElementById("villalsama").innerHTML = localize("villalSama", language);

    document.getElementById("careerssec").innerHTML = localize("Careers", language);
    document.getElementById("careersdisc").innerHTML = localize("careersDisc", language);
    document.getElementById("applynow").innerHTML = localize("applyNow", language);

    document.getElementById("newssec").innerHTML = localize("newsSec", language);

    document.getElementById("partnerssec").innerHTML = localize("partnersSec", language);

    document.getElementById("usefullink").innerHTML = localize("usefulLink", language);
    document.getElementById("footerhome").innerHTML = localize("homeButton", language);
    document.getElementById("footeraboutus").innerHTML = localize("aboutusButton", language);
    document.getElementById("footerourproject").innerHTML = localize("ourProject", language);
    document.getElementById("footercareers").innerHTML = localize("Careers", language);
    document.getElementById("footercontactus").innerHTML = localize("contactButton", language);


    document.getElementById("address").innerHTML = localize("Address", language);
    // document.getElementById("address").innerHTML = localize("Address", language);



}

function localize(txt, language){
    var lclzedText;
    switch(language){
        case "en" :
        if(txt == "Title")
        lclzedText = "Innovest Propertiese";
        if(txt == "Title2")
        lclzedText = "Sustainable and vibrant <span>modern societies</span>";
        if(txt == "langPicker")
        lclzedText = "عربي";
        if(txt == "preOrder")
        lclzedText = "Record your interest";
        if(txt == "homeButton")
        lclzedText = "home";
        if(txt == "aboutusButton")
        lclzedText = "About US";
        if(txt == "ourProject")
        lclzedText = "Our Projects";
        if(txt == "storiesButton")
        lclzedText = "Stories";
        if(txt == "Careers")
        lclzedText = "Careers";
        if(txt == "contactButton")
        lclzedText = "Contact us";
        if(txt == "aboutUsSection")
        lclzedText = "About US";
        if(txt == "aboutusP")
        lclzedText = "Innovest Properties Company, specialized and focused on properties development sector. Adopt innovative ways of building energy-saving and raising standards of quality of life. The company is committed to developing a fully-fledged residential project. Innovest has teamed up with leading local companies and pioneered the use of smart building technology, rapid construction of homes and giant international companies in implementing residential units in record time";
        if(txt == "ourProjectSecBody")
        lclzedText = "We are working to provide the best innovative solutions for sustainable residential properties that meet the family's aspirations and keep up with the urban development in Saudi Arabia.";
        if(txt == "albairagMobaraz")
        lclzedText = "Villas Al-bairag Al-Mobaraz";
        if(txt == "villalalbairgDammam")
        lclzedText = "Villas Al-bairag Al-Dammam";
        if(txt == "villalSama")
        lclzedText = "Villas Sama";
        if(txt == "careersDisc")
        lclzedText = "JOB OPPORTUNITIES FOR AMBITIOUS YOUTH";
        if(txt == "applyNow")
        lclzedText = "Apply Now";
        if(txt == "newsSec")
        lclzedText = "Company News";
        if(txt == "partnersSec")
        lclzedText = "Partners";
        if(txt == "usefulLink")
        lclzedText = "Useful Link";
        if(txt == "Address")
        lclzedText = "Alkubar<br>Saudi Arabia <br><strong>Phone:</strong> +966 03 591 0006<br><strong>Email:</strong> info@innovest.com.sa<br>";
        break;

        case "ar" :
        if(txt == "Title")
        lclzedText = "انوفست العقارية";
        if(txt == "Title2")
        lclzedText = "مجتمعات عصرية <span>مستدامة وحيوية </span>";
        if(txt == "langPicker")
        lclzedText = "English";
        if(txt == "preOrder")
        lclzedText = "التسجيل المبكر";
        if(txt == "homeButton")
        lclzedText = "الرئيسية";
        if(txt == "aboutusButton")
        lclzedText = "لمحة عن إنوڤست";
        if(txt == "ourProject")
        lclzedText = "مشاريعنا";
        if(txt == "storiesButton")
        lclzedText = "قصتنا";
        if(txt == "Careers")
        lclzedText = "التوظيف";
        if(txt == "contactButton")
        lclzedText = "أتصل بنا";
        if(txt == "aboutUsSection")
        lclzedText = "لمحة سريعة";
        if(txt == "aboutusP")
        lclzedText = " انوفست العقارية هي شركة متخصصة تركز نشاطها في قطاع التطوير العقاري. تعتمد على طرق مبتكرة في البناء لتوفير الطاقة ورفع معايير جودة الحياة. ويقع على عاتقها تطوير واداة مشاريع سكنية متميزة بالكامل وقد تحالفت انوفست مع شركات محلية مرموقة ورائدة في استخدام تقنية البناء الذكية و السريعة في انشاء المسكن وشركات دولية عملاقة في تنفيذ وحدات سكنية في وقت قياسي .";
        if(txt == "ourProjectSecBody")
        lclzedText = "نعمل على أن نقدم أفضل الحلول المبتكرة لمساكن نموذجية مستدامة تلبي تطلعات الأسرة ومواكبة النهضة العمرانية في المملكة العربية السعودية.";
        if(txt == "albairagMobaraz")
        lclzedText = "فلل البيرق المبرز";
        if(txt == "villalalbairgDammam")
        lclzedText = "فلل البيرق الدمام";
        if(txt == "villalSama")
        lclzedText = "فلل سما";
        if(txt == "careersDisc")
        lclzedText = "فرص عمل لشباب طموح";
        if(txt == "applyNow")
        lclzedText = "تقدم بطلب التوظيف";
        if(txt == "newsSec")
        lclzedText = "آخبار الشركة";
        if(txt == "partnersSec")
        lclzedText = "شركائنا";
        if(txt == "usefulLink")
        lclzedText = "روابط مهمة";
        if(txt == "Address")
        lclzedText = "الخبر<br>المملكة العربية السعودية <br><strong>Phone:</strong> +966 03 591 0006 <br><strong>الإيميل:</strong> info@innovest.com.sa<br>";
        break;
    }
    return lclzedText;
}