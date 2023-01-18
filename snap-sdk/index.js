//cada funcion se repite sus modulos
const SnapSDK={
    validators:{
        dataFiles:{
            CodeLarge: require('./src/validators/dataFiles/CodeLarge'),
            Mailing: require('./src/validators/dataFiles/Mailing'),
            ShortCode: require('./src/validators/dataFiles/ShortCode'),
        }
    }
}

module.exports=SnapSDK;