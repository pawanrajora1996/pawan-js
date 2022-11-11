// way 1

let wordOne = "chaman"
let wordTwo = "amanch"

let storeValue = wordOne.split("").sort().join("")
console.log(storeValue)


let storeValue2 = wordTwo.split("").sort().join("")
console.log(storeValue2)



if(storeValue == storeValue2){
    
    console.log("its a anagram")
    
}

else{
    console.log("its not a anagram")
}



// way 2