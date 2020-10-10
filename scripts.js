// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى
var image = document.getElementById(`image`);
image.src = "./images/sun.jpg";
// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر
var title = document.getElementById(`caption`);
console.log(title.innerHTML);
title.innerHTML = `الشمس`;
// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function planet() {
    var image = document.getElementById(`image`);
    var title = document.getElementById(`caption`);
    let body = document.getElementsByTagName(`body`)[0];

    if(title.innerHTML==`القمر`){
        title.innerHTML=`الشمس`;
        image.src = "./images/sun.jpg";
        body.style.backgroundColor = `#ffd500`
    } else {
       
        title.innerHTML=`القمر`;
        image.src="./images/moon.jpg";
        body.style.backgroundColor=`#d3d3d3`
    }
 
}
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
