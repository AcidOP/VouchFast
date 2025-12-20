import AuthMenuDropdown from './auth-menu-dropdown';
import MobileNav from './mobile/index';

const AuthenticatedNavActions = async () => {
  return (
    <div className='flex items-center gap-2 lg:hidden'>
      <AuthMenuDropdown />
      <MobileNav />
    </div>
  );
};

export default AuthenticatedNavActions;
