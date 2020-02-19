const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const result = await Ajax.echo('Some data')
    expect(result).toBe('Some data')
  })

  test('should return value with promise', () => {
    return Ajax.echo('Some data').then(data => {
      expect(data).toBe('Some data')
    })
  })

  test('should catch error with promise', () => {
    return Ajax.echo().catch(err => {
      expect(err).toBeInstanceOf(Error)
    })
  })

  test('should catch error with promise', async () => {
    try {
      await Ajax.echo()
    } catch (error) {
      expect(error.message).toBe('error')
    }
  })
})

describe('Ajax: Get', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [{ id: 1, title: 'Todo 1', completed: false }]

    response = {
      data: {
        todos,
      },
    }
  })

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response)

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })
})
