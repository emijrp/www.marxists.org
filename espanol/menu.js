function selectaplace(form) {
var appname= navigator.appName;
var appversion=parseInt(navigator.appVersion);
if (appname == "Netscape" && appversion >= 3) {
var formindex=form.select1.selectedIndex;
var storage=form.select1.options[formindex].text;
if (form.select1.options[formindex].value != "none") {
var msg=storage+"You are now being transferred to the -> "+storage;
for (var spot=0;spot<msg.length-storage.length;spot++) {
var x=msg.substring(spot,msg.length);
form.select1.options[formindex].text=x;
for(var d=0;d<150;d++) { };
}
window.location=form.select1.options[formindex].value;
form.select1[formindex].text=storage;
} else  {
form.select1[formindex].text="Not a real option!";
for(var d=0;d<1250;d++) { };
form.select1[formindex].text=storage;
   }
}
else {
var formindex=form.select1.selectedIndex;
window.location=form.select1.options[formindex].value;
   }
}
function makeMyMenu() {
document.write ('<table align=center border=0><tr>');
document.write ('<td>');
document.write ('<form><select name="select1" onChange="selectaplace(this.form)" size=1>');
document.write ('<option value="">Escoja el autor que desea leer:');
document.write ('<option value="tematica/palestina/index.htm">Abu Nimah, Hasan');
document.write ('<option value="tematica/palestina/index.htm">Abunimah, Ali');
document.write ('<option value="adler-max/index.tm">Adler, Max');
document.write ('<option value="adorno/index.htm">Adorno, Theodor');
document.write ('<option value="adrianzen/index.htm">Adrianzen, Catalina');
document.write ('<option value="aldred/index.htm">Aldred, Guy');
document.write ('<option value="alia/index.htm">Alia, Ramiz');
document.write ('<option value="althusser/index.htm">Althusser, Louis');
document.write ('<option value="alvarado/index.htm">Alvarado, Huberto');
document.write ('<option value="arismendi/index.htm">Arismendi, Rodney');
document.write ('<option value="allende/index.htm">Allende, Salvador');
document.write ('<option value="amaguana/index.htm">Amagua�a, Tr�nsito');
document.write ('<option value="tematica/mujer/amar/index.htm">Amar y Borb�n, Josepha');
document.write ('<option value="andrade/index.htm">Andrade, Juan');
document.write ('<option value="andropov/index.htm">Andr�pov, Yuri');
document.write ('<option value="arafat/index.htm">Arafat, Yasser');
document.write ('<option value="tematica/elsalvador/tamba/index.htm">Arag�n Cabrera, Carlos Francisco');
document.write ('<option value="tematica/mujer/autores/arenal/index.htm">Arenal, Concepci�n');
document.write ('<option value="tematica/cienpol/index.htm">Aristoteles');
document.write ('<option value="babeuf/index.htm">Babeuf, Gracchus');
document.write ('<option value="bajtin/index.htm">Bajtin, Mijail');
document.write ('<option value="bakunin/index.htm">Bakunin, Mikhail');
document.write ('<option value="argala/index.htm">Be�aran Orde�ana, Jos�');
document.write ('<option value="tematica/mujer/autores/berkins/index.htm">Berkins, Lohana');
document.write ('<option value="berkman/index.htm">Berkman, Alexander');
document.write ('<option value="bilbao/index.htm">Bilbao, Esteban');
document.write ('<option value="bland/index.htm">Bland, Bill');
document.write ('<option value="blanqui/index.htm">Blanqui, Auguste');
document.write ('<option value="bloch/index.htm">Bloch, Ernst');
document.write ('<option value="borojov/index.htm">Borojov, Dov Ber');
document.write ('<option value="bortenstein/index.htm">Bortenstein, Mieczyslaw');
document.write ('<option value="tematica/india/index.htm#bose">Bose, Subhas Chandra');
document.write ('<option value="brendel/index.htm">Brendel, Cajo');
document.write ('<option value="breton/index.htm">Breton, Andr�');
document.write ('<option value="brezhnev/index.htm">Brezhnev, Leonid');
document.write ('<option value="broue/index.htm">Brou�, Pierre');
document.write ('<option value="brust/index.htm">Brust, Joachim');
document.write ('<option value="bujarin/index.htm">Bujarin, Nicolas');
document.write ('<option value="burnham/index.htm">Burnham, James');
document.write ('<option value="cannon/index.htm">Cannon, James P.');
document.write ('<option value="tematica/mujer/autores/campoamor/index.htm">Campoamor, Clara');
document.write ('<option value="tematica/elsalvador/cardenal/index.htm">Cardenal Caldera, Antonio');
document.write ('<option value="tematica/elsalvador/carpio/index.htm">Carpio, Salvador Cayetano');
document.write ('<option value="castoriadis/index.htm">Castoriadis, Cornelius');
document.write ('<option value="caudwell/index.htm">Caudwell, Christopher');
document.write ('<option value="cliff/index.htm">Cliff, Tony');
document.write ('<option value="cooke/index.htm">Cooke, John William');
document.write ('<option value="tematica/mujer/autores/cristobal/opresion_y_lucha_de_la_mujer_trabajadora.pdf">Crist�bal, Olga');
document.write ('<option value="tematica/uruguay/mln/cultelli/index.htm">Cultelli, Andr�s');
document.write ('<option value="cunhal/index.htm">Cunhal, �lvaro');
document.write ('<option value="chavez/index.htm">Ch�vez, Hugo');
document.write ('<option value="chen/index.htm">Chen Boda');
document.write ('<option value="chen_duxiu/index.htm">Chen Duxiu');
document.write ('<option value="chen_yun/index.htm">Chen Yun');
document.write ('<option value="chernenko/index.htm">Chernenko, Konstant�n');
document.write ('<option value="chernin/index.htm">Chernin, Rose');
document.write ('<option value="tematica/elsalvador/chicas/index.htm">Chicas, Eugenio');
document.write ('<option value="chicherin/index.htm">Chicherin, Georgi V.');
document.write ('<option value="tematica/elsalvador/dalton/index.htm">Dalton, Roque');
document.write ('<option value="damen/index.htm">Damen, Onorato');
document.write ('<option value="darwin/index.htm">Darwin, Charles');
document.write ('<option value="tematica/mujer/autores/datri/index.htm">DAtri, Andrea');
document.write ('<option value="debs/index.htm">Debs, Eugene');
document.write ('<option value="deng/index.htm">Deng Xiaoping');
document.write ('<option value="tematica/mujer/autores/index.htm">De la Cruz, Juana In�s');
document.write ('<option value="delapuente/index.htm">De la Puente Uceda, Lu�s');
document.write ('<option value="delprado/index.htm">del Prado, Jorge');
document.write ('<option value="deutsch/index.htm">Deutsch, Leo');
document.write ('<option value="deutscher/index.htm">Deutscher, Isaac');
document.write ('<option value="di_bartolomeo/index.htm">di Bartolomeo, Nicola');
document.write ('<option value="diaz_martinez/index.htm">D�az Mart�nez, Antonio');
document.write ('<option value="diaz/index.htm">D�az Ramos, Jos�');
document.write ('<option value="dimitrov/index.htm">Dimitrov, Jorge');
document.write ('<option value="dobbs/index.htm">Dobbs, Farrell');
document.write ('<option value="drabkina/index.htm">Drabkina, Elisaveta');
document.write ('<option value="draper/index.htm">Draper, Hal');
document.write ('<option value="dunayevskaya/index.htm">Dunayevskaya, Raya');
document.write ('<option value="einstein/index.htm">Einstein, Albert');
document.write ('<option value="farrell_james/index.htm">Farrell, James T.');
document.write ('<option value="fernandez_oct/index.htm">Fern�ndez Vilchis, Octavio');
document.write ('<option value="m-e/index.htm">Engels, Friedrich');
document.write ('<option value="tematica/histsov/fiodorov/index.htm">Fiodorov, Alexei');
document.write ('<option value="floresgalindo/index.htm">Flores Galindo, Alberto');
document.write ('<option value="foster/index.htm">Foster, William Z.');
document.write ('<option value="frondizi/index.htm">Frondizi, Silvio');
document.write ('<option value="tematica/mujer/gago/index.htm">Gago, Angie');
document.write ('<option value="tematica/india/organismos/cpi-maoista/ganapathy/2010/enero/0001.htm">Ganapathy');
document.write ('<option value="tematica/india/index.htm#gandhi">Gandhi, Mohandas K.');
document.write ('<option value="tematica/nepal/index.htm">Gaurav');
document.write ('<option value="m-e/biografia.htm">Gemkow, Henrich');
document.write ('<option value="ghandy/index.htm">Ghandy, Anuradha');
document.write ('<option value="tematica/mujer/autores/gogol/index.htm">Gogol, Eugene');
document.write ('<option value="goldman/index.htm">Goldman, Emma');
document.write ('<option value="gonzalez_prada/index.htm">Gonzalez Prada, Manuel');
document.write ('<option value="goonewardene-leslie/index.htm">Goonewardene, Leslie');
document.write ('<option value="gorki/index.htm">Gorki, M�xim');
document.write ('<option value="gorkin/index.htm">Gorkin, Juli�n');
document.write ('<option value="gorter/index.htm">Gorter, Herman');
document.write ('<option value="tematica/mujer/gouges/index.htm">des Gouges, Olympe');
document.write ('<option value="gramsci/index.htm">Gramsci, Antonio');
document.write ('<option value="tematica/elsalvador/grande/index.htm">Grande, Rutilio');
document.write ('<option value="grant/index.htm">Grant, Ted');
document.write ('<option value="guerin/index.htm">Gu�rin, Daniel');
document.write ('<option value="guevara/index.htm">Guevara, Ernesto Che');
document.write ('<option value="tematica/palestina/index.htm">Habash, George');
document.write ('<option value="hall/index.htm">Hall, Gus');
document.write ('<option value="hallas/index.htm">Hallas, Duncan');
document.write ('<option value="handal/index.htm">Handal, Schafik Jorge');
document.write ('<option value="harman/index.htm">Harman, Chris');
document.write ('<option value="tematica/mujer/autores/harnecker/index.htm">Harnecker, Marta');
document.write ('<option value="haya/index.htm">Haya de la Torre, V�ctor Ra�l');
document.write ('<option value="hegel/index.htm">Hegel, G. W. F.');
document.write ('<option value="heijenoort/index.htm">van Heijenoort, Jean');
document.write ('<option value="hekmat/index.htm">Hekmat, Mansoor');
document.write ('<option value="heraud/index.htm">Heraud, Javier');
document.write ('<option value="hernandez/index.htm">Hern�ndez Tom�s, Jes�s');
document.write ('<option value="hic/index.htm">Hic, Marcel');
document.write ('<option value="ho/index.htm">Ho Chi Minh');
document.write ('<option value="hobbes/index.htm">Hobbes, Thomas');
document.write ('<option value="honecker/index.htm">Honecker, Erich');
document.write ('<option value="horkheimer/index.htm">Horkheimer, Max');
document.write ('<option value="tematica/econpol/inde.htm">Howell, Peter');
document.write ('<option value="enver/index.htm">Hoxha, Enver');
document.write ('<option value="hua/index.htm">Hua Guofeng');
document.write ('<option value="hyndman/index.htm">Hyndman, Henry');
document.write ('<option value="ibarruri/index.htm">Ibarruri, Dolores');
document.write ('<option value="ilienkov/index.htm">Ilienkov, Evald');
document.write ('<option value="jarrin/index.htm">Jarrin, Arturo');
document.write ('<option value="jaures/index.htm">Jaur�s, Jean');
document.write ('<option value="jiang/index.htm">Jiang Qing');
document.write ('<option value="tematica/india/index.htm#jinnah">Jinnah, Muhammad Ali');
document.write ('<option value="just/index.htm">Just, St�phane');
document.write ('<option value="justo/index.html">Justo, Liborio');
document.write ('<option value="katayama/index.htm">Katayama, Sen');
document.write ('<option value="kautsky/index.htm">Kautsky, Karl');
document.write ('<option value="kaypakkaya/index.htm">Kaypakkaya, Ibrahim');
document.write ('<option value="khrushchev/index.htm">Khrushchev, Nikita');
document.write ('<option value="kim/index.htm">Kim Il Sung');
document.write ('<option value="kim-jong-il/index.htm">Kim Jong Il');
document.write ('<option value="klement/index.htm">Klement, Rudolf');
document.write ('<option value="kollontai/index.htm">Kollontai, Alejandra');
document.write ('<option value="krilenko/index.htm">Krilenko, Nikolai');
document.write ('<option value="kropotkin/index.htm">Kropotkin, Pedro');
document.write ('<option value="krupskaya/index.htm">Krupskaya, Nadezhda');
document.write ('<option value="labriola/index.htm">Labriola, Antonio');
document.write ('<option value="lacroix-henri/index.htm">Lacroix, Henri');
document.write ('<option value="lafargue/index.htm">Lafargue, Paul');
document.write ('<option value="lenin/index.htm">Lenin, V. I.');
document.write ('<option value="lessner/index.htm">Lessner, Friedrich');
document.write ('<option value="levano/index.htm">L�vano, Delf�n');
document.write ('<option value="li/index.htm">Li Xiannian');
document.write ('<option value="liebknecht/index.htm">Liebknecht, Karl');
document.write ('<option value="liebknecht-w/index.htm">Liebknecht, Wilhelm');
document.write ('<option value="lin/index.htm">Lin Biao');
document.write ('<option value="lister/index.htm">L�ster, Enrique');
document.write ('<option value="liu/index.htm">Liu Shaoqi');
document.write ('<option value="lora/index.htm">Lora, Guillermo');
document.write ('<option value="losovsky/index.htm">Losovsky, Alexandr');
document.write ('<option value="tematica/mujer/lugones/index.htm">Lugones, Leopoldo');
document.write ('<option value="lukacs/index.htm">Luc�ks, Georg');
document.write ('<option value="lumumba/index.htm">Lumumba, Patrice');
document.write ('<option value="lunacha/index.htm">Lunacharsky, Anatoly');
document.write ('<option value="luxem/index.htm">Luxemburgo, Rosa');
document.write ('<option value="makarenko/index.htm">Makarenko, Anton');
document.write ('<option value="makhno/index.htm">Mahkno, Nestor');
document.write ('<option value="mandel/index.htm">Mandel, Ernest');
document.write ('<option value="mao/index.htm">Mao Zedong');
document.write ('<option value="tematica/mujer/autores/g_marin/index.htm">Mar�n, Gladys');
document.write ('<option value="tematica/mujer/autores/marin/index.htm">Mar�n, Olga Luc�a');
document.write ('<option value="mariateg/index.htm">Mari�tegui, Jos� Carlos');
document.write ('<option value="marigh/index.htm">Marighela, Carlos');
document.write ('<option value="mariner-roberto/index.htm">Mariner, Roberto');
document.write ('<option value="markovic/index.htm">Markovic, Dragoslav');
document.write ('<option value="martov/index.htm">M�rtov, Julius');
document.write ('<option value="m-e/index.htm">Marx, Carlos');
document.write ('<option value="marx-eleanor/index.htm">Marx, Eleanor');
document.write ('<option value="mathiez/index.htm">Mathiez, Albert');
document.write ('<option value="mattick/index.htm">Mattick, Paul');
document.write ('<option value="maurin/index.htm">Maurin, Joaqu�n');
document.write ('<option value="mazumdar/index.htm">Mazumdar, Charu');
document.write ('<option value="tematica/mujer/autores/meena/index.htm">Meena');
document.write ('<option value="mehring/index.htm">Mehring, Franz');
document.write ('<option value="tematica/elsalvador/melendez/index.htm">Mel�ndez, Jorge');
document.write ('<option value="melis/index.htm">M�lis, Jean Baptiste');
document.write ('<option value="mishra/index.htm">Mishra, Vinod');
document.write ('<option value="molotov/index.htm">Molotov, Vyacheslav');
document.write ('<option value="tematica/guerrillas/index.htm">Morales Hern�ndez, Jos� de Jes�s');
document.write ('<option value="moreno/index.htm">Moreno, Nahuel');
document.write ('<option value="morrow/index.htm">Morrow, Felix');
document.write ('<option value="mosquera/index.htm">Mosquera, Francisco');
document.write ('<option value="munis/index.htm">Munis, Grandizo');
document.write ('<option value="tematica/palestina/documentos/externos/pci-2009.htm">Nafah, Mujammad');
document.write ('<option value="naville-pierre/index.htm">Naville, Pierre');
document.write ('<option value="tematica/india/index.htm#nehru">Nehru, Jawaharlal');
document.write ('<option value="ngo/index.htm">Ngo Van Xuyet');
document.write ('<option value="nin/index.htm">Nin, Andreu');
document.write ('<option value="novack/index.htm">Novack, George');
document.write ('<option value="ossinski/index.htm">Ossinski, Nikolai');
document.write ('<option value="pablo/index.htm">Pablo, Michel');
document.write ('<option value="pannekoek/index.htm">Pannekoek, Anton');
document.write ('<option value="paredes/index.htm">Paredes Macedo, Saturnino');
document.write ('<option value="parvus/index.htm">Parvus, Alexander');
document.write ('<option value="pauker/index.htm">Pauker, Ana');
document.write ('<option value="tematica/mujer/autores/harnecker/1994/retos.htm">Pe�a, Lorena');
document.write ('<option value="peredo/index.htm">Peredo, Inti');
document.write ('<option value="peret/index.htm">P�ret, Benjamin');
document.write ('<option value="pfempfert/index.htm">Pfempfert, Franz');
document.write ('<option value="piatnitsky/index.htm">Piatnitsky, Osip');
document.write ('<option value="plejanov/index.htm">Plejanov, Georgi');
document.write ('<option value="ponomariov/index.htm">Ponomariov, Boris');
document.write ('<option value="pottier/index.htm">Pottier, Eugene');
document.write ('<option value="tematica/nepal/index.htm">Prachanda');
document.write ('<option value="prager-rodolphe/index.htm">Prager, Rodolophe');
document.write ('<option value="preobrazhenski/index.htm">Preobrazhenski, Eugenio');
document.write ('<option value="pribicevic/index.htm">Pribicevic, Branko');
document.write ('<option value="radek/index.htm">Radek, Karl');
document.write ('<option value="rajkumar-azad/index.htm">Rajkumar, Cherukumi');
document.write ('<option value="rakovski/index.htm">Rakovski, Christian');
document.write ('<option value="ramos/index.htm">Ramos, Jorge Abelardo');
document.write ('<option value="kishenji-rao/index.htm">Rao, Koteshwar');
document.write ('<option value="recabarren/index.htm">Recabarren, Luis E.');
document.write ('<option value="reed-evelyn/index.htm">Reed, Evelyn');
document.write ('<option value="reed/index.htm">Reed, John');
document.write ('<option value="rivera/index.htm">Rivera, Enrique');
document.write ('<option value="tematica/cienpol/index.htm">Robespierre, Maximillien');
document.write ('<option value="rosmer/index.htm">Rosmer, Alfred');
document.write ('<option value="tematica/women/autores/roy/index.htm">Roy, Arundhati');
document.write ('<option value="roy-m-n/index.htm">Roy, Manabendra Nath');
document.write ('<option value="tematica/mujer/autores/ruether/index.htm">Ruether, Rosemary Radford')
document.write ('<option value="ruhle/index.htm">R�hle, Otto');
document.write ('<option value="saad/index.htm">Saad, Pedro');
document.write ('<option value="tematica/palestina/said/index.htm">Said, Edward');
document.write ('<option value="tematica/elsalvador/sanchez/index.htm">S�nchez Cer�n, Salvador');
document.write ('<option value="tematica/elsalvador/sancho/index.htm">Sancho, Eduardo');
document.write ('<option value="sankara/index.htm">Sankara, Thomas');
document.write ('<option value="tematica/elsalvador/santa_cruz/index.htm">Santa Cruz, Domingo');
document.write ('<option value="santucho/index.htm">Santucho, Mario Roberto');
document.write ('<option value="tematica/palestina/documentos/schoenman/historiaocultadelsionismo.pdf">Schoenman, Ralph');
document.write ('<option value="sedov/index.htm">Leon Sedov');
document.write ('<option value="sedova/index.htm">Sedova Trotsky, Natalia');
document.write ('<option value="serge/index.htm">Serge, V�ctor');
document.write ('<option value="sheela/index.htm">Sheela');
document.write ('<option value="sikder/index.htm">Sikder, Siraj');
document.write ('<option value="smith_adam/index.htm">Smith, Adam');
document.write ('<option value="sosnovsky/index.htm">Sosnovsky, Lev');
document.write ('<option value="spector/index.htm">Spector, Maurice');
document.write ('<option value="spilimbergo/index.htm">Spilimbergo, Jorge Enea');
document.write ('<option value="stalin/index.htm">Stalin, Jos�');
document.write ('<option value="tematica/palestina/index.htm">Suleiman, Fahd');
document.write ('<option value="ta/index.htm">Ta Thu Thau');
document.write ('<option value="tematica/india/index.htm#tilak">Tilak, Balawant Gangadhar');
document.write ('<option value="tito/index.htm">Tito, Josip Broz');
document.write ('<option value="tematica/mujer/autores/toledo/index.htm">Toledo, Cecilia');
document.write ('<option value="togliatti/index.htm">Togliatti, Palmiro');
document.write ('<option value="trent/index.htm">Trent, Evelyn');
document.write ('<option value="tristan/index.htm">Trist�n, Flora');
document.write ('<option value="camilo/index.htm">Torres, Camilo');
document.write ('<option value="trotsky/index.htm">Trotsky, Le�n');
document.write ('<option value="tsintsande/index.htm">Tsintsande, Kote');
document.write ('<option value="tematica/elsalvador/valladares/index.htm">Valladares, Mar�a Marta');
document.write ('<option value="tematica/mujer/autores/vallejo_dowling/index.htm">Vallejo Dowling, Camila');
document.write ('<option value="vallejo/index.htm">Vallejo, C�sar');
document.write ('<option value="van-den-eynde/index.htm">van den Eynde, Arturo');
document.write ('<option value="velasco/index.htm">Velasco Alvarado, Juan');
document.write ('<option value="tematica/elsalvador/villalobos/index.htm">Villalobos, Joaqu�n');
document.write ('<option value="wagner/index.htm">Wagner, Helmut');
document.write ('<option value="wang/index.htm">Wang Hongwen');
document.write ('<option value="westphalen/index.htm">von Westphalen Marx, Jenny');
document.write ('<option value="widick-bj/index.htm">Widick, BJ');
document.write ('<option value="williams/index.htm">Williams, Albert Rhys');
document.write ('<option value="malcolm_x/index.htm">X, Malcolm');
document.write ('<option value="tematica/econpol/inde.htm">Yaffe, David');
document.write ('<option value="yao/index.htm">Yao Wenyuan');
document.write ('<option value="zasulich/index.htm">Zasulich, Vera');
document.write ('<option value="zetkin/index.htm">Zetkin, Clara');
document.write ('<option value="zhang/index.htm">Zhang Chunqiao');
document.write ('<option value="zhou/index.htm">Zhou Enlai');
document.write ('<option value="zhu/index.htm">Zhu De');
document.write ('<option value="zinoviev/index.htm">Zinoviev, Grigory');
document.write ('</select>');
document.write ('</form></td></tr></table>');
}
makeMyMenu();
