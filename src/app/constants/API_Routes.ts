import { environment } from "src/environment/environment";

export const API_ROUTES:any = {
    saveUser:`${environment.API_BASE_URL}user/save-user`,
    checkServer:`${environment.API_BASE_URL}user/check-server`,
}