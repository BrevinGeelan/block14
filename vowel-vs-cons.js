function countConsonantsAndVowels(word) {
   //set variables to start count
    let consonantCount = 0;
    let vowelCount = 0;
  
  
    // loop thru each letter in the word
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      
      //check if the letter is equal to a vowel
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  
  //console log return values
    console.log(`Word: ${word}`);
    console.log(`Consonants: ${consonantCount}`);
    console.log(`Vowels: ${vowelCount}`);
  }
  
  countConsonantsAndVowels('hippopotamus');