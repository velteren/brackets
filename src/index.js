module.exports = function check(str, bracketsConfig) {
   if (str.length % 2 !==0 ) return false;
  let tmparr =[];
  let tmparr2 = str.split('');
  
  for (let i=0; i < bracketsConfig.length; i++) {
  	tmparr[i] = String((bracketsConfig[i])[0] + (bracketsConfig[i])[1])
  }
  for (let i=0; i < tmparr.length; i++) {
  	if (~str.indexOf((tmparr[i]))) {
    let index = str.indexOf((tmparr[i]));
    let temp = str.split('');
    temp.splice(index,2);
    str = temp.join('');
 		}
  }
  for (let j = 1; j < 100; j++ ) {
  	for (let i=0; i < tmparr.length; i++) {
  	if (~str.indexOf((tmparr[i]))) {
    let index = str.indexOf((tmparr[i]));
    let temp = str.split('');
    temp.splice(index,2);
    str = temp.join('');
 		}
  }
  
  }
 
  if (str.length == 0) return true;
  return false;
}