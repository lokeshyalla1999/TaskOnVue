import { AllInterFaces } from "@/types/InterfacesTask";

export const GETTERS = {
    Get_DrawerLinks: 'Get_DrawerLinks',
    Get_Option: 'Get_Option',
    Get_Gender: 'Get_Gender'
}

export const getters = {
    [GETTERS.Get_DrawerLinks](dataState:AllInterFaces) {
        return dataState.links;
    },
    [GETTERS.Get_Option](dataState:AllInterFaces) {
        return dataState.options;
    },
    [GETTERS.Get_Gender](dataState:AllInterFaces) {
        return dataState.Gender;
    }
}
