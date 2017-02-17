const test = require('tape')

const V = require('../index')

test('New V - No roomId', t => {
  t.plan(1)
  const v = new V()
  t.pass('Construct with no roomId worked')
  v.destroy()
})

test('New V - Non existent roomId', t => {
  t.plan(1)
  try {
    const v = new V('this-will-fail')
    v.close()
    t.fail('Construct with a non existent roomId worked')
  } catch (e) {
    t.pass('Failed to construct with non existent roomId')
  }
})
