import React, {useState} from 'react';

function EmailInput() {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
      };


    return (
        <input
            type="email"
            id="email"
            name="email"
            placeholder='Email address'
            value={email}
            onChange={handleChange}
            className="bg-[#31322C] w-[340px] h-[50px] mx-[20px] px-[17px] rounded-lg placeholder-[#FDFCEE] text-[#FDFCEE] text-xs"
        />
    );      
}

export default EmailInput;