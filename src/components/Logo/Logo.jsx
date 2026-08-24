import { FaCode, FaDev } from 'react-icons/fa';

export default function Logo() {
  return (
    <article className="text-gray-900 flex items-center gap-1 font-semibold text-sm">
      <span className="bg-slate-900 p-1 rounded-2xl">
        <FaCode className="text-cyan-500" />
      </span>
      <div className="flex flex-col gap-0">
        <p>Epifânio</p>
        <code className="text-[10px] text-cyan-600 -mt-1">Software Developer</code>
      </div>
    </article>
  );
}
