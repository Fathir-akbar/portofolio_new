"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // state untuk Hello World text
  const greetings = [
    { text: "Hello World!", color: "#fa8231" },
    { text: "¡Hola Mundo!", color: "#fff" },
    { text: "こんにちは、世界", color: "#c678dd" },
    { text: "أَهْلًا وَسَهْلًا", color: "#a9b0bd" },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % greetings.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <main>
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 opacity-25 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md flex justify-between items-center px-6 py-4">
        <Link href="#hero" className="flex items-center">
          <Image
            src="/images/FTR.png"
            alt="Logo"
            width={32}
            height={32}
            className="dark:hidden"
          />
          <Image
            src="/images/FTR-WHITEMODE.png"
            alt="Logo Dark"
            width={32}
            height={32}
            className="hidden dark:block"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#hero" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="#project" className="hover:text-blue-500">
            Project
          </Link>
          <a href="#closing" className="hover:text-blue-500">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center text-center relative"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      >
        <h1 className="text-6xl font-bold mb-6">FTRMAN</h1>
        <div className="bg-black text-[#e4bb68] rounded px-4 py-2 font-mono">
          <span>
            System<span className="text-white">.</span>
            <span className="text-red-400">out</span>.
            <span className="text-sky-400">println</span>(
            <span
              style={{ color: greetings[idx].color }}
              className="transition-opacity"
            >
              &quot;{greetings[idx].text}&quot;
            </span>
            );
          </span>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Tentang Aku</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hallo! Aku Fathir Akbar, dan Aku adalah seorang pelajar yang suka
            banget belajar hal-hal tentang dunia IT, terutama seputar website,
            pemrograman, dan desain. Aku juga senang membantu orang lain dengan
            skill yang aku punya. Semangat berbagi dan belajar adalah bagian
            dari perjalanan hidupku!
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/FTRMAN.png"
            alt="FTRMAN"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-900"
      >
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="bg-white dark:bg-black px-4 py-2 rounded shadow">
            JavaScript
          </span>
          <span className="bg-white dark:bg-black px-4 py-2 rounded shadow">
            React
          </span>
          <span className="bg-white dark:bg-black px-4 py-2 rounded shadow">
            Next.js
          </span>
          <span className="bg-white dark:bg-black px-4 py-2 rounded shadow">
            Tailwind CSS
          </span>
          {/* Tambahkan skill lain */}
        </div>
      </section>

      {/* Project */}
      <section id="project" className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">My Project</h2>
        <p className="mb-8">Click to view</p>

        {/* Slider kiri */}
        <div className="overflow-hidden whitespace-nowrap mb-8">
          <div className="animate-slide-left inline-flex">
            {[1, 2, 3, 4, 5].map((n, i) => (
              <a key={i} href="#" target="_blank" className="relative mx-2">
                <Image
                  src={`/images/foto-${n}.png`}
                  alt={`Project ${n}`}
                  width={240}
                  height={140}
                  className="rounded-lg shadow-lg"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 hover:opacity-100 transition bg-black/50">
                  View
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Slider kanan */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-slide-right inline-flex">
            {[1, 2, 3, 4, 5].map((n, i) => (
              <a key={i} href="#" target="_blank" className="relative mx-2">
                <Image
                  src={`/images/foto-${n}.png`}
                  alt={`Project ${n}`}
                  width={240}
                  height={140}
                  className="rounded-lg shadow-lg"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 hover:opacity-100 transition bg-black/50">
                  View
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section id="closing" className="relative py-32 text-center text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-25"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/background-pixel.mp4" type="video/mp4" />
        </video>
        <h2 className="text-3xl font-bold mb-4">
          Bangun sesuatu yang luar biasa bersama kami!
        </h2>
        <p className="max-w-lg mx-auto mb-8 text-gray-200">
          Kami percaya bahwa setiap proyek adalah peluang untuk tumbuh bersama.
          Mari bekerja sama dan wujudkan ide Anda menjadi kenyataan!
        </p>
        <a
          href="mailto:gamingfr655@gmail.com"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          <Image src="/images/email.jpeg" alt="email" width={24} height={24} />
          Email Saya
        </a>
      </section>

      {/* Sosmed fixed */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col gap-4 z-50">
        {[
          { href: "https://www.instagram.com/ftr_ak4", icon: "instagram.jpeg" },
          { href: "https://github.com/Fathir-akbar", icon: "Github.jpeg" },
          { href: "mailto:fathir.akbar123321@gmail.com", icon: "email.jpeg" },
          { href: "https://www.kodein.sch.id/", icon: "logo-kodein-flat.png" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
          >
            <Image
              src={`/images/${s.icon}`}
              alt="sosmed"
              width={26}
              height={26}
            />
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>2025 © FTRMAN</p>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </main>
  );
}
