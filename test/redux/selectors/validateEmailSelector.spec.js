import { validateEmail } from '../../../src/redux/selectors/index'

describe('validateEmail selector test', () => {
  it('Returns true given a valid email', () => {
    expect(validateEmail('fake@email.com')).toEqual(true)
  })

  it('Returns false given an invalid email', () => {
    expect(validateEmail('notanemail.com')).toEqual(false)
  })
})
