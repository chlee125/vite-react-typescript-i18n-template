import { Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mt-3 space-x-2">
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-center text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="https://github.com/chlee125/vite-react-typescript-template"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
