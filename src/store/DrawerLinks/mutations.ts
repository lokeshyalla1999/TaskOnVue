import { AllInterFaces } from "@/types/InterfacesTask"

export const MUTATIONS = {
    COMMIT_LINKS : 'COMMIT_LINKS',
    COMMIT_OPTIONS :'COMMIT_OPTIONS',
    COMMIT_COLUMNS : 'COMMIT_COLUMNS',
    COMMIT_ROWS : 'COMMIT_ROWS'
}
export const mutations = {
    [MUTATIONS.COMMIT_LINKS](dataState:AllInterFaces , links){
         dataState.links = links;
    },
    [MUTATIONS.COMMIT_OPTIONS](dataState:AllInterFaces , options){
        dataState.options = options;
    },
    [MUTATIONS.COMMIT_COLUMNS](dataState:AllInterFaces , columns){
        dataState.columns = columns;
    },
    [MUTATIONS.COMMIT_ROWS](dataState:AllInterFaces , rows){
        dataState.rows = rows;
    }
}