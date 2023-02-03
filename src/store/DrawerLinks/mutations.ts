import { AllInterFaces } from "@/types/InterfacesTask"

export const MUTATIONS = {
    COMMIT_OPTIONS :'COMMIT_OPTIONS',
}
export const mutations = {
    [MUTATIONS.COMMIT_OPTIONS](dataState:AllInterFaces , options){
        dataState.options = options;
    },
}