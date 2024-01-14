function isPalindrome(s){
   
    let last=s.length -1;
    for (let i=0;i< Math.ceil(s.length/2);i++){
        if (s[i] !==s[last]){
            return false;
        }
        last--

    }
    return true;

}



while(1){
    let inputString= prompt("enter the string \n") 
    console.log(isPalindrome(inputString))
  
    
}