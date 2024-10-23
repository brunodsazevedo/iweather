import { Search } from '@screens/Search'

import { api } from '@services/api'

import { mockCityApiResponse } from '@__tests__/mocks/api/mockCityApiResponse'
import { render, screen, fireEvent, waitFor } from "@__tests__/utils/customRender"

describe("Screens: Search", () => {
  it("should be show city option", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityApiResponse })

    render(<Search />)

    const searchInput = screen.getByTestId('search-input')
    fireEvent.changeText(searchInput, "São Paulo")

    const option = await waitFor(() => screen.findByText(/são paulo/i))
    expect(option).toBeTruthy()
  })
})
