
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';

export function useStep2() {
  const navigate = useNavigate();
  const { userData, updateUserData, currentStep, setCurrentStep } = useUserContext();
  const [stage, setStage] = useState<'location' | 'email' | 'receptionist'>('location');
  const [email, setEmail] = useState(userData.email || '');
  const [showPreviewUpdate, setShowPreviewUpdate] = useState(false);
  const [hasTestedReceptionist, setHasTestedReceptionist] = useState<string | undefined>(undefined);
  const [showReceptionistAlert, setShowReceptionistAlert] = useState(false);

  useEffect(() => {
    if (currentStep !== 2) {
      setCurrentStep(2);
    }
    
    // If the user already has an email, skip to the receptionist stage
    if (userData.email) {
      setStage('receptionist');
    } else if (userData.location) {
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
    setStage('receptionist');
  };

  const handleReceptionistResponse = (value: string) => {
    setHasTestedReceptionist(value);
    setShowReceptionistAlert(true);
    
    // If they haven't tested the receptionist, we'd redirect them to a demo page
    if (value === 'no') {
      // In a real implementation, we would redirect to a demo page
      console.log("User hasn't tested the receptionist, should redirect to demo");
    }
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
    } else if (stage === 'email') {
      setStage('location');
    } else if (stage === 'receptionist') {
      setStage('email');
    }
  };

  const handleNextStage = () => {
    if (stage === 'location' && userData.location) {
      setStage('email');
    } else if (stage === 'email' && userData.email) {
      setStage('receptionist');
    }
  };

  const getStageDescription = () => {
    switch(stage) {
      case 'location': return "Let's build your personalized AI business plan in just 60 seconds";
      case 'email': return "One last step - where should we send your personalized plan?";
      case 'receptionist': return "Just one more question before we finalize your plan";
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
