import chTimeHello from '../utils/chTimeHello'

test(`chTimeHello: 0`, () => {
  const hour = new Date().getHours()

  if (hour < 9) {
    const result = chTimeHello()
    expect(result).toBe('11')
  }
})
