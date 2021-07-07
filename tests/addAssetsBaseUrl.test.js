import addAssetsBaseUrl from '../src/addAssetsBaseUrl'

const tests = [
  {
    args: [
      '<img src="/aa.png" /><span>1</span><img src="/aa.png" /><span>1</span><img src="/aa.png" />',
      'http://www.baidu.com',
    ],
    result:
      '<img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" />',
  },
  {
    args: [['/a.jpg', '/b.jpg', '/c.jpg'], 'http://hello.com'],
    result: ['http://hello.com/a.jpg', 'http://hello.com/b.jpg', 'http://hello.com/c.jpg'],
  },
  {
    args: [[{ src: '/a.jpg' }, { src: '/b.jpg' }, { src: '/c.jpg' }], 'src', 'http://hello.com'],
    result: [
      { src: 'http://hello.com/a.jpg' },
      { src: 'http://hello.com/b.jpg' },
      { src: 'http://hello.com/c.jpg' },
    ],
  },
  {
    args: [{ src: '/a.jpg' }, 'src', 'http://test.com'],
    result: { src: 'http://test.com/a.jpg' },
  },
]

tests.map((i, idx) => {
  test(`addAssetsBaseUrl(用例-${idx+1}): ${idx} ${JSON.stringify(i.args)}`, () => {
    const actual = addAssetsBaseUrl.apply(null, i.args)
    const result = i.result
    expect(actual).toEqual(result)
  })
})
