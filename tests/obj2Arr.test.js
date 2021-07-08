import obj2Arr from '../src/obj2Arr'

const tests = [
	{
		arg1: { x: 1, y: 2 },
		result: [1, 2],
	},
]

tests.map((i, idx) => {
	const obj = i.arg1
	const result = i.result
	test(`obj2Arr: ${idx}`, () => {
		expect(obj2Arr(obj)).toStrictEqual(result)
	})
})
