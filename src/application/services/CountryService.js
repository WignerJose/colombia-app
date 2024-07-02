
import { getContry as getContryFromAPI } from "../../infrastructure/Api/Api";
import { GetContry } from "../../domain/usecases/GetContry";

const ContryRepository = {
    getContry: async () =>{
        const data = await getContryFromAPI();
        return ({
            id: data.id,
            name: data.name,
            description: data.description,
            flagImg: data.flags[1],
            borders: data.borders,
            subRegion: data.subRegion,
            currency: data.currency,
            currencyCode: data.currencyCode,
            population: data.population,
            surface: data.surface,
            stateCapital: data.stateCapital,
            phonePrefix: data.phonePrefix,
            timeZone: data.timeZone,
            internetDomain: data.internetDomain,
            region: data.region
        });
    }
}

export const getContryService = new GetContry(ContryRepository);