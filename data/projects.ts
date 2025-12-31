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
      tools: ["Cloudinary", "Android Studio", "GitHub", "Figma", "Postman"],
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
      "SwaraIbu is a mobile application that uses voice analysis to help detect emotional distress in postpartum mothers and provide early support. This project won 1st place at the SLASHCOM Hackathon.",
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
      tools: ["Android Studio", "GitHub", "Figma", "Postman"],
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
        title: "🎙️ Voice Emotion Analysis",
        description:
          "Analyzes voice input to detect emotional stress and potential mental health risks in postpartum mothers.",
      },
      {
        title: "🚨 Emergency Alert System",
        description:
          "Triggers alerts and critical warnings when high risk emotional states are detected.",
      },
      {
        title: "📈 Mood Tracking",
        description:
          "Tracks emotional changes over time to help users and companions understand mental health patterns.",
      },
      {
        title: "🤝 Companion Access Mode",
        description:
          "Allows trusted companions or family members to view summarized emotional conditions.",
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
      "Developed an API-driven web platform to explore accessible places with features such as maps, chat, reviews, and admin management. Built as a collaborative project focusing on inclusive and accessibility-centered digital solutions.",
    coverImage: "/images/easygo-cover.png",
    category: "Web Development",

    overview: {
      problem:
        "Indonesian farmers, especially millennials entering agriculture, struggle to identify plant diseases early. This leads to crop loss, reduced yields, and economic instability. Traditional methods rely on expensive consultations or trial-and-error.",
      purpose:
        "Create an accessible mobile solution that helps farmers quickly identify plant diseases using AI-powered image recognition, providing treatment recommendations and connecting them with agricultural experts.",
    },

    responsibilities: [
      "Conducted user research with 20+ farmers across Java to understand pain points",
      "Designed and prototyped the mobile interface using Figma",
      "Developed the Flutter-based mobile application for cross-platform deployment",
      "Integrated TensorFlow Lite model for offline disease detection",
      "Implemented real-time chat feature for farmer-expert consultation",
      "Led usability testing sessions and iterated based on feedback",
    ],

    techStack: {
      frontend: [
        "Flutter",
        "Dart",
        "Provider (State Management)",
        "Material Design",
      ],
      backend: [
        "Firebase",
        "Cloud Firestore",
        "Firebase Auth",
        "Cloud Functions",
      ],
      tools: ["Figma", "TensorFlow Lite", "Git", "Android Studio", "Xcode"],
      ai: ["Python", "TensorFlow", "Image Classification Model"],
    },

    keyFeatures: [
      {
        title: "AI-Powered Disease Detection",
        description:
          "Snap a photo of affected plants and get instant diagnosis with 87% accuracy, even offline. Supports 15+ common diseases.",
        icon: "🔍",
      },
      {
        title: "Treatment Recommendations",
        description:
          "Get step-by-step treatment plans with organic and chemical options, including dosage and application methods.",
        icon: "💊",
      },
      {
        title: "Expert Consultation",
        description:
          "Connect with certified agricultural experts via in-app chat for personalized advice and validation of AI results.",
        icon: "👨‍🌾",
      },
      {
        title: "Disease History Tracking",
        description:
          "Track disease occurrences across seasons to identify patterns and prevent future outbreaks in your crops.",
        icon: "📊",
      },
      {
        title: "Community Forum",
        description:
          "Share experiences, solutions, and best practices with fellow farmers in your region.",
        icon: "💬",
      },
    ],

    screenshots: [
      {
        url: "/images/weaveon-cover.png",
        caption: "Home screen with quick disease scan",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "AI disease detection results",
      },
      {
        url: "/images/weaveon-cover.png",
        caption: "Treatment recommendations",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "Expert consultation chat",
      },
    ],

    challenges: [
      {
        challenge: "Model optimization for low-end devices",
        learning:
          "Learned to quantize TensorFlow models and optimize inference speed. Reduced model size from 45MB to 12MB while maintaining 85%+ accuracy.",
      },
      {
        challenge: "Poor network connectivity in rural areas",
        learning:
          "Implemented offline-first architecture with sync queues. Mastered Firebase offline persistence and conflict resolution strategies.",
      },
      {
        challenge: "Varied image quality from farmers",
        learning:
          "Added preprocessing pipeline with auto-contrast, blur detection, and image quality validation before ML inference.",
      },
    ],

    outcome: {
      type: "Competition & Research",
      metrics: [
        "🏆 1st Runner Up at Agatis UX Competition 2022",
        "👥 Tested with 30+ farmers during beta phase",
        "⭐ 4.6/5 average rating from user testing",
        "📈 87% disease detection accuracy on test dataset",
        "📱 Successfully deployed prototype to 50+ early adopters",
      ],
    },

    futureImprovements: [
      "Expand disease database to 50+ diseases across multiple crop types",
      "Add crop health monitoring with weather data integration",
      "Implement marketplace for farmers to sell produce directly",
      "Build predictive analytics for disease outbreak forecasting",
      "Add multi-language support for farmers across Southeast Asia",
    ],
  },
  {
    id: 4,
    title: "Sentinel: Blockchain-Based Marketplace",
    role: "Backend Developer",
    description:
      "Designed a blockchain-based marketplace system to issue and verify immutable digital warranty certificates, aiming to improve transparency, security, and trust in gadget transactions.",
    coverImage: "/images/sentinel-cover-2.png",
    category: "Web Development",

    overview: {
      problem:
        "Indonesian farmers, especially millennials entering agriculture, struggle to identify plant diseases early. This leads to crop loss, reduced yields, and economic instability. Traditional methods rely on expensive consultations or trial-and-error.",
      purpose:
        "Create an accessible mobile solution that helps farmers quickly identify plant diseases using AI-powered image recognition, providing treatment recommendations and connecting them with agricultural experts.",
    },

    responsibilities: [
      "Conducted user research with 20+ farmers across Java to understand pain points",
      "Designed and prototyped the mobile interface using Figma",
      "Developed the Flutter-based mobile application for cross-platform deployment",
      "Integrated TensorFlow Lite model for offline disease detection",
      "Implemented real-time chat feature for farmer-expert consultation",
      "Led usability testing sessions and iterated based on feedback",
    ],

    techStack: {
      frontend: [
        "Flutter",
        "Dart",
        "Provider (State Management)",
        "Material Design",
      ],
      backend: [
        "Firebase",
        "Cloud Firestore",
        "Firebase Auth",
        "Cloud Functions",
      ],
      tools: ["Figma", "TensorFlow Lite", "Git", "Android Studio", "Xcode"],
      ai: ["Python", "TensorFlow", "Image Classification Model"],
    },

    keyFeatures: [
      {
        title: "AI-Powered Disease Detection",
        description:
          "Snap a photo of affected plants and get instant diagnosis with 87% accuracy, even offline. Supports 15+ common diseases.",
        icon: "🔍",
      },
      {
        title: "Treatment Recommendations",
        description:
          "Get step-by-step treatment plans with organic and chemical options, including dosage and application methods.",
        icon: "💊",
      },
      {
        title: "Expert Consultation",
        description:
          "Connect with certified agricultural experts via in-app chat for personalized advice and validation of AI results.",
        icon: "👨‍🌾",
      },
      {
        title: "Disease History Tracking",
        description:
          "Track disease occurrences across seasons to identify patterns and prevent future outbreaks in your crops.",
        icon: "📊",
      },
      {
        title: "Community Forum",
        description:
          "Share experiences, solutions, and best practices with fellow farmers in your region.",
        icon: "💬",
      },
    ],

    screenshots: [
      {
        url: "/images/weaveon-cover.png",
        caption: "Home screen with quick disease scan",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "AI disease detection results",
      },
      {
        url: "/images/weaveon-cover.png",
        caption: "Treatment recommendations",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "Expert consultation chat",
      },
    ],

    challenges: [
      {
        challenge: "Model optimization for low-end devices",
        learning:
          "Learned to quantize TensorFlow models and optimize inference speed. Reduced model size from 45MB to 12MB while maintaining 85%+ accuracy.",
      },
      {
        challenge: "Poor network connectivity in rural areas",
        learning:
          "Implemented offline-first architecture with sync queues. Mastered Firebase offline persistence and conflict resolution strategies.",
      },
      {
        challenge: "Varied image quality from farmers",
        learning:
          "Added preprocessing pipeline with auto-contrast, blur detection, and image quality validation before ML inference.",
      },
    ],

    outcome: {
      type: "Competition & Research",
      metrics: [
        "🏆 1st Runner Up at Agatis UX Competition 2022",
        "👥 Tested with 30+ farmers during beta phase",
        "⭐ 4.6/5 average rating from user testing",
        "📈 87% disease detection accuracy on test dataset",
        "📱 Successfully deployed prototype to 50+ early adopters",
      ],
    },

    futureImprovements: [
      "Expand disease database to 50+ diseases across multiple crop types",
      "Add crop health monitoring with weather data integration",
      "Implement marketplace for farmers to sell produce directly",
      "Build predictive analytics for disease outbreak forecasting",
      "Add multi-language support for farmers across Southeast Asia",
    ],
  },
  {
    id: 5,
    title: "PrediAI: AI-Powered Diabetes Early Detection App",
    role: "Product Manager",
    description:
      "Developed an AI-powered mobile application for early diabetes detection using medical data and image-based analysis to support proactive health screening. Became a finalist at GEMASTIK XVIII.",
    coverImage: "/images/prediai-cover.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Indonesian farmers, especially millennials entering agriculture, struggle to identify plant diseases early. This leads to crop loss, reduced yields, and economic instability. Traditional methods rely on expensive consultations or trial-and-error.",
      purpose:
        "Create an accessible mobile solution that helps farmers quickly identify plant diseases using AI-powered image recognition, providing treatment recommendations and connecting them with agricultural experts.",
    },

    responsibilities: [
      "Conducted user research with 20+ farmers across Java to understand pain points",
      "Designed and prototyped the mobile interface using Figma",
      "Developed the Flutter-based mobile application for cross-platform deployment",
      "Integrated TensorFlow Lite model for offline disease detection",
      "Implemented real-time chat feature for farmer-expert consultation",
      "Led usability testing sessions and iterated based on feedback",
    ],

    techStack: {
      frontend: [
        "Flutter",
        "Dart",
        "Provider (State Management)",
        "Material Design",
      ],
      backend: [
        "Firebase",
        "Cloud Firestore",
        "Firebase Auth",
        "Cloud Functions",
      ],
      tools: ["Figma", "TensorFlow Lite", "Git", "Android Studio", "Xcode"],
      ai: ["Python", "TensorFlow", "Image Classification Model"],
    },

    keyFeatures: [
      {
        title: "AI-Powered Disease Detection",
        description:
          "Snap a photo of affected plants and get instant diagnosis with 87% accuracy, even offline. Supports 15+ common diseases.",
        icon: "🔍",
      },
      {
        title: "Treatment Recommendations",
        description:
          "Get step-by-step treatment plans with organic and chemical options, including dosage and application methods.",
        icon: "💊",
      },
      {
        title: "Expert Consultation",
        description:
          "Connect with certified agricultural experts via in-app chat for personalized advice and validation of AI results.",
        icon: "👨‍🌾",
      },
      {
        title: "Disease History Tracking",
        description:
          "Track disease occurrences across seasons to identify patterns and prevent future outbreaks in your crops.",
        icon: "📊",
      },
      {
        title: "Community Forum",
        description:
          "Share experiences, solutions, and best practices with fellow farmers in your region.",
        icon: "💬",
      },
    ],

    screenshots: [
      {
        url: "/images/weaveon-cover.png",
        caption: "Home screen with quick disease scan",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "AI disease detection results",
      },
      {
        url: "/images/weaveon-cover.png",
        caption: "Treatment recommendations",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "Expert consultation chat",
      },
    ],

    challenges: [
      {
        challenge: "Model optimization for low-end devices",
        learning:
          "Learned to quantize TensorFlow models and optimize inference speed. Reduced model size from 45MB to 12MB while maintaining 85%+ accuracy.",
      },
      {
        challenge: "Poor network connectivity in rural areas",
        learning:
          "Implemented offline-first architecture with sync queues. Mastered Firebase offline persistence and conflict resolution strategies.",
      },
      {
        challenge: "Varied image quality from farmers",
        learning:
          "Added preprocessing pipeline with auto-contrast, blur detection, and image quality validation before ML inference.",
      },
    ],

    outcome: {
      type: "Competition & Research",
      metrics: [
        "🏆 1st Runner Up at Agatis UX Competition 2022",
        "👥 Tested with 30+ farmers during beta phase",
        "⭐ 4.6/5 average rating from user testing",
        "📈 87% disease detection accuracy on test dataset",
        "📱 Successfully deployed prototype to 50+ early adopters",
      ],
    },

    futureImprovements: [
      "Expand disease database to 50+ diseases across multiple crop types",
      "Add crop health monitoring with weather data integration",
      "Implement marketplace for farmers to sell produce directly",
      "Build predictive analytics for disease outbreak forecasting",
      "Add multi-language support for farmers across Southeast Asia",
    ],
  },
  {
    id: 6,
    title: "SABI: Smart Waste Management App",
    role: "Mobile Developer",
    description:
      "Developed a mobile app to support smart waste management by enabling waste donations, reward points, and community-driven sustainability initiatives. Built collaboratively as part of Internship Raion 2025.",
    coverImage: "/images/sabi-cover-4.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Indonesian farmers, especially millennials entering agriculture, struggle to identify plant diseases early. This leads to crop loss, reduced yields, and economic instability. Traditional methods rely on expensive consultations or trial-and-error.",
      purpose:
        "Create an accessible mobile solution that helps farmers quickly identify plant diseases using AI-powered image recognition, providing treatment recommendations and connecting them with agricultural experts.",
    },

    responsibilities: [
      "Conducted user research with 20+ farmers across Java to understand pain points",
      "Designed and prototyped the mobile interface using Figma",
      "Developed the Flutter-based mobile application for cross-platform deployment",
      "Integrated TensorFlow Lite model for offline disease detection",
      "Implemented real-time chat feature for farmer-expert consultation",
      "Led usability testing sessions and iterated based on feedback",
    ],

    techStack: {
      frontend: [
        "Flutter",
        "Dart",
        "Provider (State Management)",
        "Material Design",
      ],
      backend: [
        "Firebase",
        "Cloud Firestore",
        "Firebase Auth",
        "Cloud Functions",
      ],
      tools: ["Figma", "TensorFlow Lite", "Git", "Android Studio", "Xcode"],
      ai: ["Python", "TensorFlow", "Image Classification Model"],
    },

    keyFeatures: [
      {
        title: "AI-Powered Disease Detection",
        description:
          "Snap a photo of affected plants and get instant diagnosis with 87% accuracy, even offline. Supports 15+ common diseases.",
        icon: "🔍",
      },
      {
        title: "Treatment Recommendations",
        description:
          "Get step-by-step treatment plans with organic and chemical options, including dosage and application methods.",
        icon: "💊",
      },
      {
        title: "Expert Consultation",
        description:
          "Connect with certified agricultural experts via in-app chat for personalized advice and validation of AI results.",
        icon: "👨‍🌾",
      },
      {
        title: "Disease History Tracking",
        description:
          "Track disease occurrences across seasons to identify patterns and prevent future outbreaks in your crops.",
        icon: "📊",
      },
      {
        title: "Community Forum",
        description:
          "Share experiences, solutions, and best practices with fellow farmers in your region.",
        icon: "💬",
      },
    ],

    screenshots: [
      {
        url: "/images/weaveon-cover.png",
        caption: "Home screen with quick disease scan",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "AI disease detection results",
      },
      {
        url: "/images/weaveon-cover.png",
        caption: "Treatment recommendations",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "Expert consultation chat",
      },
    ],

    challenges: [
      {
        challenge: "Model optimization for low-end devices",
        learning:
          "Learned to quantize TensorFlow models and optimize inference speed. Reduced model size from 45MB to 12MB while maintaining 85%+ accuracy.",
      },
      {
        challenge: "Poor network connectivity in rural areas",
        learning:
          "Implemented offline-first architecture with sync queues. Mastered Firebase offline persistence and conflict resolution strategies.",
      },
      {
        challenge: "Varied image quality from farmers",
        learning:
          "Added preprocessing pipeline with auto-contrast, blur detection, and image quality validation before ML inference.",
      },
    ],

    outcome: {
      type: "Competition & Research",
      metrics: [
        "🏆 1st Runner Up at Agatis UX Competition 2022",
        "👥 Tested with 30+ farmers during beta phase",
        "⭐ 4.6/5 average rating from user testing",
        "📈 87% disease detection accuracy on test dataset",
        "📱 Successfully deployed prototype to 50+ early adopters",
      ],
    },

    futureImprovements: [
      "Expand disease database to 50+ diseases across multiple crop types",
      "Add crop health monitoring with weather data integration",
      "Implement marketplace for farmers to sell produce directly",
      "Build predictive analytics for disease outbreak forecasting",
      "Add multi-language support for farmers across Southeast Asia",
    ],
  },
  {
    id: 7,
    title: "Nurtura: Pregnancy Support App",
    role: "Mobile Developer",
    description:
      "Developed an AI-powered mobile app to support pregnant mothers through emotion-based food recommendations and health insights. Nominated for Best Deploy at Raion HackJam 2025.",
    coverImage: "/images/nurtura-cover-4.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Indonesian farmers, especially millennials entering agriculture, struggle to identify plant diseases early. This leads to crop loss, reduced yields, and economic instability. Traditional methods rely on expensive consultations or trial-and-error.",
      purpose:
        "Create an accessible mobile solution that helps farmers quickly identify plant diseases using AI-powered image recognition, providing treatment recommendations and connecting them with agricultural experts.",
    },

    responsibilities: [
      "Conducted user research with 20+ farmers across Java to understand pain points",
      "Designed and prototyped the mobile interface using Figma",
      "Developed the Flutter-based mobile application for cross-platform deployment",
      "Integrated TensorFlow Lite model for offline disease detection",
      "Implemented real-time chat feature for farmer-expert consultation",
      "Led usability testing sessions and iterated based on feedback",
    ],

    techStack: {
      frontend: [
        "Flutter",
        "Dart",
        "Provider (State Management)",
        "Material Design",
      ],
      backend: [
        "Firebase",
        "Cloud Firestore",
        "Firebase Auth",
        "Cloud Functions",
      ],
      tools: ["Figma", "TensorFlow Lite", "Git", "Android Studio", "Xcode"],
      ai: ["Python", "TensorFlow", "Image Classification Model"],
    },

    keyFeatures: [
      {
        title: "AI-Powered Disease Detection",
        description:
          "Snap a photo of affected plants and get instant diagnosis with 87% accuracy, even offline. Supports 15+ common diseases.",
        icon: "🔍",
      },
      {
        title: "Treatment Recommendations",
        description:
          "Get step-by-step treatment plans with organic and chemical options, including dosage and application methods.",
        icon: "💊",
      },
      {
        title: "Expert Consultation",
        description:
          "Connect with certified agricultural experts via in-app chat for personalized advice and validation of AI results.",
        icon: "👨‍🌾",
      },
      {
        title: "Disease History Tracking",
        description:
          "Track disease occurrences across seasons to identify patterns and prevent future outbreaks in your crops.",
        icon: "📊",
      },
      {
        title: "Community Forum",
        description:
          "Share experiences, solutions, and best practices with fellow farmers in your region.",
        icon: "💬",
      },
    ],

    screenshots: [
      {
        url: "/images/weaveon-cover.png",
        caption: "Home screen with quick disease scan",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "AI disease detection results",
      },
      {
        url: "/images/weaveon-cover.png",
        caption: "Treatment recommendations",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "Expert consultation chat",
      },
    ],

    challenges: [
      {
        challenge: "Model optimization for low-end devices",
        learning:
          "Learned to quantize TensorFlow models and optimize inference speed. Reduced model size from 45MB to 12MB while maintaining 85%+ accuracy.",
      },
      {
        challenge: "Poor network connectivity in rural areas",
        learning:
          "Implemented offline-first architecture with sync queues. Mastered Firebase offline persistence and conflict resolution strategies.",
      },
      {
        challenge: "Varied image quality from farmers",
        learning:
          "Added preprocessing pipeline with auto-contrast, blur detection, and image quality validation before ML inference.",
      },
    ],

    outcome: {
      type: "Competition & Research",
      metrics: [
        "🏆 1st Runner Up at Agatis UX Competition 2022",
        "👥 Tested with 30+ farmers during beta phase",
        "⭐ 4.6/5 average rating from user testing",
        "📈 87% disease detection accuracy on test dataset",
        "📱 Successfully deployed prototype to 50+ early adopters",
      ],
    },

    futureImprovements: [
      "Expand disease database to 50+ diseases across multiple crop types",
      "Add crop health monitoring with weather data integration",
      "Implement marketplace for farmers to sell produce directly",
      "Build predictive analytics for disease outbreak forecasting",
      "Add multi-language support for farmers across Southeast Asia",
    ],
  },
  {
    id: 8,
    title: "EventEase: Event Management & Discovery Platform",
    role: "Full Stack Developer",
    description:
      "Developed an event management and discovery platform that connects organizers and attendees through seamless event creation, RSVP management, and real-time notifications.",
    coverImage: "/images/eventease-cover-2.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Indonesian farmers, especially millennials entering agriculture, struggle to identify plant diseases early. This leads to crop loss, reduced yields, and economic instability. Traditional methods rely on expensive consultations or trial-and-error.",
      purpose:
        "Create an accessible mobile solution that helps farmers quickly identify plant diseases using AI-powered image recognition, providing treatment recommendations and connecting them with agricultural experts.",
    },

    responsibilities: [
      "Conducted user research with 20+ farmers across Java to understand pain points",
      "Designed and prototyped the mobile interface using Figma",
      "Developed the Flutter-based mobile application for cross-platform deployment",
      "Integrated TensorFlow Lite model for offline disease detection",
      "Implemented real-time chat feature for farmer-expert consultation",
      "Led usability testing sessions and iterated based on feedback",
    ],

    techStack: {
      frontend: [
        "Flutter",
        "Dart",
        "Provider (State Management)",
        "Material Design",
      ],
      backend: [
        "Firebase",
        "Cloud Firestore",
        "Firebase Auth",
        "Cloud Functions",
      ],
      tools: ["Figma", "TensorFlow Lite", "Git", "Android Studio", "Xcode"],
      ai: ["Python", "TensorFlow", "Image Classification Model"],
    },

    keyFeatures: [
      {
        title: "AI-Powered Disease Detection",
        description:
          "Snap a photo of affected plants and get instant diagnosis with 87% accuracy, even offline. Supports 15+ common diseases.",
        icon: "🔍",
      },
      {
        title: "Treatment Recommendations",
        description:
          "Get step-by-step treatment plans with organic and chemical options, including dosage and application methods.",
        icon: "💊",
      },
      {
        title: "Expert Consultation",
        description:
          "Connect with certified agricultural experts via in-app chat for personalized advice and validation of AI results.",
        icon: "👨‍🌾",
      },
      {
        title: "Disease History Tracking",
        description:
          "Track disease occurrences across seasons to identify patterns and prevent future outbreaks in your crops.",
        icon: "📊",
      },
      {
        title: "Community Forum",
        description:
          "Share experiences, solutions, and best practices with fellow farmers in your region.",
        icon: "💬",
      },
    ],

    screenshots: [
      {
        url: "/images/weaveon-cover.png",
        caption: "Home screen with quick disease scan",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "AI disease detection results",
      },
      {
        url: "/images/weaveon-cover.png",
        caption: "Treatment recommendations",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "Expert consultation chat",
      },
    ],

    challenges: [
      {
        challenge: "Model optimization for low-end devices",
        learning:
          "Learned to quantize TensorFlow models and optimize inference speed. Reduced model size from 45MB to 12MB while maintaining 85%+ accuracy.",
      },
      {
        challenge: "Poor network connectivity in rural areas",
        learning:
          "Implemented offline-first architecture with sync queues. Mastered Firebase offline persistence and conflict resolution strategies.",
      },
      {
        challenge: "Varied image quality from farmers",
        learning:
          "Added preprocessing pipeline with auto-contrast, blur detection, and image quality validation before ML inference.",
      },
    ],

    outcome: {
      type: "Competition & Research",
      metrics: [
        "🏆 1st Runner Up at Agatis UX Competition 2022",
        "👥 Tested with 30+ farmers during beta phase",
        "⭐ 4.6/5 average rating from user testing",
        "📈 87% disease detection accuracy on test dataset",
        "📱 Successfully deployed prototype to 50+ early adopters",
      ],
    },

    futureImprovements: [
      "Expand disease database to 50+ diseases across multiple crop types",
      "Add crop health monitoring with weather data integration",
      "Implement marketplace for farmers to sell produce directly",
      "Build predictive analytics for disease outbreak forecasting",
      "Add multi-language support for farmers across Southeast Asia",
    ],
  },
  {
    id: 9,
    title: "ZELOW: Zero Leftovers Waste App",
    role: "Mobile Developer",
    description:
      "Developed a mobile platform to reduce food waste by connecting culinary UMKM with consumers through flash sales and surprise food packages. Built using Agile and Design Thinking approaches to support sustainable consumption and zero-waste initiatives.",
    coverImage: "/images/zelow-cover.png",
    category: "Mobile Development",

    overview: {
      problem:
        "Indonesian farmers, especially millennials entering agriculture, struggle to identify plant diseases early. This leads to crop loss, reduced yields, and economic instability. Traditional methods rely on expensive consultations or trial-and-error.",
      purpose:
        "Create an accessible mobile solution that helps farmers quickly identify plant diseases using AI-powered image recognition, providing treatment recommendations and connecting them with agricultural experts.",
    },

    responsibilities: [
      "Conducted user research with 20+ farmers across Java to understand pain points",
      "Designed and prototyped the mobile interface using Figma",
      "Developed the Flutter-based mobile application for cross-platform deployment",
      "Integrated TensorFlow Lite model for offline disease detection",
      "Implemented real-time chat feature for farmer-expert consultation",
      "Led usability testing sessions and iterated based on feedback",
    ],

    techStack: {
      frontend: [
        "Flutter",
        "Dart",
        "Provider (State Management)",
        "Material Design",
      ],
      backend: [
        "Firebase",
        "Cloud Firestore",
        "Firebase Auth",
        "Cloud Functions",
      ],
      tools: ["Figma", "TensorFlow Lite", "Git", "Android Studio", "Xcode"],
      ai: ["Python", "TensorFlow", "Image Classification Model"],
    },

    keyFeatures: [
      {
        title: "AI-Powered Disease Detection",
        description:
          "Snap a photo of affected plants and get instant diagnosis with 87% accuracy, even offline. Supports 15+ common diseases.",
        icon: "🔍",
      },
      {
        title: "Treatment Recommendations",
        description:
          "Get step-by-step treatment plans with organic and chemical options, including dosage and application methods.",
        icon: "💊",
      },
      {
        title: "Expert Consultation",
        description:
          "Connect with certified agricultural experts via in-app chat for personalized advice and validation of AI results.",
        icon: "👨‍🌾",
      },
      {
        title: "Disease History Tracking",
        description:
          "Track disease occurrences across seasons to identify patterns and prevent future outbreaks in your crops.",
        icon: "📊",
      },
      {
        title: "Community Forum",
        description:
          "Share experiences, solutions, and best practices with fellow farmers in your region.",
        icon: "💬",
      },
    ],

    screenshots: [
      {
        url: "/images/weaveon-cover.png",
        caption: "Home screen with quick disease scan",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "AI disease detection results",
      },
      {
        url: "/images/weaveon-cover.png",
        caption: "Treatment recommendations",
      },
      {
        url: "/images/swaraibu-cover.png",
        caption: "Expert consultation chat",
      },
    ],

    challenges: [
      {
        challenge: "Model optimization for low-end devices",
        learning:
          "Learned to quantize TensorFlow models and optimize inference speed. Reduced model size from 45MB to 12MB while maintaining 85%+ accuracy.",
      },
      {
        challenge: "Poor network connectivity in rural areas",
        learning:
          "Implemented offline-first architecture with sync queues. Mastered Firebase offline persistence and conflict resolution strategies.",
      },
      {
        challenge: "Varied image quality from farmers",
        learning:
          "Added preprocessing pipeline with auto-contrast, blur detection, and image quality validation before ML inference.",
      },
    ],

    outcome: {
      type: "Competition & Research",
      metrics: [
        "🏆 1st Runner Up at Agatis UX Competition 2022",
        "👥 Tested with 30+ farmers during beta phase",
        "⭐ 4.6/5 average rating from user testing",
        "📈 87% disease detection accuracy on test dataset",
        "📱 Successfully deployed prototype to 50+ early adopters",
      ],
    },

    futureImprovements: [
      "Expand disease database to 50+ diseases across multiple crop types",
      "Add crop health monitoring with weather data integration",
      "Implement marketplace for farmers to sell produce directly",
      "Build predictive analytics for disease outbreak forecasting",
      "Add multi-language support for farmers across Southeast Asia",
    ],
  },
];
