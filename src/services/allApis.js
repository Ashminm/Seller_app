import { BASE_URL } from "./base_url";
import { commonRequest } from "./commonRequest";


export const addCatagory= async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/catagory`,body)
}