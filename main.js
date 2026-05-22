// ===============================
// ملف جمالي احترافي للموقع
// باسم: main.js
// ===============================

// رسالة ترحيب احترافية
window.addEventListener("load", () => {
    setTimeout(() => {
        const welcome = document.createElement("div");

        welcome.innerHTML = "🇸🇦 مرحباً بك في موقع تأجير المعدات الثقيلة";
        welcome.style.position = "fixed";
        welcome.style.top = "20px";
        welcome.style.right = "20px";
        welcome.style.background = "#0b6623";
        welcome.style.color = "#fff";
        welcome.style.padding = "15px 25px";
        welcome.style.borderRadius = "12px";
        welcome.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
        welcome.style.zIndex = "9999";
        welcome.style.fontSize = "18px";
        welcome.style.transition = "0.5s";

        document.body.appendChild(welcome);

        setTimeout(() => {
            welcome.style.opacity = "0";
            welcome.style.transform = "translateY(-20px)";
        }, 4000);

    }, 1000);
});

// ===============================
// تأثير ظهور البطاقات عند النزول
// ===============================
const cards = document.querySelectorAll(".equipment-card");

const showCards = () => {
    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", showCards);

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(80px)";
    card.style.transition = "0.7s ease";
});

// ===============================
// تأثير تكبير الصور
// ===============================
const images = document.querySelectorAll(".equipment-card img");

images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.08)";
        img.style.transition = "0.4s";
        img.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
        img.style.boxShadow = "none";
    });
});

// ===============================
// تغيير لون الهيدر عند التمرير
// ===============================
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#0b6623";
        header.style.backdropFilter = "blur(10px)";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.background = "#222";
        header.style.boxShadow = "none";
    }
});

// ===============================
// تأثير زر الطلب
// ===============================
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.background = "#0b6623";
        btn.style.transition = "0.3s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
        btn.style.background = "#28a745";
    });

});

// ===============================
// عداد زوار وهمي احترافي
// ===============================
const counter = document.createElement("div");

counter.style.position = "fixed";
counter.style.bottom = "20px";
counter.style.left = "20px";
counter.style.background = "#222";
counter.style.color = "#fff";
counter.style.padding = "12px 20px";
counter.style.borderRadius = "10px";
counter.style.fontSize = "16px";
counter.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
counter.style.zIndex = "9999";

document.body.appendChild(counter);

let visitors = 1200;

setInterval(() => {
    visitors += Math.floor(Math.random() * 3);

    counter.innerHTML = `👥 عدد الزوار اليوم: ${visitors}`;
}, 2000);

// ===============================
// تأثير حركة الخلفية
// ===============================
document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.body.style.backgroundPosition = `${x * 30}px ${y * 30}px`;

});

// ===============================
// زر العودة للأعلى
// ===============================
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#0b6623";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// تأثير كتابة العنوان
// ===============================
const title = document.querySelector("h1");

if(title){

    const text = title.innerHTML;
    title.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        title.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){
            clearInterval(typing);
        }

    }, 100);

}
// النافذة 
function showInfo(title, description, images){

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-title").innerHTML = title;

    document.getElementById("popup-description").innerHTML = description;

    const gallery = document.getElementById("gallery");

    // تنظيف الصور القديمة
    gallery.innerHTML = "";

    // اضافة الصور الجديدة
    images.forEach(image => {

        const img = document.createElement("img");

        img.src = image;

        img.classList.add("gallery-image");

        gallery.appendChild(img);

    });

}

function closePopup(){

    document.getElementById("popup").style.display = "none";

}