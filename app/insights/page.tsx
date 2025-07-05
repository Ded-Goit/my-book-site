/*const sections = [
  {
    number: 1,
    title: "Set the Table",
    insights: [
      "Clarity is the most important concept for personal productivity.",
      "To move from dreams to concrete steps, you need to clearly define what you want to achieve, write it down on paper, and set deadlines.",
    ],
  },
  {
    number: 2,
    title: "Plan Each Day in Advance",
    insights: [
      "All big goals seem unachievable only while they are whole.",
      "Break goals into small parts and do them step by step.",
      "Step-by-step planning saves two hours of wasted time.",
      "It is better to make a list the night before.",
    ],
  },
  {
    number: 3,
    title: "Apply the 80/20 Rule to Everything",
    insights: [
      "20% of efforts bring 80% of results.",
      "Focus on the most impactful tasks first.",
    ],
  },
  {
    number: 4,
    title: "Think About the Consequences",
    insights: [
      "Direct all your forces toward one specific direction.",
      "Vision of the long-term perspective helps you prioritize.",
      "Future-oriented focus makes sacrifices easier.",
    ],
  },
  {
    number: 5,
    title: "Engage in Creative Procrastination",
    insights: [
      "Postpone eating the smaller and prettier frogs.",
      "Do the hardest ones first.",
      "Choose at least one activity you can quit or postpone now.",
    ],
  },
  {
    number: 6,
    title: "Use the ABCD Method Consistently",
    insights: [
      "The First Law of Success - Concentration.",
      "Write your priorities down on paper.",
      "A - what you must do, and until it is completed, do not move on.",
      "Discipline of execution is the core principle of success.",
    ],
  },
  {
    number: 7,
    title: "Focus on Key Result Areas",
    insights: [
      "Identify the areas that determine your success.",
      "Concentrate your efforts on improving them.",
      "Regularly measure progress in these areas.",
      "Constantly ask: What results am I responsible for?",
    ],
  },
  {
    number: 8,
    title: "Use the Law of Three",
    insights: [
      "The 3 most important tasks are 90% of success.",
      "Determine your top priorities.",
      "Focus on them and delegate the rest.",
      "Balance must be found constantly and in everything.",
    ],
  },
  {
    number: 9,
    title: "Prepare Thoroughly Before You Begin",
    insights: [
      "Have everything ready before you start.",
      "Preparation reduces distraction.",
      "Preparation = effective concentration.",
    ],
  },
  {
    number: 10,
    title: "Move from Barrel to Barrel",
    insights: [
      "Take it one step at a time.",
      "It is better to complete one task at a time quickly and efficiently.",
      "Each completed step motivates you to move on.",
      "Progress is systematic, not a big leap.",
    ],
  },
  {
    number: 11,
    title: "Improve Your Key Skills",
    insights: [
      "Continuous learning is the minimum requirement for success.",
      "Everything is learnable.",
      "What others have learned, you can learn too.",
    ],
  },
  {
    number: 12,
    title: "Use Your Special Talents",
    insights: [
      "Successful people identify what they do best.",
      "Do what you love.",
      "Focus on areas where you have talent and passion.",
    ],
  },
  {
    number: 13,
    title: "Identify Key Obstacles",
    insights: [
      "Most limitations are internal.",
      "Honest self-analysis is essential.",
      "Act to remove barriers.",
    ],
  },
  {
    number: 14,
    title: "Push Yourself",
    insights: [
      "Personal responsibility and self-discipline are keys.",
      "Imaginary deadlines help overcome procrastination.",
      "Initiative unlocks your potential.",
    ],
  },
  {
    number: 15,
    title: "Maximize Your Personal Strengths",
    insights: [
      "Identify your strengths.",
      "Use them to achieve better results.",
      "Build your work around what you do best.",
    ],
  },
  {
    number: 16,
    title: "Motivate Yourself to Act",
    insights: [
      "Self-motivation and optimism are crucial.",
      "Look for the positive in every situation.",
      "Always think and talk about your goals.",
    ],
  },
  {
    number: 17,
    title: "Break Down Technology Slavery",
    insights: [
      "Think of technology as a servant, not a master.",
      "Filter irrelevant information.",
      "Arrange periods of information silence.",
      "Ask yourself: What is really important right now?",
    ],
  },
  {
    number: 18,
    title: "Break Tasks into Parts",
    insights: [
      "It’s easier to complete small parts.",
      "Procrastination happens because the task seems too big.",
      "Small victories create motivation.",
    ],
  },
  {
    number: 19,
    title: "Create Large Blocks of Time",
    insights: [
      "Important work needs long uninterrupted stretches.",
      "Set aside 60 - 90 minutes for deep focus.",
      "Appreciate every minute.",
    ],
  },
  {
    number: 20,
    title: "Develop a Sense of Urgency",
    insights: [
      "Productive people plan and then move immediately.",
      "Catch the energy to act now.",
      "Move confidently towards your goals.",
    ],
  },
  {
    number: 21,
    title: "Complete One Task at a Time",
    insights: [
      "Multitasking reduces efficiency.",
      "Focusing on one task improves quality.",
      "Real progress comes when you concentrate.",
    ],
  },
];*/
"use client";

import Image from "next/image";
import styles from "./insights.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";

