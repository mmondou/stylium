import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image className={styles.logo} src="/logo-stylium-760.png" alt="Logo Stylium" width={760} height={308} />
      </Link>
    </header>
  );
}
