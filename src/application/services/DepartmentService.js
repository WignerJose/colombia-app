import { GetDepartmnet } from "../../domain/usecases/GetDepartment";
import {getDepartment as getDepartmentFromAPI } from "../../infrastructure/Api/Api"


const DepartmentRepository = {
    getDepartment: async () =>{
        const data = await getDepartmentFromAPI();
        return data.map(department => ({
            id: department.id,
            name: department.name,
            description: department.description,
            population: department.population,
            surface: department.surface
        }));
    }
}

export const getDepartmentService = new GetDepartmnet(DepartmentRepository);
