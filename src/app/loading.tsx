"use client";
import Lottie from "lottie-react";
import loadingAnimation from "./loading.json"; // Asegúrate de que esta ruta sea correcta

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-transparent">
      <div className="w-1/2 h-1/2 flex items-center justify-center">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
}
