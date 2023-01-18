//cada modulo con sus funciones repetidas?
//cambiar los nombres de codigo corto y largo
const SnapSDK={
    
    longNumbering: {
        validator:{
            //en el elemento datafiles de mi obj, deberia ir codelarge o viceversa para seguir el ejemplo de la libreria excel
            DataFiles:require('./src/longNumbering/validator/DataFiles'),
        },
        helpers:{
            
        }
    },
    Mailing: {
        validator:{
            DataFiles:require('./src/mailing/validator/DataFiles'),
        }
    },
    shortNumbering: {
        validator:{
            DataFiles:require('./src/shortNumbering/validator/DataFiles'),
        }
    },
  
}

module.exports=SnapSDK;