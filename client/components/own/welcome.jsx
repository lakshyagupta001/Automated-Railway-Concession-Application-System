"use client"
import React, { useEffect, useState } from 'react';
import { TextGenerateEffect } from '../ui/text-generation-effect';

const Welcome = ({ username, age }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getFirstWord = () => {
      if (typeof username === 'string') {
        const words = username.split(' ');
        const name = words[0];
        setUserName(name);
      }
    };

    getFirstWord(); // Call the function immediately

    // You might want to remove the return statement if you don't have cleanup logic
    // If you do have cleanup logic, make sure to return a function to clean up when the component is unmounted.
    return () => {};
  }, [username]); // Add username as a dependency to re-run the effect when it changes

  console.log(username);

  const word = `Welcome Back, ${userName}`;

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 mt-5 w-[80%] flex justify-between space-x-64 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-2xl">
        <div className="text-4xl">
          <TextGenerateEffect className={'text-4xl'} words={word} />
        </div>
        <div className="w-[11%]">
          <img
            className="drop-shadow-2xl"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-3766441-3162183.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
