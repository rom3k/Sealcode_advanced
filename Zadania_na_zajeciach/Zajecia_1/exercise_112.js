for (var i = 0; i < 5; i++) {
   var k = function(i) {
       setTimeout(function(){
           console.log(i);
       }, 100);
   }(i);
}