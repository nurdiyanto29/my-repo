var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'><a href='mailto:nurdi014@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/nurdiyanto29'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> <a target='_blank' href='https://t.me/nrdynt29'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/nrdynt29'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/nurdiyanto-9044b2242/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56316.2895613665!2d110.40584827043645!3d-8.018930989410121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bac1dac27c327%3A0x24028babac05ef61!2sKec.%20Panggang%2C%20Kabupaten%20Gunung%20Kidul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1672237137786!5m2!1sid!2sid' class='map'></iframe></div><label class='add'><address>Panggang<br>Gunungkidul, Yogyakarta</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}


function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function() { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage2("Hello Semua 👋🏻,<br><br>Perkenalkan, nama saya <span class='bold'><a class='alink'>Nurdiyanto</a>.</span><br><br>Saya adalah seorang web developer yang masih dalam tahap belajar dan terus belajar 👨🏻‍💻📚<br><br>Saat ini saya bekerja di salah satu perusahan swasta di Yogyakarta sebagai <span class='bold'>FullStack Web Developer</span><br><br>Oh iya,  kalian bisa ketikan <span class='bold'>'help'</span> untuk tau tentang saya lebih detail.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Kirim Kata Kunci berikut untuk mendapatkan apa yang ingin Anda ketahui tentang saya... <br>misal<br><span class='bold'>'skills'</span> - untuk mengetahui skills saya<br><span class='bold'>'education'</span> - untuk melihat detail pendidikan saya<br><span class='bold'>'address'</span> - untuk mendapatkan alamat saya<br><span class='bold'>'contact'</span> - untuk melihat dan terhubung dengan saya<br><span class='bold'>'projects'</span> - untuk melihat detail projek yang pernah saya kerjakan<br><span class='bold'>'clear'</span> - untuk menghapus percakapan ini<br><span class='bold'>'about'</span> - untuk tau tentang portofolio ini</span>");
            break;
            // case "resume":
            //     sendTextMessage(resumeString);
            //     break;
        case "skills":
            sendTextMessage("<span class='sk'>Berikut ini beberapa skills dan bahasa pemrograman yang saya kuasai:<br><span class='bold'>PHP<br>NODE JS<br>HTML<br>TWIG<br>Laravel<br>CSS<br>Javascript<br>API<br>Bootstrap<br>MySql<br>Postgresql</span>");
            break;

        case "education":
            sendTextMessage("Saya telah menyelesaikan kuliah saya dari Universitas Teknologi Digital Indonesia Tahun Lulus:2022 dengan Gelar Sarjana Komputer <br> <br> Saya telah menyelesaikan sekolah menengah saya dari SMA N 1 Panggang pada tahun 2017");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 Portofolio ini saya buat menggunakan HTML, CSS dan JavaScript dengan penuh ❤️");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("<span class='sk'>Berikut adalah beberapa Project yang pernah saya kerjakan:<br><span class='bold2'>- Routelink<br>- Multi Kontrol Nusantara<br>- Trans Security<br>- IBM Incubator<br>- Sistem Keuangan Masjid<br>- GKI Adisucipto<br>- Rumaysho Store<br>- SIG Merapi<br>- Sistem Sewa Barongsai<br>- Trigana Air<br>- Web service PKK</span> <br><br>Jika kalian ingin tahu tentang projek saya? kalian bisa lihat di repositori github saya<br><br><div class='social'><a target='_blank' href='https://github.com/nurdiyanto29'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Maaf saya tidak dapat membaca kata kunci yang kamu ketikkan...😢<br>Ketik dan kirim 'help' untuk tau bagaimana menggunakannya ");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function sendTextMessage2(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey2");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}