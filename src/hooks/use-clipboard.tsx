'use client';

import { useToast } from '@/hooks/use-toast';

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_error) {
    return false;
  }
};

export const useCopyToClipboard = () => {
  const { toast } = useToast();

  const handleCopy = async (text: string) => {
    const res = await copyToClipboard(text);

    toast({
      title: res ? 'Copied!' : 'An Error Occurred',
      variant: res ? 'default' : 'destructive',
    });
  };

  return handleCopy;
};
