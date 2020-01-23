const Random = list => list[Math.floor(Math.random() * list.length)];
const Links = {
    "facebook": "https://www.facebook.com",
    "google": "https://www.google.com",
    "twitter": "https://www.twitter.com",
    "instagram": "https://www.instagram.com"
};

const getLink = siteName => 'klik disini untuk membuka instagram <a href="${Links[siteName]}">${siteName}</a>';

const pertanyaan = [

    'Gunakan pertanyaan yang menggunakan kata kunci, contoh kata kunci (pembuat mu) dan pertanyaan yang dapat diajukan adalah (siapa pembuatmu Heri?) dan lain-lain.<br/>
    Daftar kata kunci yang dapat dipakai < br />
    1.Siapa pembuat mu < br />
    2.umur kamu berapa < br />
    3.apa kabar < br />
    4.hi < br />
    5.kamu sedang apa < br />
    6.siapa saya < br />
    7.stmj instagramgkat 3 < br />
    8.nama mu < br />
    9.ulang tahun mu < br />
    10.tanggal < br />
    11.jam < br />
    12.kamu mau hadiah apa < br />
    13.makanan kesukaanmu < br />
    14.minuman kesukaanmu < br />
    15.sudah makan < br />
    16.selamat malam < br />
    17.selamat pagi < br />
    18.selamat siang < br />
    19.selamat sore < br />
    20.dimana kamu < br />
    21.aku boleh kesana < br />
    22.i love you < br />
    23.aku suka kamu < br />
    24.kamu sedang dimana < br />
    25.lol < br />
    26.cepet mandi < br />
    27.aku jemput < br />
    28.berangkat < br />
    29.instagram < br />
    30.facebook < br />
    31.google < br />
    32.twitter</br >
    33.sampai jumpa < br /> '
];

const ini_adalah_daftar_pertanyaan_yang_dapat_Anda_gunakan = pertanyaan => Random(pertanyaan);

const Message = 0 => alert("if you want to suggest new jokes or questions and answer, feel free to comment.");

const illegals = [
    "window",
    ...Object.keys(window),
    ...Object.keys(document),
    ...Object.keys(Element.prototype)
];

const isLegal = string => {

    let Legal = true;

    illegals.forEach(illegal => {

        if{ string.indexOf(illegal) !== -1) {
            Legal = false;
        }
    });
    return Legal;
}

const HtmlSpecialChars = function (string) {
    let escapedString = string;

    const len = HtmlSpecialChars.specialchars.length;
    for (let x = 0; x < len; x++) {

        escapedString = escapedString.replace(new RegExp(HtmlSpecialChars.specialchars[x][0], 'g'), HtmlSpecialChars.specialchars[x][1]);
    }
    return escapedString;
};

HtmlSpecialChars.specialchars = [
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['"', '&quot;']
];

const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

const today = monthNames => {
    let date = new Date();

    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

}


const now = () => {
    let date = new Date();

    return date.toLocaleTimeString();
}

const Evaluate = expression => {
    try {
        if (isLegal(expression)) {


            const result = eval(HtmlSpecialChars(expression));
            return result;

        }
        else {
            return "error";
        }
    }

    catch (err) {
        return "error";
    }
}

