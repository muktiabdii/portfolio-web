import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "WeaveOn: AI-Powered Child Development App",
    role: "Mobile Developer",
    description:
      "An AI-powered Android app that helps parents understand children with autism through emotion based activity analysis, awarded 1st place at the Hology Software Development competition.",
    coverImage: "/images/weaveon-cover-4.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Parents of children with autism often struggle to identify their child’s interests and potential due to limited tools that provide objective and structured insights.",
      purpose:
        "This project aims to assist parents by leveraging facial emotion recognition to analyze children’s responses during activities and provide meaningful insights into their interests and development.",
    },

    responsibilities: [
      "Developed the entire Android application using Jetpack Compose",
      "Implemented authentication flow and local login persistence",
      "Built and integrated AI-based facial emotion recognition system",
      "Designed and developed backend API using FastAPI for AI processing",
      "Handled end-to-end integration between mobile app, backend, and AI services",
    ],

    techStack: {
      frontend: ["Kotlin", "Jetpack Compose"],
      backend: ["FastAPI", "Firebase Cloud Functions"],
      tools: [
        "Cloudinary",
        "Android Studio",
        "GitHub",
        "Figma",
        "Postman",
        "Railway",
      ],
      ai: ["Facial Emotion Recognition (FER)"],
    },

    keyFeatures: [
      {
        title: "Wevy",
        description:
          "Analyzes children’s facial expressions during activities to identify emotional responses and potential interests.",
        icon: "😊",
      },
      {
        title: "Exercise",
        description:
          "Provides categorized activities tailored to different developmental aspects such as logic, art, motor skills, and social interaction.",
        icon: "🎯",
      },
      {
        title: "Report",
        description:
          "Displays summarized emotion analysis results in graphical form to help parents understand patterns and dominant interests.",
        icon: "📊",
      },
    ],

    screenshots: [
      {
        url: "/images/weaveon/ui-1.png",
        caption:
          "Onboarding screens introducing WeaveOn and guiding parents through initial setup.",
      },
      {
        url: "/images/weaveon/ui-2.png",
        caption:
          "Home and report screens displaying activity summaries and emotion-based development insights.",
      },
      {
        url: "/images/weaveon/ui-3.png",
        caption:
          "Exercise feature offering structured activities to support children’s skill development.",
      },
      {
        url: "/images/weaveon/ui-4.png",
        caption:
          "Wevy feature utilizing AI to analyze children’s facial expressions during activities.",
      },
    ],

    challenges: [
      {
        challenge:
          "Managing user authentication state to ensure users remain logged in across app sessions.",
        learning:
          "Learned to implement local storage mechanisms for session persistence in Android applications.",
      },
      {
        challenge:
          "Building an AI system based on an existing model and adapting it for real time emotion analysis.",
        learning:
          "Gained hands-on experience modifying a facial emotion recognition model and calculating emotion results per frame.",
      },
      {
        challenge:
          "Designing and deploying a backend API to handle AI processing.",
        learning:
          "Learned how to build and expose AI services using FastAPI and integrate them with a mobile application.",
      },
      {
        challenge:
          "Developing the entire application independently within a limited timeframe.",
        learning:
          "Improved end-to-end development skills, from UI slicing and state management to backend and AI integration.",
      },
    ],

    outcome: {
      type: "🏆 Competition Achievement",
      metrics: [
        "🥇 Awarded 1st Place at Hology Software Development Competition",
        "📱 Successfully delivered a functional AI-powered Android application",
        "🔗 Demonstrated end-to-end mobile, backend, and AI integration",
      ],
    },

    futureImprovements: [
      "Conduct usability testing with parents and caregivers to validate user experience",
      "Improve emotion recognition accuracy through model tuning and dataset expansion",
      "Add offline support for areas with limited internet connectivity",
      "Implement user analytics to track feature usage and engagement",
      "Expand platform support to include iOS and web dashboard for parents",
    ],
  },
  {
    id: 2,
    title: "SwaraIbu: AI-Powered Voice Based Mental Health Support for Mothers",
    role: "Mobile Developer",
    description:
      "An AI-powered mobile application that analyzes voice input to detect emotional distress in postpartum mothers and provide early mental health support, awarded 1st place at the SLASHCOM Hackathon.",
    coverImage: "/images/swaraibu-cover-2.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Postpartum depression often goes undetected due to limited emotional support, low awareness of early symptoms, and the absence of accessible mental health tools for mothers.",
      purpose:
        "SwaraIbu aims to provide early emotional support by analyzing voice input to detect stress and critical conditions, enabling timely intervention and companion involvement.",
    },

    responsibilities: [
      "Developed the AI crisis check API for detecting emotional distress from voice input",
      "Integrated AI analysis results into the mobile application workflow",
      "Implemented Gemini AI integration on the mobile app for personalized responses",
      "Collaborated with backend and mobile developers during a fully remote hackathon",
    ],

    techStack: {
      frontend: ["Kotlin", "Jetpack Compose"],
      backend: ["FastAPI", "Firebase Cloud Functions"],
      tools: ["Android Studio", "GitHub", "Figma", "Postman", "Railway"],
      ai: [
        "Speech-to-Text (Whisper)",
        "Semantic Crisis Detection (Sentence-BERT)",
        "Voice Emotion & Stress Classification",
        "Audio Feature Extraction (MFCC & Spectrogram)",
        "Gemini AI Integration",
      ],
    },

    keyFeatures: [
      {
        title: "Voice Emotion Analysis",
        description:
          "Analyzes voice input to detect emotional stress and potential mental health risks in postpartum mothers.",
        icon: "🎙️",
      },
      {
        title: "Emergency Alert System",
        description:
          "Triggers alerts and critical warnings when high risk emotional states are detected.",
        icon: "🚨",
      },
      {
        title: "Mood Tracking",
        description:
          "Tracks emotional changes over time to help users and companions understand mental health patterns.",
        icon: "📈",
      },
      {
        title: "Companion Access Mode",
        description:
          "Allows trusted companions or family members to view summarized emotional conditions.",
        icon: "🤝",
      },
    ],

    screenshots: [
      {
        url: "/images/swaraibu/ui-1.png",
        caption:
          "Mother’s dashboard showing AI voice recording, analysis results, and emotional history.",
      },
      {
        url: "/images/swaraibu/ui-2.png",
        caption:
          "Companion dashboard with verification flow and summarized emotional insights.",
      },
    ],

    challenges: [
      {
        challenge:
          "Developing and deploying a machine learning API for the first time within a tight hackathon timeline.",
        learning:
          "Learned the fundamentals of deploying AI-based APIs and handling model inference through backend services.",
      },
      {
        challenge:
          "Designing a crisis detection mechanism using pre trained NLP models without fine tuning, under a tight hackathon timeline.",
        learning:
          "Learned how to adapt pre trained models with domain specific datasets, semantic similarity thresholds, and text normalization to detect crisis conditions effectively.",
      },
      {
        challenge:
          "Coordinating development during a fully remote hackathon while simultaneously preparing for KKN deployment.",
        learning:
          "Improved remote collaboration, time management, and task prioritization under pressure.",
      },
    ],

    outcome: {
      type: "🏆 Hackathon Achievement",
      metrics: [
        "🥇 Awarded 1st Place at SLASHCOM Hackathon",
        "🎤 Delivered a functional voice based AI mental health prototype",
        "🤖 Successfully integrated AI APIs with a mobile application",
      ],
    },

    futureImprovements: [
      "Improve voice emotion detection accuracy through expanded and more diverse audio datasets",
      "Conduct usability testing with postpartum mothers and mental health professionals",
      "Enhance AI deployment stability and scalability for real-world usage",
      "Integrate wearable or sensor-based data for more comprehensive stress detection",
      "Add multilingual support to reach a wider range of users",
    ],
  },
  {
    id: 3,
    title: "EasyGo: Accessible Places Web Platform",
    role: "Backend Developer",
    description:
      "A web based platform that enables users to discover, review, and communicate about disability friendly public facilities to support inclusive mobility.",
    coverImage: "/images/easygo-cover.png",
    category: "Web Development",

    overview: {
      problem:
        "People with disabilities often lack reliable information about the accessibility of public facilities, making mobility and daily activities challenging.",
      purpose:
        "EasyGo aims to provide a centralized platform where users can access accessibility information, share reviews, and communicate with others to support inclusive public spaces.",
    },

    responsibilities: [
      "Designed and developed RESTful APIs using Laravel for the entire backend system",
      "Implemented authentication and authorization mechanisms",
      "Developed a real time chat feature using Laravel broadcasting",
      "Integrated MySQL as the primary database",
      "Handled API validation, error handling, and endpoint testing using Postman",
    ],

    techStack: {
      frontend: ["Next.js", "Typescript"],
      backend: ["Laravel", "MySQL"],
      tools: [
        "VSCode",
        "GitHub",
        "Figma",
        "Postman",
        "Websockets",
        "Vercel",
        "Railway",
      ],
    },

    keyFeatures: [
      {
        title: "Accessibility Based Place Discovery",
        description:
          "Allows users to find public facilities with detailed accessibility information.",
        icon: "🧭",
      },
      {
        title: "Ratings & Reviews",
        description:
          "Enables users to share experiences and rate accessibility of facilities.",
        icon: "⭐",
      },
      {
        title: "Community Reports",
        description:
          "Supports user submitted reports on accessibility conditions in public spaces.",
        icon: "📝",
      },
      {
        title: "Real Time Chat",
        description:
          "Provides direct communication between users through real time messaging.",
        icon: "💬",
      },
      {
        title: "Interactive Map Integration",
        description:
          "Visualizes accessible locations using map based exploration.",
        icon: "🗺",
      },
    ],

    screenshots: [
      {
        url: "/images/easygo/ui-1.png",
        caption:
          "Interactive map view displaying accessible public facilities.",
      },
      {
        url: "/images/easygo/ui-2.png",
        caption:
          "Detailed place information with accessibility features and ratings.",
      },
      {
        url: "/images/easygo/ui-3.png",
        caption: "User comments and reviews sharing accessibility experiences.",
      },
      {
        url: "/images/easygo/ui-4.png",
        caption: "Real time chat interface for user-to-user communication.",
      },
    ],

    challenges: [
      {
        challenge:
          "Building a complete backend system for a web application for the first time.",
        learning:
          "Gained a strong understanding of backend architecture, API design, and system integration beyond basic CRUD operations.",
      },
      {
        challenge:
          "Implementing real time chat functionality using a subscribe based communication model.",
        learning:
          "Learned the fundamentals of real time systems and event driven communication in web applications.",
      },
      {
        challenge:
          "Designing data models using a relational database for a feature rich application.",
        learning:
          "Improved skills in structuring and managing data efficiently with MySQL.",
      },
    ],

    outcome: {
      type: "🎓 Academic Project",
      metrics: [
        "✅ Delivered a fully functional backend supporting all core platform features",
        "🔌 Implemented real time communication between users",
        "🧩 Served as a foundation for advanced backend development skills",
      ],
    },

    futureImprovements: [
      "Implement WebSocket based communication for improved real time chat performance",
      "Add notification features for new reviews, messages, or reports",
      "Introduce OAuth based authentication for easier user access",
      "Develop an admin analytics dashboard for accessibility insights",
      "Enhance scalability and security for production deployment",
    ],
  },
  {
    id: 4,
    title: "Sentinel: Blockchain Based Marketplace",
    role: "Backend Developer",
    description:
      "A web based platform that handles secure transactions and verification processes through payment gateway integration and blockchain based validation.",
    coverImage: "/images/sentinel-cover-2.png",
    category: "Web Development",

    overview: {
      problem:
        "Digital transaction systems often face challenges in ensuring secure payments, transparent verification, and reliable record tracking, especially when integrating emerging technologies like blockchain.",
      purpose:
        "Sentinel aims to provide a secure and reliable transaction platform by combining conventional payment gateways with blockchain based verification mechanisms.",
    },

    responsibilities: [
      "Developed backend services using Express.js for handling core application logic",
      "Integrated Midtrans payment gateway for secure and reliable transaction processing",
      "Designed and implemented payment flow validation and callback handling",
      "Collaborated with blockchain developers to align API contracts and data flow",
      "Handled environment configuration, API testing, and debugging during development",
    ],

    techStack: {
      frontend: ["Next.js", "Typescript"],
      backend: ["Express.js", "PostgreSQL"],
      tools: [
        "VSCode",
        "Midtrans",
        "Ethereum",
        "Postman",
        "GitHub",
        "Figma",
        "Vercel",
        "Railway",
      ],
    },

    keyFeatures: [
      {
        title: "Secure Payment Processing",
        description:
          "Handles online payments using Midtrans with proper validation, callbacks, and transaction status handling.",
        icon: "💳",
      },
      {
        title: "Transaction Verification",
        description:
          "Ensures each transaction is properly verified before being processed further in the system.",
        icon: "🔐",
      },
      {
        title: "Blockchain Based Validation",
        description:
          "Supports integration with blockchain components to provide transparent and immutable verification records.",
        icon: "⛓",
      },
      {
        title: "Transaction History",
        description:
          "Stores and manages transaction records for traceability and auditing purposes.",
        icon: "📄",
      },
    ],

    screenshots: [
      {
        url: "/images/sentinel/ui-1.png",
        caption: "Product listing page displaying all available items.",
      },
      {
        url: "/images/sentinel/ui-2.png",
        caption:
          "Detailed product view with transaction and verification information.",
      },
      {
        url: "/images/sentinel/ui-3.png",
        caption:
          "Warranty detail page showing ownership and verification status.",
      },
    ],

    challenges: [
      {
        challenge:
          "Using Express.js for backend development for the first time in a real project.",
        learning:
          "Gained foundational understanding of Express.js architecture, routing, and middleware usage.",
      },
      {
        challenge:
          "Integrating Midtrans payment gateway with proper transaction flow and callback handling.",
        learning:
          "Learned how real world payment gateways work, including payment status handling, security considerations, and API integration.",
      },
    ],

    outcome: {
      type: "🎓 Academic Project",
      metrics: [
        "✅ Successfully implemented a working payment gateway integration using Midtrans",
        "🔗 Connected backend services with blockchain based verification components",
        "🧠 Strengthened backend fundamentals in Node.js and Express.js",
      ],
    },

    futureImprovements: [
      "Enhance payment security with additional verification layers and fraud detection",
      "Implement comprehensive logging and monitoring for transaction activities",
      "Add automated testing for payment and verification workflows",
      "Improve scalability and error handling for production level deployment",
      "Provide an admin dashboard for transaction analytics and monitoring",
    ],
  },
  {
    id: 5,
    title: "PrediAI: AI-Powered Diabetes Early Detection App",
    role: "Product Manager",
    description:
      "An AI-powered mobile application for early diabetes risk detection through nail and tongue image analysis, selected as a finalist at GEMASTIK XVIII.",

    coverImage: "/images/prediai-cover.png",
    category: "Product Management",

    overview: {
      problem:
        "Diabetes cases in Indonesia continue to rise, while access to early screening remains limited, costly, and often invasive, especially in remote areas.",
      purpose:
        "PrediAI aims to provide an accessible, non-invasive, and affordable early screening tool using AI-based image analysis to support diabetes prevention and awareness.",
    },

    responsibilities: [
      "Led the product development process from ideation to final submission",
      "Authored the full project proposal and scientific paper from scratch",
      "Coordinated cross functional collaboration between AI, mobile, and design teams",
      "Managed project timeline, scope, and deliverables throughout the competition",
      "Handled intellectual property (HKI) documentation and submission process",
      "Produced and directed the product demo and competition presentation video",
    ],

    techStack: {
      frontend: ["Kotlin", "Jetpack Compose"],
      backend: ["FastAPI", "Firebase Cloud Functions"],
      tools: [
        "Google Maps API",
        "YouTube API",
        "GitHub",
        "Figma",
        "Android Studio",
        "Postman",
        "Railway",
      ],
      ai: [
        "Convolutional Neural Network (CNN)",
        "MobileNetV2",
        "TensorFlow",
        "Gemini AI",
      ],
    },

    keyFeatures: [
      {
        title: "Image-Based Diabetes Screening",
        description:
          "Detects early diabetes risk through AI analysis of nail and tongue images using deep learning models.",
        icon: "🖼️",
      },
      {
        title: "Health History Tracking",
        description:
          "Stores and visualizes screening history to help users monitor long-term risk trends.",
        icon: "📊",
      },
      {
        title: "AI Health Assistant",
        description:
          "Provides personalized health insights and guidance using a Gemini-powered AI assistant.",
        icon: "🤖",
      },
      {
        title: "Nearby Healthcare Discovery",
        description:
          "Helps users find nearby doctors and healthcare facilities using map-based services.",
        icon: "📍",
      },
      {
        title: "Health Reminders & Scheduling",
        description:
          "Allows users to set reminders for health checkups and lifestyle routines.",
        icon: "⏰",
      },
    ],

    screenshots: [
      {
        url: "/images/prediai/ui-1.png",
        caption:
          "Authentication flow and homepage providing access to core features.",
      },
      {
        url: "/images/prediai/ui-2.png",
        caption: "Diabetes screening feature using AI-based image analysis.",
      },
      {
        url: "/images/prediai/ui-3.png",
        caption:
          "Screening history, lab information, and visual health analytics.",
      },
    ],

    challenges: [
      {
        challenge:
          "Creating a complete project proposal independently for the first time, from problem definition to technical and business analysis.",
        learning:
          "Developed strong skills in structured problem framing, proposal writing, and aligning technical solutions with real world needs.",
      },
      {
        challenge:
          "Writing a scientific paper while coordinating ongoing product development.",
        learning:
          "Learned how to translate technical implementations into formal academic documentation.",
      },
    ],

    outcome: {
      type: "🏆 National Competition Recognition",
      metrics: [
        "🎯 Selected as a Finalist at GEMASTIK XVIII",
        "📄 Delivered a complete proposal, academic paper, and working prototype",
        "📱 Achieved high usability with an SUS score of 82.5 (Excellent)",
      ],
    },

    futureImprovements: [
      "Conduct clinical validation with healthcare institutions to strengthen medical reliability",
      "Expand training datasets to improve AI accuracy across diverse demographics",
      "Add offline preprocessing support to reduce dependency on internet connectivity",
      "Integrate with national healthcare systems or telemedicine platforms",
      "Enhance data privacy and security compliance for real world deployment",
    ],
  },
  {
    id: 6,
    title: "SABI: Smart Waste Management App",
    role: "Mobile Developer",
    description:
      "A mobile based waste management application that encourages recycling through point rewards, marketplace transactions, and community driven sustainability in Malang City.",

    coverImage: "/images/sabi-cover-4.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Waste management in Malang City remains ineffective due to low public awareness, manual collection processes, and the lack of an integrated digital platform connecting citizens, recycling communities, and local UMKM.",
      purpose:
        "SABI aims to increase public participation in waste sorting and recycling by providing a mobile platform that enables waste to point exchange, recycled product marketplace, donations, and environmental education.",
    },

    responsibilities: [
      "Implemented application business logic and data flow using Kotlin",
      "Integrated Firebase Authentication and Realtime Database with the mobile app",
      "Handled data synchronization between Firebase and UI components",
      "Applied Clean Architecture principles for scalable and maintainable code structure",
      "Implemented core application workflows excluding UI slicing",
      "Collaborated with designers and product team to translate business rules into functional features",
    ],

    techStack: {
      frontend: ["Kotlin", "Jetpack Compose"],
      backend: ["Firebase Cloud Functions"],
      tools: ["Android Studio", "GitHub", "Figma", "UploadCare"],
    },

    keyFeatures: [
      {
        title: "Waste to Point System",
        description:
          "Allows users to exchange sorted waste into points that can be redeemed as cash, products, or donations.",
        icon: "♻️",
      },
      {
        title: "Recycled Product Marketplace",
        description:
          "Provides a marketplace for UMKM recycled products, supporting local economic growth.",
        icon: "🛍️",
      },
      {
        title: "Waste Pickup Scheduling",
        description:
          "Enables users to request scheduled waste pickup for large quantities.",
        icon: "🚚",
      },
      {
        title: "Gamification & Daily Tasks",
        description:
          "Encourages consistent recycling behavior through daily tasks, goals, and point rewards.",
        icon: "🎯",
      },
      {
        title: "Environmental Education",
        description:
          "Offers educational content on waste management and recycling practices.",
        icon: "📚",
      },
    ],

    screenshots: [
      {
        url: "/images/sabi/ui-1.png",
        caption:
          "Homepage showcasing waste to cash conversion, educational articles, and waste pickup request features.",
      },
      {
        url: "/images/sabi/ui-2.png",
        caption:
          "Donation and recycled product marketplace features supporting sustainable community engagement.",
      },
    ],

    challenges: [
      {
        challenge:
          "Building a production ready mobile application using Kotlin for the first time within a tight 3 week timeline.",
        learning:
          "Gained hands on experience in developing a complete Android application from scratch under real world constraints.",
      },
      {
        challenge:
          "Applying Clean Architecture principles in an early stage mobile project.",
        learning:
          "Learned how to structure scalable business logic and separate concerns effectively in Android development.",
      },
      {
        challenge:
          "Integrating cloud services for authentication, real time data, and image storage.",
        learning:
          "Developed practical experience working with Firebase services and third party cloud storage (Uploadcare).",
      },
    ],

    outcome: {
      type: "💼 Internship Project Achievement",
      metrics: [
        "🚀 Delivered 90% MVP completion within 3 weeks",
        "📱 Successfully built a functional, production ready Android application",
        "🤝 Accepted as an App Programmer Member at Raion Community",
      ],
    },

    futureImprovements: [
      "Implement live tracking for waste pickup requests",
      "Enhance recommendation system for recycled products",
      "Add push notifications for pickup schedules and point updates",
      "Improve scalability for expansion beyond Malang City",
      "Integrate analytics to measure user engagement and recycling impact",
    ],
  },
  {
    id: 7,
    title: "Nurtura: Pregnancy Support App",
    role: "Mobile Developer",
    description:
      "An AI-powered mobile application that supports pregnant mothers through voice based emotion detection and personalized health monitoring. This project received a Best Deploy nomination at HackJam 2025.",

    coverImage: "/images/nurtura-cover-4.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Pregnant mothers often experience emotional instability and anxiety due to hormonal changes, while access to holistic and personalized digital health support remains limited.",
      purpose:
        "Nurtura aims to become a digital companion for pregnant mothers by combining AI-based emotional analysis, pregnancy monitoring, and personalized nutritional guidance in a single mobile platform.",
    },

    responsibilities: [
      "Developed the entire mobile application using Kotlin and Jetpack Compose",
      "Built and deployed the voice emotion detection API using FastAPI",
      "Integrated AI-based emotion analysis seamlessly into the mobile application",
      "Translated product requirements into technical features and implementations",
      "Designed application flow and business logic to ensure a cohesive user experience",
    ],

    techStack: {
      frontend: ["Kotlin", "Jetpack Compose"],
      backend: ["FastAPI", "Firebase Cloud Functions"],
      tools: [
        "Cloudinary",
        "Android Studio",
        "GitHub",
        "Figma",
        "Postman",
        "Railway",
      ],
      ai: ["Speech Emotion Recognition (SER)", "Hugging Face Transformers"],
    },

    keyFeatures: [
      {
        title: "Voice Based Emotion Detection",
        description:
          "Analyzes voice recordings to detect emotional conditions and mental well being of pregnant mothers.",
        icon: "🎙️",
      },
      {
        title: "Personalized Nutrition Recommendations",
        description:
          "Provides food and nutrition suggestions tailored to emotional conditions and pregnancy stages.",
        icon: "🥗",
      },
      {
        title: "Pregnancy Monitoring",
        description:
          "Helps mothers track pregnancy progress and key health indicators throughout each trimester.",
        icon: "🤰",
      },
      {
        title: "Emotional Health Companion",
        description:
          "Acts as a supportive digital companion by combining emotional insights with actionable guidance.",
        icon: "🧠",
      },
    ],

    screenshots: [
      {
        url: "/images/nurtura/ui-1.png",
        caption:
          "Splash screen and onboarding flow introducing the app’s core features.",
      },
      {
        url: "/images/nurtura/ui-2.png",
        caption:
          "Home interface showing trimester progress tracking and emotion based nutrition recommendations.",
      },
      {
        url: "/images/nurtura/ui-3.png",
        caption:
          "Doctor feature providing access to professional guidance and consultation information.",
      },
    ],

    challenges: [
      {
        challenge:
          "Building a complete AI-powered mobile application within a one week hackathon timeline.",
        learning:
          "Learned to prioritize core features, manage time effectively, and deliver a production ready MVP under extreme time constraints.",
      },
      {
        challenge:
          "Refactoring code quality based on lessons learned from previous Android projects.",
        learning:
          "Improved clean architecture implementation, separation of concerns, and overall code maintainability.",
      },
      {
        challenge:
          "Optimizing user experience to prevent repeated authentication and unnecessary data fetching.",
        learning:
          "Implemented caching strategies to improve app performance and user convenience.",
      },
    ],

    outcome: {
      type: "🏅 Hackathon Recognition",
      metrics: [
        "🏆 Nominated for Best Deploy at HackJam 2025",
        "🚀 Successfully delivered a fully functional AI-powered mobile app in 7 days",
        "🔗 Deployed and integrated AI services with a production ready mobile application",
      ],
    },

    futureImprovements: [
      "Improve emotion detection accuracy with larger and more diverse voice datasets",
      "Add offline support for basic pregnancy tracking features",
      "Enhance AI explainability so users better understand emotional analysis results",
      "Integrate consultation features with healthcare professionals",
      "Strengthen data security and compliance for sensitive health information",
    ],
  },
  {
    id: 8,
    title: "EventEase: Event Management & Discovery Platform",
    role: "Full Stack Developer",
    description:
      "A mobile application that helps users discover, join, and manage community and campus events through an integrated mobile and backend system.",

    coverImage: "/images/eventease-cover-2.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Event information in campus and community environments is often scattered across multiple platforms, making it difficult for users to discover, manage, and participate in events efficiently.",
      purpose:
        "EventEase aims to provide a centralized mobile platform where users can easily find events, join as participants, and create or manage their own events with structured and secure data handling.",
    },

    responsibilities: [
      "Developed the Android mobile application using Kotlin with MVVM architecture",
      "Designed and implemented the backend API using Express.js",
      "Integrated mobile application with a custom built REST API",
      "Handled database design and data flow between mobile app and backend",
      "Implemented authentication, event management, and participation features end to end",
      "Managed image upload and storage using Cloudinary",
    ],

    techStack: {
      frontend: ["Kotlin", "Jetpack Compose"],
      backend: ["Express.js", "MySQL"],
      tools: [
        "Cloudinary",
        "Android Studio",
        "GitHub",
        "Postman",
        "Vercel",
        "Railway",
        "Filessio (MySQL Hosting)",
      ],
    },

    keyFeatures: [
      {
        title: "User Authentication & Profile Management",
        description:
          "Allows users to register, log in, and manage personal profile information.",
        icon: "🔐",
      },
      {
        title: "Event Creation & Management",
        description:
          "Enables users to create, edit, and delete events with detailed information such as date, location, and description.",
        icon: "🗓️",
      },
      {
        title: "Event Discovery & Search",
        description:
          "Displays a list of available events with search and filtering capabilities.",
        icon: "🔍",
      },
      {
        title: "Event Participation Tracking",
        description:
          "Allows users to join events and view events they have joined or created.",
        icon: "👥",
      },
      {
        title: "Media Upload Integration",
        description:
          "Supports event poster and profile image uploads via cloud based storage.",
        icon: "🖼️",
      },
    ],

    screenshots: [
      {
        url: "/images/eventease/ui-1.png",
        caption:
          "Home interface displaying event listings and detailed event information.",
      },
      {
        url: "/images/eventease/ui-2.png",
        caption:
          "My Event section showing created and joined events, along with the event creation flow.",
      },
    ],

    challenges: [
      {
        challenge:
          "Building and integrating a self developed backend API with an Android application for the first time.",
        learning:
          "Gained a solid understanding of client server communication, REST API integration, and data synchronization between mobile and backend systems.",
      },
      {
        challenge:
          "Managing a large number of API endpoints within the Android application.",
        learning:
          "Improved skills in structuring network layers, handling responses, and maintaining clean and scalable mobile code.",
      },
    ],

    outcome: {
      type: "🎓 Academic Project Achievement",
      metrics: [
        "📚 Successfully delivered a complete fullstack mobile application",
        "✅ Achieved an A grade in the Applied Mobile Application Development course",
        "🔗 Deployed backend API and connected it with a production ready mobile app",
      ],
    },

    futureImprovements: [
      "Add notification features for upcoming events and participation updates",
      "Implement role based access control for event organizers and admins",
      "Introduce calendar integration for better event scheduling",
      "Enhance UI/UX for large scale event listings",
      "Improve backend scalability and security for real world deployment",
    ],
  },
  {
    id: 9,
    title: "ZELOW: Zero Leftovers Waste App",
    role: "Mobile Developer",
    description:
      "A mobile application that helps reduce food waste by connecting UMKM with consumers through discounted surplus food, flash sales, and surprise boxes.",

    coverImage: "/images/zelow-cover.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Food waste contributes more than 50% of total waste in Malang, while many UMKM culinary businesses suffer losses due to unsold surplus food and lack of efficient digital distribution channels.",
      purpose:
        "Zelow aims to reduce food waste by transforming surplus food into economic opportunities through a mobile platform that connects UMKM and consumers with affordable, quality food options.",
    },

    responsibilities: [
      "Led the continuation of an unfinished mobile application project from a previous team",
      "Acted as technical leader in a programmer only team while maintaining active coding responsibilities",
      "Understood and restructured existing application flow, architecture, and codebase",
      "Implemented and refined core mobile features using Flutter",
      "Collaborated with team members to align technical execution with product goals",
      "Bridged product level decision making and technical implementation",
    ],

    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Firebase Cloud Functions"],
      tools: ["Figma", "GitHub", "Android Studio"],
    },

    keyFeatures: [
      {
        title: "Flash Sale Surplus Food",
        description:
          "Allows UMKM to sell surplus food at discounted prices before it becomes waste.",
        icon: "⚡",
      },
      {
        title: "Surprise Box",
        description:
          "Mystery food packages offered at lower prices to reduce food stigma and increase sales efficiency.",
        icon: "🎁",
      },
      {
        title: "Nearby UMKM Discovery",
        description:
          "Location based feature to help users find nearby UMKM offering discounted surplus food.",
        icon: "📍",
      },
      {
        title: "Rating & Review System",
        description:
          "Builds trust and transparency by allowing users to review UMKM and food quality.",
        icon: "⭐",
      },
      {
        title: "Chat with Seller",
        description:
          "Enables direct communication between consumers and UMKM for pickup coordination.",
        icon: "💬",
      },
    ],

    screenshots: [
      {
        url: "/images/zelow/ui-1.png",
        caption:
          "Onboarding screens introducing the platform and its food waste reduction concept.",
      },
      {
        url: "/images/zelow/ui-2.png",
        caption:
          "Home interface featuring flash sales, surprise bags, and nearby UMKM discovery.",
      },
      {
        url: "/images/zelow/ui-3.png",
        caption:
          "Store and product detail views with cart management and checkout flow.",
      },
    ],

    challenges: [
      {
        challenge:
          "Using Flutter for the first time while working on a real project.",
        learning:
          "Gained hands on experience with Flutter fundamentals, widget composition, and cross-platform mobile development.",
      },
      {
        challenge:
          "Continuing a partially completed project without prior documentation from the previous team.",
        learning:
          "Learned to reverse engineer application flow, analyze existing codebases, and make architectural decisions independently.",
      },
      {
        challenge:
          "Leading a team consisting entirely of programmers without a dedicated product role.",
        learning:
          "Developed leadership skills by balancing technical execution with product level decision making and team coordination.",
      },
    ],

    outcome: {
      type: "🌱 Sustainability & Social Impact Project",
      metrics: [
        "♻️ Contributed to reducing food waste in Malang through digital surplus food distribution",
        "🏪 Empowered UMKM to minimize losses from unsold food inventory",
        "📱 Delivered a functional mobile application concept ready for further development",
      ],
    },

    futureImprovements: [
      "Add food delivery integration to expand accessibility beyond pickup-only orders",
      "Implement donation features for surplus food redistribution to communities in need",
      "Introduce smart recommendation systems based on user preferences and purchase history",
      "Enhance real time stock updates for better food availability accuracy",
      "Strengthen security and data protection for transactions and user information",
    ],
  },
];
