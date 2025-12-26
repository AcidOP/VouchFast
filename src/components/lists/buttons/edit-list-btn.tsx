import { Edit } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/ui/button';

const EditListBtn = ({ listID }: { listID: string }) => {
  return (
    <Link href={`/dashboard/lists/${listID}/edit`}>
      <Button variant='outline' className='text-zinc-400 hover:text-zinc-300'>
        <Edit className='mr-2 h-4 w-4' />
        Edit List
      </Button>
    </Link>
  );
};

export default EditListBtn;
