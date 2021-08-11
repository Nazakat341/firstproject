const path=require('path');
// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));
// File Extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename).base);
//cancatination
console.log(path.join(__filename),'text','\hello.html');