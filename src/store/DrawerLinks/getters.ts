import { AllInterFaces } from "@/types/InterfacesTask";

export const GETTERS = {
    Get_DrawerLinks: 'Get_DrawerLinks',
    Get_Option: 'Get_Option',
    Get_Columns: 'Get_Columns',
    Get_Rows: 'Get_Rows',
    Get_Gender: 'Get_Gender'
}

export const getters = {
    [GETTERS.Get_DrawerLinks](dataState:AllInterFaces) {
        debugger;
        return dataState.links;
    },
    [GETTERS.Get_Option](dataState:AllInterFaces) {
        debugger;
        return dataState.options;
    },
    [GETTERS.Get_Columns](dataState:AllInterFaces) {
        return dataState.columns;
    },
    [GETTERS.Get_Rows](dataState:AllInterFaces) {
        return dataState.rows;
    },
    [GETTERS.Get_Gender](dataState:AllInterFaces) {
        return dataState.Gender;
    }
}
