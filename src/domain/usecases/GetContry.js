export class GetContry{
    constructor(contryRepository){
        this.contryRepository = contryRepository;
    }

    async execute(){
        return await this.contryRepository.getContry();
    }
}