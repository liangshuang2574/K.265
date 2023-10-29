import React, {useState} from 'react';

function PasswordInput() {
    // Initial state
    const [email, setEmail] = useState('')

    
    ;

    // The handleChang() function to set a new state for input
    const handleChange = (event) => {
        setEmail(event.target.value);
      };

 

    return (
        <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={email}
            onChange={handleChange}
            className="bg-[#31322C] w-[340px] h-[50px] mx-[20px] px-[17px] rounded-lg placeholder-[#FDFCEE] text-[#FDFCEE] text-xs"
        />
    );      
}

export default PasswordInput;