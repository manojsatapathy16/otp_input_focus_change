import React, { useState, useEffect } from 'react';
import './style.css';

function Otp() {
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const dataArr = [1, 2, 3, 4, 5, 6];
  const blankArray = Array.from({ length: dataArr.length }).fill('');
  const [otpValues, setOtpValues] = useState(blankArray);
  console.log(otpValues);
  useEffect(() => {
    // Ensure that focus is set on the first input field after component mounts
    document.getElementById('otp-input-0').focus();
   
  }, []);
  const inputChangeHandler = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (index < otpValues.length - 1 && value.length > 0) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
    if(index==dataArr.length-1){
      setIsSubmitActive(true)
    }
    if(value==''){
      setIsSubmitActive(false)
    }
    
  };
  const resetOTPhandler=()=>{
    setOtpValues(blankArray)
    setIsSubmitActive(false)
    setRefresh(!refresh)
  }



  return (
    <div className="App">
      <form action="">
        <div>
        <div className="input_fields">
        {otpValues.map((each, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={otpValues[index]}
            className="otp_text"
            onChange={(e) => inputChangeHandler(index, e.target.value)}
          />
        ))}
      </div>
        {isSubmitActive?<button type='button' className='button'>submit OTP</button>:<button type='button' className='button disable'>submit OTP</button>}
        <button type='button' className='button resetBtn' onClick={resetOTPhandler}>Reset OTP</button>
        </div>

      </form>

    </div>
  );
}

export default Otp;
