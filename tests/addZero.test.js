import addZero from '../utils/addZero'

const tests = [
  {
    arg1: 3,
    arg2: 2,
    result: '03',
  },
  {
    arg1: 100,
    arg2: 5,
    result: '00100',
  },
]

tests.map((i, idx) => {
  expect(`addZero: ${idx}`, () => {
    const actual = addZero(i.arg1, i.arg2)
    const result = i.result
    expect(actual).toBe(result)
  })
})
