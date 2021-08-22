class Formatter {
  //add static methods here
  static capitalize(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1)
  }
  
  static sanitize(inputString) { // " '- " allows whitespace
    return inputString.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  
  static titleize(inputString) {
    const excludeArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"] // lmao i forgot the "the"
    let wordArray = inputString.split(" ")
    let newSentence = [] // = wordArray.push

    for (const word of wordArray) {
      // debugger
      if (word === wordArray[0]) {
        newSentence.push(this.capitalize(word)) 
      } else {
        if (!(excludeArray.includes(word))) {
          newSentence.push(this.capitalize(word))
        } else {
          newSentence.push(word)
        }
      }
    }
    return newSentence.join(" ")
  }
}