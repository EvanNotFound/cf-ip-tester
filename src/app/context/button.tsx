"use client";
import React from "react";

import { createContext, useContext, useState, ReactNode } from "react";

interface ButtonContextType {
  isScanning: boolean;
  setIsScanning: React.Dispatch<React.SetStateAction<boolean>>;
  cancelScan: boolean;
  setCancelScan: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonContext = createContext<ButtonContextType>({
  isScanning: false,
  setIsScanning: () => {},
  cancelScan: false,
  setCancelScan: () => {},
});

export const ButtonContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [cancelScan, setCancelScan] = useState(false);

  return (
    <ButtonContext.Provider
      value={{
        isScanning: isScanning,
        setIsScanning: setIsScanning,
        cancelScan: cancelScan,
        setCancelScan: setCancelScan,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = (): ButtonContextType =>
  useContext(ButtonContext);
