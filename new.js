var jsonfile = require('jsonfile')
var fs = require("fs");
var Table = require('easy-table');
var file = 'source.json'
jsonfile.readFile(file, function(err, data) {
	console.log(data);
var t = new Table
data.forEach(function(student) {
  t.cell('id', student.id)
  t.cell('  fname', student.fname)
  t.cell('lname', student.lname)
   t.cell('score', student.score)
  t.newRow()
})

console.log(t.toString()); 
fs.writeFile('source.txt', t, {"encoding":'utf8'},  function(err) {
   if (err) {
      return console.error(err);
   } fs.readFile('source.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: \n" + data.toString());
	  
 t.sort(['score|des']) )  
console.log(t.toString());
   });
});	
});

	

 