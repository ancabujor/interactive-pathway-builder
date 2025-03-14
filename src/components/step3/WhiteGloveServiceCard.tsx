
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check, PhoneCall } from 'lucide-react';

interface WhiteGloveServiceCardProps {
  onRequestConsultation: () => void;
}

const WhiteGloveServiceCard: React.FC<WhiteGloveServiceCardProps> = ({ onRequestConsultation }) => {
  return (
    <Card className="h-full flex flex-col border-2 border-primary/10">
      <CardHeader className="py-3">
        <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium w-fit rounded-full mb-1">
          Premium Support
        </div>
        <CardTitle className="text-base">White Glove Service</CardTitle>
        <CardDescription className="text-xs">
          Personalized onboarding and implementation support
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2 flex-1">
        <div className="mb-3">
          <p className="text-xl font-bold">Custom<span className="text-xs font-normal text-muted-foreground"> pricing</span></p>
          <p className="text-xs text-muted-foreground">Tailored to your business needs</p>
        </div>
        
        <ul className="space-y-1 text-xs">
          <li className="flex">
            <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
            <span>White-labeled client portal</span>
          </li>
          <li className="flex">
            <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
            <span>Dedicated implementation manager</span>
          </li>
          <li className="flex">
            <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
            <span>Priority phone & email support</span>
          </li>
          <li className="flex">
            <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
            <span>Automated client onboarding</span>
          </li>
          <li className="flex">
            <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0 mt-0.5" />
            <span>Customized integration setup</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="py-3 border-t">
        <Button 
          variant="outline"
          className="w-full"
          onClick={onRequestConsultation}
          size="sm"
        >
          Request Consultation
          <PhoneCall className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WhiteGloveServiceCard;
