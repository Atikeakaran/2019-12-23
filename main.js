/*  

switch (expression){
    case x:
        //kod blogu;
        break ;
    case y:
        //kod blogu;
        break ;
    case z:
        //kod blogu;
        break ;
    case t:
        //kod blogu;
        break ;
    default : 
        //kod blogu;
}



var i=0;
if (i<=10){
    kod blogu
}


if de belirli bir aralık olur
case de seçenek sunulur
do-while



//default olmadan yazılan bir örnek

var today = new Date();
console.log(today);
today = today.getDate();
console.log(today);

// 0-6 pazar 0, pazartesi 1, ... cumartesi 6
//strict mode
// console.log ( 1=='1')
var day;
switch (today) {
    case 0:
        day = "pazar";
        break;
    case 1:
        day = "pazartesi";
        break;
    case 2:
        day = "salı";
        break;
    case 3:
        day = "çarşamba";
        break;
    case 4:
        day = "perşembe";
        break;
    case 5:
        day = "cuma";
        break;
        // case 6 :
        //     day = "cumartesi";
    default:
        day = "cumartesi";
}
console.log(day);

// default ile switch case kullanımı


switch (today) {
    case 6:
        text = "today is saturday";
        break;
    case 0:
        day = "today is sunday";
        break;
    default:
        text = "haftasonunu iple çekiyorum";
}
console.log(text);


switch (today) {
    case 4:
    case 5:
        text1 = "yaşasın haftasonu yaklaşıyor";
        break;
    case 0:
    case 6:
        text1 = "yupii haftasonu";
        break;
    default:
        text1 = "haftasonuna daha çok var"
}
console.log(text1);






var fiyatAl = function(meyve){

meyve = meyve.toLowerCase();
switch (meyve) {
        case 'Portakal':
        case 'elma':
            fiyat = 2.50;
            break;
        case 'muz':
        case 'kivi':
            fiyat = 3.50;
            break;
            case 'kestane':
                fiyat = 5.00;
                break;
        default:
            fiyat = 0.00;
    }

    return[meyve, fiyat];
}
    console.log(fiyatAl ('ananas'));
    console.log(fiyatAl ('elma'));
    console.log(fiyatAl ('muz'));
    console.log(fiyatAl ('kiraz'));

var sonuc = fiyatAl('kiraz');
sonuc = fiyatAl('kestane');
console.log(sonuc);
switch(sonuc[1]){
case 0 : 
console.log(`Aradığınız ürün olan ${sonuc[0]} reyonumuzda bulunmamaktadır.`);
default:
    console.log(`Aradığınız ürün olan ${sonuc[0]} fiyatı : ${sonuc[1]} tl'dir`);
}

*/
/*

//ARRAY Methods

// unshift ()         push()   -----------> eklemek için
// shift ()           pop()   -----------> çıkartmak için
// splice()


var x = [1,2,3,4,5];
console.log(x);

x.push(10);
console.log(x);

var y = x.push('İstanbul');
console.log(x);
console.log(y); // x array nin length ini vermektedir.

//spread operatörleri

var z = x;
console.log(z);

x[0]=121;       // x değiştiğinde z otomatik değişir çünkü x z ye referans olduğu için
console.log(x);
console.log(z);

z[1]=5;       
console.log(x);
console.log(z);

var t =[...x];  //spread operatörleri olarak isimlendiriliyor
console.log(x);
x[3]=44;
console.log(x);
console.log(t);
t[4]=0;
console.log(x);
console.log(t);


// push() eklemek
var x = [1,2,3,4,5];
console.log(x);

x.push(10);
console.log(x);

var y = x.push('İstanbul');
console.log(x);
console.log(y); // x array nin length ini vermektedir.




// pop () metodu

var sehirler = ['ankara', 'izmir', 'bursa', 'afyon'];
sehirler.pop();
console.log(sehirler);

var newSehirler = sehirler.pop();
console.log(newSehirler);
console.log(sehirler);

// UNSHIFT metodu bas tarafa eklemek için

var arabalar = ['bmw', 'opel', 'toyota', 'nissan'];
console.log(arabalar);
arabalar.unshift('mercedes');
console.log(arabalar);

var newAraba = arabalar.unshift('ford');
console.log(arabalar);
console.log(newAraba);




// SHIFT() metodu bas taraftan çıkarmak için

var isimler= ['ali', 'ayse', 'ahmet', 'naz'];
console.log(isimler);
isimler.shift();
console.log(isimler);

var newIsim= isimler.shift();
console.log(isimler);
console.log(newIsim);


var meyve =['muz', 'portakal','elma','mango'];
meyve[0]='havuc';
meyve[2]='pırasa';
console.log(meyve);

meyve[meyve.length]='karpuz';
console.log(meyve);

meyve[7]='kavun';
console.log(meyve);
console.log(meyve.length);
console.log(meyve[5]);
meyve[meyve.length-1]='ananas';
console.log(meyve);




//splice() metodu araya eleman eklemek ve çıkartmak için kullanılır.

//splice (position, silinecek eleman sayısı, yeni elemanlar)


// herhangi bir eleman silmeden yeni eklemeler yapmak

var meyve =['muz', 'portakal','elma','mango'];
console.log(meyve);
meyve.splice(2,0,'karpuz', 'kavun','erik');
console.log(meyve);
console.log('----------');

//hwehangi bir eleman silerek yenielemanlar eklemek
var meyve =['muz', 'portakal','elma','mango'];
console.log(meyve);
meyve.splice(1,2,'karpuz', 'kavun','erik');
console.log(meyve);
console.log('----------');

// ekleme yapmadan silmek
var meyve =['muz', 'portakal','elma','mango'];
console.log(meyve);
meyve.splice(1,2,);
console.log(meyve);
console.log('----------');



// slice metodu 
//var olan bir array in bir parçasını kopyalayarak yeni bir array oluşturmak
// slice (start point, end) end: dahil değil.

var giysiler= ['pantolon','kazak','gömlek','mont','ceket'];

var newGiysiler= giysiler.slice(2,4);
console.log(giysiler);
console.log(newGiysiler);




//CONCAT() metodu

var x=[1,2,3,4];
var y =[5,6,7,8];

var z = x +y;
console.log(z);
console.log(typeof z);
// number olarak sonuç elde etmek için concat kullanılır.

var w=x.concat(y);
console.log(w);
console.log(typeof w);


var t = x. concat(['ali','kerim']);
console.log(t);


var t = [1,25,8,34]. concat(['ali','kerim']);
console.log(t);

var u =[1,2,3,4].concat(["ankara","kazak"],[33,"hasan"]);
console.log(u);



*/






