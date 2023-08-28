import axios from 'axios'

const REST_API_BASE_URL='http://localhost:8080/EmpApi';

export const listEmployees=()=> axios.get(REST_API_BASE_URL+"/employees");
export const createEmployee=(employee)=>axios.post(REST_API_BASE_URL+"/saveEmployee",employee);
