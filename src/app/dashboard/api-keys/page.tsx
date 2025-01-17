import { redirect } from 'next/navigation';

import { getApiKeys } from '@/server/db/user';
import { getServerSession } from '@/server/session';

import ApiKeyTable from '@/components/api-key-table';
import CreateApiKey from '@/components/create-api-key-btn';
import DashboardHeading from '@/components/dashboard-heading';

import type { User } from '@prisma/client';

const APIKeys = async () => {
  const session = await getServerSession();
  if (!session) redirect('/login');

  const user: User = session.user;

  const apiKeys = await getApiKeys(user.id);

  const noApiKeys = !apiKeys || apiKeys.length === 0;

  return (
    <>
      <div className='flex items-center justify-between'>
        <DashboardHeading text='API Keys' />
        {!noApiKeys && <CreateApiKey />}
      </div>

      {noApiKeys && (
        <div className='mt-5'>
          You don&apos;t have any API keys yet.
          <CreateApiKey className='mt-2' />
        </div>
      )}

      {!noApiKeys && <ApiKeyTable apiKeys={apiKeys} />}
    </>
  );
};

export default APIKeys;
