"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const team = [
  {
    name: "Ірина Василевська",
    age: 28,
    interests: "UX‑дизайн, дослідження, скетчі",
    photo: "/image.png",
    role: "Дизайн сайта, концепт і структура",
  },
  {
    name: "Олександр Коваленко",
    age: 32,
    interests: "Next.js, DevOps, CI/CD",
    photo: "/image.png",
    role: "Розробка компонентів, налаштування хостингу",
  },
  {
    name: "Марія Петренко",
    age: 25,
    interests: "Контент, SEO, редагування",
    photo: "/image.png",
    role: "Підготовка текстів і SEO-оптимізація",
  },
];

export default function TeamPage() {
  return (
    <section>
      <h1 className="team-heading">Наша команда</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {team.map((member, idx) => (
          <SwiperSlide key={idx} className="fade-in">
            <Image
              src={member.photo}
              alt={member.name}
              width={150}
              height={150}
              className="team-photo"
            />
            <h3>
              {member.name}, {member.age}
            </h3>
            <p>
              <strong>Інтереси:</strong> {member.interests}
            </p>
            <p>
              <strong>Роль:</strong> {member.role}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
