export class GetTouristPlace{
    constructor(touristPlaceRepository){
        this.touristPlaceRepository= touristPlaceRepository;
    }

    async execute(){
        return await this.touristPlaceRepository.getTouristPlace();
    }
}