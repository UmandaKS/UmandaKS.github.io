/**
 * Research content for the final-year project.
 * Source: the project README and CV supplied for this site.
 * No results or performance figures are claimed here.
 */
export const research = {
  id: 'R24-095',
  title: 'IoT-Based Dairy Cow Management System',
  projectName: 'MOOTECH – Intelligent Dairy Cow Management System',
  tagline: 'IoT, machine learning, and image processing for smarter dairy farming.',
  overview: [
    'MOOTECH is a smart, integrated dairy farming solution that combines IoT, machine learning, and image processing to monitor cow health, predict milk yield, and support disease detection.',
    'The system uses wearable IoT devices for real-time vital tracking, applies machine-learning algorithms for predictive analytics, and explores YOLO-based deep learning for early disease identification.',
    'Cloud services are used for data storage, processing, and remote monitoring, with the aim of improving productivity, sustainability, and resilience in the local dairy farming sector.',
  ],
  problem: {
    title: 'Problem statement',
    text: 'Dairy farming decisions are often made without timely, data-driven visibility into individual cow health and activity. The project explores how connected sensing, cloud processing, and machine learning can make that information available for earlier, better-informed care and management decisions.',
  },
  objectives: [
    'Monitor cow health and activity in real time using wearable IoT devices.',
    'Apply machine-learning techniques for health trend analysis and milk-yield prediction.',
    'Explore image-based, YOLO-supported approaches for early disease identification.',
    'Use cloud services for data storage, processing, and remote monitoring.',
    'Support more productive and sustainable local dairy farming decisions.',
  ],
  technologies: [
    'IoT / wearable sensors',
    'ESP32 firmware (C++)',
    'Cloud services',
    'Machine learning',
    'Image processing / YOLO',
    'Web application',
  ],
  system: [
    {
      icon: 'Radio',
      title: 'Wearable sensing',
      text: 'IoT devices collect real-time health and activity data from the herd.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud pipeline',
      text: 'Sensor data is stored and processed in the cloud for remote access.',
    },
    {
      icon: 'BrainCircuit',
      title: 'Predictive analytics',
      text: 'Machine-learning models analyse trends and explore milk-yield prediction.',
    },
    {
      icon: 'ScanEye',
      title: 'Image-based detection',
      text: 'Image processing with YOLO-based deep learning is explored for early disease identification.',
    },
  ],
  diagram: 'images/research/system-architecture.svg',
  diagramCaption: 'Conceptual system overview based on the project README. It illustrates the described data flow and is not a measured experimental result.',
  links: {
    github: 'https://github.com/UmandaKS/Final-Year-Research-',
    demo: 'http://moo-tech.vercel.app',
    demoLabel: 'MOOTECH web app',
  },
}
