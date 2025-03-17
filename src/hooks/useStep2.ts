
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';

export function useStep2() {
  const navigate = useNavigate();
  const { userData, updateUserData, currentStep, setCurrentStep } = useUserContext();
  // Change the default stage to receptionist after location input
  const [stage, setStage] = useState<'location' | 'receptionist' | 'email'>('location');
  const [email, setEmail] = useState(userData.email || '');
  const [showPreviewUpdate, setShowPreviewUpdate] = useState(false);
  const [hasTestedReceptionist, setHasTestedReceptionist] = useState<string | undefined>(undefined);
  const [showReceptionistAlert, setShowReceptionistAlert] = useState(false);

  useEffect(() => {
    if (currentStep !== 2) {
      setCurrentStep(2);
    }
    
    // Change the flow: location -> receptionist -> email
    if (userData.location && !userData.email) {
      setStage('receptionist');
    } else if (userData.email) {
      setStage('email');
    } else {
      setStage('location');
    }
  }, []);

  // Animation effect when user data changes
  useEffect(() => {
    if (userData.location || userData.companyName || userData.clientCount) {
      setShowPreviewUpdate(true);
      const timer = setTimeout(() => {
        setShowPreviewUpdate(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [userData.location, userData.companyName, userData.clientCount]);

  const handleEmailSubmit = () => {
    if (!email) {
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }
    
    updateUserData({ email });
    // After email is submitted, we're ready to continue
    handleContinue();
  };

  const handleReceptionistResponse = (value: string) => {
    setHasTestedReceptionist(value);
    setShowReceptionistAlert(true);
    
    // After user answers about receptionist, show email form
    setStage('email');
  };

  const handleContinue = () => {
    if (hasTestedReceptionist === 'no') {
      navigate('/receptionist-demo');
    } else {
      setCurrentStep(3);
      navigate('/step3');
    }
  };

  const handlePreviousPage = () => {
    if (stage === 'location') {
      setCurrentStep(1);
      navigate('/step1');
    } else if (stage === 'receptionist') {
      setStage('location');
    } else if (stage === 'email') {
      setStage('receptionist');
    }
  };

  const handleNextStage = () => {
    if (stage === 'location' && userData.location) {
      setStage('receptionist');
    } else if (stage === 'receptionist' && hasTestedReceptionist) {
      setStage('email');
    }
  };

  const getStageDescription = () => {
    switch(stage) {
      case 'location': return "Let's build your personalized AI business plan in just 60 seconds";
      // Update the descriptions to match the new flow
      case 'receptionist': return "Just one question before we continue with your personalized plan";
      case 'email': return "One last step - where should we send your personalized plan?";
      default: return "";
    }
  };

  return {
    stage,
    setStage,
    email,
    setEmail,
    showPreviewUpdate,
    hasTestedReceptionist,
    showReceptionistAlert,
    userData,
    handleEmailSubmit,
    handleReceptionistResponse,
    handleContinue,
    handlePreviousPage,
    handleNextStage,
    getStageDescription
  };
}
