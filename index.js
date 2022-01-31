const toSentenceCase7 = (str)=>(str.split(' ').map((word)=>word[0].toUpperCase()+word.slice(1))).join(" ");

toSentenceCase7('we are neoGrammers')

// str.split(' ')
// ["we", "are", "neoGrammers"] this was the given 
// (i)=>i[0].toUpperCase()+i.slice(1) apply this functiuon to the given array 
// ["We", "Are", "NeoGrammers"]
// "We Are NeoGrammers"