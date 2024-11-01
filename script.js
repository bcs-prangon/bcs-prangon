// Mock user data
const USERS = [
    { id: "A47001", name: "A. K. MOHIBUL ISLAM", password: "X1uw" },
    { id: "A47002", name: "Abdulla Al Munna", password: "P5xv" },
    { id: "A47003", name: "ABM SADIK", password: "J2dy" },
    { id: "A47004", name: "Afroja Aktar", password: "X6wf" },
    { id: "A47005", name: "Anamika Saha", password: "G3un" },
    { id: "A47006", name: "Asif Ahmmed ", password: "M6to" },
    { id: "A47007", name: "Atkiya Samiha ", password: "S9jz" },
    { id: "A47008", name: "Bilkis", password: "Q2ud" },
    { id: "A47009", name: "Bilkis Khatun", password: "O3zs" },
    { id: "A47010", name: "Camelia Khan", password: "F8rf" },
    { id: "A47011", name: "Chinmoy Dev Nath ", password: "C3mi" },
    { id: "A47012", name: "Chumky Lodh", password: "X9wt" },
    { id: "A47013", name: "Dilruba Khondokar Bithe ", password: "V1xf" },
    { id: "A47014", name: "DIPTO ", password: "Z1kc" },
    { id: "A47015", name: "Farhan SupTo", password: "G7sn" },
    { id: "A47016", name: "Faria Hossain ", password: "H2ma" },
    { id: "A47017", name: "Fariza Taskia ", password: "D7lt" },
    { id: "A47018", name: "Farjana Akter Asha ", password: "F9fe" },
    { id: "A47019", name: "Faruna Ahmed Upoma", password: "O4et" },
    { id: "A47020", name: "Farzana islam orpa", password: "Y0vk" },
    { id: "A47021", name: "Halima Tujj Sadia ", password: "F6xz" },
    { id: "A47022", name: "Hasib Rahman", password: "J1qp" },
    { id: "A47023", name: "Homaira Binte Mosaddek ", password: "N6ma" },
    { id: "A47024", name: "Hossain Mohammed Emon ", password: "E8ic" },
    { id: "A47025", name: "Hridoy Chandra Shing", password: "M6gj" },
    { id: "A47026", name: "Humayara jahan ", password: "W7hb" },
    { id: "A47027", name: "Imrose Afrine ", password: "G9gb" },
    { id: "A47028", name: "Imtiazul Amin", password: "A0tv" },
    { id: "A47029", name: "Imtiazul Amin", password: "F7kr" },
    { id: "A47030", name: "Jannatul Ferdous Priyanka ", password: "X9cy" },
    { id: "A47036", name: "Maeesha Jannatul Ferdous ", password: "O2kb" },
    { id: "A47032", name: "Joy Kumar Basak ", password: "J4ug" },
    { id: "A47033", name: "Joysree Pual Tandra", password: "X4fm" },
    { id: "A47034", name: "Laila ", password: "K3ur" },
    { id: "A47035", name: "Lithu zaman", password: "J8gi" },
    { id: "A47037", name: "Mahid Mahmud ", password: "W4tu" },
    { id: "A47038", name: "Md Fazley Rabby", password: "O3hg" },
    { id: "A47039", name: "Md Murshed alam", password: "F2kr" },
    { id: "A47040", name: "Md Omar Faruk Ahmmed ", password: "T4zu" },
    { id: "A47041", name: "MD SAJANUL HAQUE ", password: "J7ue" },
    { id: "A47042", name: "Md Sajidul Islam", password: "B5kr" },
    { id: "A47043", name: "Md Shamim Mahbub ", password: "H3ba" },
    { id: "A47044", name: "Md Zakir Hassen", password: "Y9kc" },
    { id: "A47045", name: "Md. Abu Suhail", password: "S1iq" },
    { id: "A47046", name: "Md. Al-Amin Islam ", password: "A3rb" },
    { id: "A47047", name: "Md. Fakhrul Islam Maruf ", password: "R2bt" },
    { id: "A47048", name: "Md. Habibullah ", password: "P8ln" },
    { id: "A47049", name: "MD. MAZIDUL ISLAM", password: "I3fq" },
    { id: "A47050", name: "Md. Mostafizur Rahman", password: "D5ik" },
    { id: "A47051", name: "Md. Robiul Islam ", password: "I0jr" },
    { id: "A47052", name: "Md. Safayet Ul Islam ", password: "R9do" },
    { id: "A47053", name: "Md. Sakil Hasan", password: "F8ev" },
    { id: "A47054", name: "Md. Sami-us-sadat sihab ", password: "Q1rc" },
    { id: "A47055", name: "Md. Shahriar Hossain ", password: "L4gy" },
    { id: "A47056", name: "Md. Tofail Ahamed", password: "A2ab" },
    { id: "A47057", name: "Md. Touhid Hossain", password: "Q5wf" },
    { id: "A47058", name: "Md.Abdullah Al Masum", password: "J7lc" },
    { id: "A47059", name: "MD.Jakaria ", password: "K2df" },
    { id: "A47060", name: "MD.JAKARIA", password: "L9up" },
    { id: "A47061", name: "Md.Suruz Ali", password: "P4cl" },
    { id: "A47062", name: "Meftahul Jannat", password: "L8ra" },
    { id: "A47063", name: "Mehedi Hasan ", password: "T9pi" },
    { id: "A47064", name: "Mondira Saha", password: "X8fi" },
    { id: "A47065", name: "Most Yasmin Naher", password: "K5bz" },
    { id: "A47066", name: "Most.Sarmily Sristy ", password: "R7pe" },
    { id: "A47067", name: "Mst Irin Nahar ", password: "Y1jn" },
    { id: "A47068", name: "Mst. Nusrat Jahan", password: "E7pf" },
    { id: "A47069", name: "Muhammad Nazmul Islam ", password: "L9oa" },
    { id: "A47070", name: "Muhammad Selim", password: "J7ac" },
    { id: "A47071", name: "Musabbir Hasan Abir ", password: "A9uz" },
    { id: "A47072", name: "Mushfikur Rahman", password: "R6yy" },
    { id: "A47073", name: "Mustahidur Rahman ", password: "D6rr" },
    { id: "A47074", name: "Mustakim Morshed ", password: "R0nt" },
    { id: "A47075", name: "Mustuba Haque ", password: "H1lf" },
    { id: "A47076", name: "Mutmaeenna Mimi", password: "T3lg" },
    { id: "A47077", name: "Nafisa Akter Sadia", password: "U6po" },
    { id: "A47078", name: "Nazmun Naher Nedra", password: "Z2ri" },
    { id: "A47079", name: "Naznin Akter Nisa ", password: "C9au" },
    { id: "A47080", name: "Nishat Farjana", password: "R4as" },
    { id: "A47081", name: "Nishat Jahan Urme", password: "Y5ad" },
    { id: "A47082", name: "Nishat Tamanna Juthi", password: "I2ps" },
    { id: "A47083", name: "Nishat Tasnim Prity ", password: "E4ky" },
    { id: "A47084", name: "Nourin Sultana ", password: "U4or" },
    { id: "A47085", name: "Nurunnaher ", password: "Y1bo" },
    { id: "A47086", name: "Nusrat Jahan Shammi ", password: "S5mi" },
    { id: "A47087", name: "Nusrat Tasnim Mumu ", password: "R8qa" },
    { id: "A47088", name: "Oliullah Ahmed ", password: "J2eu" },
    { id: "A47089", name: "Parmita Shaheriar ", password: "G2bt" },
    { id: "A47090", name: "Rifah Sanjida ", password: "A3qu" },
    { id: "A47091", name: "Rokeya Sultana Laboni ", password: "T1br" },
    { id: "A47092", name: "Roman Ahsan", password: "K2hc" },
    { id: "A47093", name: "Rukia Tuz Johora ", password: "H2qz" },
    { id: "A47094", name: "Sabiba Islam Onty", password: "C5xe" },
    { id: "A47095", name: "Sabikunnahar Akhi", password: "C5lv" },
    { id: "A47097", name: "Sabrina Yeasmin", password: "Q7iv" },
    { id: "A47098", name: "Sadia Islam Writu", password: "Q9ce" },
    { id: "A47099", name: "Safrin Esha ", password: "D2ch" },
    { id: "A47100", name: "Sagatam Chowdhury ", password: "N6uz" },
    { id: "A47101", name: "saidul islam ", password: "M2bb" },
    { id: "A47102", name: "Samhita Roy ", password: "H8xa" },
    { id: "A47103", name: "Samira Akter ", password: "Y7yz" },
    { id: "A47104", name: "Sanaullah mustakim", password: "L7qm" },
    { id: "A47105", name: "Sarifa akter", password: "Z3cv" },
    { id: "A47106", name: "Shakila Jahan", password: "C6km" },
    { id: "A47107", name: "Shamima Sharmin Hafsa ", password: "X2to" },
    { id: "A47108", name: "Shariat Rahman", password: "H6ku" },
    { id: "A47109", name: "Sharjana Akter", password: "B6im" },
    { id: "A47110", name: "Shimkey Biswas ", password: "J9id" },
    { id: "A47111", name: "Sirajam Munira ", password: "A0fb" },
    { id: "A47112", name: "Sk Allimuzzaman Bappy ", password: "D1pv" },
    { id: "A47113", name: "Somira Bint Yunus ", password: "B6tn" },
    { id: "A47114", name: "Su snigdha Sharmin ", password: "S2ga" },
    { id: "A47115", name: "Sumaiya Nur Srity ", password: "B1rl" },
    { id: "A47116", name: "Sumaya Tabassum", password: "M1lv" },
    { id: "A47117", name: "Sumona Akter", password: "Y2sf" },
    { id: "A47118", name: "Sumona Akter Jannat ", password: "Z9de" },
    { id: "A47119", name: "Tahia abedin tisha", password: "N8yd" },
    { id: "A47120", name: "Takib hasan", password: "K1hm" },
    { id: "A47121", name: "Tamanna Imam Toma ", password: "O2lj" },
    { id: "A47122", name: "Tamanna Rahman ", password: "A0im" },
    { id: "A47123", name: "Tania Parvej", password: "S4pi" },
    { id: "A47124", name: "Tanmoy Das", password: "I5vc" },
    { id: "A47125", name: "Tanvir Tain", password: "S6vc" },
    { id: "A47126", name: "Tasfia Rahman ", password: "X3xy" },
    { id: "A47127", name: "Taslima sawda", password: "B5ce" },
    { id: "A47128", name: "Tasnim Jahan Hinna ", password: "R2ll" },
    { id: "A47129", name: "Tasnuba Tamanna", password: "N2yb" },
    { id: "A47130", name: "Tohmina Akter ", password: "S2zw" },
    { id: "A47131", name: "Tomal Karmokar ", password: "Q1zj" },
    { id: "A47132", name: "Umma Kulsum Shetu", password: "U1po" },
    { id: "A47133", name: "Umme kulsum Reba", password: "L1yu" },
    { id: "A47134", name: "Yeasir Arafat ", password: "P2eq" },
    { id: "A47135", name: "Zannatul Ferdous Shifat", password: "F2as" },
    { id: "A47136", name: "মোসাম্মৎ নাসিমা খাতুন ", password: "E0gf" },
    { id: "A47137", name: "মোহাম্মদ ওয়াহিদুল আহাদ সাজিদ ", password: "P0mg" },
    { id: "A47138", name: "Mahmuda Haque Mitu", password: "I5vq" },
    { id: "A47139", name: "Abeda sultana ", password: "S6hm" },
    { id: "A47140", name: "Tanzila Khanam ", password: "Y3ge" },
    { id: "A47141", name: "Jannatun Fardushi Nikita", password: "E0xn" },
    { id: "A47142", name: "MD Asif Al Mahmud Shawon", password: "O5zv" },
    { id: "A47143", name: "Akhi Alauddin ", password: "W1zd" },
    { id: "A47144", name: "Tasnimul Hassan Opu ", password: "O8we" },
    { id: "A47145", name: "Syed Walik Akib ", password: "N8kx" },
    { id: "A47096", name: "Sabrina Rahman Sabrin ", password: "F9hx" },
    { id: "A47146", name: "Khandaker Ranel", password: "G7wj" },
    { id: "A47147", name: "Md. Arif Hasan Al-mamun ", password: "K3bu" },
    { id: "A47148", name: "Iffat Jahan", password: "D1ew" },
    { id: "A47149", name: "Md. Habibur Rahman ", password: "T4ed" },
    { id: "A47150", name: "Anika Alam ", password: "S7hw" },
    { id: "A47151", name: "Sayed Ahmed", password: "E0sc" },
    { id: "A47152", name: "Muntasirin Monjur ", password: "J5dh" },
    { id: "A47153", name: "Rafi Tamanna ", password: "N1lb" },
    { id: "A47186", name: "Fouzia Haque", password: "W6al" },
    { id: "A47155", name: "Bipon Das", password: "P2pe" },
    { id: "A47185", name: "Rasheduzzaman Ripon", password: "D7cl" },
    { id: "A47156", name: "Shamsun Nahar Sonee", password: "J2vr" },
    { id: "A47157", name: "মুন-ইমু ", password: "S2py" },
    { id: "A47158", name: "Samsun Nahar", password: "Y2yw" },
    { id: "A47159", name: "Nijhum Mirza", password: "E3ly" },
    { id: "A47154", name: "Abdullah Al Mansur Raiyan", password: "Y8ph" },
    { id: "A47160", name: "Razia parvin", password: "S8jf" },
    { id: "A47161", name: "Rajibul Hasan", password: "P3ve" },
    { id: "A47162", name: "Md. Habibur Rahman ", password: "E0du" },
    { id: "A47163", name: "Afroza Awal Asha", password: "R9wa" },
    { id: "A47164", name: "Osman", password: "H3dv" },
    { id: "A47165", name: "Anika Farzana ", password: "J2ez" },
    { id: "A47166", name: "Abdur Razzak ", password: "Y5be" },
    { id: "A47167", name: "Ishrat Jahan", password: "S8kw" },
    { id: "A47168", name: "Tanvir Sadat Shaon", password: "E3fm" },
    { id: "A47169", name: "Md :Abu Huraira Shakil ", password: "W0ui" },
    { id: "A47170", name: "Zannatun Nesa Zuthi ", password: "O9bw" },
    { id: "A47171", name: "Neepuma Jahan ", password: "O7nd" },
    { id: "A47172", name: "Md. Junayed", password: "U3bw" },
    { id: "A47173", name: "Alif Shahriare", password: "E5kq" },
    { id: "A47174", name: "Nishat Mahwiyat", password: "I9fz" },
    { id: "A47175", name: "Sadia Shabnam Swarna", password: "H4xn" },
    { id: "A47176", name: "FATEMA TOJ JOHORA ", password: "M3xm" },
    { id: "A47177", name: "Muntasir", password: "L7fj" },
    { id: "A47178", name: "Zihad Al Faruqe ", password: "Q0hz" },
    { id: "A47179", name: "Ghu Srinesh Bhowmick kakon", password: "Y6gd" },
    { id: "A47180", name: "Shehab Sarker ", password: "H7hm" },
    { id: "A47181", name: "Golam Rabbani Arif ", password: "Y1xp" },
    { id: "A47182", name: "Murad Hossain Moon", password: "X4yc" },
    { id: "A47183", name: "Israt jahan", password: "D7gk" },
    { id: "A47184", name: "Heronmoy Roy ", password: "R4pc" },
    { id: "A47031", name: "Jannatul Ferdoush ", password: "N9xx" },
    { id: "B47001", name: "S.M. Mahbubur Rahman", password: "A9yx" },
    { id: "B47002", name: "Farzana", password: "Y9rp" },
    { id: "B47003", name: "JANNATUL ", password: "B3fx" },
    { id: "B47004", name: "Farzana", password: "C7lc" },
    { id: "B47005", name: "Bithika", password: "K4yw" },
    { id: "B47006", name: "Md A", password: "D9eo" },
    { id: "B47007", name: "Rakibul", password: "B9eo" },
    { id: "B47008", name: "Farhana", password: "J6hx" },
    { id: "B47009", name: "Sumaya", password: "S0bi" },
    { id: "B47010", name: "Saumic", password: "K6ct" },
    { id: "B47011", name: "Sajibur ", password: "N7pb" },
    { id: "B47012", name: "Rokeya Sultana ", password: "Z5sn" },
    { id: "B47013", name: "Sajid", password: "G3rc" },
    { id: "B47014", name: "Mst Khadija ", password: "G0wq" },
    { id: "B47015", name: "sabikun", password: "O2mg" },
    { id: "B47016", name: "Tasfia", password: "S4im" },
    { id: "B47017", name: "Mrittika", password: "M5yk" },
    { id: "B47018", name: "Shakil ", password: "F1zd" },
    { id: "B47019", name: "Nazmun nahar", password: "J3dk" },
    { id: "B47020", name: "Ragib", password: "U7te" },
    { id: "B47021", name: "Nahid Imtiaz", password: "C2vb" },
    { id: "B47022", name: "Wahed", password: "E1yh" },
    { id: "B47023", name: "Nupur ", password: "D0sk" },
    { id: "B47024", name: "Foyzun Nahar", password: "N3pc" },
    { id: "B47025", name: "Abir Hasan", password: "S5pn" },
    { id: "B47026", name: "Md. Kamrul Islam ", password: "T4jk" },
    { id: "B47027", name: "Mona", password: "W1rf" },
    { id: "B47028", name: "Zerin ", password: "C9ww" },
    { id: "B47029", name: "Saiful", password: "N5sp" },
    { id: "B47030", name: "Md", password: "O8ef" },
    { id: "B47031", name: "Iffat ara jahan", password: "M6jz" },
    { id: "B47032", name: "JANNATUL FERDOUSH", password: "Z3dv" },
    { id: "B47033", name: "Nusaifa", password: "Y8xw" },
    { id: "B47034", name: "Monisha", password: "L5sl" },
    { id: "B47035", name: "Sadia Rahman ", password: "Q9wq" },
    { id: "B47036", name: "Aporna", password: "H9vb" },
    { id: "B47037", name: "Taufiqur", password: "W7lr" },
    { id: "B47038", name: "Tanzila Islam", password: "C8og" },
    { id: "B47039", name: "Anik", password: "W9eu" },
    { id: "B47040", name: "Mehadi", password: "M3cp" },
    { id: "B47041", name: "MD Ashraful", password: "L2sx" },
    { id: "B47042", name: "Al", password: "T5ow" },
    { id: "B47043", name: "Naim", password: "A9np" },
    { id: "B47044", name: "Tasnuba", password: "G9te" },
    { id: "B47045", name: "Arifa", password: "B4nv" },
    { id: "B47046", name: "Mishkatul ", password: "V2hf" },
    { id: "B47047", name: "ASAD", password: "S7uq" },
    { id: "B47048", name: "TANIA", password: "S1gj" },
    { id: "B47049", name: "Najma akter ", password: "S7rw" },
    { id: "B47050", name: "Parmita", password: "O0ur" },
    { id: "B47051", name: "Farzana", password: "H5ny" },
    { id: "B47052", name: "Sirajam ", password: "K1jh" },
    { id: "B47053", name: "Sohag", password: "D8ig" },
    { id: "B47054", name: "Poly Akter", password: "U5hf" },
    { id: "B47055", name: "Hasiba", password: "A9oi" },
    { id: "B47056", name: "SAIFUL ISLAM", password: "Q5vs" },
    { id: "B47057", name: "Hafiza khatun", password: "L2iy" },
    { id: "B47058", name: "Hemadree", password: "U4xp" },
    { id: "B47059", name: "Mahbuba", password: "L5nw" },
    { id: "B47060", name: "Suraiya Yeasmin", password: "F7sx" },
    { id: "B47061", name: "Jannatul Ferdous", password: "E9iy" },
    { id: "B47062", name: "Rumana Ruma", password: "X2vj" },
    { id: "B47063", name: "Russell Ahmed", password: "R4rt" },
    { id: "B47064", name: "Mahamudul Hasan Jony ", password: "M5iw" },
    

];

