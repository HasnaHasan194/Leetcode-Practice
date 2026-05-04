/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
const sorted=s.split("").sort().join("")
const sorted1=t.split("").sort().join("")
if(sorted===sorted1){ return true
}else {
    return false;
}

}