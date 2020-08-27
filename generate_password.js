// define sample function to randomly return an item in array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generatePassword function to use in other files
function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data
  const options = {
    length: '12',
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: 'Ak47'
  }

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

  console.log('collection:', collection)

  // start generating password
  let password = ''
  for (i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }
  console.log(password)


  // return the generated password
  console.log('This will generate random password.')
}

generatePassword()