// Mock exam data
const EXAMS = [
    {
        id: 4,
        name: "Week 13 - গণিত প্র্যাক্টিস পরীক্ষা",
        topic: "পাটিগণিত-৪: গণিত-লাভ ক্ষতি",
        startTime: "",
        endTime: "",
        examLink: "https://script.google.com/macros/s/AKfycbz_pEXEAGr9OEruYUhZQdjnOUYJInuZB7NDS9rXS2IG_v6e8clF2kps0NGMolLGqUL_WA/exec",
        studyMaterials: "https://drive.google.com/file/d/1fiHN35d6Q3nyt8GtQWnLHjP1-gumkwRq/view?usp=drive_link",
        solution: "",
        solutionAvailable: false,
    },

];

// Mock previous exams data
const PREVIOUS_EXAMS = [
    {
        id: 1,
        name: "Monthly Exam October",
        topic: "Monthly Exam October",
        date: "2024-10-24",
        examLink: "https://script.google.com/macros/s/AKfycbyioAk5ogc13AKDX1SKv8CDZs5lSqkPpsAy74gf3WHHUuLW5Ew_z_qAQNK4EOxRm2KolA/exec",
        studyMaterials: "https://drive.google.com/drive/folders/1mzZxSlkqSMb9dMhS3SPj1gufk8xlMLSH",
        solution: "https://drive.google.com/file/d/11Ai9q5ap9ZvvFlvgYzDzeqgNVhXHan7k",
        solutionAvailable: true,
    },

];


