"use client";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaGithub, FaSlideshare, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-salehin-islam",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/mohammad.salehin.islam.27",
      icon: <FaFacebook className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/SALEHINISLAM",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "SlideShare",
      href: "https://www.slideshare.net/msionlinekingdom",
      icon: <FaSlideshare className="w-5 h-5" />,
    },
  ];

  return (
    <section className="bg-[#0F1816] py-20 px-6 pt-16" data-theme="dark">
      <div className="max-w-4xl mx-auto text-center">
        <Image
        src={"/assets/contactPage.png"}
        alt="This is Salehin"
        width={500}
        height={500}
        className="mx-auto mb-6"
        />
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">🤝 Let’s Connect</h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Thank you for stopping by my corner of the internet.  
          I truly value meaningful connections, heartfelt conversations,  
          and opportunities to create something impactful together.  
          Whether you want to collaborate, share ideas, or just say hello —  
          I’d be glad to hear from you.
        </p>

        {/* Email Highlight */}
        <div className="card bg-base-200 shadow-md mb-10">
          <div className="card-body items-center">
            <FaEnvelope className="w-6 h-6 text-primary mb-2" />
            <h3 className="font-semibold text-lg">Email Me</h3>
            <a
              href="mailto:msionlinekingdom@gmail.com"
              className="link link-accent text-sm mt-1"
            >
              msionlinekingdom@gmail.com
            </a>
            <p className="text-xs text-base-content/60 mt-2">
              Always open for collaboration and conversation.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center gap-2"
            >
              {s.icon}
              {s.name}
            </a>
          ))}
        </div>

        {/* Closing message */}
        <p className="text-sm text-base-content/70 italic">
          🌱 Life feels more meaningful when shared.  
          Let’s build, learn, and grow together.
        </p>
      </div>
    </section>
  );
}
