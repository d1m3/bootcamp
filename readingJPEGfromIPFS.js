const myCID = 'QmSttZmk1zuqoquzi89iNQYjghkqfHwHHMzwQgAFbq5n4T'
// Dependencies
const IPFS = require('ipfs');
const all = require('it-all');
const fs = require('fs');
(async () => {
// Initialise IPFS node
const node = await IPFS.create();
// Store CID in a variable
const cid = myCID //'QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A';
// Retrieve data from CID
const data = Buffer.concat(await all(node.cat(cid)));
// Print data to console
fs.writeFile("out.png", toBase64(data), 'base64', function(err) {
    console.log(err);
  });
})();

function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }

//  fs.writeFile("out.png", toBase64(data), 'base64', function(err) {
//     console.log(err);
//   });
 
//  function toBase64(arr) {
//     //arr = new Uint8Array(arr) if it's an ArrayBuffer
//     return btoa(
//        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
//     );
//  }
 
//  $('#two').prepend($('<img>',{id:'theImg2',src:`data:image/png;base64,${toBase64( selected[0].image2.data)}`}))