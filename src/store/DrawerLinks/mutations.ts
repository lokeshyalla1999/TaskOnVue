import { AllInterFaces } from "@/types/InterfacesTask"

export const MUTATIONS = {
    COMMIT_LINKS : 'COMMIT_LINKS',
    COMMIT_OPTIONS :'COMMIT_OPTIONS',
}
export const mutations = {
    [MUTATIONS.COMMIT_LINKS](dataState:AllInterFaces , links){
         dataState.links = links;
    },
    [MUTATIONS.COMMIT_OPTIONS](dataState:AllInterFaces , options){
        dataState.options = options;
    },
}