const storage = {
  saveFavoriteCities(cities) {
    localStorage.setItem("favoriteCities", JSON.stringify(cities));
  },
  saveCurrentCity(city) {
    localStorage.setItem("currentCity", city);
  },
  getFavoriteCities() {
    const favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
    if (favoriteCities) {
      return favoriteCities
    }
    return [];
  },
  getCurrentCity() {
    const currentCity = localStorage.getItem("currentCity")
    if (currentCity) {
      return currentCity
    } return "Kazan";
  },
};

export { storage };
