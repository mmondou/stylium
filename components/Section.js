import styles from "./Section.module.css";

export default function Section({title, introduction, subsections}) {
  return (
    <section className={styles.section}>
      <h2>{title}<span className="color-text-primary">.</span></h2>
      {introduction && <p className={styles.section__introduction}>{introduction}</p>}
      {subsections && subsections.map((subsection, index) => (
        <div key={index} className={`${styles.section__left_right_container}  ${subsection.mobileInverted ? styles.section__mobile_inverted : ''}`}>
          {subsection.left && <div className={styles.section__left}>{subsection.left}</div>}
          {subsection.right && <div className={styles.section__right}>{subsection.right}</div>}
        </div>
      ))}
    </section>
  );
}
