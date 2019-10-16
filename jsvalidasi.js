function validasi(){
	//memanggil fungsi-fungsi
	nameevent();
	dropdown2();
	dropdown3();
	username();
	jabatan();
	notelepon();
	emailvalidasi();
	alamat();
	dropdown4();
	radio();
	checkbox();
	tanggal();
	//kondisi fungsi harus true semua untuk memvalidasi
	if ( nameevent()!=false && dropdown2()!= false && dropdown3()!= false && username()!=false && jabatan()!=false && notelepon()!=false && emailvalidasi()!=false && alamat()!= false && dropdown4()!= false && radio() != false && checkbox()!= false && tanggal()!= false){
		return true;
	}
	return false;	
}


function nameevent(){
	var myform = document.getElementById("formADDPROGRAM");  /*menampung data pada bagian Addprogram*/
	var nameevent = document.getElementById("nameevent");  /*menampung data pada bagian name*/
	var pesannameevent = document.getElementById("pesan0");  /*menampung data pada pesan1*/
	var nameeventError="";  /*kondisi error nameevent*/
	
	if (nameevent.value == ""){   /*memvalidasi inputan berupa required*/
		nameeventError = "<font color='red'> bagian ini harus diisi </font>"; /*menambahkan pesan erorr ketika yang dimasukkan kosong*/
		pesannameevent.innerHTML = nameeventError;  /*pesan eror ke html*/
		nameevent.style.border = "2px solid red";  /*merubah style border karena error*/
		}
	if (nameeventError != ""){//jika kondisi slah karena ada pesan error
		document.formADDPROGRAM.nameevent.focus();
		return false;
	}
	//if correct
	else{//jika kondisi benar tidak ada pesan error
		nameeventError = "";
		pesannameevent.innerHTML=nameeventError;
		nameevent.style.border="3px solid green";
		return true;
	}
}

function username(){
	var myform = document.getElementById("formADDPROGRAM");  /*menampung data pada bagian Addprogram*/
	var username = document.getElementById("pjname");  /*menampung data pada bagian nama*/
	var alphabet = /([^a-zA-Z\s])+/g;  /*match data harus alphabet*/
	var pesanname = document.getElementById("pesan1");  /*menampung data pada pesan1*/
	var usernameError="";  /*kondisi error username*/
	
	if (username.value == ""){   /*memvalidasi inputan berupa required*/
		usernameError = "<font color='red'> Username harus diisi </font>"; /*menambahkan pesan erorr ketika yang dimasukkan kosong*/
		pesanname.innerHTML = usernameError;  /*pesan eror ke html*/
		username.style.border = "2px solid red";  /*merubah style border karena error*/
		}
	else if (alphabet.test(username.value.trim()) ){  /*memvalidasi inputan berupa huruf saja*/
		usernameError = "<font color='red'>Hanya bisa diisi karakter alphabet</font>";  /*menampilkan pesan erorr ketika yang dimasukkan bukan berupa huruf*/
		pesanname.innerHTML = usernameError;   /*pesan eror ke html*/
		username.style.border = "2px solid red";  /*merubah style border karena error*/
	}
	else if (username.value.trim().length < 6 ){   /*memvalidasi inputan berupa huruf saja yg tidak boleh kurang dari 6 digit*/
		usernameError = "<font color='red'> Minimal diisi 6 karakter </font>";  /*menampilkan pesan erorr ketika yang dimasukkan kurang dari 6 digit*/
		pesanname.innerHTML = usernameError;/*pesan eror ke html*/
		username.style.border = "2px solid red";  /*merubah style border karena error*/
	}
	if (usernameError != ""){//kondisi salah karena masih ada pesan error
		document.formADDPROGRAM.pjname.focus();
		return false;
	}
	//if correct
	else{//kondisi benar jika tidak ad pesan error
		usernameError = "";
		pesanname.innerHTML=usernameError;
		username.style.border="3px solid green";
		return true;
	}
}


function jabatan(){
	var myform = document.getElementById("formADDPROGRAM");  /*menampung data pada bagian Addprogram*/
	var jabatan = document.getElementById("pjjabatan"); //mengambil value inputan jabatan
	var alphabet = /([^a-zA-Z\s])+/g; //pattern afabet
	var pesanjabatan = document.getElementById("pesan2");//wadah pesan error
	
	var jabatanError="";
	if (jabatan.value == ""){//kondisi required 
		jabatanError = "<font color='red'> jabatan harus diisi </font>";//isipesan error
		pesanjabatan.innerHTML = jabatanError;
		jabatan.style.border = "3px solid red"; 
		}
	else if (alphabet.test(jabatan.value) ){//regular expression alfabet
		jabatanError = "<font color='red'>Hanya bisa diisi karakter alphabet</font>";
		pesanjabatan.innerHTML = jabatanError;
		jabatan.style.border = "3px solid red";
		}
	if (jabatanError!=""){//kondisi jika masih ad pesan error = false
		document.formADDPROGRAM.pjjabatan.focus();
		return false;
	}
	else{//kondisi tidak ad pesan error dan berarti benar
		jabatanError="";
		pesanjabatan.innerHTML=jabatanError;
		jabatan.style.border="3px solid green";
		return true;
	}
}

