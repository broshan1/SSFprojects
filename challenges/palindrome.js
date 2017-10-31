var palCheck2 = function (word) {
    let reverse = '';
	for (let length = word.length; length > 0; length--) {
        let currentLetter = word[length - 1];
		reverse += currentLetter;
}
	if (reverse === word) {
		console.log("palindrome");    
}
	else {
		console.log("not palindrome");
}
	
}
palCheck2("dogeeseseegod");