import { api } from "@services/api"
import { Dashboard } from "@screens/Dashboard"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"

import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse"

describe("Screens: Dashboard", () => {
  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: -30.33,
      longitude: -50.44,
    }

    await saveStorageCity(city)
  })

  it("should be show city weather", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    const cityName = await waitFor(() =>screen.findByText(/rio do sul/i) )
    expect(cityName).toBeTruthy()
  })

  it("should be show another selected weather city.", async () => {
    /*
    1 - Buscar as informações do tempo/clima da cidade selecionada.
    2 - Busca as informações da cidade.
    3 - Busca as informações do tempo/clima da nova cidade selecionada.

    método 'mockResolvedValueOnce' permite fazer múltiplas requisições sem precisar de eliminar as anteriores
    */

    jest.spyOn(api, 'get')
    .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
    .mockResolvedValueOnce({ data: mockCityApiResponse })
    .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))

    const cityName = 'São Paulo'

    await waitFor(() => act(() => {
      const search = screen.getByTestId('search-input')
      fireEvent.changeText(search, cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, { exact: false }))
    }))

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy()
  })
})
