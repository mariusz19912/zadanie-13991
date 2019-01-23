const string1 = "Uwielbiam JavaScript",
      string2 = "Jestem świetnym programistą";

function porownanie(str1,str2) {
 if (str1.length>str2.length) {
   return str1;
 } else {
   return str2;
 }
};

var x = porownanie(string1,string2);
console.log(x);