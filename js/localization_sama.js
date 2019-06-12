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
    document.getElementById("langpicker").innerHTML = localize("langPicker", language);

    document.getElementById("home1").innerHTML = localize("homeButton", language);
    document.getElementById("aboutus").innerHTML = localize("aboutusButton", language);
    document.getElementById("ourproject").innerHTML = localize("ourProject", language);
    document.getElementById("contactus").innerHTML = localize("contactButton", language);

    document.getElementById("aboutussection").innerHTML = localize("aboutUsSection", language);
    document.getElementById("aboutusp").innerHTML = localize("aboutusP", language);

    document.getElementById("advantages").innerHTML = localize("ourProject", language);
    document.getElementById("housingunits").innerHTML = localize("housingUnits", language);
    document.getElementById("housingunitsnumber").innerHTML = localize("housingUnitsNumber", language);
    document.getElementById("Dateofdelivery").innerHTML = localize("DateofDelivery", language);
    document.getElementById("Dateofdeliveryd").innerHTML = localize("DateofDeliveryD", language);
    document.getElementById("constructionalguarantee").innerHTML = localize("constructionalGuarantee", language);
    document.getElementById("constructionalguaranteel").innerHTML = localize("constructionalGuaranteeL", language);
    document.getElementById("location").innerHTML = localize("Location", language);
    document.getElementById("locationd").innerHTML = localize("LocationD", language);
    document.getElementById("energysaving").innerHTML = localize("EnergySaving", language);
    document.getElementById("energysavingd").innerHTML = localize("EnergySavingD", language);
    document.getElementById("uniqueness").innerHTML = localize("Uniqueness", language);
    document.getElementById("uniquenessd").innerHTML = localize("UniquenessD", language);

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
        lclzedText = "Advantages";
        if(txt == "storiesButton")
        lclzedText = "Stories";
        if(txt == "Careers")
        lclzedText = "Careers";
        if(txt == "contactButton")
        lclzedText = "Contact us";
        if(txt == "aboutUsSection")
        lclzedText = "About US";
        if(txt == "aboutusP")
        lclzedText = "روعي في تصاميم فلل البيرق أفضل المواصفات والتشطيبات الأنيقة من قبل مهندسين متمرسين حائزين على جوائز محلية وعالمية , مما يعكس الإلتزام بجودة عالية والإهتمام بالتفاصيل. في منطقة لا تنفك تنمو وتتطور وتوفر خدمات ترفيه ومراكز تسوق تلبي كافة إحتياجاتك";
        if(txt == "housingUnits")
        lclzedText = "Number of housing units";
        if(txt == "housingUnitsNumber")
        lclzedText = "959 Units";
        if(txt == "DateofDelivery")
        lclzedText = "Date of Delivery";
        if(txt == "DateofDeliveryD")
        lclzedText = "2020";
        if(txt == "constructionalGuarantee")
        lclzedText = "Constructional Guarantee";
        if(txt == "constructionalGuaranteeL")
        lclzedText = "For ten years";
        if(txt == "Location")
        lclzedText = "Location";
        if(txt == "LocationD")
        lclzedText = "A unique location in a growing and developing area";
        if(txt == "EnergySaving")
        lclzedText = "Energy Saving";
        if(txt == "EnergySavingD")
        lclzedText = "Modern systems provide water and electricity consumption";
        if(txt == "Uniqueness")
        lclzedText = "Uniqueness";
        if(txt == "UniquenessD")
        lclzedText = "Innovative and quality design";
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
        lclzedText = "لمحة عن البيرق";
        if(txt == "ourProject")
        lclzedText = "المميزات";
        if(txt == "storiesButton")
        lclzedText = "قصتنا";
        if(txt == "Careers")
        lclzedText = "التوظيف";
        if(txt == "contactButton")
        lclzedText = "أتصل بنا";
        if(txt == "aboutUsSection")
        lclzedText = "لمحة سريعة";
        if(txt == "aboutusP")
        lclzedText = "روعي في تصاميم فلل البيرق أفضل المواصفات والتشطيبات الأنيقة من قبل مهندسين متمرسين حائزين على جوائز محلية وعالمية , مما يعكس الإلتزام بجودة عالية والإهتمام بالتفاصيل. في منطقة لا تنفك تنمو وتتطور وتوفر خدمات ترفيه ومراكز تسوق تلبي كافة إحتياجاتك";
        if(txt == "housingUnits")
        lclzedText = "عدد الوحداتروابط مهمة";
        if(txt == "housingUnitsNumber")
        lclzedText = "٩٥٩ وحدة";
        if(txt == "DateofDelivery")
        lclzedText = "تاريخ التسليم";
        if(txt == "DateofDeliveryD")
        lclzedText = "٢٠٢٠";
        if(txt == "constructionalGuarantee")
        lclzedText = "الضمان الإنشاىي";
        if(txt == "constructionalGuaranteeL")
        lclzedText = "لمدة عشر سنوات";
        if(txt == "Location")
        lclzedText = "الموقع";
        if(txt == "LocationD")
        lclzedText = "موقع مميز في منطقة تنمو وتتطور";
        if(txt == "EnergySaving")
        lclzedText = "توفير للطاقة";
        if(txt == "EnergySavingD")
        lclzedText = "انظمة حديثة توفر من استهلاك الماء والكهرباء";
        if(txt == "Uniqueness")
        lclzedText = "تميز";
        if(txt == "UniquenessD")
        lclzedText = "التصميم المبتكر وجودة التصميم";
        if(txt == "usefulLink")
        lclzedText = "روابط مهمة";
        if(txt == "Address")
        lclzedText = "الخبر<br>المملكة العربية السعودية <br><strong>Phone:</strong> +966 03 591 0006 <br><strong>الإيميل:</strong> info@innovest.com.sa<br>";
        break;
    }
    return lclzedText;
}