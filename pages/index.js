import Image from "next/image";

import Section from "@components/Section";
import Hero from "@components/Hero";
import Form from "@components/Form";

export default function Home() {
  return (
    <>
      <Hero/>
      <Section
        id="services"
        title="Les services de Stylium"
        introduction="Avec plus de 6 années à tisser des histoires de beauté et à créer des moments uniques, Stylium
            est l&apos;endroit où votre beauté devient une histoire à raconter. Du maquillage événementiel qui
            célèbre vos moments spéciaux à l&apos;onglerie qui exprime votre style personnel, chaque prestation
            est une invitation à créer ensemble une histoire de beauté qui vous ressemble."
        subsections={[
          {
            left: (
              <>
                <h3>Maquillage événementiel</h3>

                <p>
                    En tant que professionnelle de l&apos;esthétique avec plus de 6 ans
                    d&apos;expérience, je me
                    spécialise dans le maquillage événementiel sur mesure, apportant une touche
                    unique à chaque occasion.
                </p>

                <h4>Un service personnalisé</h4>

                <p>
                    Chez Stylium, chaque coup de pinceau est pensé en fonction de vos envies. Mon
                    approche sur
                    mesure garantit que votre maquillage événementiel reflète votre personnalité et
                    s&apos;harmonise
                    parfaitement avec le thème de votre occasion spéciale.
                </p>

                <h4>Des moments inoubliables</h4>

                <p>
                    Que ce soit pour votre mariage, une séance photo professionnelle captivante ou
                    un défilé de mode,
                    Stylium transforme chaque moment en une expérience de beauté inoubliable. Chaque
                    détail est
                    soigneusement considéré pour que vous soyez resplendissante lors de vos moments
                    les plus précieux.
                </p>

                <h4>Mobilité régionale</h4>

                <p>
                    Parcourant la magnifique région de la Nouvelle-Aquitaine, Stylium apporte son
                    expertise
                    directement à votre porte. Que vous vous trouviez au cœur de Bordeaux, sur les
                    plages de
                    Biarritz, ou dans les vignobles de Saint-Émilion, je me déplace pour vous offrir
                    une expérience beauté exceptionnelle.
                </p>

                <h4>Réservez dès aujourd&apos;hui</h4>

                <p>
                    Parce que votre beauté mérite une attention exceptionnelle, réservez dès
                    maintenant votre session
                    de maquillage événementiel avec Stylium. Laissez-moi créer l&apos;histoire de
                    votre beauté, mèches de pinceaux après mèches de pinceaux.
                </p>
              </>
            ),
            right: (
              <Image src="/sections/section-maquillage.png" alt="Maquillage de mariée" width={684}
                height={480}/>
            )
          },
          {
            mobileInverted: true,
            left: (
              <Image src="/sections/section-ongles.png" alt="Nail art" width={684} height={480}/>
            ),
            right: (
              <>
                <h3>Onglerie / Nail Art</h3>

                <p>
                    Vos ongles méritent une attention particulière. Laissez-moi les transformer en
                    œuvres d&apos;art uniques grâce à des designs créatifs et des couleurs éclatantes qui complètent
                    votre style.
                </p>

                <h4>Créations personnalisées</h4>

                <p>
                    Votre style, votre personnalité - chaque session d&apos;onglerie chez Stylium est une
                    collaboration pour créer des designs personnalisés qui reflètent votre essence
                    individuelle.
                </p>

                <h4>Éclat et élégance</h4>

                <p>
                    De la simplicité sophistiquée aux créations audacieuses, Stylium sublime vos
                    mains avec des œuvres d&apos;art sur chaque ongle. Laissez vos mains rayonner d&apos;éclat
                    et d&apos;élégance.
                </p>

                <h4>Exclusivement dans Bordeaux Métropole</h4>

                <p>
                    Stylium se consacre à apporter l&apos;art de l&apos;onglerie et du nail art à votre porte,
                    au cœur de la belle Bordeaux Métropole. Découvrez une expérience de beauté
                    personnalisée sans quitter votre quartier.
                </p>

                <h4>Réservez votre session</h4>

                <p>
                    Offrez à vos mains l&apos;attention qu&apos;elles méritent. Réservez dès aujourd&apos;hui votre
                    session d&apos;onglerie et de nail art exclusivement dans Bordeaux Métropole avec
                    Stylium.
                </p>
              </>
            )
          }
        ]}
      />
      <Section
        id="rendez-vous"
        title="Prenez rendez-vous"
        narrow
        introduction="Votre moment de beauté personnalisé est à portée de clic. Réservez dès maintenant votre session
        de maquillage événementiel ou d'onglerie/nail art. Complétez le formulaire ci-dessous et laissez Stylium
        créer l'histoire unique de votre beauté.">
        <p className="highlighted">Votre beauté mérite d&apos;être révélée. Découvrons ensemble votre éclat unique !</p>
        <Form />
      </Section>
    </>
  );
}
