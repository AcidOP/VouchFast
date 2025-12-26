import { Plus } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/ui/button';

const CreateListButton = () => (
  <Link href='/dashboard/lists/new'>
    <Button className='mt-4 flex gap-3 rounded'>
      <Plus /> Create new List
    </Button>
  </Link>
);
CreateListButton.displayName = 'CreateListButton';

export default CreateListButton;
