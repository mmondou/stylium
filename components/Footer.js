import styles from './Footer.module.css'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href={"/"}>Stylium</Link>
      <Link href={"/cgu"}>Conditions générales d&apos;utilisation</Link>
    </footer>
  )
}
