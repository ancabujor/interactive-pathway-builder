
import { useState } from 'react';
import { useUserContext } from '@/context/UserContext';
import { useNavigate } from 'react-router-dom';

export function useEmailSubmission() {
  const navigate = useNavigate();
  const { updateUserData } = useUserContext();
  const [readyEmail, setReadyEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showEmailField, setShowEmailField] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setReadyEmail(email);
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleReadyClick = (location: string) => {
    if (!location) {
      // Just focus on the location field if empty instead of showing toast
      return;
    }
    setShowEmailField(true);
  };

  const handleSubmitEmail = (readyEmail: string, setStage?: (stage: 'location' | 'email' | 'receptionist') => void) => {
    if (readyEmail && validateEmail(readyEmail)) {
      updateUserData({ email: readyEmail });
      // Instead of directly navigating to step3, move to receptionist stage
      if (setStage) {
        setStage('receptionist');
      }
    } else if (readyEmail) {
      setEmailError('Please enter a valid email address');
    }
  };

  return {
    readyEmail,
    emailError,
    showEmailField,
    setReadyEmail,
    setEmailError,
    setShowEmailField,
    validateEmail,
    handleEmailChange,
    handleReadyClick,
    handleSubmitEmail
  };
}
