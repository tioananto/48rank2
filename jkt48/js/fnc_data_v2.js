// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "Team J",
  "Team KIII",
  "Team T",
  "JKT48 Academy Class A",
  "JKT48 Academy Class B",
  "Ex-Members"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Ariella Calista Ichwan",    				[1,0,0,0,0,0], "j/ariel.jpg"],
  [1, "Cindy Hapsari Maharani Pujiantoro Putri",[1,0,0,0,0,0], "j/cinhap.jpg"],
  [1, "Diani Amalia Ramadhani",         		[1,0,0,0,0,0], "j/diani.jpg"],
  [1, "Eve Antoinette Ichwan",         		[1,0,0,0,0,0], "j/eve.jpg"],
  [1, "Feni Fitriyanti",       					[1,0,0,0,0,0], "j/feni.jpg"],
  [1, "Frieska Anastasia Laksani",         		[1,0,0,0,0,0], "j/frieska.jpg"],
  [1, "Fransisca Saraswati Puspa Dewi",     			[1,0,0,0,0,0], "j/sisca.jpg"],
  [1, "Gabriela Margareth Warouw",          	[1,0,0,0,0,0], "j/gaby.jpg"],
  [1, "Nadila Cindi Wantari",        		[1,0,0,0,0,0], "j/nadila.jpg"], 
  [1, "Ni Made Ayu Vania Aurellia",         		[1,0,0,0,0,0], "j/aurel.jpg"],
  [1, "Riska Amelia Putri",        				[1,0,0,0,0,0], "j/amel.jpg"],   
  [1, "Rona Anggreani",      				[1,0,0,0,0,0], "j/rona.jpg"],   
  [1, "Sania Julia Montolalu",       			[1,0,0,0,0,0], "j/julie.jpg"],
  
  
  [1, "Anastasya Narwastu Tety Handuran",    				[0,1,0,0,0,0], "k3/tasya.jpg"],
  [1, "Angelina Christy",         		[0,1,0,0,0,0], "k3/christy.jpg"],
  [1, "Aninditha Rahma Cahyadi",        				[0,1,0,0,0,0], "k3/anin.jpg"],
  [1, "Beby Chaesara Anadila",          				[0,1,0,0,0,0], "k3/beby.jpg"],
  [1, "Gita Sekar Andarini",        					[0,1,0,0,0,0], "k3/gita.jpg"],
  [1, "Helisma Putri",       			[0,1,0,0,0,0], "k3/eli.jpg"],
  [1, "Kandiya Rafa Maulidita",         				[0,1,0,0,0,0], "k3/indy.jpg"],
  [1, "Maria Genoveva Natalia Desy Purnamasari Gunawan",[0,1,0,0,0,0], "k3/desy.jpg"],
  [1, "Mutiara Azzahra",       					[0,1,0,0,0,0], "k3/muthe.jpg"],
  [1, "Nurhayati",      						[0,1,0,0,0,0], "k3/aya.jpg"],
  [1, "Shani Indira Natio",    							[0,1,0,0,0,0], "k3/shani.jpg"],
  [1, "Shania Gracia",    								[0,1,0,0,0,0], "k3/gracia.jpg"],
  [1, "Yessica Tamara",         				[0,1,0,0,0,0], "k3/chika.jpg"],
 
  
  [1, "Adriani Elisabeth",           		[0,0,1,0,0,0], "t/lisa.jpg"],
  [1, "Fidly Immanda Azzahra",        	[0,0,1,0,0,0], "t/fia.jpg"],
  [1, "Gabriel Angelina",	[0,0,1,0,0,0], "t/brielle.jpg"],
  [1, "Gabryela Marcellina",         		[0,0,1,0,0,0], "t/aby.jpg"],
  [1, "Jinan Safa Safira",           	[0,0,1,0,0,0], "t/jinan.jpg"],
  [1, "Melati Putri Rahel Sesilia",     [0,0,1,0,0,0], "t/meme.jpg"],
  [1, "Nabila Fitriana",         		[0,0,1,0,0,0], "t/lala.jpg"],
  [1, "Puti Nadhira Azalia",           	[0,0,1,0,0,0], "t/pucchi.jpg"],
  [1, "Rinanda Syahputri",           	[0,0,1,0,0,0], "t/nanda.jpg"],
  [1, "Tan Zhi Hui Celine",           	[0,0,1,0,0,0], "t/celine.jpg"],
  
  [1, "Aiko Harumi",        			[0,0,0,1,0,0], "classA/aiko.png"],
  [1, "Amanina Afiqah",	[0,0,0,1,0,0], "classA/amanina.png"],
  [1, "Amirah Fatin",        			[0,0,0,1,0,0], "classA/amirah.png"],
  [1, "Aurel Mayori",        				[0,0,0,1,0,0], "classA/aurel.png"],
  [1, "Azizi Asadel",        				[0,0,0,1,0,0], "classA/azizi.png"],
  [1, "Cindy Nugroho",         		[0,0,0,1,0,0], "classA/cindy.png"],
  [1, "Cornelia Vanisa",         		[0,0,0,1,0,0], "classA/cornelia.png"],  
  [1, "Devytha Maharani",         		[0,0,0,1,0,0], "classA/devytha.png"],
  [1, "Dhea Angelia",        				[0,0,0,1,0,0], "classA/dhea.png"],
  [1, "Eriena Kartika",        				[0,0,0,1,0,0], "classA/eriena.png"],
  [1, "Febi Komaril",        				[0,0,0,1,0,0], "classA/febi.png"],
  [1, "Febrina Diponegoro",        			[0,0,0,1,0,0], "classA/febrina.png"],
  [1, "Febriola Sinambela",        			[0,0,0,1,0,0], "classA/febriola.png"],
  [1, "Fiony Alveria",        		[0,0,0,1,0,0], "classA/fiony.png"],
  [1, "Flora Shafiq",        		[0,0,0,1,0,0], "classA/flora.png"],
  [1, "Freya Jayawardana",        				[0,0,0,1,0,0], "classA/freya.png"],
  [1, "Gabriella Stevany",        		[0,0,0,1,0,0], "classA/gabriella.png"],
  [1, "Jessica Chandra",        			[0,0,0,1,0,0], "classA/jessica.png"],
  [1, "Jesslyn Callista",        			[0,0,0,1,0,0], "classA/jesslyn.png"],
  [1, "Keisya Ramadhani",        				[0,0,0,1,0,0], "classA/keisya.png"],
  [1, "Lulu Salsabila",        			[0,0,0,1,0,0], "classA/lulu.png"],
  [1, "Nyimas Ratu Rafa",        				[0,0,0,1,0,0], "classA/nyimas.png"],
  [1, "Pamela Krysanthe",        				[0,0,0,1,0,0], "classA/pamela.png"],
  [1, "Reva Adriana",        				[0,0,0,1,0,0], "classA/reva.png"],
  [1, "Reva Fidela",        				[0,0,0,1,0,0], "classA/reva2.png"],  
  [1, "Salma Annisa",        				[0,0,0,1,0,0], "classA/salma.png"],
  [1, "Shalza Grasita",        				[0,0,0,1,0,0], "classA/shalza.png"],
  [1, "Umega Maulana",        				[0,0,0,1,0,0], "classA/umega.png"],
  [1, "Viona Fadrin",        				[0,0,0,1,0,0], "classA/viona.png"],  
  [1, "Zahra Nur",        				[0,0,0,1,0,0], "classA/zahra.png"],

  [1, "Pak Gathot",        				[0,0,0,0,1,0], "classB/gathot.png"],
  
  [1, "Siti Gayatri",				[0,0,0,0,0,1], "ex/siti_gayatri.png"],
  [1, "Intania Pratama Ilham",		[0,0,0,0,0,1], "ex/intania.jpg"],
  [1, "Allisa Astri",				[0,0,0,0,0,1], "ex/allisa_astri.jpg"],
  [1, "Fahira",						[0,0,0,0,0,1], "ex/fahira.jpg"],
  [1, "Neneng Rosediana",			[0,0,0,0,0,1], "ex/ochi.jpg"],
  [1, "Cleopatra Djapri",			[0,0,0,0,0,1], "ex/cleo.jpg"],
  [1, "Althea Callista",			[0,0,0,0,0,1], "ex/althea.jpg"],
  [1, "Nurhalima Oktavianti",		[0,0,0,0,0,1], "ex/halimah.jpg"],
  [1, "Alissa Galliamova",			[0,0,0,0,0,1], "ex/mova.jpg"],
  [1, "Olivia Robberecht",			[0,0,0,0,0,1], "ex/olivia.jpg"],
  [1, "Annisa Athia",				[0,0,0,0,0,1], "ex/annisa_athia.jpg"],
  [1, "Intar Putri Kariina",		[0,0,0,0,0,1], "ex/karin.jpg"],
  [1, "Nadhifa Karimah",			[0,0,0,0,0,1], "ex/nadhifa.jpg"],
  [1, "Dellia Erdita",				[0,0,0,0,0,1], "ex/dellia.jpg"],
  [1, "Diasta Priswarini",			[0,0,0,0,0,1], "ex/diasta.jpg"],
  [1, "Sonya Pandarmawan",			[0,0,0,0,0,1], "ex/sonya.jpg"],
  [1, "Stella Cornelia",			[0,0,0,0,0,1], "ex/stella.png"],
  [1, "Octi Sevpin",				[0,0,0,0,0,1], "ex/octi.jpg"],
  [1, "Cindy Gulla",				[0,0,0,0,0,1], "ex/cigul.jpg"],
  [1, "Aki Takajo",					[0,0,0,0,0,1], "ex/akicha.jpg"],
  [1, "Rena Nozawa",				[0,0,0,0,0,1], "ex/rena.jpg"],
  [1, "Pipit Ananda",				[0,0,0,0,0,1], "ex/pipit.jpg"],
  [1, "Shaffa Nabila	",			[0,0,0,0,0,1], "ex/shaffa_nabila.jpg"],
  [1, "Milenia Christien Glory Goenawan",[0,0,0,0,0,1], "ex/milen.jpg"],
  [1, "Kezia Putri Andinta",		[0,0,0,0,0,1], "ex/kei.jpg"],
  [1, "Rica Leyona",				[0,0,0,0,0,1], "ex/rica.jpg"],
  [1, "Zebi Magnolia Fawwaz",		[0,0,0,0,0,1], "ex/zebi.jpg"],
  [1, "Noella Sisterina",			[0,0,0,0,0,1], "ex/noella.jpg"],
  [1, "Anggie Putri Kurniasari",	[0,0,0,0,0,1], "ex/anggie.jpg"],
  [1, "Rizka Khalila",				[0,0,0,0,0,1], "ex/yukka.jpg"],
  [1, "Novinta Dhini",				[0,0,0,0,0,1], "ex/nobi.jpg"],
  [1, "Thalia",						[0,0,0,0,0,1], "ex/thalia.jpg"],
  [1, "Andela Yuwono",				[0,0,0,0,0,1], "ex/andela.jpg"],
  [1, "Jessica Berliana Ekawardani",[0,0,0,0,0,1], "ex/jejes.jpg"],
  [1, "Mega Suryani",				[0,0,0,0,0,1], "ex/mega_suryani.jpg"],
  [1, "Putri Farin Kartika",		[0,0,0,0,0,1], "ex/farin.jpg"],
  [1, "Triarona Kusuma",			[0,0,0,0,0,1], "ex/tya.jpg"],
  [1, "Indah Permata Sari",			[0,0,0,0,0,1], "ex/indah_permata.jpg"],
  [1, "Alycia Ferryana",			[0,0,0,0,0,1], "ex/cia.jpg"],
  [1, "Farina Yogi Devani",			[0,0,0,0,0,1], "ex/farina.jpg"],
  [1, "Nina Hamidah",				[0,0,0,0,0,1], "ex/nina_hamidah.jpg"],
  [1, "Delima Rizky",				[0,0,0,0,0,1], "ex/delima.jpg"],
  [1, "Elaine Hartanto",			[0,0,0,0,0,1], "ex/ilen.jpg"],
  [1, "Martha Graciela",			[0,0,0,0,0,1], "ex/martha_graciela.jpg"],
  [1, "Sofia Meifaliani",			[0,0,0,0,0,1], "ex/sofia.jpg"],
  [1, "Chikita Ravenska Mamesah",	[0,0,0,0,0,1], "ex/chikita.jpg"],
  [1, "Anggita Destiana Dewi",		[0,0,0,0,0,1], "ex/anggita_destiana.jpg"],
  [1, "Helma Sonya",				[0,0,0,0,0,1], "ex/helma_sonya.jpg"],
  [1, "Rissanda Putri Tuarissa",	[0,0,0,0,0,1], "ex/rissanda_putri.jpg"],
  [1, "Rezky Wiranti Dhike",		[0,0,0,0,0,1], "ex/dhike.jpg"],
  [1, "Jennifer Hanna",				[0,0,0,0,0,1], "ex/hanna.jpg"],
  [1, "Ghaida Farisya",				[0,0,0,0,0,1], "ex/ghaida.jpg"],
  [1, "Sendy Ariani",				[0,0,0,0,0,1], "ex/sendy.jpg"],
  [1, "Haruka Nakagawa",			[0,0,0,0,0,1], "ex/haruka.jpg"],
  [1, "Nadhifa Salsabila",			[0,0,0,0,0,1], "ex/nadse.jpg"],
  [1, "Chintya Hanindhitakirana Wirawan",[0,0,0,0,0,1], "ex/chintya.jpg"],
  [1, "Yansen Indiani",				[0,0,0,0,0,1], "ex/cesen.jpg"],
  [1, "Jessica Vania",				[0,0,0,0,0,1], "ex/jeje.jpg"],
  [1, "Jessica Veranda Tanumihardja",[0,0,0,0,0,1], "ex/ve.jpg"],
  [1, "Christi",					[0,0,0,0,0,1], "ex/christi.jpg"],
  [1, "Nabilah Ratna Ayu Azalia",	[0,0,0,0,0,1], "ex/nabilah.png"],
  [1, "Regina Angelina",			[0,0,0,0,0,1], "ex/regina.jpg"],
  [1, "Sri Lintang",				[0,0,0,0,0,1], "ex/sri_lintang.jpg"],
  [1, "Zahra Yuriva Dermawan",		[0,0,0,0,0,1], "ex/yuriva.jpg"],
  [1, "Rina Chikano",				[0,0,0,0,0,1], "ex/chikarina.jpg"],
  [1, "Fakhriyani Shafariyanti",	[0,0,0,0,0,1], "ex/shafa.jpg"],
  [1, "Melody Nurramdhani Laksani",	[0,0,0,0,0,1], "ex/melody.jpg"],
  [1, "Dena Siti Rohyati",			[0,0,0,0,0,1], "ex/dena.jpg"],
  [1, "Elizabeth Gloria Setiawan",	[0,0,0,0,0,1], "ex/glori.jpg"],
  [1, "Jihan Miftahul Jannah",		[0,0,0,0,0,1], "ex/jee.jpg"],
  [1, "Amanda Dwi Arista",			[0,0,0,0,0,1], "ex/manda.jpg"],
  [1, "Devi Kinal Putri",			[0,0,0,0,0,1], "ex/kinal.jpg"],
  [1, "Citra Ayu Pranajaya Wibrado",[0,0,0,0,0,1], "ex/citra.jpg"],
  [1, "Ruth Damayanti Sitanggang",	[0,0,0,0,0,1], "ex/iyut.jpg"],
  [1, "Violeta Burhan",				[0,0,0,0,0,1], "ex/violeta_burhan.jpg"],
  [1, "Priscillia Sari Dewi",		[0,0,0,0,0,1], "ex/sisil.jpg"],
  [1, "Denise Caroline",			[0,0,0,0,0,1], "ex/denise.jpg"],
  [1, "Dwi Putri Bonita",			[0,0,0,0,0,1], "ex/uty.jpg"],
  [1, "Kanya Caya",					[0,0,0,0,0,1], "ex/kanya_caya.jpg"],
  [1, "Saya Kawamoto",				[0,0,0,0,0,1], "ex/sayaya.jpg"],
  [1, "Lidya Maulida Djuhandar",	[0,0,0,0,0,1], "ex/lidya.jpg"],
  [1, "Putri Cahyaning Anggraini",	[0,0,0,0,0,1], "ex/riri.jpg"]
];
