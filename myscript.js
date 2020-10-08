// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او

function driving(age) {
  if (age >= 18) {
    console.log(` 🚘😍 مبروك سوف تحصل على الليسن
`);
  } else {
    console.log(`😢 للاسف عمرك لا يسمح`);
  }
}



driving(17)
driving(19)
// لا تنسى أن تنادي الدالة
function driving()
// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

// 👇 هنا array عرف المصفوفة او

let icecream = ["chocolate", "oreo", "vanilla", "strawberry"];

for (let flavors of icecream) {
  console.log(flavors);
}

// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام

// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام

let flavors = [
  { name: "chocolate" },
  { name: "oreo" },
  { name: "vanilla" },
  { name: "strawberry" },
];

function myIceCream(flavors) {
  console.log(`${flavors.name} is my favorite flavor`);
}

let movies = ["spider man", "sonic", "the grinch"];

function favorite() {
  let counter = 0;

  while (counter < 10) {
    counter = counter + 1;

    console.log("my favorite movies" + counter);
  }
}
