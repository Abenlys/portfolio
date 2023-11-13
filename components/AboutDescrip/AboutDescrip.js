import { useColorContext } from "@/hooks/Colorcontext";
import Image from "next/image";
import React, { useState } from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AboutDescrip() {
  const { isJedi } = useColorContext();
  const [fr, setFr] = useState(false);

  //Comportement

  const handleLanguage = () => {
    setFr(!fr);
  };
  return (
    <div className={roboto.className}>
      <div className="description">
        <div className={`description__${isJedi ? "bgimgjedi" : "bgimgsith"}`}>
          <div className={`description__texte`}>
            <h2 className="description__texte__title">
              {fr ? "A propos de moi" : "Hey, about me"}
            </h2>
            <div className="description__texte__language">
              <input
                type="checkbox"
                name="language"
                id="language"
                onChange={handleLanguage}
                className="checkbox"
              />
              <label htmlFor="language" className="label"></label>
            </div>
            <p className="description__texte__txt">
              {fr
                ? "Salut, je m'appelle Thomas, 36 ans, après mon travail de comptable pendant 10 ans, j'ai décidé de me diriger vers le code parce que c'est ce que j'aime faire. La formation Openclassrooms m'a permis de développer des compétences et de confirmer que j'ai fait le bon choix dans ma reconversion professionnelle."
                : "Hi, my name is Thomas, 36 years old, after working as an accountant for 10 years, I decided to go into coding because it's what I love to do. The Openclassrooms training course enabled me to develop my skills and confirm that I had made the right choice in my professional reconversion. "}
            </p>
            <br />
            <p className="description__texte__txt">
              {fr
                ? `${
                    isJedi
                      ? "La résistance a formé un nouveau Padawan. La force n'est pas très développé en lui, mais son enthousiasme est sans limite. Nous espérons qu'il rétablira l'équilibre dans la force. Que la force soit avec lui !"
                      : "L'empire a accepté de subventionner la reconversion professionnelle de notre nouveau padawan. la force est faible en lui, mais nous reconnaissons sa volonté inébranlable. Un sith sommeille en lui, nous espérons qu'il fera honneur au puissant dark Vador."
                  }`
                : `${
                    isJedi
                      ? "The resistance has trained a new Padawan. He doesn't have much force, but his enthusiasm knows no bounds. We hope he will restore balance to the force. May the force be with him!"
                      : "The Empire has agreed to subsidize our new Padawan's professional training. He doesn't have great force, but we recognize his unshakeable will. There's a Sith in him, and we hope he'll do the mighty Darth Vader proud."
                  }`}
            </p>
          </div>
        </div>
        <div className="description__image">
          <Image
            src={
              isJedi ? "/images/descrip-jedi.jpg" : "/images/descrip-sith.jpg"
            }
            sizes="(max-width: 768px) 100vw, 33vw"
            fill
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            priority={true}
            alt={isJedi ? "TomRam jedi" : "TomRam sith"}
          />
        </div>
      </div>
    </div>
  );
}
