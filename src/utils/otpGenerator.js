const otpGenerator = () => {
    return Math.floor(Math.random() * 900000) + 100000;
  };
  export default otpGenerator;
  