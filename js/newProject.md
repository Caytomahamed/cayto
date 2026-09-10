  <!-- {
    "id": "agri-teach-logistics-inventory-mvp",
    "name": "Agri-Teach Logistics & Inventory MVP",
    "type": "web",
    "heroImg": "booking.PNG",
    "gallery": ["booking.PNG"],
    "description": "A multi-role egg management platform — Admin, Warehouse, Farmer, Quality Checker, and Salesman — automating orders, inventory, and quality workflows for an agricultural client.",
    "role": "Freelance Full Stack Developer",
    "duration": "Freelance",
    "tags": ["nextjs", "nodejs", "postgresql", "typescript"],
    "viewLink": "#",
    "githubLink": "#",
    "overview": "Built for an agricultural client, this MVP is an enterprise-style egg management system spanning five distinct roles — Admin, Warehouse, Farmer, Quality Checker, and Salesman — each with their own dashboard and permissions. It covers the full operational loop: orders, warehouse inventory, sales, distribution, and reporting.",
    "features": [
      "Complete workflows for egg orders, warehouse inventory, sales management, and distribution",
      "Quality inspection and product replacement workflow with proof-image uploads and an approval chain",
      "Secure role-based dashboards, authentication, and permissions across five user types",
      "Sales reports, inventory tracking, and operational dashboards for business decision-making"
    ],
    "challenges": "The trickiest part was the quality-inspection and replacement workflow — a proof-image upload had to move through an approval chain from Quality Checker to Warehouse to Salesman without stalling daily distribution. Leaning on TypeScript and a modular architecture kept the multi-role permission logic maintainable as that workflow grew."
  },

  // {
  //   "id": "duraan-ali",
  //   "quote": "Masha allah, aad baan ugu faraxsanahay inaa horay usii socotay oo skill-kii aad laheyd aa isticmaasho, markasta waan ogaa intaa tahay one of the most talented guys aan ku arkay iskuulka.<br /><br />Markastoon qof kala hadlo Gabi School adigaan example kuu soo qaataa maxaa yeelay sidaa wax u qaban jirtay, professional way.",
  //   "translation": "Mashallah, I'm so happy to see you keep growing and putting the skills you had to good use — I always knew you were one of the most talented guys I'd seen at the school.<br /><br />Whenever I talk to someone about Gabi School, you're the example I bring up, because of how professionally you used to handle things.",
  //   "name": "Duraan Ali",
  //   "role": "Instructor, Gabi School of Technology"
  // },
  // {
  //   "id": "hamse-hassan",
  //   "quote": "I hired Aidarous to build RoomSnap and he delivered exactly what we agreed on — a real-time chat app that just worked. Auth, media, live messaging, the Android build, all of it shipped and held up through our busiest week without a single outage.<br /><br />He handled the whole thing on his own, kept me updated the whole way, and handed over a production-ready app I could put in front of users straight away. Easy to work with and completely reliable.",
  //   "name": "Hamse Hassan",
  //   "role": "Client, RoomSnap Chat"
  // },


   {
    "id": "somaliland-voting-management-system",
    "name": "Somaliland Voting Management System",
    "type": "web",
    "heroImg": "projects/vote/00.PNG",
    "gallery": [
      "projects/vote/00.PNG",
      "projects/vote/01.PNG",
      "projects/vote/02.PNG",
      "projects/vote/03.PNG"
    ],
    "description": "An election results dashboard rebuilt for results night — 10 parties, 6 regions, and dense data tables turned into histograms and maps stakeholders can read at a glance.",
    "role": "Frontend / Full-Stack Developer",
    "duration": "Aug 2024 – Oct 2024",
    "tags": ["reactjs", "nodejs", "javascript", "mongodb"],
    "viewLink": "#",
    "githubLink": "#",
    "overview": "Somaliland's election results were originally tracked through dense, static data tables that buried the signal stakeholders actually needed. I redesigned the dashboard to track 10 political parties across 6 regions, eliminating the data overload that was slowing down decision-making.",
    "features": [
      "Collapsible sidebar architecture for better layout scalability and mobile responsiveness",
      "Static data tables converted into interactive histograms and geographic maps",
      "Real-time performance reporting for election stakeholders",
      "Dynamic filtering by region to speed up administrative decision-making"
    ],
    "challenges": "The biggest challenge was information density — the original dashboard tried to show everything at once. Rebuilding it around a collapsible sidebar and interactive visualizations meant rethinking the information hierarchy so stakeholders could drill into a single region without losing the national picture."
  },

  {
    "id": "roomsnap-chat",
    "name": "RoomSnap Chat",
    "type": "app",
    "heroImg": "projects/roomsnap/00.png",
    "gallery": [
      "projects/roomsnap/00.png",
      "projects/roomsnap/01.png",
      "projects/roomsnap/02.png",
      "projects/roomsnap/03.png"
    ],
    "description": "A production real-time chat app for Android — OTP login, multi-room messaging, and Cloudflare-backed media. Architected, shipped, and held at 100% uptime through the client's busiest week.",
    "role": "Independent Software Engineer",
    "duration": "2026",
    "tags": [
      "reactnative",
      "expo",
      "typescript",
      "nodejs",
      "postgresql",
      "redis",
      "socketio",
      "r2",
      "railway"
    ],
    "viewLink": "#",
    "githubLink": "#",
    "overview": "RoomSnap is a real-time chat platform I architected and deployed end-to-end for Android as an independent contractor. It's a mobile-first product built on a deliberately cost-efficient stack: a React Native/Expo client, an API hosted on Railway, Postgres for persistence, and Upstash Redis for caching — sized to stay fast and cheap to run under real production traffic rather than over-engineered for scale it didn't need yet.",
    "features": [
      "Secure OTP authentication with multi-room chat configurations",
      "Real-time messaging via Socket.io, including admin-only media broadcast and deletion controls",
      "Cloudflare R2-backed media storage with lazy-loaded thumbnails and blurred placeholders",
      "EAS Build and EAS Update pipeline for Android APK compilation and over-the-air updates",
      "Maintained 100% application reliability through the client's peak traffic period"
    ],
    "challenges": "This was a commercial engagement, so the build and the deal terms shaped each other. I structured the licensing so the client got a production-ready APK while I kept the source, which meant the deployment pipeline — EAS Build/Update, Railway, Cloudflare R2 — had to be clean enough to hand off operationally without handing over the codebase."
  }, -->