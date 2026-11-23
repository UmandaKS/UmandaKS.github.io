/**
 * Project catalogue.
 *
 * Note: the repository names on GitHub include a trailing hyphen
 * (Final-Year-Research-, IOT-Project-). Those exact URLs are used here so
 * every link resolves. See README.md for the link verification note.
 */
export const projects = [
  {
    id: 'dairy-cow',
    title: 'IoT-Based Dairy Cow Management System',
    subtitle: 'Final Year Research · MOOTECH',
    description:
      'Real-time dairy cow health and activity monitoring with cloud integration and basic machine-learning techniques.',
    overview:
      'MOOTECH is an IoT-based smart dairy farming solution that combines wearable sensing, cloud services, machine learning, and image processing to support cow health monitoring and farm decision-making.',
    highlights: [
      'Real-time monitoring and health analysis',
      'Cloud integration for storage and remote monitoring',
      'Basic ML techniques for health trend analysis',
      'Image-based approach explored for early disease identification',
    ],
    tech: ['IoT', 'Machine Learning', 'Cloud', 'Image Processing'],
    github: 'https://github.com/UmandaKS/Final-Year-Research-',
    thumbnail: 'images/projects/final year research.png',
    accent: 'sky',
    researchLink: true,
  },
  {
    id: 'esp32-health',
    title: 'ESP32-C3 Health Monitoring IoT Device',
    subtitle: 'IoT + Machine Learning',
    description:
      'A wearable IoT device for activity tracking and real-time fall detection with an ML-based activity classifier and web dashboard.',
    overview:
      'A wearable device built around the ESP32-C3 and an MPU9250 motion sensor. It counts steps, detects falls, sends notifications, and visualises data through a real-time web dashboard.',
    highlights: [
      'Activity tracking with gyroscope-based step counting',
      'Real-time fall detection and alerts',
      'ML-based activity classification (~92% accuracy reported in CV)',
      'Live web dashboard for step counts and fall notifications',
    ],
    tech: ['ESP32-C3', 'C++', 'Node.js', 'JavaScript', 'IoT', 'ML'],
    github: 'https://github.com/UmandaKS/IOT-Project-',
    thumbnail: 'images/projects/iot.png',
    accent: 'cyan',
  },
  {
    id: 'zoo-management',
    title: 'Zoo Management System',
    subtitle: 'MERN Stack',
    description:
      'Full-stack animal data and operations management with role-based access and a structured database design.',
    overview:
      'A MERN stack application created as a university group project to improve the accuracy of animal records and streamline day-to-day zoo operations.',
    highlights: [
      'Animal data and operations management',
      'Role-based access control',
      'Structured MongoDB database design',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/UmandaKS/ITPM-Project',
    thumbnail: 'images/projects/ZooManagementSystemhomepage.webp',
    screenshots: [
      'images/projects/ZooManagementSystemhomepage.webp',
      'images/projects/ZooManagementSystem2page.webp',
      'images/projects/ZooManagement.webp',
      'images/projects/ZooManagementeventspage.webp',
      'images/projects/ZooManagementfoodmanagementpage.webp',
      'images/projects/ZooManagementquizmanagementpage.webp',
    ],
    accent: 'blue',
  },
  {
    id: 'electronic-marketing',
    title: 'Electronic Marketing Management System',
    subtitle: 'MERN Stack',
    description:
      'Business management platform bringing sales, stock, and customer records together in one centralized system.',
    overview:
      'Built for electronics retail and wholesale operations, this MERN stack application centralises sales, inventory, and customer information with reporting features.',
    highlights: [
      'Sales, stock, and customer management modules',
      'Centralised operational records',
      'Automated statistical reporting and role-based access (per CV)',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/UmandaKS/ITP-Project',
    thumbnail: 'images/projects/Electronic Marketing Management System.jpg',
    screenshots: [
      'images/projects/Electronic Marketing Management System.jpg',
      'images/projects/Electronic Marketing Management System2.jpg',
    ],
    accent: 'indigo',
  },
  {
    id: 'online-food-ordering',
    title: 'Online Food Ordering System',
    subtitle: 'Web Application',
    description:
      'A web-based food ordering application with a customer ordering flow and dedicated management screens.',
    overview:
      'An online food ordering system with screens for browsing items, placing orders, and handling orders through a web interface.',
    highlights: [
      'Customer-facing ordering flow',
      'Food item and order management screens',
      'Web-based interface',
    ],
    tech: ['Web App', 'Ordering System'],
    thumbnail: 'images/projects/Online-food-ordering-system.webp',
    screenshots: [
      'images/projects/Online-food-ordering-system.webp',
      'images/projects/Online-food-ordering-system2.webp',
    ],
    accent: 'cyan',
  },
]
