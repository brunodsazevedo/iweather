import { render, screen } from "@testing-library/react-native"

import { NextDays } from '@components/NextDays'

import clearDay from '@assets/clear_day.svg'

describe("Component: NextDays", () => {
  it("should be render day", () => {
    render(
      <NextDays
        data={[
          {
            day: '18/07',
            min: '30ºc',
            max: '33ºc',
            weather: 'Céu limpo',
            icon: clearDay,
          },
          {
            day: '19/07',
            min: '32ºc',
            max: '40ºc',
            weather: 'Céu limpo',
            icon: clearDay,
          },
          {
            day: '20/07',
            min: '21ºc',
            max: '33ºc',
            weather: 'Céu limpo',
            icon: clearDay,
          },
          {
            day: '21/07',
            min: '15ºc',
            max: '20ºc',
            weather: 'Nublado',
            icon: clearDay,
          },
        ]}
      />
    )

    expect(screen.getByText('20/07')).toBeTruthy()
  })
})
