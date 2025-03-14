
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserData = {
  location: string;
  companyName: string;
  clientCount: number;
  email: string;
  calculatedProfit: number;
  isQualified: boolean;
};

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  resetUserData: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const defaultUserData: UserData = {
  location: '',
  companyName: '',
  clientCount: 0,
  email: '',
  calculatedProfit: 0,
  isQualified: false,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [currentStep, setCurrentStep] = useState(1);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const resetUserData = () => {
    setUserData(defaultUserData);
    setCurrentStep(1);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        updateUserData,
        resetUserData,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
