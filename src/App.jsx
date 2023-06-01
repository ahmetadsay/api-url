import { Navbar } from './components/Navbar'
import './App.css'
import Input from './components/Input'
import { useEffect, useState } from 'react'
import Statistics from './components/Statistics';
import Footer from './components/Footer';


function App() {
  const [convertedUrl, setConvertedUrl] = useState('');

  useEffect(() => {
    // Function to convert the URL using the API
    const convertUrl = async () => {
      try {
        const response = await fetch('https://app.shrtco.de/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: 'https://9qr.de/qwVxGH' }), // Pass the original URL to the API
        });

        if (response.ok) {
          const data = await response.json();
          setConvertedUrl(data.convertedUrl); // Store the converted URL in state
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    convertUrl(); // Call the function to convert the URL when the component mounts
  }, []);

  return (
    <>
   <Navbar />
   <Input/>
   <Statistics />
   <Footer />
 
    </>
  )
}

export default App
