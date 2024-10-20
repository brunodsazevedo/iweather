import { getStorageCity } from "./cityStorage"

describe('Storage: CityStorage', () => {
  it("should be return null when don't have a city storage", async() => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })
})
