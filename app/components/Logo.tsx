import Link from "next/link";
import Image from "next/image";
import ImageLogo from "../../public/icon.svg";
function Logo() {
  return (
    <Link href="/" className="flex item-center gap-4 z-10">
      <Image src={ImageLogo} alt="Logo" width={60} height={60} />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
