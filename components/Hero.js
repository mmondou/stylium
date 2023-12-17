import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className="highlighted">
          <span className="sr-only">Stylium</span> Maquillage événementiel : mariages, défilés, shootings & Onglerie / Nail art à domicile
        </h1>
        <p>Embarquez avec moi pour une expérience qui va au-delà de la simple esthétique, mais qui raconte votre histoire de façon authentique et éclatante.</p>
        <a href="#services" className="btn btn-primary">Découvrir</a>
      </div>
      <div className={styles.hero__image_1}>
        <Image src="/hero/hero-image-1.png" alt="Maquillage de mariée" width={920} height={360} />
      </div>

      <div className={styles.hero__image_2}>
        <Image src="/hero/hero-image-2.png" alt="Maquillage de mariée" width={448} height={744} />
      </div>

      <div className={styles.hero__image_3}>
        <Image src="/hero/hero-image-3.png" alt="Ongles" width={448} height={360} />
      </div>
    </div>
  );
}
