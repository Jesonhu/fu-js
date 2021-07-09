import list2Tree from "../src/list2Tree";

const tests = [
  {
    args: [
      [
        { id: 1, parentId: 0, name: '1'},
        { id: 2, parentId: 0, name: '2'},
        { id: 3, parentId: 0, name: '3'},
        { id: 4, parentId: 1, name: '1-1'},
        { id: 5, parentId: 3, name: '3-1'},
        { id: 6, parentId: 4, name: '1-1-1'}
      ]
    ],
    result: [
      { id: 1, parentId: 0, name: '1', children: [{ id: 4, parentId: 1, name: '1-1', children: [{ id: 6, parentId: 4, name: '1-1-1' }] }] },
      { id: 2, parentId: 0, name: '2' },
      { id: 3, parentId: 0, name: '3', children: [{ id: 5, parentId: 3, name: '3-1' }] }
    ]
  },
  {
    args: [
      [
        { id: 1, parentId: 0, name: '1'},
        { id: 2, parentId: 0, name: '2'},
        { id: 3, parentId: 0, name: '3'},
        { id: 4, parentId: 1, name: '1-1'},
        { id: 5, parentId: 3, name: '3-1'},
        { id: 6, parentId: 4, name: '1-1-1'},
        { id: 7, parentId: 6, name: '1-1-1-1'}
      ]
    ],
    result: [
      { id: 1, parentId: 0, name: '1', children: [{ id: 4, parentId: 1, name: '1-1', children: [{ id: 6, parentId: 4, name: '1-1-1', children: [{ id: 7, parentId: 6, name: '1-1-1-1' }] }] }] },
      { id: 2, parentId: 0, name: '2' },
      { id: 3, parentId: 0, name: '3', children: [{ id: 5, parentId: 3, name: '3-1' }] }
    ]
  },
  {
    args: [
      [
        { id: 1, parentId: 0, name: '1'},
        { id: 2, parentId: 0, name: '2'},
        { id: 3, parentId: 0, name: '3'},
        { id: 4, parentId: 1, name: '1-1'},
        { id: 5, parentId: 3, name: '3-1'},
        { id: 6, parentId: 4, name: '1-1-1'},
        { id: 7, parentId: 6, name: '1-1-1-1'},
        { id: 8, parentId: 7, name: '1-1-1-1-1'}
      ]
    ],
    result: [
      { id: 1, parentId: 0, name: '1', children: [{ id: 4, parentId: 1, name: '1-1', children: [{ id: 6, parentId: 4, name: '1-1-1', children: [{ id: 7, parentId: 6, name: '1-1-1-1', children: [{ id: 8, parentId: 7, name: '1-1-1-1-1' }] }] }] }] },
      { id: 2, parentId: 0, name: '2' },
      { id: 3, parentId: 0, name: '3', children: [{ id: 5, parentId: 3, name: '3-1' }] }
    ]
  },
  {
    args: [
      [
        { id: 1, pId: 0, name: '1'},
        { id: 2, pId: 0, name: '2'},
        { id: 3, pId: 0, name: '3'},
        { id: 4, pId: 1, name: '1-1'},
        { id: 5, pId: 3, name: '3-1'},
        { id: 6, pId: 4, name: '1-1-1'}
      ],
      'id',
      'pId',
      'children'
    ],
    result: [
      { id: 1, pId: 0, name: '1', children: [{ id: 4, pId: 1, name: '1-1', children: [{ id: 6, pId: 4, name: '1-1-1' }] }] },
      { id: 2, pId: 0, name: '2' },
      { id: 3, pId: 0, name: '3', children: [{ id: 5, pId: 3, name: '3-1' }] }
    ]
  },
  {
    args: [
      [
        { id: 1, pId: 0, name: '1'},
        { id: 2, pId: 0, name: '2'},
        { id: 3, pId: 0, name: '3'},
        { id: 4, pId: 1, name: '1-1'},
        { id: 5, pId: 3, name: '3-1'},
        { id: 6, pId: 4, name: '1-1-1'}
      ],
      'id',
      'pId',
      'child'
    ],
    result: [
      { id: 1, pId: 0, name: '1', child: [{ id: 4, pId: 1, name: '1-1', child: [{ id: 6, pId: 4, name: '1-1-1' }] }] },
      { id: 2, pId: 0, name: '2' },
      { id: 3, pId: 0, name: '3', child: [{ id: 5, pId: 3, name: '3-1' }] }
    ]
  },
  {
    args: [
      [
        { id: 1, pId: -1, name: '1'},
        { id: 2, pId: -1, name: '2'},
        { id: 3, pId: -1, name: '3'},
        { id: 4, pId: 1, name: '1-1'},
        { id: 5, pId: 3, name: '3-1'},
        { id: 6, pId: 4, name: '1-1-1'}
      ],
      'id',
      'pId',
      'child',
      -1
    ],
    result: [
      { id: 1, pId: -1, name: '1', child: [{ id: 4, pId: 1, name: '1-1', child: [{ id: 6, pId: 4, name: '1-1-1' }] }] },
      { id: 2, pId: -1, name: '2' },
      { id: 3, pId: -1, name: '3', child: [{ id: 5, pId: 3, name: '3-1' }] }
    ]
  },
  {
    args: [
      [
        { id: 1, pId: 0, name: '1'},
        { id: 2, pId: 0, name: '2'},
        { id: 3, pId: 0, name: '3'},
        { id: 4, pId: 1, name: '1-1'},
        { id: 5, pId: 3, name: '3-1'},
        { id: 6, pId: 4, name: '1-1-1'},
        { id: 7, pId: 1, name: '1-2'},
      ],
      'id',
      'pId',
      'child'
    ],
    result: [
      { id: 1, pId: 0, name: '1', child: [{ id: 4, pId: 1, name: '1-1', child: [{ id: 6, pId: 4, name: '1-1-1' }] }, { id: 7, pId: 1, name: '1-2' }] },
      { id: 2, pId: 0, name: '2' },
      { id: 3, pId: 0, name: '3', child: [{ id: 5, pId: 3, name: '3-1' }] }
    ]
  },
]

tests.map((i, idx) => {
	test(`list2Tree(用例-${idx + 1}): ${idx} ${JSON.stringify(
		i.args
	)}`, () => {
		const actual = list2Tree.apply(null, i.args)
		const result = i.result
		expect(actual).toEqual(result)
	})
})