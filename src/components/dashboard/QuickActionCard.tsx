
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <Card className="border hover:border-blue-300 cursor-pointer transition-all">
      <CardContent className="p-2 md:p-4">
        <div className="flex">
          <div className="rounded-full bg-blue-100 p-2 md:p-3 mr-2 md:mr-4">
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-sm md:text-lg">{title}</h3>
            <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionCard;
