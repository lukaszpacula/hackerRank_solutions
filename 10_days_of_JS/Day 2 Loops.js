function vowelsAndConsonants(s) {
    var vowels = s.match(/[aeiou]/ig);
    var consonants = s.match(/[^aeiou]/ig);
    var text1 = "";
    var i;
    for (i=0;i<vowels.length;i++) {
        text1 += vowels[i] + "\n";
    }
    var text2 = "";
    for (i=0;i<consonants.length;i++) {
        text2 += consonants[i] + "\n";
    }
    console.log(text1+text2);
}
