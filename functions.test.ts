const {shuffleArray} = require('./utils')

const testArray =[1,2,3,4]

describe('shuffleArray should', () => {
   test('see if shufflArray returns an arry', () => {
       expect(Array.isArray(shuffleArray(testArray))).toBe(true)
   })

   test('check if array length is the same as sent in', () => {
       expect(shuffleArray(testArray)).toHaveLength(4)
    })

    test('should have the same items as the array passed in', () => {
        expect(shuffleArray(testArray)).toEqual(expect.arrayContaining(testArray))
     })

    
})
 



