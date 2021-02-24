import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Flora'

  expect(user.name).toEqual('Flora')
})
