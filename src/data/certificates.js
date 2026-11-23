/**
 * Certifications listed in the CV.
 * `slug` is used to find an optional proof file in /certificates at build time.
 * `reference` is the public credential verification URL, where available.
 * The AZ-900 entry is preparation, not a completed certification.
 */
export const certificates = [
  {
    slug: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'AWS Academy',
    year: '2024',
    icon: 'Cloud',
    status: 'completed',
    reference: 'https://www.credly.com/badges/4f480cf9-71ae-4904-8d60-831f82ee878c/linked_in_profile',
  },
  {
    slug: 'linux-lfs101',
    title: 'Introduction to Linux (LFS101)',
    issuer: 'The Linux Foundation',
    year: '2026',
    icon: 'Terminal',
    status: 'completed',
    reference: 'https://www.credly.com/badges/ebcb74cb-dbc8-4696-a984-d888024b0f7b/linked_in_profile',
  },
  {
    slug: 'cybersecurity-cisco',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: '2025',
    icon: 'ShieldCheck',
    status: 'completed',
    reference: 'https://www.credly.com/badges/9a2ca364-33f1-4899-aa11-8cbf95c3004c',
  },
  {
    slug: 'it-customer-support',
    title: 'IT Customer Support Basics',
    issuer: 'Cisco',
    year: '2026',
    icon: 'Headphones',
    status: 'completed',
    reference: 'https://www.credly.com/badges/c00c5e03-750a-4570-9353-93997c9349f3',
  },
  {
    slug: 'iot-cisco',
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    year: '2024',
    icon: 'Cpu',
    status: 'completed',
    reference: 'https://www.credly.com/badges/ffe5879a-4eb4-4978-a28a-7dbb43ac3bc9/linked_in_profile',
  },
  {
    slug: 'aws-cloud-practitioner-kodekloud',
    title: 'AWS Cloud Practitioner',
    issuer: 'KodeKloud',
    year: '2023',
    icon: 'CloudCog',
    status: 'completed',
    reference:
      'https://kodekloud.com/courses/aws-cloud-practitioner-clf-c02?certificate_id=2D144F81AF04-2EE1447BD3E0-2D14494E9E5C',
  },
  {
    slug: 'amazon-ecs-kodekloud',
    title: 'Amazon ECS (AWS)',
    issuer: 'KodeKloud',
    year: '2023',
    icon: 'Boxes',
    status: 'completed',
    reference:
      'https://kodekloud.com/courses/amazon-elastic-container-service-aws-ecs?certificate_id=2D144F81AF04-2DFD2FD59F12-2D14494E9E5C',
  },
  {
    slug: 'azure-az900',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: 'In preparation',
    icon: 'BookOpenCheck',
    status: 'learning',
    note: 'Listed as learning / preparation in the CV. Not presented as a completed certification.',
  },
]
