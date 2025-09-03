import React, { useContext, useState } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import Loader from "../common/components/Loader";

export default function Projects() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  const [isLoading, setIsLoading] = useState(true);
  const imageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <section className="py-10 px-8 md:px-16 rounded-lg my-10 mx-4 md:mx-8 lg:mx-16">
      <div className="py-10" />
      <h1 className="text-4xl font-bold mb-10 text-center">
        {language === "en" ? "PROJECTS" : "PROYEK"}
      </h1>

      <p className="mb-6 text-center">
        {language === "en"
          ? "Explore all my projects and open-source contributions on "
          : "Jelajahi semua proyek dan kontribusi open-source saya di "}
        <a
          href="https://www.github.com/rrdentin"
          className="text-purple-500 hover:text-purple-300"
          target="_blank"
          rel="noreferrer"
        >
          {language === "en" ? "Github" : "Github"}
        </a>
        .
      </p>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://unibookstore.daintyc.xyz/home"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/unibookstore.png"
              alt="Unibookstore"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en"
                ? "Website UniBookStore"
                : "Situs Web UniBookStore"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  {" "}
                  UniBookStore is a book rental service offering a variety of
                  quality books at competitive prices. We are committed to
                  providing a comfortable and safe reading experience for our
                  customers. This website allows users to browse through a range
                  of available books, complete with detailed information about
                  features and availability. We also provide friendly customer
                  service to assist with your reading needs at any time.{" "}
                </>
              ) : (
                <>
                  {" "}
                  UniBookStore adalah layanan penyewaan buku yang menawarkan
                  berbagai buku berkualitas dengan harga bersaing. Kami
                  berkomitmen untuk memberikan pengalaman membaca yang nyaman
                  dan aman bagi pelanggan. Website ini memungkinkan pengguna
                  untuk menjelajahi berbagai buku yang tersedia, lengkap dengan
                  informasi detail mengenai fitur dan ketersediaan. Kami juga
                  menyediakan layanan pelanggan yang ramah untuk membantu
                  kebutuhan literasi Anda kapan saja.{" "}
                </>
              )}
            </p>
            <a
              href="https://unibookstore.daintyc.xyz/home"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              unibookstore.daintyc.xyz/home{" "}
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode Sumber Github"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2025" : "2025"}
            </p>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://prayer-times.daintyc.xyz/"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/prayer-times.png"
              alt="Prayer Times"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en"
                ? "Website Prayer Times"
                : "Situs Web Waktu Ibadah"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  {" "}
                  The Prayer Times website provides accurate and timely prayer
                  schedules. This platform is designed to help Muslims follow
                  prayer times easily and provides information about the nearest
                  mosques. We are committed to enhancing your worship experience
                  with reliable and user-friendly information.{" "}
                </>
              ) : (
                <>
                  {" "}
                  Website Prayer Times menyediakan informasi jadwal ibadah
                  secara akurat dan tepat waktu. Platform ini dirancang untuk
                  membantu umat Muslim dalam mengikuti waktu sholat dengan
                  mudah, serta menyediakan informasi tentang lokasi masjid
                  terdekat. Kami berkomitmen untuk membantu meningkatkan
                  pengalaman ibadah Anda dengan informasi yang terpercaya dan
                  ramah pengguna.{" "}
                </>
              )}
            </p>
            <a
              href="https://prayer-times.daintyc.xyz/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              prayer-times.daintyc.xyz{" "}
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode Sumber Github"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2025" : "2025"}
            </p>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://quiz.daintyc.xyz/"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/quiz.png"
              alt="Website Quiz"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en" ? "Website Quiz" : "Situs Web Quiz"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  {" "}
                  The Quiz website offers a variety of engaging and informative
                  quizzes designed to test your knowledge on various topics.
                  With an interactive and user-friendly interface, users can
                  learn while having fun. We also provide instant feedback and
                  assessments to help you better understand the topics being
                  tested.{" "}
                </>
              ) : (
                <>
                  {" "}
                  Website Quiz menawarkan berbagai kuis menarik dan informatif
                  yang dirancang untuk menguji pengetahuan Anda dalam berbagai
                  topik. Dengan antarmuka yang interaktif dan mudah digunakan,
                  pengguna dapat belajar sambil bersenang-senang. Kami juga
                  menyediakan umpan balik instan dan penilaian untuk membantu
                  Anda memahami lebih baik tentang topik yang diuji.{" "}
                </>
              )}
            </p>
            <a
              href="https://quiz.daintyc.xyz/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              quiz.daintyc.xyz{" "}
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode Sumber Github"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2025" : "2025"}
            </p>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://taskdash.daintyc.xyz/"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/taskdash.png"
              alt="Task Dash"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en" ? "Website - TaskDash" : "Situs Web TaskDash"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  {" "}
                  TaskDash is a task management application that helps users
                  organize and manage daily tasks. With an intuitive interface,
                  users can create task lists, set deadlines, and track their
                  progress. We are committed to enhancing your productivity with
                  efficient and easy-to-use solutions.{" "}
                </>
              ) : (
                <>
                  {" "}
                  TaskDash adalah aplikasi manajemen tugas yang membantu
                  pengguna dalam mengorganisir dan mengelola pekerjaan
                  sehari-hari. Dengan antarmuka yang intuitif, pengguna dapat
                  membuat daftar tugas, menetapkan tenggat waktu, dan melacak
                  kemajuan mereka. Kami berkomitmen untuk meningkatkan
                  produktivitas Anda dengan solusi yang efisien dan mudah
                  digunakan.{" "}
                </>
              )}
            </p>
            <a
              href="https://taskdash.daintyc.xyz/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              taskdash.daintyc.xyz{" "}
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode Sumber Github"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2025" : "2025"}
            </p>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://conveythesong.lyodraverse.xyz/"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/conveythesong.png"
              alt="Convey The Song"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en"
                ? "Website - Convey The Song"
                : "Situs Web - Convey The Song"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  {" "}
                  Convey The Song is a platform that provides information and
                  analysis about music, meanings, and context of various songs.
                  We aim to enhance your understanding and appreciation of music
                  by providing detailed and accessible resources.{" "}
                </>
              ) : (
                <>
                  {" "}
                  Convey The Song adalah platform yang memberikan informasi dan
                  analisis tentang musik, arti, dan konteks dari berbagai lagu.
                  Kami bertujuan untuk meningkatkan pemahaman dan apresiasi Anda
                  terhadap musik dengan menyediakan sumber daya yang mendetail
                  dan mudah diakses.{" "}
                </>
              )}
            </p>
            <a
              href="https://conveythesong.lyodraverse.xyz/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              conveythesong.lyodraverse.xyz{" "}
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode Sumber Github"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2025" : "2025"}
            </p>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://frontend-villaplace.vercel.app/"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/villaplace.png"
              alt="villaplace"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en" ? "Villaplace" : "Villaplace"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  {" "}
                  Villaplace is a platform designed to help users find and rent
                  vacation properties. With a variety of villas and
                  accommodations, users can choose a place that suits their
                  needs. We are committed to providing accurate and reliable
                  information for a pleasant holiday experience.
                </>
              ) : (
                <> Villaplace adalah platform yang dirancang untuk membantu pengguna menemukan dan menyewa properti liburan. Dengan berbagai pilihan villa dan akomodasi, pengguna dapat memilih tempat yang sesuai dengan kebutuhan mereka. Kami berkomitmen untuk memberikan informasi yang akurat dan terpercaya untuk pengalaman liburan yang menyenangkan.</>
              )}
            </p>
            <a
              href="https://frontend-villaplace.vercel.app/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              frontend-villaplace.vercel.app{" "}
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode Sumber Github"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2024" : "2024"}
            </p>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://nawasenasolo.com/"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/nawasena.png"
              alt="Nawasena Transport"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en"
                ? "Website Rental Mobil Nawasena"
                : "Situs Web Rental Mobil Nawasena"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  {" "}
                  Nawasena Transport is a car rental service that offers a
                  variety of high-quality vehicles at competitive prices. We are
                  committed to providing a comfortable and safe travel
                  experience for our customers. This website allows users to
                  browse through a range of available cars for rent, with
                  detailed information about features, and availability. We also
                  offer friendly customer service to assist with your
                  transportation needs at any time.{" "}
                </>
              ) : (
                <>
                  {" "}
                  Nawasena Transport adalah layanan penyewaan mobil yang
                  menawarkan berbagai pilihan kendaraan berkualitas dengan harga
                  yang kompetitif. Kami berkomitmen untuk memberikan pengalaman
                  perjalanan yang nyaman dan aman bagi pelanggan. Situs web ini
                  memudahkan pengguna untuk melihat berbagai jenis mobil yang
                  tersedia untuk disewa, dengan informasi lengkap mengenai
                  harga, fasilitas, dan ketersediaan. Kami juga menyediakan
                  layanan pelanggan yang ramah dan siap membantu kebutuhan
                  transportasi Anda kapan saja.{" "}
                </>
              )}
            </p>
            <a
              href="https://nawasenasolo.com/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              nawasenasolo.com{" "}
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode Sumber Github"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2024" : "2024"}
            </p>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://satgasppks.larorafluir.my.id/"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/ppks.png"
              alt="Satgas PPKS"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en"
                ? "Campus Project - Satgas PPKS Website"
                : "Proyek Kampus - Situs Satgas PPKS"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  This website was created with my friends for our campus
                  project. It aims to raise awareness and prevent cases of
                  sexual harassment. The platform provides resources,
                  information, and tools for individuals to understand the
                  importance of consent, respect, and how to identify and report
                  harassment. Through this project, we hope to contribute to a
                  safer and more respectful environment for everyone.
                </>
              ) : (
                <>
                  Situs ini dibuat bersama teman-teman untuk proyek kampus.
                  Situs ini bertujuan untuk meningkatkan kesadaran dan mencegah
                  kasus kekerasan seksual. Platform ini menyediakan sumber daya,
                  informasi, dan alat untuk individu agar memahami pentingnya
                  persetujuan, rasa hormat, serta cara mengidentifikasi dan
                  melaporkan kekerasan seksual. Melalui proyek ini, kami
                  berharap dapat berkontribusi pada terciptanya lingkungan yang
                  lebih aman dan penuh rasa hormat untuk semua.
                </>
              )}
            </p>

            <a
              href="https://satgasppks.larorafluir.my.id/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              satgasppks.larorafluir.my.id
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode sumber GitHub"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2024" : "2024"}
            </p>
          </div>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
          <a
            href="https://www.daintycube.my.id"
            target="_blank"
            className="w-full block h-full"
          >
            {isLoading && <Loader />}
            <img
              src="d/portfolio.png"
              alt="Portfolio"
              className="max-h-40 w-full object-cover"
              onLoad={imageLoaded}
            />
          </a>
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <h2 className="text-xl font-medium text-purple-500 dark:text-purple-300 pb-2">
              {language === "en" ? "Personal Portfolio" : "Portofolio Pribadi"}
            </h2>
            <p className="text-md text-gray-800 dark:text-white py-2">
              {language === "en" ? (
                <>
                  This website showcases my professional portfolio and projects
                  in detail. It highlights the work I have done across various
                  industries, demonstrating my skills in web development,
                  design, and problem-solving. Each project is presented with
                  comprehensive descriptions, technologies used, and the
                  challenges faced. Additionally, you will find links to my
                  GitHub repositories and a resume with detailed information
                  about my education, experience, and achievements.
                </>
              ) : (
                <>
                  Situs ini menampilkan portofolio profesional saya dan detail
                  proyek yang telah saya kerjakan. Situs ini menyoroti pekerjaan
                  yang telah saya lakukan di berbagai industri, menunjukkan
                  keterampilan saya dalam pengembangan web, desain, dan
                  pemecahan masalah. Setiap proyek disajikan dengan deskripsi
                  yang komprehensif, teknologi yang digunakan, serta tantangan
                  yang dihadapi. Selain itu, Anda akan menemukan tautan ke
                  repositori GitHub saya dan resume dengan informasi detail
                  mengenai pendidikan, pengalaman, dan pencapaian saya.
                </>
              )}
            </p>
            <a
              href="https://daintycube.my.id"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              daintycube.my.id
            </a>
            <br />
            <a
              href="https://github.com/rrdentin/"
              target="_blank"
              className="text-blue-500 hover:text-blue-300 italic"
            >
              {language === "en" ? "Github source code" : "Kode sumber GitHub"}
            </a>
            <p className="text-sm text-gray-900 dark:text-white italic my-2">
              {language === "en" ? "2024" : "2024"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
