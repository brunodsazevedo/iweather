import { CityProps } from "@services/getCityByNameService"
import { getStorageCity, saveStorageCity, removeStorageCity } from "./cityStorage"

describe('Storage: CityStorage', () => {
  it("should be return null when don't have a city storage", async() => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it("should be return city storage", async() => {
    const newCity: CityProps = {
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456,
    }
    await saveStorageCity(newCity)

    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })

  it("should be remove city storage", async () => {
    await saveStorageCity({
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456,
    })

    await removeStorageCity()

    const response = await getStorageCity()
    expect(response).toBeNull()
  })
})
