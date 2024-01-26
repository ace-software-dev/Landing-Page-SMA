import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface SectionTextProps {
  children: React.ReactNode,
  classes?: string,
  href: Url,
  size?: string,
}

export default function SectionText({ children, classes, href, size = 'text-base md:text-lg' }: SectionTextProps) {
  return (
    <Link href={href}>
      <div className='flex flex-col w-full'>
        <div className={`font-medium text-green-primary ${size} text-center md:font-bold hover:underline font-satoshi ${classes}`}>
          {children}
        </div>
      </div>
    </Link>
  );
}
