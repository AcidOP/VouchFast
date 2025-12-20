import {
  FileCode,
  FilePlus2,
  LayoutGrid,
  LockKeyholeOpen,
  ReceiptText,
  // Settings,
  User,
} from 'lucide-react';

const authMenu = [
  { name: 'Dashboard', url: '/dashboard', icon: LayoutGrid },
  { name: 'Lists', url: '/dashboard/lists', icon: FilePlus2 },
  {
    name: 'API Keys',
    url: '/dashboard/api-keys',
    icon: LockKeyholeOpen,
    dropdown: 'API',
  },
  { name: 'API Docs', url: '/docs', icon: FileCode, dropdown: 'API' },
  { name: 'My Profile', url: '/dashboard/profile', icon: User },
  // { name: 'Settings', url: '/dashboard/settings', icon: Settings },
  { name: 'Billing', url: '/dashboard/billing', icon: ReceiptText },
];

export default authMenu;
