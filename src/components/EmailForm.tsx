
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowRight, MailIcon } from 'lucide-react';

interface EmailFormProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => void;
}

const EmailForm: React.FC<EmailFormProps> = ({
  email,
  setEmail,
  onSubmit
}) => {
  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    onSubmit();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <p className="text-center text-sm">
          To receive your personalized plan and pricing:
        </p>
        
        <div className="space-y-1">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              id="email"
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      <Button 
        className="w-full"
        onClick={handleSubmit}
      >
        View Plans & Pricing
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      
      <p className="text-xs text-center text-muted-foreground">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default EmailForm;
