import React, { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValues, setConvertedValues] = useState([]);
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);

      if (response.ok) {
        const data = await response.json();
        if (data.ok) {
          const shortenedUrl = data.result.full_short_link;
          setConvertedValues([...convertedValues, shortenedUrl]);
          setError('');
        } else {
          setError('Invalid link. Please enter a valid URL.');
        }
      } else {
        console.error('Error:', response.status);
        setError('Error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error occurred. Please try again later.');
    }
  };

  const handleCopyClick = (index) => {
    navigator.clipboard
      .writeText(convertedValues[index])
      .then(() => {
        console.log('URL copied to clipboard');
        setCopiedIndex(index);
      })
      .catch((err) => {
        console.error('Failed to copy URL to clipboard:', err);
      });
  };

  return (
    <>
      <div className="bg-[#3b3054] h-36 rounded-2xl mt-20 flex flex-col w-4/4 gap-4">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="ml-12 px-2 rounded-xl mt-5 h-10 w-3/4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="ml-12 rounded-xl text-white w-3/4 bg-[#2acfcf] h-10"
          onClick={handleSaveClick}
        >
          Shorten it!
        </button>
      </div>
      <div className="ml-12 mt-8 flex flex-col items-center justify-center w-4/6 h-full bg-[#30C59B] rounded-2xl text-white">
        {inputValue}
        <ul className="flex flex-col items-center text-center">
          {error && <li className="text-red-500">{error}</li>}
          {convertedValues.map((value, index) => (
            <li key={index}>
              {value}
              <button
                className={`rounded-xl text-black w-3/4 h-10 ${copiedIndex === index ? 'bg-[white]' : 'bg-[#3b3054]'}`}
                onClick={() => handleCopyClick(index)}
              >
                {copiedIndex === index ? 'Copied' : 'Copy URL'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Input;
