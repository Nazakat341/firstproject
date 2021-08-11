const url=require('url');

const myUrl=new URL('http://mywebsite.com:800/hello.html?id=100&status=Active');

//Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//hostname(does not get port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);
//serialized query
console.log(myUrl.search);
//params object
console.log(myUrl.searchParams);
//Add  params
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//loop through
myUrl.searchParams.forEach((value,name)=>{ console.log(`${name} ${value}`)});