//join() array in elemanlarını tek stringe çevirir.
//tostring()
//indexof() index numarası -1
//reverse() array listesini tersten yazdırmaya yarar.



//while do  - do While


// while do                      oncelikle true olma şartı çek ediliyor
// while (true){                   true ise kod blogu icra ediliyor
//     //kod blogu
// }

// do-while                        once blogu çalıştırır sonra doğruluğunu kontrol eder.
// do{
//     //kod blogu
// }
// while (true);




//While -do
var i =1;
while(i<=10){
    var text="numara " +i;
console.log(text);
i++
}

console.log("-------------");

// do -While
var i =1;
do{
    var text="numara " +i;
console.log(text);
i++
}
while(i<=10);



console.log("-------------");
console.log("-------------");


var i =1;
while(i=0){
    var text="numara " +i;
console.log(text);
i++
}

console.log("-------------");

// do -While
var i =1;
do{
    var text="numara " +i;
console.log(text);
i++
}
while(i<0);




var i=1;
while(i<10){
    var text;
    if(i===3){
        i++;
        console.log("3'üatla");
        continue;
    }

    if(i%2===0){
        text = `the number ${i}is even`;
        console.log(text);
    } else{
        text = `the number ${i}is odd`;
        console.log(text);
    }

    if(i===7){
        console.log("7'den sonra devam etme");
        break;
    }
    i++;
}