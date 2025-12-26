import { Share2 } from 'lucide-react';

import CopyButton from '@/components/copy-btn';

import Button from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';

interface IProps {
  link: string;
}

const ShareListLink = ({ link }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='text-zinc-400 hover:text-zinc-300'>
          <Share2 className='mr-2 h-4 w-4' />
          Share
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>

          <DialogDescription>
            Anyone who has this link will be able to leave a testimonial.
          </DialogDescription>
        </DialogHeader>

        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input id='link' defaultValue={link} readOnly className='text-xs' />
          </div>

          <CopyButton text={link} />
        </div>

        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
ShareListLink.displayName = 'ShareListLink';

export default ShareListLink;
