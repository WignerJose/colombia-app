import { GetTouristPlace } from "../../domain/usecases/GetTouristPlace";
import { getTouristPlace as getTouristPlaceFromAPI } from "../../infrastructure/Api/Api";


const TouristPlaceRepository = {
    getTouristPlace: async () =>{
        const data = await getTouristPlaceFromAPI();
        return data.map(place =>({
            id: place.id,
            name: place.name,
            description: place.description,
            image: place.images[0]
        }))
    }
}

export const getTouristPlaceService = new GetTouristPlace(TouristPlaceRepository);