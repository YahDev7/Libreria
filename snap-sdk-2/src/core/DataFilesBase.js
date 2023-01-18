class DataFilesBase {
    constructor(){

    }

    async validateHeaders(headers) {
        console.log("validando headers");
    }
    
    async validateRows(rows) {
        console.log("validando rows");
    }
}

module.exports=DataFilesBase;