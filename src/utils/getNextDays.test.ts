import { getNextDays } from './getNextDays'

it("should be return the next five days", () => {
  // Executar nosso teste...
  const days = getNextDays()

  expect(days.length).toBe(5)
})
