'use client';

import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

export const AnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(72), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md">
      <p className="text-center text-lg font-bold text-secondary mb-2">
        {progress}% das vagas já preenchidas!
      </p>
      <Progress value={progress} className="h-4 bg-gray-700 [&>div]:bg-secondary" />
    </div>
  );
};
