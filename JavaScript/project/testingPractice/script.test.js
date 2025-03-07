const {capitalize,reverseString,add,subract,multiply,divide,caesarCipher,analyzeArray} = require('./script.js')

test('capitalized',()=>{
    expect(capitalize('add')).toBe('Add')
})

test('String reversed',()=>{
    expect(reverseString('abcd')).toBe('dcba')
})

test('Addition',()=>{
    expect(add(3,4)).toBe(7)
})

test('Subraction',()=>{
    expect(subract(3,4)).toBe(-1)
})

test('Multiplication',()=>{
    expect(multiply(3,4)).toBe(12)
})

test('Divition',()=>{
    expect(divide(3,4)).toBe(0.75)
})
test('caesarCipher 1',()=>{
    expect(caesarCipher('xyz', 3)).toBe('abc')
})
test('caesarCipher 2',()=>{
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})
test('caesarCipher 3',()=>{
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
test('analyze Array',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})