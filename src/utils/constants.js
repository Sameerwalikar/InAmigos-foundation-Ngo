/**
 * Site-wide data constants for InAmigos Foundation.
 * All real content sourced from the official site and UX report.
 * Centralised here to avoid scattered magic strings across components.
 */

export const SITE = {
  name: 'InAmigos Foundation',
  tagline: 'Empowering Lives, Building Futures',
  email: 'contact@inamigosfoundation.org.in',
  phone: '+91 9109 339 255',
  address: 'Raipur, Chhattisgarh, India',
  facebook: 'https://www.facebook.com/inamigos.inamigos',
  instagram: 'https://www.instagram.com/inamigos/',
  youtube: 'https://www.youtube.com/@inamigosfoundation',
  linkedin: 'https://www.linkedin.com/company/inamigos-foundation',
  donateUrl: '/donate',
  established: 'September 23, 2020',
  founder: 'Mr. Govind Shukla',
}

export const IMPACT_STATS = [
  { id: 'lives', value: 50000, suffix: '+', label: 'Lives Impacted', icon: 'Users' },
  { id: 'villages', value: 120, suffix: '+', label: 'Villages Reached', icon: 'MapPin' },
  { id: 'volunteers', value: 300, suffix: '+', label: 'Active Volunteers', icon: 'Heart' },
  { id: 'projects', value: 5, suffix: '', label: 'Key Initiatives', icon: 'Target' },
]

export const CERTIFICATIONS = [
  { id: 'section8', label: 'Section 8 NGO', desc: 'Central Government Licensed', icon: '🏛️' },
  { id: '80g', label: '80G Certified', desc: 'Tax exemption for donors', icon: '📋' },
  { id: '12a', label: '12A Certified', desc: 'Income tax exemption', icon: '📜' },
  { id: 'niti', label: 'NITI Aayog', desc: 'Darpan registered NGO', icon: '🇮🇳' },
  { id: 'iso', label: 'ISO 9001:2015', desc: 'IAF certified quality management', icon: '✅' },
  { id: 'csr1', label: 'CSR-1 Registered', desc: 'Corporate partnership eligible', icon: '🤝' },
]

export const CAUSES = [
  {
    id: 'bachpan-sala',
    name: 'BachpanSala',
    tagline: 'Bridging the education gap for underprivileged children',
    description:
      'Free, joyful learning spaces that combine structured academics with life skills — reaching children in government schools and underserved communities across Chhattisgarh.',
    category: 'Education',
    beneficiaries: 12000,
    goalAmount: 500000,
    raisedAmount: 340000,
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=75',
    color: '#1B6B3A',
    ctaText: 'Support Education',
  },
  {
    id: 'udaan',
    name: 'Udaan',
    tagline: "Lifting women's potential through skills & enterprise",
    description:
      'Vocational training, microfinance, and mentorship programs that equip rural women with tools to achieve economic independence and community leadership.',
    category: "Women's Empowerment",
    beneficiaries: 8500,
    goalAmount: 400000,
    raisedAmount: 280000,
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=75',
    color: '#7C3AED',
    ctaText: 'Empower Women',
  },
  {
    id: 'jeev',
    name: 'Jeev',
    tagline: 'Compassionate care for animals in distress',
    description:
      'Rescue, rehabilitation, and community education focused on stray animal welfare — because a compassionate society begins with how we treat the most vulnerable.',
    category: 'Animal Welfare',
    beneficiaries: 3200,
    goalAmount: 200000,
    raisedAmount: 140000,
    image:
      'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&auto=format&fit=crop&q=75',
    color: '#D97706',
    ctaText: 'Help Animals',
  },
  {
    id: 'sewa',
    name: 'Sewa',
    tagline: 'Serving communities through health & humanitarian aid',
    description:
      'Free health camps, emergency relief, and community service initiatives that address the immediate needs of marginalized populations.',
    category: 'Community Service',
    beneficiaries: 18000,
    goalAmount: 600000,
    raisedAmount: 420000,
    image:
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=75',
    color: '#DC2626',
    ctaText: 'Support Sewa',
  },
  {
    id: 'prakriti',
    name: 'Prakriti',
    tagline: 'Protecting nature for generations to come',
    description:
      'Tree planting drives, water conservation, and ecological awareness campaigns — nurturing the environment that sustains every life we touch.',
    category: 'Environment',
    beneficiaries: 9500,
    goalAmount: 300000,
    raisedAmount: 180000,
    image:
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=75',
    color: '#059669',
    ctaText: 'Protect Nature',
  },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      'BachpanSala changed everything for my daughter. She was too shy to speak in class — now she dreams of becoming a doctor. InAmigos gave her that belief.',
    name: 'Savitri Bai',
    role: 'Mother of BachpanSala student',
    location: 'Raipur, CG',
    avatar: 'SB',
  },
  {
    id: 't2',
    quote:
      "The Udaan programme taught me tailoring and helped me start my own small business. I earn ₹8,000 a month now. I feel independent for the first time in my life.",
    name: 'Rekha Sahu',
    role: 'Udaan Programme Graduate',
    location: 'Durg, CG',
    avatar: 'RS',
  },
  {
    id: 't3',
    quote:
      'We partnered with InAmigos for our CSR initiative. The transparency, reporting, and genuine impact on the ground gave us full confidence in our collaboration.',
    name: 'Ankit Verma',
    role: 'CSR Head, Regional Firm',
    location: 'Bilaspur, CG',
    avatar: 'AV',
  },
]

