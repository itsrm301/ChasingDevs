const {GoogleSpreadsheet} = require("google-spreadsheet");
const fs =require("fs");
const EXCEL_SHEET_ID="1o8Fe2ZX_YSeOvT6yg4uo2EE9O-oVQ6FNieaHPVMJn5w";
const doc = new GoogleSpreadsheet(EXCEL_SHEET_ID);
const CREDENTIAL = JSON.parse(JSON.stringify(fs.readFileSync('googlesheetcredentials.json')));

const getRow=async (email)=>{
    await doc.useServiceAccountAuth({
        client_email:CREDENTIAL.client_email,
        private_key:CREDENTIAL.private_key
    });
    await doc.loadInfo();

    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();
    

    for(let index=0;index<rows.length;index++){
        const row = rows[index];
        if(row.email==email){
            console.log(row.name);
            console.log(row.Roll);
            break;
        }

    }

}
getRow('pqr@iitkgp.ac.in');