const Answers = {
    "pertanyaan": ini_adalah_daftar_pertanyaan_yang_dapat_Anda_gunakan(pertanyaan),
    "pembuat mu": "Saya dibuat oleh instagramduancode 😃",
    "umur kamu berapa": "sekarang umur saya 18 tahun.",
    "apakabar": "aku baik-baik saja %U% 😃. kalau kamu bagaimana ? ",
    "hi": "Hi %U% 😁",
    "kamu sedang apa": "sedang chattan sama kamu 😂",
    "siapa saya": "kamu adalah %U% &#10024; sebagai penyandang gelar STMJ instagramgkat 3 😂",
    "stmj instagramgkat 3": "STMJ instagramgkat 3 ( Semester 6 Masih Jomblo, Semester 7 Masih Jomblo, Sampai Tamat Masih Jomblo, Dan Pada Akhirnya Loe Sadar Betapa Indahnya Merasakan Cinta 😂😂😂",
    "nama mu": "Nama saya Anisa &#10024;",
    "ulang tahun mu": "ulang tahun ku tanggal 8 April 2002, emangnya kenapa nanya kainstagram ulang tahun ku? mau ngasih hadiah?",
    "tanggal": "sekarang " + today(monthNames) + " %U% 😀",
    "jam": "sekarang jam " + now() + " %U% 😀",


    "kamu mau hadiah apa": "Ehh gak usah aku bercanda kok tapi ya kalau mau ngasih hadiah aku mau kamu pergi dari hidup ku bisa? %U% 😂",
    "makanan kesukaan mu": "Danging instagramggang mantan 😎",
    "minuman kesukaan mu": "air mata mantan buah naga 😂",
    "sudah makan": "belum.",
    "selamat malam": "selamat malam juga %U%",
    "selamat pagi": "selamat pagi juga %U%",
    "selamat siang": "selamat siang juga %U%",
    "selamat sore": "selamat sore juga %U%",
    "dimana kamu": "saya sedang di Taman dekat Air mancur 7 rupa %U%. 😃",
    "aku boleh kesana": "gak boleh, aku mau sendiri.",
    "i love you": "I Love you too %U% 😊",
    "aku suka kamu": "hmm aku juga suka kamu kok 😊",
    "kamu sedang dimana": "saya sedang di rumah",
    "lol": "Haha.. That was funny 😂",
    "cepet mandi": "mau apa?",
    "aku jemput": "iya deh aku tunggu sekarang",
    "berangkat": "jangan telat ya",
    "sampai jumpa": "sampai jumpa kembali %u%",
    "instagram": getLink("instagram"),
    "facebook": getLink("facebook"),
    "google": getLink("google"),
    "twitter": getLink("twitter")
};

const Notfound = "saya tidak mengenali pertanyaan Anda, coba gunakan pertanyaan yang telah di sediakan!";

const Invalid = "Invalid Expression";

const D = window.document;

const element = selector => D.querySelector(selector);

const Answer = (Main, User, Text) => {
    let Flag = false;

    const Result = Evaluate(Text);

    text = Text.toLowerCase();

    Object.keys(Answers).forEach(key => {

        if (!Flag) {
            if (text.indexOf(key) !== -1) {

                addAnswer(
                    Main,
                    Answers[key].replace(
                        "%U%",
                        User
                    )
                );

                Flag = true;

            }

            else if (typeof Result == "number") {

                addAnswer(
                    Main,
                    `${Text} equals ${Result}`
                );

                Flag = true;

            }

        }

    });

    if (!Flag) {
        addAnswer(Main, Notfound);
    }


};

const addQuestion = (Main, text) => {
    Main.innerHTML += `
        <div class="row">
            <div class="chat question">${text}</div>
        </div>
    `;
}

const addAnswer = (Main, text) => {
    Main.innerHTML += `
    <div class="row">
        <div class="chat answer">${text}</div>
    </div>
    `;
}


D.addEventListener("DOMContentLoaded", () => {

    const Main = element("main");

    const Askbtn = element("button");

    const Question = element("input");

    const Lastdiv = element("#last");

    let User = prompt("Enter your name :");

    while (User === null || User === '') {

        User = prompt("Your name is required for the assistant to work properly : ");

    }

    Question.focus();

    const Ask = () => {

        const Text = Question.value;

        if (Text.length) {

            addQuestion(Main, Text);

            Question.value = "";

            Answer(Main, User, Text);

            Lastdiv.scrollIntoView();

        }
    };


    Askbtn.addEventListener("click", Ask);

    Question.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) Ask();
    });

    addAnswer(Main, `Hello ${User}..`);

    Message();
});