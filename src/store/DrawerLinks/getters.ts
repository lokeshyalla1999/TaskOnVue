import { AllInterFaces } from "@/types/InterfacesTask";

export const GETTERS = {
    Get_Option: 'Get_Option',
    Get_Gender: 'Get_Gender'
}

export const getters = {
    [GETTERS.Get_Option](dataState:AllInterFaces) {
        return dataState.options;
    },
    [GETTERS.Get_Gender](dataState:AllInterFaces) {
        return dataState.Gender;
    }
}
