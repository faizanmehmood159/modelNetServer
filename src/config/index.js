// 

const HttpStatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
  };
  
  const customLevels = {
    levels: {
      trace: 5,
      debug: 4,
      info: 3,
      warn: 2,
      error: 1,
      fatal: 0,
    },
    colors: {
      trace: "white",
      debug: "green",
      info: "green",
      warn: "yellow",
      error: "red",
      fatal: "red",
    },
  };
  
  const OtpTypes = Object.freeze({
    ...{
      ForgetPasswordEmail: "forgetPasswordEmail",
      ForgetPasswordNumber: "forgetPasswordNumber",
      VerifyEmail: "verifyEmail",
      VerifyMobile: "verifyMobile",
      signIn: "signIn",
      signUp: "signUp",
    },
  });
  
  export {
    customLevels,
    HttpStatusCode,
    OtpTypes,
  };
  