const sections = [
  {
    number: 1,
    title: "Set the Table",
    insights: [
      "Clarity is the most important concept for personal productivity.",
      "To move from dreams to concrete steps, you need to clearly define what you want to achieve, write it down on paper, and set deadlines.",
    ],
  },
  {
    number: 2,
    title: "Plan Each Day in Advance",
    insights: [
      "All big goals seem unachievable only while they are whole.",
      "Break goals into small parts and do them step by step.",
      "Step-by-step planning saves two hours of wasted time.",
      "It is better to make a list the night before.",
    ],
  },
  {
    number: 3,
    title: "Apply the 80/20 Rule to Everything",
    insights: [
      "20% of efforts bring 80% of results.",
      "Focus on the most impactful tasks first.",
    ],
  },
  {
    number: 4,
    title: "Think About the Consequences",
    insights: [
      "Direct all your forces toward one specific direction.",
      "Vision of the long-term perspective helps you prioritize.",
      "Future-oriented focus makes sacrifices easier.",
    ],
  },
  {
    number: 5,
    title: "Engage in Creative Procrastination",
    insights: [
      "Postpone eating the smaller and prettier frogs.",
      "Do the hardest ones first.",
      "Choose at least one activity you can quit or postpone now.",
    ],
  },
  {
    number: 6,
    title: "Use the ABCD Method Consistently",
    insights: [
      "The First Law of Success - Concentration.",
      "Write your priorities down on paper.",
      "A - what you must do, and until it is completed, do not move on.",
      "Discipline of execution is the core principle of success.",
    ],
  },
  {
    number: 7,
    title: "Focus on Key Result Areas",
    insights: [
      "Identify the areas that determine your success.",
      "Concentrate your efforts on improving them.",
      "Regularly measure progress in these areas.",
      "Constantly ask: What results am I responsible for?",
    ],
  },
  {
    number: 8,
    title: "Use the Law of Three",
    insights: [
      "The 3 most important tasks are 90% of success.",
      "Determine your top priorities.",
      "Focus on them and delegate the rest.",
      "Balance must be found constantly and in everything.",
    ],
  },
  {
    number: 9,
    title: "Prepare Thoroughly Before You Begin",
    insights: [
      "Have everything ready before you start.",
      "Preparation reduces distraction.",
      "Preparation = effective concentration.",
    ],
  },
  {
    number: 10,
    title: "Move from Barrel to Barrel",
    insights: [
      "Take it one step at a time.",
      "It is better to complete one task at a time quickly and efficiently.",
      "Each completed step motivates you to move on.",
      "Progress is systematic, not a big leap.",
    ],
  },
  {
    number: 11,
    title: "Improve Your Key Skills",
    insights: [
      "Continuous learning is the minimum requirement for success.",
      "Everything is learnable.",
      "What others have learned, you can learn too.",
    ],
  },
  {
    number: 12,
    title: "Use Your Special Talents",
    insights: [
      "Successful people identify what they do best.",
      "Do what you love.",
      "Focus on areas where you have talent and passion.",
    ],
  },
  {
    number: 13,
    title: "Identify Key Obstacles",
    insights: [
      "Most limitations are internal.",
      "Honest self-analysis is essential.",
      "Act to remove barriers.",
    ],
  },
  {
    number: 14,
    title: "Push Yourself",
    insights: [
      "Personal responsibility and self-discipline are keys.",
      "Imaginary deadlines help overcome procrastination.",
      "Initiative unlocks your potential.",
    ],
  },
  {
    number: 15,
    title: "Maximize Your Personal Strengths",
    insights: [
      "Identify your strengths.",
      "Use them to achieve better results.",
      "Build your work around what you do best.",
    ],
  },
  {
    number: 16,
    title: "Motivate Yourself to Act",
    insights: [
      "Self-motivation and optimism are crucial.",
      "Look for the positive in every situation.",
      "Always think and talk about your goals.",
    ],
  },
  {
    number: 17,
    title: "Break Down Technology Slavery",
    insights: [
      "Think of technology as a servant, not a master.",
      "Filter irrelevant information.",
      "Arrange periods of information silence.",
      "Ask yourself: What is really important right now?",
    ],
  },
  {
    number: 18,
    title: "Break Tasks into Parts",
    insights: [
      "It’s easier to complete small parts.",
      "Procrastination happens because the task seems too big.",
      "Small victories create motivation.",
    ],
  },
  {
    number: 19,
    title: "Create Large Blocks of Time",
    insights: [
      "Important work needs long uninterrupted stretches.",
      "Set aside 60 - 90 minutes for deep focus.",
      "Appreciate every minute.",
    ],
  },
  {
    number: 20,
    title: "Develop a Sense of Urgency",
    insights: [
      "Productive people plan and then move immediately.",
      "Catch the energy to act now.",
      "Move confidently towards your goals.",
    ],
  },
  {
    number: 21,
    title: "Complete One Task at a Time",
    insights: [
      "Multitasking reduces efficiency.",
      "Focusing on one task improves quality.",
      "Real progress comes when you concentrate.",
    ],
  },
];

export default function MethodsPage() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Book Sections & Insights</h1>

      <div className={styles.sliderWrapper}>
        <button ref={prevRef} className={styles.navButton}>
          <FaChevronLeft />
        </button>

        <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={1}
          centeredSlides
          spaceBetween={40}
          loop
          speed={600}
          scrollbar={{
            draggable: true,
            hide: false,
            snapOnRelease: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={styles.swiperContainer}
        >
          {sections.map((section, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.slideCard}>
                <div className={styles.cardHeader}>
                  <h3>
                    {section.number}. {section.title}
                  </h3>
                </div>
                <ul>
                  {section.insights.map((insight, j) => (
                    <li key={j}>{insight}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className={styles.navButton}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.frogImageWrapper}>
        <Image
          src="/frogs/telefon_frog.webp"
          alt="Telefon Frog"
          width={300}
          height={300}
          className={styles.frogImage}
          priority
        />
      </div>
    </section>
  );
}
