function isPalindrome(s){
    let last= s.length-1;
    for (let i=0; i<Math.ceil(s.length/2);i++){
        if(s[i]!=s[last]){
            return false;

        }
        last--;
        
       
    }
    return true;

}
console.log(isPalindrome("xammax"))