export const DONATION_TIERS = [
  {
    id: 'meal',
    amount: 500,
    impact: 'Provides one week of nutritious meals for a child',
    icon: '🍱',
    popular: false,
  },
  {
    id: 'education',
    amount: 2000,
    impact: 'Funds one month of education for a child in BachpanSala',
    icon: '📚',
    popular: true,
  },
  {
    id: 'skills',
    amount: 5000,
    impact: "Sponsors a women's vocational training module in Udaan",
    icon: '✂️',
    popular: false,
  },
  {
    id: 'tree',
    amount: 10000,
    impact: 'Plants 50 trees and funds environmental education for a village',
    icon: '🌳',
    popular: false,
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/causes' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
]

export const TEAM_MEMBERS = [
  {
    id: 'founder',
    name: 'Govind Shukla',
    role: 'Founder & CEO',
    bio: 'Social entrepreneur with a decade of grassroots work across Chhattisgarh. Founded InAmigos to create lasting systemic change for children and communities.',
    linkedin: '#',
    avatar: 'GS',
  },
  {
    id: 'ops',
    name: 'Priya Mishra',
    role: 'Head of Operations',
    bio: 'Brings 8 years of NGO project management experience, overseeing all five programme verticals with rigorous impact measurement.',
    linkedin: '#',
    avatar: 'PM',
  },
  {
    id: 'programmes',
    name: 'Ravi Chandrakar',
    role: 'Programme Director',
    bio: 'Community development specialist who designs and scales BachpanSala and Udaan. Former UNICEF field associate.',
    linkedin: '#',
    avatar: 'RC',
  },
]

export const IMPACT_STORIES = [
  {
    id: 'story1',
    title: 'From silence to valedictorian',
    preview:
      'Aarti could barely speak when she joined BachpanSala at age 7. Six years later, she topped her class 8 exams — the first in her family to do so.',
    category: 'Education',
    readTime: '3 min',
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=75',
  },
  {
    id: 'story2',
    title: "A stitch in time: Rekha's tailoring venture",
    preview:
      'Armed with skills from Udaan, Rekha turned a small loan into a thriving tailoring unit employing five women in her village.',
    category: "Women's Empowerment",
    readTime: '4 min',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=75',
  },
  {
    id: 'story3',
    title: 'Green lungs: 10,000 trees in 18 months',
    preview:
      "Prakriti's community plantation drive mobilised 600 volunteers, planting 10,000 native trees across degraded forest-edge land.",
    category: 'Environment',
    readTime: '2 min',
    image:
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=75',
  },
]