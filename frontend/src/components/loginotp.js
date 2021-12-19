
const { Auth, LoginCredentials } = require("two-step-auth");
async function loginotp(emailId) {
    try {
      const res = await Auth(emailId, "TSG");
      return res;
    } catch (error) {
      console.log("error ",error);
    }
  }
    

  LoginCredentials.use =false;
    
  // Pass in the mail ID you need to verify

  module.exports=loginotp;