import React, { useState } from "react";
import { Camera } from "react-feather"; // Assuming you're using react-icons
import Webcam from "react-webcam";

const MobileDeposit: React.FC = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = React.useRef<Webcam>(null);

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    // Do something with the captured image
    closeCamera();
  };

  return (
    <div className="flex flex-col items-center">
      {isCameraOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded"
            />
            <button
              onClick={captureImage}
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-800"
            >
              Capture
            </button>
            <button
              onClick={closeCamera}
              className="absolute top-2 left-2 bg-white rounded-full p-2 text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={openCamera}
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg"
        >
          <Camera size={32} />
        </button>
      )}
    </div>
  );
};

export default MobileDeposit;
