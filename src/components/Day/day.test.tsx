import { render, screen } from '@testing-library/react-native'
import { Day } from '@components/Day'

import clearDay from '@assets/clear_day.svg'

describe("Component: Day", () => {
  it("should be render day", () => {
    render(
      <Day
        data={{
          day: '18/07',
          min: '30ºc',
          max: '33ºc',
          weather: 'Céu limpo',
          icon: clearDay,
        }}
      />
    )

    expect(screen.getByText('18/07')).toBeTruthy()
  })
})
