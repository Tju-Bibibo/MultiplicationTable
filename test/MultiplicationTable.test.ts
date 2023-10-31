import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should render multiplication table of (1, 2)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1\n1*2=2 2*2=4')
  })

  it('should render return empty string when start is greater than end', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should render return empty string when start is less than 1', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should render return empty string when end is greater than 1000', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1001

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should render return empty string when start or end not integer', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1.1
    const end = 100

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
})
