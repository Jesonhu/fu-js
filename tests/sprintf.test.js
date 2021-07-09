import sprintf from '../src/sprintf'

const test = [
  {
     args: ['%s %d%% %.3f', 'string', 40, 3.141593],
     result: 'string 40% 3.142'
  },
  {
    args: ['name: %s, age: %s', '张三', 16],
    result: 'name: 张三, age: 16'
  }
]