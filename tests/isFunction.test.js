import isFunction from '../utils/isFunction'

const tests = [
  {
    arg1: 1,
    result: false,
  },
  {
    arg1: '1',
    result: false,
  },
  {
    arg1: true,
    result: false,
  },
  {
    arg1: false,
    result: false,
  },
  {
    arg1: { x: 1, y: 2 },
    result: false,
  },
  {
    arg1: [1, 2],
    result: false,
  },
  {
    arg1: function () {},
    result: true,
  },
  {
    arg1: function aa() {},
    result: true,
  },
]

tests.map((i, idx) => {
  test(`isFunction: ${idx}`, () => {
    i.result ? expect(isFunction(i.arg1)).toBeTruthy() : expect(isFunction(i.arg1)).toBeFalsy()
  })
})