function notelepon(){	//fungsi umtuk memvalidasi notelepon
	var telepon = document.getElementById("pjtelepon");		//variabel untuk pemanggilan pjtelepon
	var pesantelepon = document.getElementById("pesan3"); 	//variabel untuk pemanggilan pesan3
	var teleponError="";	//variabel teleponerror
	var no = /([^\d])+/;	//variabel regex khusus numerik

	if (telepon.value == ""){ //jika telepon kosong atau tidak diisi
		teleponError = "<font color='red'> no telepon belum diisi </font>";	//notif belum diisi
		pesantelepon.innerHTML = teleponError;	//menampilkan pada laman html
		telepon.style.border = "3px solid red"; //border box jika tidak diisi
		}
	else if ( no.test(telepon.value) ){	//jika diisi selain numerik
		teleponError = "<font color='red'>Hanya bisa diisi karakter numerik</font>";//notif jika diisi selain numerik
		pesantelepon.innerHTML = teleponError; //menampilkan pada laman html
		telepon.style.border = "3px solid red";	//border box jika diisi selain numerik
	}
	else if (telepon.value.trim().length < 11 || telepon.value.trim().length > 14){ //jika diisi kurang dari 11 & lebih dari 14 karakter
		teleponError = "<font color='red'> Mohon masukkan jumlah digit dengan benar </font>";//notif jika diisi selain numerik
		pesantelepon.innerHTML = teleponError;//menampilkan pada laman html
		telepon.style.border = "3px solid red";	//border box jika diisi kurang dari 11 & lebih dari 14 karakter
	}
	if (teleponError != ""){ //jika error 
		document.formADDPROGRAM.pjtelepon.focus(); //yang dituju saat jika error 
		return false; //menunjukkan pengisian salah
	}
	else{
		teleponError = ""; //error
		pesantelepon.innerHTML = teleponError; //menampilkan pada laman html
		telepon.style.border="3px solid green"; //style border jika benar
		return true; //menunjukkan pengisian benar
	}
}

function emailvalidasi(){
	var email = document.getElementById("pjemail");
	var emailcek= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var pesanemail = document.getElementById("pesan4");
	
	var emailError="";
	if (email.value == ""){
		emailError = "<font color='red'> Email belum diisi </font>";
		pesanemail.innerHTML = emailError;
		email.style.border = "3px solid red";	 
	}
	else if (emailcek.test(email.value) ){
		email.style.border = "3px solid green";
	}		
	else{
		emailError = "<font color='red'> Alamat Email Anda Belum Benar</font>";
		pesanemail.innerHTML = emailError;
		email.style.border = "3px solid red";
	}
	if (emailError!= ""){
		document.formADDPROGRAM.pjemail.focus();
		return false;
	}
	else{
		emailError="";
		pesanemail.innerHTML= emailError;
		email.style.border="3px solid green";
		return true;
	}

}


function alamat(){
	var myform = document.getElementById("formADDPROGRAM");  /*menampung data pada bagian Addprogram*/
	var alamat = document.getElementById("pjalamat");//mengambil value dari inputan
	var pesanalamat = document.getElementById("pesan5");//wadah pesan error
	var alamatError="";
	
	if (alamat.value == ""){//kondisi jika tidak diisi
		alamatError = "<font color='red'> alamat harus diisi </font>";//isi pesan error
		pesanalamat.innerHTML = alamatError;//memunculkan pesan error
		alamat.style.border = "3px solid red"; 
		}
	
	if (alamatError!=""){//jika masih ada pesan error maka salah
		document.formADDPROGRAM.pjalamat.focus();
		return false;
	}
	else{//jika sudah tidak ada pesan error = true
		alamatError="";
		pesanalamat.innerHTML=alamatError;
		alamat.style.border="3px solid green";
		return true;
	}
}


function dropdown2(){
    var dropdown2 = document.getElementById("tipepenyelenggara");// mengambil value dropdown
    var pesandrop2 = document.getElementById("pesan-2");//wadah pesan error
    var strdrop2 = dropdown2.options[dropdown2.selectedIndex].value;//index value dropdown
	var droperror2 =""
    
   	if(strdrop2 == 0){ //jika value masih nol atau belum memilih
   		droperror2="<font color='red'> harap pilih satu </font>";//isi pesan error
    	pesandrop2.innerHTML= droperror2;//inner html
    	dropdown2.style.border="3px solid red";
   	}
   	if(droperror2!= ""){//jika masih terdapat pesan error
   		document.formADDPROGRAM.tipepenyelenggara.focus();
   		return false;
   	}
   	else{// kondisi jika tidak lagi ad pesan error yg brrti benar
   		droperror2="";
   		dropdown2.style.border="3px solid green";
   		pesandrop2.innerHTML=droperror2;
   		return true;
   	}
}

