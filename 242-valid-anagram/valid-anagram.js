/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
const news=s.split("").sort().join("")

const newt=t.split("").sort().join("")
if(news===newt){
 return true
}else{
    return false
}
}