import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src="/logo-stylium-760.png" alt="Logo Stylium" width={760} height={308} />
    </header>
  );
}
