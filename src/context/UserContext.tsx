import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserData = {
  location: string;
  companyName: string;
  clientCount: number;
  email: string;
  calculatedProfit: number;
  isQualified: boolean;
  hasTestedReceptionist?: string;
};

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  resetUserData: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  incrementClientCount: () => void;
  decrementClientCount: () => void;
}

const defaultUserData: UserData = {
  location: '',
  companyName: '',
  clientCount: 1, // Start with 1 client by default
  email: '',
  calculatedProfit: 0,
  isQualified: false,
  hasTestedReceptionist: undefined,
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

  const incrementClientCount = () => {
    if (userData.clientCount < 5) {
      setUserData(prev => ({ 
        ...prev, 
        clientCount: prev.clientCount + 1 
      }));
    }
  };

  const decrementClientCount = () => {
    if (userData.clientCount > 0) {
      setUserData(prev => ({ 
        ...prev, 
        clientCount: prev.clientCount - 1 
      }));
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        updateUserData,
        resetUserData,
        currentStep,
        setCurrentStep,
        incrementClientCount,
        decrementClientCount,
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
