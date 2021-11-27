// Dependency
const IPFS = require('ipfs');
const files = require('file-api')
var fs = require('fs');
storedFile = fs.readFileSync('/workspace/Academy/TruffleIntroduction/scamfr.jpeg');
var picBuffer = new Buffer.from(storedFile);
(async () => {
// Initialise IPFS node
const node = await IPFS.create();

// Submit data to the network
const cid = await node.add(picBuffer);
// Log CID to console
console.log(cid.path);
})();