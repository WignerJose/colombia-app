export class GetDepartmnet{
    constructor(departmentRepository){
        this.departmentRepository = departmentRepository;
    }

    async execute(){
        return await this.departmentRepository.getDepartment();
    }
}


