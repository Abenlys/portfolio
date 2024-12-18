import { urlResume } from "@/public/data/urlResume";
import React, { useEffect, useRef, useState } from "react";
import { Lato } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { skillsList } from "@/components/Skills/SkillsList";
import { faStar, faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@/components/Rating/Rating";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const font = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function resume() {
  const [resumeDetail, setResumedetail] = useState(null);
  const resumeRef = useRef(null)

  const generatePdf = async function ()  {
    if (!resumeRef.current) {
        return null
    }
    const pdf = new jsPDF()
    // const scale = 2
    // const canvas = await html2canvas(resumeRef.current, {scale})
    // const imageData = canvas.toDataURL("image.png", 1)
    // pdf.addImage(imageData, "PNG", 0, 0, 210, 297)
    pdf.fromHTML(resumeRef.current, 15, 15)
    pdf.save("tomramcv.pdf")
  }

  

  useEffect(() => {
    async function fetchResume() {
      const response = await fetch(urlResume);
      const data = await response.json();
      setResumedetail(data);
    }
    fetchResume();
  }, []);
  console.log(resumeDetail);

  if (!resumeDetail) {
    return null;
  }
  console.log(resumeDetail[0].competencesTransverses.langues[0].rating);
  return (
    <div ref={resumeRef} className={`resume ${font.className}`}>
        <button onClick={generatePdf} className="button-pdf">
            <Image src={resumeDetail[0].iconPictures[10]} width={50} height={50} alt="pdf" priority />
        </button>
      <div className="resume__left">
        <h3 className="resume__left__title">A propos</h3>
        <p>{resumeDetail[0].apropos}</p>
        <div className="resume__left__contact">
          <h3 className="resume__left__title">Contact</h3>
          <div className="resume__left__contact__item">
            <Link href={`mailto:thomas.ramillon@gmail.com`}>
              <Image
                src={resumeDetail[0].iconPictures[1]}
                width={40}
                height={40}
                priority
                alt="mail"
              />
              <p>thomas.ramillon@gmail.com</p>
            </Link>
          </div>
          <div className="resume__left__contact__item">
            <Link href={`tel:0650233664`}>
              <Image
                src={resumeDetail[0].iconPictures[0]}
                width={40}
                height={40}
                priority
                alt="tel"
              />
              <p>06-50-23-36-64</p>
            </Link>
          </div>
          <div className="resume__left__contact__item">
            <Link href={`https://github.com/Abenlys`}>
              <Image
                src={resumeDetail[0].iconPictures[2]}
                width={40}
                height={40}
                priority
                alt="github"
              />
              <p>https://github.com/Abenlys</p>
            </Link>
          </div>
          <div className="resume__left__contact__item">
            <Image
              src={resumeDetail[0].iconPictures[3]}
              width={40}
              height={40}
              priority
              alt="adresse"
            />
            <p>44 rue de Tivoli, 33000 Bordeaux</p>
          </div>
        </div>
        <div className="resume__left__atouts">
          <h3 className="resume__left__title">Atouts</h3>
          <h5 className="resume__left__smalltitle">Exigeant et travailleur</h5>
          <p>{resumeDetail[0].exigeantEtTravailleur}</p>
          <h5 className="resume__left__smalltitle">Autonomie et Initiative</h5>
          <p>{resumeDetail[0].autonomieEtInitiative}</p>
        </div>
        <div className="resume__left__form">
          <h3 className="resume__left__title">Formation</h3>
          <h5 className="resume__left__smalltitle">
            {resumeDetail[0].nomFormation}
          </h5>
          <p>{resumeDetail[0].ecoleFormation}</p>
          <p>{resumeDetail[0].dateFormation}</p>
          <br />
          {resumeDetail[0].competencesFormation.map((bla, index) => (
            <p key={index}>{bla}</p>
          ))}
        </div>
      </div>
      <div className="resume__right">
        <Image
          className="resume__right__piccover"
          src={resumeDetail[0].pictureResume}
          width={150}
          height={150}
          alt="photocv"
          priority
        />
        <div className="resume__right__cvtitle">
          <h1>THOMAS RAMILLON</h1>
          <p>Développeur front-end</p>
        </div>
        <div className="resume__right__main">
          <div className="resume__right__main__line"></div>
          <section className="resume__right__main__pro">
            <div className="resume__right__main__pro">
              <Image
                className="resume__right__main__pro__logo"
                src={resumeDetail[0].iconPictures[4]}
                width={50}
                height={50}
                alt="exp-pro"
                priority
              />
              <h2>EXPERIENCE</h2>
              <h3>{`${resumeDetail[0].lastExpPro.job}, ${resumeDetail[0].lastExpPro.company}`}</h3>
              <p className="resume__right__main__pro__under">
                {resumeDetail[0].lastExpPro.date}
              </p>
              {resumeDetail[0].lastExpPro.competences.map((comp, index) => (
                <ul key={index}>
                  <li>{comp}</li>
                </ul>
              ))}
              <h3>{`${resumeDetail[0].secondExpPro.job}, ${resumeDetail[0].secondExpPro.company}`}</h3>
              <p className="resume__right__main__pro__under">
                {resumeDetail[0].secondExpPro.date}
              </p>
              {resumeDetail[0].secondExpPro.competences.map((comp, index) => (
                <ul key={index}>
                  <li>{comp}</li>
                </ul>
              ))}
              <h3>{`${resumeDetail[0].firstExpPro.job}, ${resumeDetail[0].firstExpPro.company}`}</h3>
              <p className="resume__right__main__pro__under">
                {resumeDetail[0].firstExpPro.date}
              </p>
              {resumeDetail[0].firstExpPro.competences.map((comp, index) => (
                <ul key={index}>
                  <li>{comp}</li>
                </ul>
              ))}
            </div>
            <div className="resume__right__main__pro">
              <Image
                className="resume__right__main__pro__logo"
                src={resumeDetail[0].iconPictures[5]}
                width={50}
                height={50}
                alt="hard skills"
                priority
              />
              <h2>HARD SKILLS</h2>
              <ul className="resume__right__main__pro__grid">
                {skillsList.map((item, index) => (
                  <li key={index}>
                    <Image
                      src={`/images/skills-icons/${item.name}.svg`}
                      alt={item.name}
                      width={40}
                      height={40}
                      priority
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="resume__right__main__pro">
              <Image
                className="resume__right__main__pro__logo"
                src={resumeDetail[0].iconPictures[6]}
                width={50}
                height={50}
                alt="soft skills"
                priority
              />
              <h2>SOFT SKILLS</h2>
              <ul>
                {resumeDetail[0].softskills.map((soft, index) => (
                  <li key={index}>{soft}</li>
                ))}
              </ul>
            </div>
            <div className="resume__right__main__pro">
              <Image
                className="resume__right__main__pro__logo"
                src={resumeDetail[0].iconPictures[7]}
                width={50}
                height={50}
                alt="langues"
                priority
              />
              <h2>LANGUES & BUREAUTIQUES</h2>
              <div className="resume__right__main__pro__flex">
                <div className="resume__right__main__pro__flex__col">
                  <div className="resume__right__main__pro__flex__col__lang">
                    <p>
                      {resumeDetail[0].competencesTransverses.langues[0].name}
                    </p>
                    <Rating
                      icon={faStar}
                      rating={
                        resumeDetail[0].competencesTransverses.langues[0].rating
                      }
                    />
                  </div>
                  <div className="resume__right__main__pro__flex__col__lang">
                    <p>
                      {resumeDetail[0].competencesTransverses.langues[1].name}
                    </p>
                    <Rating
                      icon={faStar}
                      rating={
                        resumeDetail[0].competencesTransverses.langues[1].rating
                      }
                    />
                  </div>
                </div>
                <div className="resume__right__main__pro__flex__col">
                  <div className="resume__right__main__pro__flex__col__lang">
                    <p>
                      {
                        resumeDetail[0].competencesTransverses.bureautiques[0]
                          .name
                      }
                    </p>
                    <Rating
                      icon={faTable}
                      rating={
                        resumeDetail[0].competencesTransverses.bureautiques[0]
                          .rating
                      }
                    />
                  </div>
                  <div className="resume__right__main__pro__flex__col__lang">
                    <p>
                      {
                        resumeDetail[0].competencesTransverses.bureautiques[1]
                          .name
                      }
                    </p>
                    <Rating
                      icon={faTable}
                      rating={
                        resumeDetail[0].competencesTransverses.bureautiques[1]
                          .rating
                      }
                    />
                  </div>
                </div>
                <div className="resume__right__main__pro__flex__col">
                  <div className="resume__right__main__pro__flex__col__lang">
                    <p>
                      {
                        resumeDetail[0].competencesTransverses.bureautiques[2]
                          .name
                      }
                    </p>
                    <Rating
                      icon={faTable}
                      rating={
                        resumeDetail[0].competencesTransverses.bureautiques[2]
                          .rating
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="resume__right__main__pro">
              <Image
                className="resume__right__main__pro__logo"
                src={resumeDetail[0].iconPictures[9]}
                width={50}
                height={50}
                alt="interets & sport"
                priority
              />
              <h2>INTERETS & SPORT</h2>
              <div className="resume__right__main__pro__flex">
                <div className="resume__right__main__pro__flex__col">
                  <ul>
                    {resumeDetail[0].interest.map((int, index) => (
                      <li key={index}>{int}</li>
                    ))}
                  </ul>
                </div>
                <div className="resume__right__main__pro__flex__col">
                  <ul>
                    <li>{resumeDetail[0].sport}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
