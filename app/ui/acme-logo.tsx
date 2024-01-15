import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import { lusitana } from './font';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <ArrowTrendingUpIcon className="h-12 w-12 flex-shrink-0" />
      <p className="flex-grow text-[40px] max-sm:text-center">iTrade</p>
    </div>
  );
}
