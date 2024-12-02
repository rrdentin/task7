import React, { useContext, useRef, useState } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Loader from "../common/components/Loader";
import { SectionRefContext } from "../common/components/SectionRefContext";
import Skills from "../layout/Skills";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const [inProp, setInProp] = useState(false);
  const [textInProp, setTextInProp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imageLoaded = () => {
    setIsLoading(false);
  };
  const skillsSectionRef = useContext(SectionRefContext);

  React.useEffect(() => {
    setInProp(true);
    setTextInProp(true);
  }, []);

  return (
    <main className={`mt-8`}>
      <div className="py-10" />
      <section>
        <div className="grid lg:grid-cols-2 gap-8 items-center mx-auto container px-4 sm:px-6 lg:px-8">
          <div>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <h1 className="text-center sm:text-left text-6xl font-semibold mb-2">
                {language === "en" ? "I'm Rr. Denti N" : "Saya Rr. Denti N"}
              </h1>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <h2 className="text-center sm:text-left text-xl font-semibold mb-4 mt-4">
                {language === "en"
                  ? "Full Stack Web Developer"
                  : "Pengembang Web Full Stack"}
              </h2>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <div className="text-center sm:text-left mb-10">
                <Link to="/contact">
                  <button className="btn btn-primary btn-ghost btn-shine text-white">
                    {language === "en" ? "HIRE ME" : "REKRUT SAYA"}
                  </button>
                </Link>
              </div>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <div className="text-center sm:text-left mt-4 text-base space-y-4">
                <p>
                  {language === "en"
                    ? "As an undergraduate student of Informatics Engineering at the State Polytechnic of Malang, I am passionate about software engineering, website development, and UI/UX design. My experience as a Full-Stack Web Developer Intern at PT. Surabaya Autocomp Indonesia has honed my skills in solving complex coding challenges and strengthened my programming abilities."
                    : "Saya adalah mahasiswa program sarjana Teknik Informatika di Politeknik Negeri Malang, yang memiliki minat besar dalam rekayasa perangkat lunak, pengembangan website, dan desain UI/UX. Pengalaman saya sebagai Magang Full-Stack Web Developer di PT. Surabaya Autocomp Indonesia telah mengasah kemampuan saya dalam menyelesaikan tantangan pemrograman yang kompleks dan memperkuat keterampilan pengkodean saya."}
                </p>
                <p>
                  {language === "en"
                    ? "I am now seeking a role as a Software Engineer, Web Developer, or UI/UX Designer where I can apply my skills and work professionally in a team or individually. Outside of IT field I was also the treasurer of ITDEC Polinema (Information Technology Department English Community) in 2023/2024, I developed strong organizational and communication skills through managing and collaborating with a large group of people."
                    : "Saat ini saya mencari peran sebagai Software Engineer, Web Developer, atau UI/UX Designer di mana saya dapat mengaplikasikan keterampilan saya dan bekerja secara profesional baik dalam tim maupun individu. Selain di bidang IT, saya juga pernah menjabat sebagai bendahara ITDEC Polinema (Komunitas Bahasa Inggris Jurusan Teknologi Informasi) pada periode 2023/2024, yang mengembangkan keterampilan organisasi dan komunikasi saya melalui manajemen dan kolaborasi dengan kelompok besar."}
                </p>
                <p>
                  {language === "en"
                    ? "I believe that a positive attitude and professionalism are crucial in any endeavor. I am a strong believer in the importance of teamwork, communication, adaptability, and continuous learning. I am excited about the prospect of joining a dynamic team where I can contribute my skills and knowledge to drive innovation and growth."
                    : "Saya percaya bahwa sikap positif dan profesionalisme sangat penting dalam setiap usaha. Saya sangat meyakini pentingnya kerja sama tim, komunikasi, adaptabilitas, dan pembelajaran berkelanjutan. Saya sangat antusias dengan prospek bergabung dengan tim yang dinamis di mana saya bisa berkontribusi dengan keterampilan dan pengetahuan saya untuk mendorong inovasi dan pertumbuhan."}
                </p>
              </div>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <h4 className="text-center sm:text-left mt-4 text-lg font-semibold">
                {language === "en"
                  ? "You can see my projects here:"
                  : "Anda dapat melihat proyek saya di sini"}
              </h4>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <div className="text-center sm:text-left">
                <a
                  href="/projects"
                  className={`mt-2 inline-block py-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-sm uppercase tracking-widest`}
                >
                  {language === "en" ? "See Projects" : "Lihat Projects"}
                </a>
              </div>
            </CSSTransition>
          </div>
          <div>
            {isLoading && <Loader />}
            <CSSTransition in={inProp} timeout={500} classNames="slide">
              <img
                src="d/NormiessSilent.gif"
                alt="Rr. Denti N"
                className="w-full h-auto"
                onLoad={imageLoaded}
              />
            </CSSTransition>
          </div>
        </div>
      </section>

      <section ref={skillsSectionRef} className="bg-black bg-opacity-50">
        <Skills language={language} />
      </section>
    </main>
  );
}
