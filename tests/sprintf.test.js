import sprintf from '../src/sprintf'

const tests = [
  {
     args: ['%s %d%% %.3f', 'string', 40, 3.141593],
     result: 'string 40% 3.142'
  },
  {
    args: ['name: %s, age: %s', '张三', 16],
    result: 'name: 张三, age: 16'
  }
]

tests.map((i, idx) => {
	test(`sprintf(用例-${idx + 1}): ${idx} ${JSON.stringify(
		i.args
	)}`, () => {
		const actual = sprintf.apply(null, i.args)
		const result = i.result
		expect(actual).toEqual(result)
	})
})