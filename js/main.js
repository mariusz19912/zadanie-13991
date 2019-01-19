const string1 = "Uwielbiam JavaScript",
      string2 = "Jestem świetnym programistą";

function porownanie(str1,str2) {
  var b = Math.max(str1.length,str2.length);
 return b;
};

var x = porownanie(string1,string2);
console.log(x);