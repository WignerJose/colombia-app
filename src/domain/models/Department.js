export class Department {
    constructor(
      id,
      name,
      description,
      cityCapitalId,
      municipalities,
      surface,
      population,
      phonePrefix,
      countryId,
      cityCapital,
      country,
      cities,
      regionId,
      region,
      naturalAreas,
      maps,
      indigenousReservations,
      airports
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.cityCapitalId = cityCapitalId;
      this.municipalities = municipalities;
      this.surface = surface;
      this.population = population;
      this.phonePrefix = phonePrefix;
      this.countryId = countryId;
      this.cityCapital = cityCapital;
      this.country = country;
      this.cities = cities;
      this.regionId = regionId;
      this.region = region;
      this.naturalAreas = naturalAreas;
      this.maps = maps;
      this.indigenousReservations = indigenousReservations;
      this.airports = airports;
    }
  }