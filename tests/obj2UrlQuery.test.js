import obj2UrlQuery from '../utils/obj2UrlQuery'

const tests = [
  {
    arg1: { name: 'tom', class: { className: 'class1' }, classMates: [{ name: 'lily' }] },
    result: 'name=tom&class.className=class1&classMates[0].name=lily',
  },
  {
    arg1: { name: 'tom', class: { className: 'class1' }, classMates: [{ name: 'lily' }] },
    arg2: 'stu',
    result: 'stu.name=tom&stu.class.className=class1&stu.classMates[0].name=lily',
  },
]

tests.map((i, idx) => {
  const result = i.result
  const arg1 = i.arg1
  test(`obj2UrlQuery: ${idx}`, () => {
    if (typeof i.arg2 === 'undefined') {
      expect(obj2UrlQuery(arg1)).toBe(result)
    } else if (typeof i.arg2 !== 'undefined') {
      expect(obj2UrlQuery(arg1, i.arg2)).toBe(result)
    } else if (typeof i.arg3 !== 'undefined') {
      expect(obj2UrlQuery(i.arg1, i.arg2, i.arg3)).toBe(result)
    }
  })
})
