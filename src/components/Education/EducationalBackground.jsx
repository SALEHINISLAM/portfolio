"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function EducationalBackground() {
  const translations = useMemo(
    () => ({
      en: {
        title: "🎓 Educational Background",
        subtitle:
          "A snapshot of my academic journey — the institutions I studied at and the milestones I achieved.",
        exams: [
          {
            year: "2021",
            exam: "Higher-Secondary School Certificate (HSC)",
            result: "GPA 5.00",
            institute: "Notre Dame College",
            department: "Science",
            board: "Dhaka",
          },
          {
            year: "2019",
            exam: "Secondary School Certificate (SSC)",
            result: "GPA 5.00",
            institute: "Armanitola Government High School",
            department: "Science",
            board: "Dhaka",
          },
          {
            year: "2016",
            exam: "Junior School Certificate (JSC)",
            result: "GPA 5.00",
            institute: "Islamia Government High School",
            department: "General",
            board: "Dhaka",
          },
          {
            year: "2013",
            exam: "Primary Education Certificate (PEC)",
            result: "GPA 5.00",
            institute: "Goljarbag Government Primary School",
            department: "General",
            board: "Dhaka",
          },
        ],
        institutions: [
          {
            institution:
              "Bangladesh University of Engineering & Technology (BUET)",
            logo: "/assets/buet.png",
            class: "BSc in Civil Engineering (Ongoing)",
          },
          {
            institution: "Armanitola Government High School",
            logo: "/assets/aghs.jpg",
            class: "class 09 to class 10",
          },
          {
            institution: "Islamia Government High School",
            logo: "/assets/ighs.jpg",
            class: "class 06 to class 08",
          },
          {
            institution: "Goljarbag Government Primary School",
            logo: "/assets/ggps.jpg",
            class: "Class 02 to Class 05",
          },
          {
            institution: "Green Heaven Kindergarten",
            logo: "/assets/noImage.jpg",
            class: "Nursery to class 01",
          },
        ],
        labels: {
          exams: "Exams & Results",
          institutions: "Institutions",
          year: "Year",
          exam: "Exam",
          result: "Result",
          institute: "Institute",
          department: "Department",
          board: "Board",
        },
      },
      bn: {
        title: "🎓 শিক্ষাগত যোগ্যতা",
        subtitle:
          "আমার একাডেমিক যাত্রার সংক্ষিপ্ত পরিচয় — যেসব প্রতিষ্ঠানে পড়েছি এবং অর্জিত মাইলফলক।",
        exams: [
          {
            year: "২০২১",
            exam: "উচ্চ মাধ্যমিক স্কুল সার্টিফিকেট (এইচএসসি)",
            result: "GPA ৫.০০",
            institute: "নটর ডেম কলেজ",
            department: "বিজ্ঞান",
            board: "ঢাকা",
          },
          {
            year: "২০১৯",
            exam: "মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)",
            result: "GPA ৫.০০",
            institute: "আরমানিটোলা সরকারি উচ্চ বিদ্যালয়",
            department: "বিজ্ঞান",
            board: "ঢাকা",
          },
          {
            year: "২০১৬",
            exam: "জুনিয়র স্কুল সার্টিফিকেট (জেএসসি)",
            result: "GPA ৫.০০",
            institute: "ইসলামিয়া সরকারি উচ্চ বিদ্যালয়",
            department: "সাধারণ",
            board: "ঢাকা",
          },
          {
            year: "২০১৩",
            exam: "প্রাথমিক শিক্ষা সমাপনী (পিইসি)",
            result: "GPA ৫.০০",
            institute: "গোলজারবাগ সরকারি প্রাথমিক স্কুল",
            department: "সাধারণ",
            board: "ঢাকা",
          },
        ],
        institutions: [
          {
            institution: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (বুয়েট)",
            logo: "/assets/buet.png",
            class: "সিভিল ইঞ্জিনিয়ারিং-এ বিএসসি (চলমান)",
          },
          {
            institution: "আরমানিটোলা সরকারি উচ্চ বিদ্যালয়",
            logo: "/assets/aghs.jpg",
            class: "নবম থেকে দশম শ্রেণি",
          },
          {
            institution: "ইসলামিয়া সরকারি উচ্চ বিদ্যালয়",
            logo: "/assets/ighs.jpg",
            class: "ষষ্ঠ থেকে অষ্টম শ্রেণি",
          },
          {
            institution: "গোলজারবাগ সরকারি প্রাথমিক স্কুল",
            logo: "/assets/ggps.jpg",
            class: "দ্বিতীয় থেকে পঞ্চম শ্রেণি",
          },
          {
            institution: "গ্রিন হ্যাভেন কিন্ডারগার্টেন",
            logo: "/assets/noImage.jpg",
            class: "নার্সারি থেকে প্রথম শ্রেণি",
          },
        ],
        labels: {
          exams: "পরীক্ষা ও ফলাফল",
          institutions: "প্রতিষ্ঠান",
          year: "বছর",
          exam: "পরীক্ষা",
          result: "ফলাফল",
          institute: "প্রতিষ্ঠান",
          department: "বিভাগ",
          board: "বোর্ড",
        },
      },
    }),
    []
  );

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setLanguage(currentLang.startsWith("bn") ? "bn" : currentLang);

    const observer = new MutationObserver(() => {
      const l = document.documentElement.lang || "en";
      setLanguage(l.startsWith("bn") ? "bn" : l);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  const t = translations[language];

  return (
    <section id="education" className="bg-base-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight">{t.title}</h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </header>

        {/* Institutions Timeline */}
        <h3 className="text-2xl font-semibold mb-6 text-center">
          {t.labels.institutions}
        </h3>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-12">
          {t.institutions.map((inst, idx) => (
            <li key={idx}>
              {idx !== 0 && <hr />}
              <div className="timeline-middle">
                <Image
                  src={inst.logo}
                  width={60}
                  height={60}
                  alt="institution logo"
                  className="rounded-full border shadow-sm"
                />
              </div>
              <div
                className={`${
                  idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
                } mb-10`}
              >
                <div className="card bg-base-200 shadow-sm">
                  <div className="card-body p-5">
                    <h4 className="font-bold text-lg">{inst.institution}</h4>
                    <p className="text-base-content/70">{inst.class}</p>
                  </div>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>

        {/* Exams Table */}
        <h3 className="text-2xl font-semibold mb-6 text-center">
          {t.labels.exams}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>{t.labels.year}</th>
                <th>{t.labels.exam}</th>
                <th>{t.labels.result}</th>
                <th>{t.labels.institute}</th>
                <th>{t.labels.department}</th>
                <th>{t.labels.board}</th>
              </tr>
            </thead>
            <tbody>
              {t.exams.map((exam, i) => (
                <tr key={i}>
                  <td>{exam.year}</td>
                  <td>{exam.exam}</td>
                  <td>{exam.result}</td>
                  <td>{exam.institute}</td>
                  <td>{exam.department}</td>
                  <td>{exam.board}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center text-base-content/70 mt-8">
        Don't know what next? But I want to move forward, learn, and grow!
      </p>
    </section>
  );
}
