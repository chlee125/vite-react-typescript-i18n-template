import { Link } from 'react-router-dom';
import Menu from '@/components/layouts/header/menu.tsx';
import MobileMenu from '@/components/layouts/header/mobileMenu.tsx';
import { useTranslation } from 'react-i18next';
import { Globe, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/lib/dark-mode.ts';
import useLanguage from '@/stores/language.ts';
import { Button } from '@/components/ui/button.tsx';

function Header() {
  const { t } = useTranslation();
  const { isDarkMode, toggle } = useDarkMode();
  const { toggleLang } = useLanguage();

  const menuItems = [{ path: '/example', name: t('menu.example') }];
  return (
    <header className="z-50 flex w-full flex-wrap justify-start py-4 text-sm ">
      <nav className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-4">
        <div className="sm:hidden">
          <MobileMenu menuItems={menuItems} />
        </div>
        <Link to="/" className="text-xl font-semibold">
          {t('project.title')}
        </Link>
        <div className="hidden grow basis-full sm:block">
          <Menu menuItems={menuItems} />
        </div>
        <div className="flex items-center justify-end sm:px-10">
          <Button
            className="h-10 px-2 rounded-full"
            size="sm"
            variant="ghost"
            onClick={toggle}
          >
            {isDarkMode
              ? <Sun /> : <Moon />}
          </Button>
          <Button onClick={toggleLang} size="sm" variant="ghost" className="h-10 px-2 rounded-full">
            <Globe />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
