import { api } from "@services/api"
import { Dashboard } from "@screens/Dashboard"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"

import { render, screen, waitFor } from "@__tests__/utils/customRender"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"

describe("Screens: Dashboard", () => {
  it("should be show city weather", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: -30.33,
      longitude: -50.44,
    }

    await saveStorageCity(city)

    render(<Dashboard />)

    const cityName = await waitFor(() =>screen.findByText(/rio do sul/i) )
    expect(cityName).toBeTruthy()
  })
})
