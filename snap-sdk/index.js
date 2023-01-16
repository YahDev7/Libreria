//cada funcion que se repite con sus modulos
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