import { useState, useEffect } from 'react';

const useResume = () => {
  const [resume, setResume] = useState(() => {
    const savedResume = localStorage.getItem('resume');
    return savedResume ? JSON.parse(savedResume) : null;
  });

  const saveResume = (newResume) => {
    setResume(newResume);
    localStorage.setItem('resume', JSON.stringify(newResume));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const savedResume = localStorage.getItem('resume');
      setResume(savedResume ? JSON.parse(savedResume) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { resume, saveResume };
};

export default useResume;