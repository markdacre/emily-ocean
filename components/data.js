/* global React */
const { useState, useEffect } = React;

const DATA = {
  nav: [
    { label: "Services", href: "#services" },
    { label: "The process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Certified personal training · in person + online",
    titleA: "Find your",
    titleB: "current.",
    titleC: "Move with it.",
    sub: "I'm Emily — a certified trainer who helps you move better, hurt less, and get back to the things you love. Older adults, chronic pain, post-injury rehab, or just ready for something steadier. Your plan is built around your body, your history, and the shore you're swimming toward.",
    primaryCta: { label: "Book a free 20-min call", href: "#contact" },
    secondaryCta: {
      label: "Message me on WhatsApp",
      href: "https://wa.me/351914163402",
    },
    photo: "assets/photos/emily-yoga-stretch.jpeg",
    stats: [
      { value: "10+ yrs", label: "specializing in recovery" },
      { value: "200+", label: "clients coached" },
      { value: "10 certs", label: "industry-recognized" },
    ],
  },
  services: [
    {
      eyebrow: "In person · 60 min",
      title: "1:1 in the studio",
      body: "An hour with me in my fully-equipped private studio. Hands-on cueing, manual recovery work, and a program that changes as you do. Best for clients rebuilding after injury or surgery.",
      photo: "assets/photos/emily-foam-roll-bench.jpg",
      tag: "Most booked",
      tagKind: "tide",
    },
    {
      eyebrow: "Online · 45 min live",
      title: "Online coaching",
      body: "We meet on video. I write your program, watch you move, adjust on the fly, and check in between sessions. A good fit if you're not local, traveling often, or you prefer training at home.",
      photo: "assets/photos/emily-park-stretch.jpg",
      tag: "Anywhere",
      tagKind: "foam",
    },
    {
      eyebrow: "In person · 45 min",
      title: "Manual recovery",
      body: "Massage-gun work, assisted foam rolling, guided mobility. Standalone, or a natural add-on to 1:1 training. Book it after a hard week or the day before a long travel day.",
      photo: "assets/photos/emily-massage-gun-back.jpg",
      tag: "Recovery",
      tagKind: "sand",
    },
  ],
  process: [
    {
      n: "01",
      label: "Wade in",
      title: "We talk.",
      body: "A free 20-minute call. You tell me what's going on — the injury, the pain, the thing you miss doing. I listen, ask a lot of questions, and tell you honestly whether I'm the right person to help.",
      photo: "assets/photos/emily-massage-gun-foot.jpg",
    },
    {
      n: "02",
      label: "Set the course",
      title: "We build your plan.",
      body: "I write a program specifically for your body, your history, and your goal. Not a template. If you've been told to 'just be careful' or 'stop doing the thing you love', we start there — and we work back toward it.",
      photo: "assets/photos/hamstring-assist.jpg",
    },
    {
      n: "03",
      label: "Swim it out",
      title: "We get to work.",
      body: "We train together, in the studio or online. I adjust the plan week by week based on what your body is telling us. My job is to make you more capable than you were — and to get out of your way once you are.",
      photo: "assets/photos/emily-foam-roll-bench.jpg",
    },
  ],
  video: {
    src: "assets/video/epowered-fitness.mp4",
    poster: "assets/photos/emily-massage-gun-back.jpg",
  },
  about: {
    name: "Emily Gregg",
    title: "Certified personal trainer · Recovery specialist",
    bio: "I've spent over a decade coaching people of every age and ability — athletes, busy parents, folks rebuilding after surgery, and anyone who wants to get stronger without getting hurt. My training is precise, adaptable, and stubbornly patient. The goal is always the same: make you more capable in your own life.",
    credentials: [
      {
        issuer: "National Academy of Sports Medicine (NASM)",
        items: [
          "Certified Personal Trainer (CPT)",
          "Corrective Exercise Specialist (CES)",
          "Performance Enhancement Specialist (PES)",
        ],
      },
      {
        issuer: "Paul Chek Institute",
        items: ["Holistic Lifestyle Coach", "Scientific Core Conditioner"],
      },
      {
        issuer: "First aid",
        items: ["CPR/AED certified — current, 21 years running"],
      },
      {
        issuer: "Additional training",
        items: [
          "TRX Suspension Trainer",
          "TRX Ripped Trainer",
          "Jillian Michaels' Body Shred",
          "Schwinn Cycle Certification",
        ],
      },
    ],
    photo: "assets/photos/emily-box-seated.jpg",
  },
  testimonials: [
    {
      quote:
        "Emily is the first trainer who actually listened to me about my knee. Six months in and I\u2019m back to hiking with my grandkids.",
      name: "Marianne",
      context: "Post-meniscus-repair · 8 months with Emily",
      initial: "M",
    },
    {
      quote:
        "I came to Emily terrified of re-injuring my back. She moved at exactly my pace and never once made me feel fragile. I feel stronger at 61 than I did at 45.",
      name: "David",
      context: "Chronic low-back pain · 2 years with Emily",
      initial: "D",
    },
    {
      quote:
        "After my shoulder surgery my PT discharged me and I had no idea what to do next. Emily bridged that gap. I\u2019m back to swimming laps — which feels poetic.",
      name: "Priya",
      context: "Post-rotator-cuff repair · 1 year with Emily",
      initial: "P",
    },
  ],
  contact: {
    calendly: "https://calendly.com/me-emilygreggfitness",
    whatsapp: "https://wa.me/351914163402",
    instagram: "https://www.instagram.com/emilygreggfitness/",
    email: "me@emilygreggfitness.com",
    phone: "+351 914 163 402",
  },
};

window.DATA = DATA;
