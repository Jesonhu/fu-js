import isUndefined from '../src/isUndefined'

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
		result: false,
	},
	{
		arg1: function aa() {},
		result: false,
	},
	{
		arg1: void 0,
		result: true,
	},
	{
		arg1: undefined,
		result: true,
	},
]

tests.map((i, idx) => {
	test(`isUndefined: ${idx}`, () => {
		i.result
			? expect(isUndefined(i.arg1)).toBeTruthy()
			: expect(isUndefined(i.arg1)).toBeFalsy()
	})
})
