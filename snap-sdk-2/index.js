//cada modulo con sus funciones repetidas?
//cambiar los nombres de codigo corto y largo
const SnapSDK={
    
    CodeLarge: {
        validator:{
            //en el elemento datafiles de mi obj, deberia ir codelarge o viceversa para seguir el ejemplo de la libreria excel
            dataFiles:require('./src/longNumbering/validator/CodeLarge'),
        },
        helpers:{
            
        }
    },
    Mailing: {
        validator:{
            dataFiles:require('./src/mailing/validator/Mailing'),
        }
    },
    ShortCode: {
        validator:{
            dataFiles:require('./src/shortNumbering/validator/ShortCode'),
        }
    },
  
}

module.exports=SnapSDK;