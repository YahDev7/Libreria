'use strict'

const DataFilesBase = require("../../core/DataFilesBase");

class DataFiles extends DataFilesBase{

    /**
     * Valida las cabeceras del archivo base
     * @param {Array} headers
     * @returns {Boolean}
    */
    async validateHeaders(headers){
        console.log("validando headers");
    }
}
module.exports=DataFiles;