// DOM Elements
const loginPage = document.getElementById('loginPage');
const schedulePage = document.getElementById('schedulePage');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const examsList = document.getElementById('examsList');
const previousExamsList = document.getElementById('previousExamsList');
const currentExamsBtn = document.getElementById('currentExamsBtn');
const previousExamsBtn = document.getElementById('previousExamsBtn');
const toast = document.getElementById('toast');

// Show toast message
function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, duration);
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleString();
}

// Render exams list
// Render exams list
function renderExams() {
    examsList.innerHTML = EXAMS.map(exam => `
        <div class="exam-card">
            <div class="exam-card-content">
                <div class="exam-info">
                    <h2>${exam.name}</h2>
                    <p>Topic: ${exam.topic}</p>
                    ${exam.startTime ? `<p>Start: ${formatDate(exam.startTime)}</p>` : ''}
                    ${exam.endTime ? `<p>End: ${formatDate(exam.endTime)}</p>` : ''}
                </div>
                <div class="exam-actions">
                    <a href="${exam.examLink}" target="_blank" rel="noopener noreferrer" class="btn">
                        Take the Exam
                    </a>
                    <a href="${exam.studyMaterials}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        Study Materials
                    </a>
                    ${exam.solutionAvailable ? `
                        <a href="${exam.solution}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                            View Solution
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}


// Render previous exams list
function renderPreviousExams() {
    previousExamsList.innerHTML = PREVIOUS_EXAMS.map(exam => `
        <div class="exam-card">
            <div class="exam-card-content">
                <div class="exam-info">
                    <h2>${exam.name}</h2>
                    <p>Topic: ${exam.topic}</p>
                    <p>Date: ${new Date(exam.date).toLocaleDateString()}</p>
                </div>
                <div class="exam-actions">
                    <a href="${exam.examLink}" target="_blank" rel="noopener noreferrer" class="btn">
                        Attempt
                    </a>
                    <a href="${exam.studyMaterials}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        Study Materials
                    </a>
                    ${exam.solutionAvailable ? `
                        <a href="${exam.solution}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                            View Solution
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function toggleNav() {
    const navButtons = document.querySelector('.nav-buttons');
    navButtons.classList.toggle('show');
}


// Handle navigation between current and previous exams
currentExamsBtn.addEventListener('click', () => {
    examsList.classList.remove('hidden');
    previousExamsList.classList.add('hidden');
    currentExamsBtn.classList.remove('btn-outline');
    previousExamsBtn.classList.add('btn-outline');
});

previousExamsBtn.addEventListener('click', () => {
    examsList.classList.add('hidden');
    previousExamsList.classList.remove('hidden');
    currentExamsBtn.classList.add('btn-outline');
    previousExamsBtn.classList.remove('btn-outline');
    renderPreviousExams();
});

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;
    
    const user = USERS.find(u => u.id === id && u.password === password);
    
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        loginPage.classList.add('hidden');
        schedulePage.classList.remove('hidden');
        renderExams();
    } else {
        showToast('Invalid ID or password');
    }
});

// Handle logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    schedulePage.classList.add('hidden');
    loginPage.classList.remove('hidden');
    loginForm.reset();
});

// Check authentication on page load
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');
    if (user) {
        loginPage.classList.add('hidden');
        schedulePage.classList.remove('hidden');
        renderExams();
        renderPreviousExams();
    }
});

