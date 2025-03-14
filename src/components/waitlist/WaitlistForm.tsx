
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface WaitlistFormProps {
  waitlistEmail: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  loading: boolean;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({
  waitlistEmail,
  onEmailChange,
  onSubmit,
  loading
}) => {
  return (
    <div className="space-y-3">
      <div className="text-xs p-2 bg-blue-100 text-blue-800 rounded-md">
        <p className="font-medium">Join our waitlist</p>
        <p className="mt-0.5">
          We're not available in your region yet, but we're expanding quickly!
        </p>
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="waitlist-email">Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            id="waitlist-email"
            placeholder="you@example.com" 
            value={waitlistEmail}
            onChange={onEmailChange}
            className="pl-9"
            type="email"
          />
        </div>
      </div>

      <Button 
        className="w-full"
        onClick={onSubmit}
        disabled={loading}
        size="sm"
      >
        {loading ? (
          <span className="inline-flex items-center">
            Submitting... <span className="ml-2">⋯</span>
          </span>
        ) : (
          <span className="inline-flex items-center">
            Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
          </span>
        )}
      </Button>
    </div>
  );
};

export default WaitlistForm;
