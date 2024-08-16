import React from 'react';

const BackColor = () => {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute -left-4 top-0 h-72 w-72 animate-kayb rounded-full bg-purple-2  opacity-50 mix-blend-multiply blur-xl filter"></div>
      {/* <div className="absolute -right-4 top-0 h-72 w-72 animate-kayb rounded-full bg-gray-800  opacity-40 mix-blend-multiply blur-xl filter"></div> */}
      <div className="absolute -bottom-80 left-20 h-72 w-72 animate-kayb rounded-full bg-green-300   opacity-50 mix-blend-multiply blur-xl filter"></div>
    </div>
  );
};

export default BackColor;