function dropdown3(){
    var dropdown3 = document.getElementById("tipeevent");// mengambil value dropdown
    var pesandrop3 = document.getElementById("pesan-1");//wadah pesan error
    var strdrop3 = dropdown3.options[dropdown3.selectedIndex].value;//index value dropdown
	var droperror3 =""
    
   	if(strdrop3 == 0){ //jika value masih nol atau belum memilih
   		droperror3="<font color='red'> harap pilih satu </font>";//isi pesan error
    	pesandrop3.innerHTML= droperror3;//inner html
    	dropdown3.style.border="3px solid red";
   	}
   	if(droperror3!= ""){//jika masih terdapat pesan error
   		document.formADDPROGRAM.tipeevent.focus();
   		return false;
   	}
   	else{// kondisi jika tidak lagi ad pesan error yg brrti benar
   		droperror3="";
   		dropdown3.style.border="3px solid green";
   		pesandrop3.innerHTML=droperror3;
   		return true;
   	}
}
    
function dropdown4(){
    var dropdown4 = document.getElementById("tipetempat");// mengambil value dropdown
    var pesandrop4 = document.getElementById("pesan7");//wadah pesan error
    var strdrop4 = dropdown4.options[dropdown4.selectedIndex].value;//index value dropdown
    var droperror4 =""
   	
   	if(strdrop4 == 0){ //jika value masih nol atau belum memilih
   		droperror4="<font color='red'> harap pilih satu </font>";//isi pesan error
    	pesandrop4.innerHTML= droperror4;//inner html
    	dropdown4.style.border="3px solid red";
   	}
	if(droperror4!= ""){//jika masih terdapat pesan error
   		document.formADDPROGRAM.tipetempat.focus();
   		return false;
   	}
   	else{// kondisi jika tidak lagi ad pesan error yg brrti benar
   		droperror4="";
   		dropdown4.style.border="3px solid green";
   		pesandrop4.innerHTML=droperror4;
   		return true;
   	}
}

function radio(){
	var myform = document.getElementById("formADDPROGRAM");
	var peserta = document.getElementsByName("peserta");//mengambil value jumlah peserta
	var pesanpeserta = document.getElementById("pesan8");//wadah pesan error
    var pesertaValue = false;
    var pesertaerror ="";

    for(var i=0; i<peserta.length; i++){ //looping untuk mngecek value
    	if(peserta[i].checked == true){
    		pesertaValue = true;    
    	}
    }
    if (pesertaValue!=true){ //jika belum dicek sama sekali
    	pesertaerror="<font color='red'> harap pilih satu </font>";
    	pesanpeserta.innerHTML= pesertaerror;
    }
    if (pesertaerror!=""){//kondisi salah karena ad pesan error
    	return false;
    }
    else{//konddisi isi pesan kosong yg berarti benar
        pesertaerror="";
        pesanpeserta.innerHTML=pesertaerror;
        return true;
    }
}

function checkbox(){//
	var myform = document.getElementById("formADDPROGRAM");
	var pesancheck = document.getElementById("pesan9");//PESAN ERROR
    var checks = document.getElementsByName("checkplus");//mengambil value 
    var hasChecked = false;
    var checkerror ="";
    for (var i = 0; i < checks.length; i++){ // looping untuk mengecek value nya
    	if (checks[i].checked == true){
    		hasChecked = true;
    	}
    }
    if (hasChecked!= true ){ //kondisi jika tidak check sama sekali
    	checkerror="<font color='red'> harap pilih setidaknya satu </font>";
    	pesancheck.innerHTML= checkerror;
    }
    if (checkerror!=""){// jika dalam isipesan tidak kosong berarti salah
    	return false;
    }
    else{//jika kondisi benar
    	checkerror="";
        pesancheck.innerHTML=checkerror;
        return true;
    }
}
function tanggal(){
	var date = document.getElementById("tanggal"); //mengambil nilai dari html
	var pesantanggal = document.getElementById("pesan6"); //pesan error
	var somedayDate = new Date(date.value); //konvert stirng to dae
	var tomorrow = new Date(); //type date
	tomorrow.setDate(new Date().getDate()+1); //// kondisi hari besok
	var tanggalError= ""; //isi pesan error

	if (date.value==""){ // jika tanggal tidak diisi
		tanggalError = "<font color='red'> tanggal belum diisi </font>";
		pesantanggal.innerHTML = tanggalError;
		date.style.border = "3px solid red";
	}
	else if(somedayDate < tomorrow){//jika  tanggal lebih kecil dari hari ini
		tanggalError = "<font color='red'> tanggal anda terlewat </font>";
		pesantanggal.innerHTML = tanggalError;
		date.style.border = "3px solid red";
	}

	if (tanggalError != ""){  //kondisi jika nilai masih salah
		document.formADDPROGRAM.tanggal.focus();
		return false;
	}
	else{ // kondisi jika masukan sudah benar
		tanggalError = "";
		pesantanggal.innerHTML=tanggalError;
		date.style.border="3px solid green";
		return true;
	}
}
