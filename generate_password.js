// define sample function to randomly return an item in array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generatePassword function to use in other files
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(...lowerCaseLetters)
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(...upperCaseLetters)
  }

  if (options.numbers === 'on') {
    collection = collection.concat(...numbers)
  }

  if (options.symbols === 'on') {
    collection = collection.concat(...symbols)
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  if (collection.length === 0) {
    return 'there is no valid characters in your selection.'
  }

  // start generating password
  let password = ''
  for (i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }

  // return the generated password
  return password
}

module.exports = generatePassword
