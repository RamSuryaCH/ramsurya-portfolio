import { db } from '@/db';
import { contactMessages } from '@/db/schema';

async function main() {
    const sampleContactMessages = [
        {
            name: 'Sarah Mitchell',
            email: 'sarah.mitchell@techstartup.io',
            message: 'Hi there! I\'m the CTO at a growing fintech startup and we\'re looking for an experienced developer to help us build our next-generation mobile banking app. The project involves React Native, Node.js, and blockchain integration. We\'d love to discuss the scope and timeline with you. Are you available for a quick call this week?',
            createdAt: new Date('2024-01-18T14:30:00Z').toISOString(),
        },
        {
            name: 'Marcus Rodriguez',
            email: 'marcus@innovateagency.com',
            message: 'Good morning! We\'re a digital marketing agency seeking a skilled full-stack developer for a long-term partnership. Our clients often need custom web applications, e-commerce solutions, and API integrations. Your portfolio looks impressive. Would you be interested in discussing a retainer arrangement? We typically have 2-3 projects running simultaneously.',
            createdAt: new Date('2024-01-15T09:45:00Z').toISOString(),
        },
        {
            name: 'Dr. Emily Chen',
            email: 'emily.chen@healthtechsolutions.org',
            message: 'Hello, I\'m reaching out from HealthTech Solutions regarding a healthcare data visualization project. We need someone with expertise in React, D3.js, and medical data compliance (HIPAA). The project involves creating interactive dashboards for patient analytics. Budget is $25-35K. Could we schedule a consultation to discuss requirements?',
            createdAt: new Date('2024-01-22T11:15:00Z').toISOString(),
        },
        {
            name: 'James Thompson',
            email: 'j.thompson@globalconf.tech',
            message: 'Hi! I\'m the organizer of the Global Tech Conference 2024 in San Francisco. We\'d be honored to have you as a keynote speaker on "Modern Web Development Practices." The event is scheduled for March 15-17, with an audience of 500+ developers. We offer speaker fees, travel, and accommodation. Interested in learning more?',
            createdAt: new Date('2024-01-12T16:20:00Z').toISOString(),
        },
        {
            name: 'Lisa Park',
            email: 'lisa@ecommercepro.com',
            message: 'Hey! Love your work on e-commerce solutions. We\'re launching a sustainable fashion marketplace and need help with the technical architecture. Looking for someone who can handle React/Next.js frontend, Node.js backend, payment processing, and inventory management. Timeline is 3-4 months. What\'s your availability?',
            createdAt: new Date('2024-01-20T13:45:00Z').toISOString(),
        },
        {
            name: 'Robert Kim',
            email: 'robert.kim@venturecapital.io',
            message: 'Good afternoon. I\'m a partner at Venture Capital Partners, and we\'re looking for technical advisors for our portfolio companies. Many of our startups need guidance on tech architecture, scaling, and development best practices. The role would be part-time with equity compensation. Your background seems like a perfect fit. Can we chat?',
            createdAt: new Date('2024-01-08T15:30:00Z').toISOString(),
        },
        {
            name: 'Amanda Foster',
            email: 'amanda@nonprofittech.org',
            message: 'Hi there! I work with a nonprofit organization focused on education technology. We\'re developing a learning management system for underserved communities and need volunteer development support. The project uses React, Python/Django, and PostgreSQL. While it\'s pro bono, it\'s a meaningful cause that could make a real impact. Would you consider helping out?',
            createdAt: new Date('2024-01-25T10:00:00Z').toISOString(),
        },
        {
            name: 'David Wilson',
            email: 'david.wilson@aimlcorp.tech',
            message: 'Hello! We\'re an AI/ML consulting firm working on a computer vision project for autonomous vehicles. We need a frontend developer to create a real-time data visualization dashboard using React and WebGL. The contract is 6 months, remote-friendly, with competitive compensation. Do you have experience with real-time data rendering?',
            createdAt: new Date('2024-01-17T14:15:00Z').toISOString(),
        },
        {
            name: 'Michelle Zhang',
            email: 'michelle@creativestudio.com',
            message: 'Hi! I\'m the creative director at a design studio, and we\'re collaborating with a client on an interactive art installation. The project requires custom web technology for motion sensors, real-time graphics, and user interaction. It\'s a unique blend of art and technology. The timeline is 8 weeks. Interested in something creative and different?',
            createdAt: new Date('2024-01-11T12:30:00Z').toISOString(),
        },
        {
            name: 'Alex Turner',
            email: 'alex.turner@blockchainventures.io',
            message: 'What\'s up! We\'re building a decentralized finance (DeFi) platform and looking for a React developer with Web3 experience. The project involves smart contract integration, wallet connectivity, and complex financial calculations. We offer competitive salary plus token allocation. The team is fully remote and we move fast. Sound interesting?',
            createdAt: new Date('2024-01-23T16:45:00Z').toISOString(),
        }
    ];

    await db.insert(contactMessages).values(sampleContactMessages);
    
    console.log('✅ Contact messages seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});