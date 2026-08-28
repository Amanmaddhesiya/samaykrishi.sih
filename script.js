const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const modals=[$('#loginModal'),$('#registerModal'),$('#dashboardModal')];
function open(m){m.classList.add('show')}
function closeAll(){modals.forEach(m=>m.classList.remove('show'))}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2600)}
$('#loginTop').onclick=()=>open($('#loginModal')); $('#heroLogin').onclick=()=>open($('#loginModal')); $('#registerBtn').onclick=()=>open($('#registerModal'));
$$('.close').forEach(x=>x.onclick=closeAll);
modals.forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show')}));
$('#toRegister').onclick=()=>{closeAll();open($('#registerModal'))};

function digitsOnly(input,max){input.addEventListener('input',()=>input.value=input.value.replace(/\D/g,'').slice(0,max))}
digitsOnly($('#loginMobile'),10);digitsOnly($('#regMobile'),10);digitsOnly($('#regId'),12);

$$('.role-tabs button').forEach(b=>b.onclick=()=>{$$('.role-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active')});

const T={
en:{tagline:"Hassle-free procurement for farmers.",login:"Login",smartPortal:"Smart Procurement Portal",heroTitle:"Sell your produce without the long wait.",heroText:"Book a procurement slot, track your queue, and know your payment status — all in one simple place.",register:"Register Now",simple:"Simple to use",live:"Live queue updates",secure:"Secure",slot:"Slot Booked",queue:"Queue",features:"Features",everything:"Everything a farmer needs",booking:"Easy Slot Booking",bookingText:"Choose a convenient date and time at your procurement centre.",queueTitle:"Live Queue",queueText:"See your queue position and avoid unnecessary waiting.",alerts:"Smart Alerts",alertsText:"Get timely notifications about slots and procurement.",payment:"Payment Tracking",paymentText:"Track procurement and payment status from one dashboard.",welcome:"Welcome Back",loginSub:"Login to your Samay Krishi account",role:"Login as",mobile:"Mobile Number",password:"Password",continue:"Continue",noAccount:"Don't have an account?",create:"Create your account",registerSub:"Register once and manage procurement easily.",name:"Full Name",aadhaar:"Aadhaar / Farmer ID",village:"Village",createAccount:"Create Account",dashboardSub:"Your procurement journey at a glance.",yourSlot:"Your slot",queuePos:"Queue position",paymentStatus:"Payment status",bookSlot:"Book Procurement Slot",bookSlotSub:"Select centre, date and time",viewQueue:"View Live Queue",viewQueueSub:"Check your current position",procStatus:"Procurement Status",procStatusSub:"Track your produce",paymentTrack:"Payment Tracking",paymentTrackSub:"See payment updates",demoNotice:"Demo mode: live government procurement data can be connected through an official API later."},
hi:{tagline:"किसानों के लिए आसान खरीद प्रक्रिया।",login:"लॉगिन",smartPortal:"स्मार्ट खरीद पोर्टल",heroTitle:"लंबे इंतज़ार के बिना अपनी उपज बेचें।",heroText:"खरीद स्लॉट बुक करें, अपनी कतार देखें और भुगतान की स्थिति जानें — सब एक ही जगह।",register:"अभी पंजीकरण करें",simple:"उपयोग में आसान",live:"लाइव कतार अपडेट",secure:"सुरक्षित",slot:"स्लॉट बुक",queue:"कतार",features:"सुविधाएँ",everything:"किसान के लिए जरूरी सभी सुविधाएँ",booking:"आसान स्लॉट बुकिंग",bookingText:"अपने खरीद केंद्र पर सुविधाजनक तारीख और समय चुनें।",queueTitle:"लाइव कतार",queueText:"अपनी कतार की स्थिति देखें और अनावश्यक इंतज़ार से बचें।",alerts:"स्मार्ट अलर्ट",alertsText:"स्लॉट और खरीद से जुड़े समय पर नोटिफिकेशन पाएं।",payment:"भुगतान ट्रैकिंग",paymentText:"खरीद और भुगतान की स्थिति एक ही डैशबोर्ड से देखें।",welcome:"स्वागत है",loginSub:"अपने समय कृषि खाते में लॉगिन करें",role:"लॉगिन करें",mobile:"मोबाइल नंबर",password:"पासवर्ड",continue:"आगे बढ़ें",noAccount:"खाता नहीं है?",create:"अपना खाता बनाएं",registerSub:"एक बार पंजीकरण करें और खरीद प्रक्रिया आसान बनाएं।",name:"पूरा नाम",aadhaar:"आधार / किसान आईडी",village:"गाँव",createAccount:"खाता बनाएं",dashboardSub:"आपकी खरीद प्रक्रिया एक नज़र में।",yourSlot:"आपका स्लॉट",queuePos:"कतार में स्थान",paymentStatus:"भुगतान स्थिति",bookSlot:"खरीद स्लॉट बुक करें",bookSlotSub:"केंद्र, तारीख और समय चुनें",viewQueue:"लाइव कतार देखें",viewQueueSub:"अपनी वर्तमान स्थिति देखें",procStatus:"खरीद स्थिति",procStatusSub:"अपनी उपज ट्रैक करें",paymentTrack:"भुगतान ट्रैकिंग",paymentTrackSub:"भुगतान अपडेट देखें",demoNotice:"डेमो मोड: वास्तविक सरकारी खरीद डेटा को बाद में आधिकारिक API से जोड़ा जा सकता है।"}};
let lang='en';
function applyLang(){document.documentElement.lang=lang;$$('[data-i18n]').forEach(e=>{let k=e.dataset.i18n;if(T[lang][k])e.textContent=T[lang][k]});$('#langBtn').textContent=lang==='en'?'हिंदी':'English'}
$('#langBtn').onclick=()=>{lang=lang==='en'?'hi':'en';applyLang();toast(lang==='hi'?'भाषा हिंदी में बदल गई।':'Language changed to English.')};

$('#doRegister').onclick=()=>{
 let n=$('#regName').value.trim(),m=$('#regMobile').value,id=$('#regId').value,v=$('#regVillage').value.trim(),p=$('#regPass').value;
 if(!n||m.length!==10||id.length!==12||!v||p.length<4){toast(lang==='hi'?'कृपया सभी जानकारी सही भरें।':'Please enter all details correctly.');return}
 localStorage.setItem('skUser',JSON.stringify({name:n,mobile:m,id,village:v}));
 toast(lang==='hi'?'पंजीकरण सफल! अब लॉगिन करें।':'Registration successful! Please login.');
 setTimeout(()=>{closeAll();open($('#loginModal'));$('#loginMobile').value=m},600)
};
$('#doLogin').onclick=()=>{
 let m=$('#loginMobile').value,p=$('#loginPass').value;
 if(m.length!==10||!p){toast(lang==='hi'?'10 अंकों का मोबाइल नंबर और पासवर्ड डालें।':'Enter a valid 10-digit mobile number and password.');return}
 let u=JSON.parse(localStorage.getItem('skUser')||'null');
 $('#dashGreeting').textContent=(lang==='hi'?'नमस्ते, ':'Namaste, ')+(u?.name||'Farmer')+'!';
 closeAll();open($('#dashboardModal'));toast(lang==='hi'?'डैशबोर्ड खुल गया।':'Welcome to your dashboard.');
};
function demoAction(type){
 const msg={slot:'Slot booking screen is ready for API integration.',queue:'Live queue module is ready for real-time integration.',status:'Procurement status module is ready.',payment:'Payment tracking module is ready.'}[type];
 toast(lang==='hi'?'यह डेमो मॉड्यूल है — '+msg:msg);
}
applyLang();
