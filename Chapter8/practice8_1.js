// let uri = "How's%20it%20going%3F";

// let decode = decodeURIComponent(uri);
// console.log(decode);

// let encode = encodeURIComponent(decode);
// console.log(encode);

let webUri = "http://www.basescripts.com?=Hello World";

let encodeWebURi = encodeURI(webUri);
console.log(encodeWebURi);
// Decoding and encoding URIs
//decodeUri() & encodeUri()
// they are fixing broken URIs
//example

let uri = 'https://www.example.com/submit?name=maaike van putten';
let encoded_uri = encodeURI(uri);
console.log("Encoded: ", encoded_uri);
let decoded_uri = decodeURI(uri);
console.log("Decoded: ", decoded_uri);

// decodeUriComponent() & encodeUriComponent()
// the methods previously used are very useful for fixing a broken URL
// but are useless when you only want to endode or decode a string that contains a character with a special meaning, such as = or &
//Example: https:// www.example.com/submit?name=this&that=some%20thing&code=love

//According to the URI standards the are actually 3 variables in the uri:
// 1. name (value is this)
// 2. that (value is some thing)
// 3. code (value is love)

let x = 'https://www.example.com/submit?name=this&that=some%20things&code=love';

let encoded = encodeURIComponent(x);
console.log('Encode using URI Component:',encoded);

let decoded = decodeURIComponent(x);
console.log('Decode using URI Component:', decoded);

// Encoding with escape() & unescape()
// Gloval methods to do something similar to encode(escape) and decode(unescape).
//Both methods are strongly discouraged to use and they might actually disappear from future JS versions or may not be supported by browsers for good reason

