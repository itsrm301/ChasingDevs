const {GoogleSpreadsheet} = require("google-spreadsheet");
const fs =require("fs");
const { resolve } = require("path");
const EXCEL_SHEET_ID="1o8Fe2ZX_YSeOvT6yg4uo2EE9O-oVQ6FNieaHPVMJn5w";
const doc = new GoogleSpreadsheet(EXCEL_SHEET_ID);
<<<<<<< HEAD
const CREDENTIAL = JSON.parse(fs.readFileSync(__dirname+'/googlesheetcredentials.json'));
=======
const CREDENTIAL = JSON.parse(fs.readFileSync(__dirname +'/googlesheetcredentials.json', 'utf8'));
>>>>>>> 3e70922d61b1e1423b60a798fe137135c3887960

const getRow=async (email)=>{
    await doc.useServiceAccountAuth({
        client_email:CREDENTIAL.client_email,
        private_key:CREDENTIAL.private_key
    });
    await doc.loadInfo();

    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();
    let index=0;

    for( index=0;index<rows.length;index++){
        const row = rows[index];
        if(row.email==email){
<<<<<<< HEAD
             
=======
            console.log(row.name);
            resolve();
>>>>>>> 3e70922d61b1e1423b60a798fe137135c3887960
            return row;
            }

    }
    if(index==rows.length){
        return null;
    }

}
<<<<<<< HEAD
 
=======
// getRow('pqr@iitkgp.ac.in').then(email=>console.log(email.email));
>>>>>>> 3e70922d61b1e1423b60a798fe137135c3887960

module.exports= getRow;