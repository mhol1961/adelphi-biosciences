import { Target, TrendingUp, Users, FileText, Lightbulb, FileCheck, ShieldCheck, Database, Activity, Microscope, UploadCloud, BookOpen, Zap, Shield, Flag, Map, Languages, Globe, Network, RefreshCw, Calendar, Tag, AlertTriangle, Search, Briefcase, FileSearch, AlertOctagon, BarChart } from 'lucide-react';
import React from 'react';

export interface DeliverableData {
    slug: string;
    title: string;
    description: string;
    icon: any; // Using any to avoid complex type issues with Lucide icons in this data file for now
    fullContent: {
        heroTitle: string;
        heroSubtitle: string;
        introduction: string;
        features: string[];
        benefits: string[];
        process: { title: string; description: string }[];
        faqs?: { question: string; answer: string }[];
        relatedGuidance?: { title: string; url: string; source: string }[];
        testimonial?: {
            quote: string;
            author: string;
            role: string;
            company: string;
        };
    };
}

export interface ServiceCategoryData {
    id: string;
    title: string;
    deliverables: DeliverableData[];
}

export const serviceData: Record<string, ServiceCategoryData> = {
    "regulatory-strategy": {
        id: "regulatory-strategy",
        title: "Regulatory Strategy",
        deliverables: [
            {
                slug: "target-product-profile",
                title: "Target Product Profile (TPP)",
                description: "We help you define the optimal TPP to align commercial goals with regulatory feasibility.",
                icon: Target,
                fullContent: {
                    heroTitle: "Target Product Profile (TPP) Development",
                    heroSubtitle: "The Blueprint for Your Drug Development Success",
                    introduction: "A well-defined Target Product Profile (TPP) is the cornerstone of any successful drug development program. It serves as a strategic planning tool that aligns your scientific goals with commercial realities and regulatory requirements. Our experts work with you to craft a dynamic TPP that evolves with your program, ensuring every study and data point contributes directly to your desired label claims.",
                    features: [
                        "Comprehensive indication and usage definition",
                        "Dosing and administration strategy",
                        "Safety and efficacy goal setting",
                        "Competitive landscape alignment"
                    ],
                    benefits: [
                        "Streamlined development timelines",
                        "Reduced risk of late-stage failure",
                        "Clearer communication with investors and partners",
                        "Focused regulatory interactions"
                    ],
                    process: [
                        { title: "Market Analysis", description: "We analyze the current standard of care and competitor labels to identify differentiation opportunities." },
                        { title: "Scientific Assessment", description: "We evaluate your preclinical and clinical data to determine realistic labeling goals." },
                        { title: "Drafting & Refinement", description: "We create a living TPP document that guides your clinical trial design and regulatory strategy." }
                    ],
                    faqs: [
                        {
                            question: "What is the difference between a TPP and a product label?",
                            answer: "A TPP is an internal strategic document that describes your *goals* for the product label, while the actual label is what the FDA ultimately approves. Think of the TPP as your roadmap—it defines what you're trying to achieve in terms of indication, dosing, populations, and safety profile. The label is the destination, and the TPP helps ensure your clinical program generates the data needed to support those claims."
                        },
                        {
                            question: "When should I develop a TPP?",
                            answer: "Ideally, you should draft an initial TPP before your Pre-IND meeting with the FDA. Having a TPP in place helps you ask more focused questions and get better feedback from the agency. However, a TPP isn't static—it should evolve as you generate more data and have additional regulatory interactions. Many companies refine their TPP after Phase 1 data and again before pivotal trials."
                        },
                        {
                            question: "Do I need to share my TPP with the FDA?",
                            answer: "No, the TPP is typically an internal document and doesn't need to be submitted to the FDA. However, the concepts in your TPP will guide the discussions you have with the agency during Type B meetings, like Pre-IND or End-of-Phase 2 meetings. The FDA won't see your TPP directly, but they'll see the clinical trial designs and endpoints that stem from it."
                        },
                        {
                            question: "How detailed should a TPP be?",
                            answer: "A good TPP balances aspiration with realism. It should define specific, measurable goals (e.g., 'reduce attack frequency by 50%' rather than just 'efficacy') while acknowledging what's scientifically supported by your data. Include indication, patient population, dosing regimen, route of administration, expected efficacy, safety considerations, and any special claims like orphan status or breakthrough designation."
                        },
                        {
                            question: "Can my TPP change over time?",
                            answer: "Absolutely, and it should. Your TPP is a living document. As you learn more from your clinical trials, competitive intelligence, or FDA feedback, you may need to adjust your goals. For example, if Phase 2 data suggests a different endpoint would be more clinically meaningful, update your TPP and discuss it with the FDA before starting Phase 3."
                        },
                        {
                            question: "How does a TPP help with investor communications?",
                            answer: "A well-crafted TPP gives investors confidence that you have a clear, data-driven plan for regulatory approval. It shows you've thought through the competitive landscape, understand what the market needs, and have a strategy to get there. It also helps manage expectations—investors will know what label claims you're realistically pursuing versus pie-in-the-sky goals."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA Guidance: Expedited Programs for Serious Conditions",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/expedited-programs-serious-conditions-drugs-and-biologics",
                            source: "FDA"
                        },
                        {
                            title: "ICH E8: General Considerations for Clinical Trials",
                            url: "https://database.ich.org/sites/default/files/E8_Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "FDA Guidance: Demonstrating Substantial Evidence of Effectiveness",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/demonstrating-substantial-evidence-effectiveness-human-drug-and-biological-products",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "The TPP framework Adelphi helped us develop was instrumental in securing Fast Track designation. It gave our entire team—from clinical to commercial—a shared vision and kept everyone aligned as we navigated our development program.",
                        author: "Dr. Sarah Martinez",
                        role: "VP of Regulatory Affairs",
                        company: "Biotech Startup (Rare Disease)"
                    }
                }
            },
            {
                slug: "regulatory-roadmap",
                title: "Regulatory Roadmap & Pathway",
                description: "Identify the most efficient path to market with a comprehensive strategic roadmap.",
                icon: TrendingUp,
                fullContent: {
                    heroTitle: "Regulatory Roadmap & Pathway Selection",
                    heroSubtitle: "Navigating the Complex Maze of Global Approvals",
                    introduction: "Choosing the right regulatory pathway can mean the difference between a swift approval and years of delay. Whether it's a standard 505(b)(1), a streamlined 505(b)(2), or a biosimilar pathway, we analyze your asset to determine the most efficient route to market. Our roadmaps provide a step-by-step guide through the regulatory landscape, anticipating hurdles before they appear.",
                    features: [
                        "Pathway feasibility analysis (505(b)(1), 505(b)(2), BLA)",
                        "Global submission sequencing",
                        "Expedited program eligibility assessment",
                        "Pediatric requirement planning"
                    ],
                    benefits: [
                        "Accelerated time to market",
                        "Optimized resource allocation",
                        "Clear visibility of critical milestones",
                        "Strategic alignment across regions"
                    ],
                    process: [
                        { title: "Asset Review", description: "Deep dive into your molecule's characteristics and available data." },
                        { title: "Pathway Identification", description: "Matching your asset with the most advantageous regulatory mechanisms." },
                        { title: "Strategic Mapping", description: "Developing a timeline of interactions, submissions, and data requirements." }
                    ],
                    faqs: [
                        {
                            question: "What's the difference between a 505(b)(1) and 505(b)(2) pathway?",
                            answer: "A 505(b)(1) NDA requires you to conduct all of your own studies to demonstrate safety and efficacy—essentially starting from scratch. A 505(b)(2) allows you to rely on the FDA's previous findings for an approved drug (the 'listed drug') to support some of your application. This can significantly reduce clinical trial requirements. For example, if you're developing a new formulation or dose of an existing molecule, 505(b)(2) might only require bioequivalence studies instead of full Phase 3 trials."
                        },
                        {
                            question: "How do I know which pathway is right for my drug?",
                            answer: "It depends on your molecule's novelty and the available data. New molecular entities (NCEs) typically go through 505(b)(1). Modified versions of existing drugs—new formulations, combinations, or new uses—often qualify for 505(b)(2). Biological products use the BLA pathway. We analyze factors like patent landscape, available literature, and the FDA's prior approval history to recommend the most strategic route."
                        },
                        {
                            question: "What are expedited pathways and do I qualify?",
                            answer: "The FDA offers several expedited programs: Fast Track (more frequent FDA interaction), Breakthrough Therapy (intensive guidance for drugs showing substantial improvement), Accelerated Approval (approval based on surrogate endpoints), and Priority Review (6-month review instead of 10). Qualification depends on your indication's severity, unmet need, and preliminary data. We help assess eligibility and prepare compelling designation requests."
                        },
                        {
                            question: "Should I pursue FDA approval first or go global simultaneously?",
                            answer: "There's no one-size-fits-all answer. Many companies lead with FDA due to the U.S. market size and the FDA's global influence—an FDA approval often smooths the path elsewhere. However, if your drug addresses a particularly urgent need in Europe or Japan, or if you have specific commercial partnerships, a different sequence might make sense. We model different scenarios based on your timelines, resources, and strategic priorities."
                        },
                        {
                            question: "How long does it take from IND to approval on average?",
                            answer: "For a traditional small molecule, expect 7-10 years from IND filing to NDA approval, though this varies widely by indication and trial complexity. Biologics can take slightly longer due to manufacturing complexities. Expedited pathways can shave years off this timeline. Orphan drugs and therapies with breakthrough designation historically move faster. We provide realistic timeline estimates based on your specific program."
                        },
                        {
                            question: "Can my regulatory pathway change mid-development?",
                            answer: "Yes. You might start planning a 505(b)(1) but later discover published literature that supports a 505(b)(2) approach. Or you may qualify for breakthrough designation after seeing strong Phase 2 data. The key is maintaining flexibility and continuously reassessing your strategy as data emerges and competitive landscapes shift."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA Guidance: The 505(b)(2) Pathway",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/applications-covered-section-505b2",
                            source: "FDA"
                        },
                        {
                            title: "FDA Guidance: Formal Meetings Between FDA and Sponsors",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/formal-meetings-between-fda-and-sponsors-or-applicants-pdufa-products",
                            source: "FDA"
                        },
                        {
                            title: "ICH M4: The Common Technical Document",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/m4-organization-common-technical-document-human-drug-applications",
                            source: "ICH/FDA"
                        }
                    ],
                    testimonial: {
                        quote: "Our development timeline was cut by nearly 18 months thanks to the 505(b)(2) strategy Adelphi identified. They saw an opportunity we had completely missed and built a compelling case that the FDA accepted.",
                        author: "James Chen, PhD",
                        role: "Chief Development Officer",
                        company: "Mid-Size Pharma"
                    }
                }
            },
            {
                slug: "pre-ind-meeting",
                title: "Pre-IND / Pre-CTA Meetings",
                description: "Expert preparation and representation at critical health authority meetings.",
                icon: Users,
                fullContent: {
                    heroTitle: "Health Authority Meeting Preparation",
                    heroSubtitle: "Maximizing the Value of Every Agency Interaction",
                    introduction: "Meetings with the FDA, EMA, or other health authorities are high-stakes opportunities to de-risk your program. We ensure you go in prepared. From drafting the briefing package to rehearsing the Q&A, we guide you through every step of the Pre-IND, End-of-Phase 2, or Pre-NDA meeting process to secure agency buy-in on your development plan.",
                    features: [
                        "Meeting request and briefing package authorship",
                        "Question development and strategy",
                        "Mock meeting rehearsals and Q&A prep",
                        "In-meeting representation and minutes review"
                    ],
                    benefits: [
                        "Clear agency feedback on critical issues",
                        "Reduced risk of clinical holds",
                        "Alignment on study design and endpoints",
                        "Relationship building with reviewers"
                    ],
                    process: [
                        { title: "Strategy Session", description: "Defining the specific goals and questions for the meeting." },
                        { title: "Document Preparation", description: "Writing a compelling briefing book that frames the issues clearly." },
                        { title: "Rehearsal", description: "Rigorous practice sessions to ensure your team is ready for any question." }
                    ],
                    faqs: [
                        {
                            question: "What types of FDA meetings are available and when should I request one?",
                            answer: "The FDA offers Type A (dispute resolution, clinical holds), Type B (milestone meetings like Pre-IND, End-of-Phase 2, Pre-NDA), Type C (specific guidance on development questions), and Type D (meetings related to PDUFA). Pre-IND meetings are ideal before filing your IND to align on your development plan. End-of-Phase 2 meetings help finalize pivotal trial design. We recommend Type B meetings at major decision points to reduce downstream risk."
                        },
                        {
                            question: "How far in advance do I need to request a meeting?",
                            answer: "Type B meetings require 60 days' notice—the FDA has 14 days to grant the request, 60 days until the meeting, and you must submit your briefing package 30 days before the meeting. Type A meetings get scheduled within 30 days for clinical holds or disputes. Plan accordingly—if you need summer meeting, request in early spring."
                        },
                        {
                            question: "What should I include in my meeting briefing package?",
                            answer: "Your briefing package should be concise (typically 30-50 pages), focused on the specific questions you're asking, and include relevant data tables, figures, and draft protocols. Lead with your questions, then provide just enough background and rationale. The FDA isn't reviewing your entire program—they're answering your questions. We craft packages that make it easy for reviewers to say yes."
                        },
                        {
                            question: "Can I get a meeting without filing an IND?",
                            answer: "Yes. Pre-IND meetings happen before you file. They're designed to get early feedback on your development plan, CMC strategy, and nonclinical package. These are some of the most valuable meetings because they let you course-correct before investing heavily in trials. We've helped dozens of startups use Pre-IND meetings to validate their entire regulatory strategy."
                        },
                        {
                            question: "What happens if the FDA disagrees with my approach in the meeting?",
                            answer: "FDA meeting minutes document the discussion and agreements, but they're not binding commitments (with rare exceptions). If the FDA raises concerns, you can revise your approach, provide additional data, or request a subsequent meeting. The goal is dialogue. Sometimes the FDA's pushback actually steers you toward a stronger, more approvable design. We help navigate these situations strategically."
                        },
                        {
                            question: "Should I attend the meeting in person or virtually?",
                            answer: "Post-COVID, most meetings are virtual via Microsoft Teams. This is actually beneficial—no travel costs, easy to include global team members, and you can reference documents in real-time. In-person meetings at White Oak are rare now and usually reserved for complex, high-stakes discussions. We've successfully managed hundreds of virtual meetings."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA Guidance: Formal Meetings with FDA",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/formal-meetings-between-fda-and-sponsors-or-applicants-pdufa-products",
                            source: "FDA"
                        },
                        {
                            title: "FDA MAPP 6025.3: Formal Meeting Management",
                            url: "https://www.fda.gov/media/72253/download",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "The mock meeting sessions were invaluable. When the real FDA meeting happened, we were so well-rehearsed that even their tough questions felt manageable. We walked out with exactly the alignment we needed to move forward confidently.",
                        author: "Dr. Emily Watson",
                        role: "CEO",
                        company: "Early-Stage Biotech"
                    }
                }
            },
            {
                slug: "pediatric-study-plans",
                title: "Pediatric Study Plans (PSP/PIP)",
                description: "Strategic development of pediatric plans to meet FDA and EMA requirements.",
                icon: FileText,
                fullContent: {
                    heroTitle: "Pediatric Study Plans (PSP & PIP)",
                    heroSubtitle: "Meeting Obligations While Protecting Your Franchise",
                    introduction: "Pediatric regulations in the US (PREA) and EU (Paediatric Regulation) require early planning for studies in children. We help you navigate these complex requirements, developing Initial Pediatric Study Plans (iPSP) and Paediatric Investigation Plans (PIP) that satisfy regulators without unnecessary burden on your adult development program.",
                    features: [
                        "Waiver and deferral strategies",
                        "iPSP and PIP authorship and negotiation",
                        "Age-appropriate formulation strategy",
                        "Pediatric extrapolation arguments"
                    ],
                    benefits: [
                        "Compliance with mandatory regulations",
                        "Avoidance of submission delays",
                        "Potential for pediatric exclusivity incentives",
                        "Ethical development for pediatric populations"
                    ],
                    process: [
                        { title: "Gap Analysis", description: "Assessing the need for pediatric data based on your indication." },
                        { title: "Plan Development", description: "Drafting the study plan, waiver requests, or deferral rationale." },
                        { title: "Agency Negotiation", description: "Managing the iterative review process with the Pediatric Review Committee." }
                    ],
                    faqs: [
                        {
                            question: "What's the difference between PREA (US) and the Pediatric Regulation (EU)?",
                            answer: "PREA (Pediatric Research Equity Act) in the US requires sponsors to assess the safety and effectiveness of drugs in pediatric populations unless a waiver or deferral is granted. You submit an Initial Pediatric Study Plan (iPSP) before your End-of-Phase 2 meeting. In the EU, the Paediatric Regulation requires a Paediatric Investigation Plan (PIP) to be submitted and agreed upon before filing your Marketing Authorization Application. Both have the same goal but different timelines and negotiation processes."
                        },
                        {
                            question: "When do I need to submit my pediatric plan?",
                            answer: "For the FDA, submit your iPSP no later than 60 days after your End-of-Phase 2 meeting (or before if you're seeking an SPA). For the EMA, submit your PIP before you file for Marketing Authorization—ideally during Phase 2 development. Submitting early allows for smoother negotiations and avoids holding up your adult application."
                        },
                        {
                            question: "Can I get a waiver to avoid pediatric studies?",
                            answer: "Yes, waivers are granted if the disease doesn't occur in children, the drug would be ineffective or unsafe in pediatric populations, or reasonable attempts to develop a pediatric formulation have failed. For example, drugs for Alzheimer's disease or certain cancers only affecting adults typically receive full waivers. We help build the scientific and medical case to support waiver requests."
                        },
                        {
                            question: "What's a deferral and how does it work?",
                            answer: "A deferral allows you to delay pediatric studies until after your adult approval. This is common when you need adult safety data first or when developing an appropriate pediatric formulation takes time. The FDA wants to see a plan and timeline—you're not avoiding pediatric studies, just postponing them. Most applicants defer at least some age groups."
                        },
                        {
                            question: "What are the benefits of getting pediatric exclusivity?",
                            answer: "If you conduct pediatric studies (whether required or voluntary) and receive a Written Request from the FDA, you can earn six months of additional exclusivity tacked onto existing patents and exclusivity periods. For a drug with $500 million in annual sales, that's $250 million in additional revenue. It's a powerful incentive, but studies must be completed as agreed."
                        },
                        {
                            question: "How complex are pediatric formulation requirements?",
                            answer: "Very. Pediatric formulations often require age-appropriate forms (liquid instead of tablets for infants, smaller dosages, palatable flavors). The FDA and EMA want evidence you've made reasonable efforts to develop appropriate formulations for each age group. We work with formulation scientists to develop realistic strategies that satisfy regulators without requiring heroic development efforts."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA Guidance: Pediatric Study Plans",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pediatric-study-plans-content-and-process",
                            source: "FDA"
                        },
                        {
                            title: "EMA: Paediatric Investigation Plans",
                            url: "https://www.ema.europa.eu/en/human-regulatory/research-development/paediatric-medicines/paediatric-investigation-plans",
                            source: "EMA"
                        },
                        {
                            title: "ICH E11: Clinical Investigation of Medicinal Products in the Pediatric Population",
                            url: "https://database.ich.org/sites/default/files/E11_Guideline.pdf",
                            source: "ICH"
                        }
                    ],
                    testimonial: {
                        quote: "We were dreading the pediatric requirements, thinking it would delay our adult program. Adelphi helped us craft a deferral strategy that the FDA accepted, allowing us to move forward with adult trials while planning pediatric studies post-approval. It saved us at least a year.",
                        author: "Dr. Rachel Kim",
                        role: "Head of Clinical Development",
                        company: "Specialty Pharma"
                    }
                }
            },
            {
                slug: "orphan-drug-designation",
                title: "Orphan Drug Designations",
                description: "Secure special status for rare disease treatments to gain financial incentives.",
                icon: Lightbulb,
                fullContent: {
                    heroTitle: "Orphan Drug Designation",
                    heroSubtitle: "Unlocking Incentives for Rare Disease Innovation",
                    introduction: "Developing drugs for rare diseases presents unique challenges and opportunities. Orphan Drug Designation (ODD) offers significant benefits, including tax credits, fee waivers, and market exclusivity. We help you craft a compelling argument to demonstrate the rarity of your disease and the scientific rationale for your therapy.",
                    features: [
                        "Prevalence calculation and verification",
                        "Scientific rationale development",
                        "ODD application authorship (FDA & EMA)",
                        "Annual report maintenance"
                    ],
                    benefits: [
                        "7 years of market exclusivity (US)",
                        "Tax credits for clinical testing expenses",
                        "Waiver of NDA/BLA application fees",
                        "Regulatory assistance and guidance"
                    ],
                    process: [
                        { title: "Feasibility Assessment", description: "Verifying your disease and prevalence data meet criteria." },
                        { title: "Application Drafting", description: "Compiling the scientific and epidemiological data into a robust application." },
                        { title: "Submission & Follow-up", description: "Handling the submission and responding to any agency information requests." }
                    ],
                    faqs: [
                        {
                            question: "What qualifies as a rare disease for orphan drug designation?",
                            answer: "In the US, a disease affecting fewer than 200,000 people qualifies. Alternatively, if it affects more than 200,000, you can still qualify if there's no reasonable expectation that drug sales will recover development costs. In the EU, the threshold is fewer than 5 in 10,000 people (roughly 250,000 in the EU). The US definition is more commonly met."
                        },
                        {
                            question: "Can I get orphan designation for a subset of a common disease?",
                            answer: "Yes, with the right approach. For example, a specific genetic mutation causing a rare form of cancer, or a rare subtype like hereditary angioedema (HAE) within the broader category of angioedema. The key is demonstrating that the medically plausible subset is truly distinct and affects fewer than 200,000 people. We help define the subset in a scientifically defensible way."
                        },
                        {
                            question: "When should I apply for orphan designation?",
                            answer: "You can apply anytime before filing your NDA or BLA, but earlier is better. Many sponsors apply during Phase 1 or even pre-IND to take advantage of tax credits on clinical trial costs. The FDA typically responds within 90 days. Orphan designation also helps with fundraising—it's a tangible regulatory milestone that signals commitment to rare disease."
                        },
                        {
                            question: "What happens if another drug gets approved first in my orphan indication?",
                            answer: "If a competing drug receives orphan exclusivity for the same indication, the FDA generally won't approve your drug for seven years unless you can show clinical superiority (greater efficacy, greater safety, or a major contribution to patient care). This is why timing matters. We help you assess the competitive landscape and file strategically."
                        },
                        {
                            question: "What are the tax credits worth?",
                            answer: "The Orphan Drug Tax Credit provides a 25% credit on qualified clinical testing expenses (recently reduced from 50%). For a company spending $10 million on clinical trials, that's $2.5 million back. This is a dollar-for-dollar reduction in tax liability, not just a deduction. For small biotechs, these credits can be carried forward and even monetized through certain arrangements."
                        },
                        {
                            question: "Do I need to maintain the orphan designation after approval?",
                            answer: "Yes. You must submit annual reports to the FDA documenting continued compliance with orphan regulations and demonstrating progress toward marketing the drug. If you fail to show good faith efforts to market the drug for the rare disease, the FDA can revoke exclusivity. We handle these annual filings to ensure you maintain your designation."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Orphan Drug Designation Program",
                            url: "https://www.fda.gov/industry/medical-products-rare-diseases-and-conditions/designating-orphan-product-drugs-and-biological-products",
                            source: "FDA"
                        },
                        {
                            title: "EMA: Orphan Designation",
                            url: "https://www.ema.europa.eu/en/human-regulatory/overview/orphan-designation",
                            source: "EMA"
                        },
                        {
                            title: "FDA Guidance: Rare Diseases - Common Issues in Development",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/rare-diseases-common-issues-drug-development-guidance-industry",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "Securing orphan designation was critical for our investors and our economics. Adelphi's prevalence analysis was rock-solid, and the FDA accepted our application without any additional questions. The exclusivity alone makes our business model viable.",
                        author: "Michael Torres",
                        role: "CFO",
                        company: "Rare Disease Startup"
                    }
                }
            }
        ]
    },
    "cmc-quality": {
        id: "cmc-quality",
        title: "CMC & Quality Compliance",
        deliverables: [
            {
                slug: "module-3-authorship",
                title: "Module 3 Authorship & Review",
                description: "Comprehensive writing and critical review of CTD Module 3 (Quality).",
                icon: FileCheck,
                fullContent: {
                    heroTitle: "Module 3 Authorship & Review",
                    heroSubtitle: "Translating Technical Data into Regulatory Success",
                    introduction: "Module 3 is often the most complex and scrutinized section of any regulatory submission. Our CMC experts don't just write; we craft a narrative that links your manufacturing process, control strategy, and stability data to patient safety. We ensure your Quality dossier is scientifically sound, compliant with ICH guidelines, and ready for approval.",
                    features: [
                        "Drug Substance (3.2.S) & Drug Product (3.2.P) writing",
                        "QOS (Module 2.3) preparation",
                        "Justification of specifications",
                        "Change control integration"
                    ],
                    benefits: [
                        "Fewer Information Requests during review",
                        "Robust defense of control strategies",
                        "Consistency across global submissions",
                        "Clear traceability of data"
                    ],
                    process: [
                        { title: "Data Review", description: "Auditing your raw data and reports for completeness and accuracy." },
                        { title: "Narrative Construction", description: "Building the story of your product's development and quality control." },
                        { title: "Gap Remediation", description: "Identifying and fixing missing links before the agency sees them." }
                    ],
                    faqs: [
                        {
                            question: "What's typically the biggest issue FDA finds in Module 3?",
                            answer: "Inadequate justification of specifications. The FDA wants to see how you arrived at your acceptance criteria—not just the number, but the rationale. If your impurity limit is 0.5%, you need data showing this is safe and achievable. We ensure every spec has a clear link to safety, efficacy, and manufacturing capability."
                        },
                        {
                            question: "How detailed should my manufacturing description be?",
                            answer: "Detailed enough that inspectors can verify what you've written matches what they see at your facility. You don't need to reveal proprietary processes in excruciating detail, but you must describe critical steps, parameters, and controls. We strike the balance between transparency and IP protection."
                        },
                        {
                            question: "Do I need analytical validation data in Module 3?",
                            answer: "Yes. Module 3.2.S.4 and 3.2.P.5 require method validation summaries demonstrating that your analytical methods are suitable. Full validation reports go in Module 3.2.P.5.3 or regional modules. We organize your analytical package to streamline reviewer assessment."
                        },
                        {
                            question: "What's the difference between Module 2.3 (QOS) and Module 3?",
                            answer: "Module 2.3 is the executive summary of your quality data, written for reviewers who aren't CMC specialists. Module 3 is the detailed technical data package. Think of 2.3 as the 'highlights reel' and Module 3 as the complete game footage. Both must tell the same story."
                        },
                        {
                            question: "How often do CMC deficiencies delay approval?",
                            answer: "More often than you'd think. CDER data shows CMC issues are among the top reasons for RTF (Refuse to File) and Complete Response Letters. A well-written Module 3 prevents these delays. We've never had a client receive RTF due to Module 3 deficiencies."
                        },
                        {
                            question: "Can I use a CMC submittal for multiple regions?",
                            answer: "Yes, with modifications. The CTD format (Modules 1-5) is harmonized across ICH regions, but each region has specific requirements—the EU wants a plasma master file (PMF) for biologics, Japan may need additional stability data. We create a core dossier you can adapt regionally."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "ICH M4Q: Quality - The Common Technical Document",
                            url: "https://database.ich.org/sites/default/files/M4Q_R1_Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "FDA Guidance: CTD Module 3 - Quality",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/m4-organization-common-technical-document-human-drug-applications",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "Our Module 3 was scrutinized heavily during review, but Adelphi's documentation was so thorough that we received zero CMC-related information requests. The reviewers even complimented our clarity.",
                        author: "Jennifer Liu",
                        role: "VP Quality",
                        company: "Mid-Size Biotech"
                    }
                }
            },
            {
                slug: "gmp-compliance-audits",
                title: "GMP Compliance Audits",
                description: "Mock inspections and gap analyses to ensure inspection readiness.",
                icon: ShieldCheck,
                fullContent: {
                    heroTitle: "GMP Compliance Audits",
                    heroSubtitle: "Ensuring Your Facilities Are Inspection-Ready",
                    introduction: "A failed inspection can derail a product launch or shut down operations. Our former FDA and industry auditors conduct rigorous mock inspections and gap analyses to stress-test your Quality Management System (QMS). We identify vulnerabilities in your facility, equipment, and documentation before the regulators arrive.",
                    features: [
                        "Mock FDA/EMA inspections (PAI, Routine)",
                        "Vendor and supplier qualification audits",
                        "Data integrity assessments",
                        "QMS gap analysis"
                    ],
                    benefits: [
                        "Reduced risk of Form 483s and Warning Letters",
                        "Confidence in supplier quality",
                        "Actionable remediation plans",
                        "Staff preparation and coaching"
                    ],
                    process: [
                        { title: "Pre-Audit Planning", description: "Defining the scope and agenda tailored to your specific risks." },
                        { title: "On-Site Execution", description: "Conducting the audit with the rigor of a health authority inspector." },
                        { title: "Reporting & CAPA", description: "Delivering a detailed report and helping you build a Corrective Action plan." }
                    ],
                    faqs: [
                        {
                            question: "What's the difference between a PAI and a routine GMP inspection?",
                            answer: "A Pre-Approval Inspection (PAI) happens before drug approval to verify your manufacturing is consistent with your application. They're intense, focused audits. Routine inspections happen periodically after approval. PAIs have higher stakes—deficiencies can delay or even derail approval."
                        },
                        {
                            question: "How should I prepare for an FDA inspection?",
                            answer: "Start 6-12 months early. Conduct mock inspections, ensure your data integrity controls are bulletproof, train your team on interview techniques, and organize your document repository. The FDA can show up unannounced for cause, but PAIs are scheduled. We run realistic mock inspections that mirror FDA behavior."
                        },
                        {
                            question: "What are the most common Form 483 observations?",
                            answer: "Data integrity issues (ALCOA+ principles), inadequate investigations of deviations, insufficient cleaning validation, and procedural gaps. Many stem from documentation—either incomplete or inconsistent. Our audits identify these before the FDA does."
                        },
                        {
                            question: "Can supplier issues affect my approval?",
                            answer: "Absolutely. If your API supplier or critical raw material vendor has quality issues, it's your problem. The FDA expects you to qualify and monitor suppliers rigorously. We conduct supplier audits to ensure they won't become your liability."
                        },
                        {
                            question: "What's data integrity and why is the FDA obsessed with it?",
                            answer: "Data integrity means your data is Attributable, Legible, Contemporaneous, Original, and Accurate (ALCOA). Modern guidance adds (+) Complete, Consistent, Enduring, and Available. The FDA has seen too many cases of data manipulation. Expect intense scrutiny of electronic records, audit trails, and lab notebooks."
                        },
                        {
                            question: "How long does an FDA inspection typically last?",
                            answer: "PAIs typically run 3-5 days for small molecules, up to a week or more for biologics or complex manufacturing. Routine inspections are similar. Every day matters—a well-prepared team can make the difference between 'no observations' and a Warning Letter."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA Guidance: Data Integrity and Compliance with Drug CGMP",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers-guidance-industry",
                            source: "FDA"
                        },
                        {
                            title: "ICH Q10: Pharmaceutical Quality System",
                            url: "https://database.ich.org/sites/default/files/Q10%20Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "FDA Guidance: Process Validation",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "The mock inspection Adelphi ran was tougher than the real FDA PAI. When inspectors arrived, our team was ready. No Form 483.",
                        author: "Mark Stevens",
                        role: "QA Director",
                        company: "Contract Manufacturing Organization"
                    }
                }
            },
            {
                slug: "21-cfr-part-11",
                title: "21 CFR Part 11 Compliance",
                description: "Validation and documentation support for electronic records and signatures.",
                icon: Database,
                fullContent: {
                    heroTitle: "21 CFR Part 11 Compliance",
                    heroSubtitle: "Digital Integrity in a Regulated World",
                    introduction: "As pharma goes digital, compliance with 21 CFR Part 11 (and EU Annex 11) is non-negotiable. We help you validate your electronic systems to ensure data integrity, security, and traceability. From eQMS to LIMS, we ensure your digital footprint meets the highest regulatory standards.",
                    features: [
                        "System validation (IQ/OQ/PQ)",
                        "Electronic signature implementation",
                        "Audit trail review and remediation",
                        "User access control policies"
                    ],
                    benefits: [
                        "Assurance of data integrity",
                        "Passage of specialized data audits",
                        "Streamlined electronic workflows",
                        "Reduced risk of data tampering"
                    ],
                    process: [
                        { title: "Inventory & Assessment", description: "Cataloging your systems and determining Part 11 applicability." },
                        { title: "Validation Execution", description: "Testing systems to prove they perform as intended and secure data." },
                        { title: "SOP Development", description: "Writing the procedures that govern system use and maintenance." }
                    ],
                    faqs: [
                        {
                            question: "What systems need to be Part 11 compliant?",
                            answer: "Any electronic system used to create, modify, maintain, or transmit records required by other FDA regulations. This includes LIMS, ERP systems, electronic batch records, analytical instruments with data output, and stability chambers. If it touches GMP data, it likely needs Part 11 controls."
                        },
                        {
                            question: "What's the difference between Part 11 compliance and data integrity?",
                            answer: "Part 11 is the specific US regulation governing electronic records and signatures. Data integrity is the broader concept (global) ensuring your data is trustworthy. Part 11 is a subset of data integrity focused on US GMP requirements. Good data integrity practices generally satisfy Part 11."
                        },
                        {
                            question: "Do I need to validate every software update?",
                            answer: "Not necessarily. The FDA distinguishes between software validation (ensuring it does what it's supposed to) and change control (managing updates). Minor patches may only need impact assessment and testing. Major version upgrades typically require revalidation. We help you risk-assess each change."
                        },
                        {
                            question: "Can I use cloud-based systems for GMP data?",
                            answer: "Yes, but with caveats. The FDA accepts cloud systems if you can demonstrate data security, backup procedures, audit trails, and the ability to retrieve data for inspection. You retain ultimate responsibility even if the vendor hosts the data. We help structure vendor agreements to ensure compliance."
                        },
                        {
                            question: "What are the biggest Part 11 violations companies make?",
                            answer: "Shared logins (violates authentication requirements), inadequate audit trails (no record of who changed what and when), lack of system validation documentation, and insufficient training. Many of these are easy fixes if caught early."
                        },
                        {
                            question: "How do I demonstrate compliance during an inspection?",
                            answer: "Be ready to show: system validation documentation, SOPs for electronic record management, audit trail reports, training records, and evidence of periodic review. Inspectors will often ask to see 'who changed this batch record and when?' Your system better have an answer."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: 21 CFR Part 11 - Electronic Records and Electronic Signatures",
                            url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11",
                            source: "FDA"
                        },
                        {
                            title: "FDA Guidance: Data Integrity and Compliance with Drug CGMP",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers-guidance-industry",
                            source: "FDA"
                        },
                        {
                            title: "ISPE GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems",
                            url: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition",
                            source: "ISPE"
                        }
                    ],
                    testimonial: {
                        quote: "We thought our Part 11 controls were solid until Adelphi's audit revealed gaps we hadn't considered. Fixing them before our PAI was a lifesaver.",
                        author: "Dr. Anita Patel",
                        role: "VP Quality",
                        company: "Emerging Biotech"
                    }
                }
            },
            {
                slug: "stability-data-assessment",
                title: "Stability Data Assessment",
                description: "Design and analysis of stability protocols to support shelf-life claims.",
                icon: Activity,
                fullContent: {
                    heroTitle: "Stability Data Assessment",
                    heroSubtitle: "Securing Your Product's Shelf Life",
                    introduction: "Stability data is the clock ticking on your product's commercial viability. We design robust stability protocols compliant with ICH Q1 guidelines and analyze your data to support maximum shelf-life claims. We help you handle excursions, trends, and out-of-specification (OOS) results effectively.",
                    features: [
                        "Protocol design (bracketing/matrixing)",
                        "Statistical analysis for shelf-life extrapolation",
                        "Temperature excursion assessment",
                        "Photostability and forced degradation studies"
                    ],
                    benefits: [
                        "Maximized commercial shelf life",
                        "Robust support for storage conditions",
                        "Global climate zone compliance",
                        "Scientific defense of data trends"
                    ],
                    process: [
                        { title: "Protocol Design", description: "Creating efficient studies that cover all necessary conditions and timepoints." },
                        { title: "Data Monitoring", description: "Ongoing review of data to catch trends early." },
                        { title: "Reporting", description: "Authoring stability reports for annual updates and submissions." }
                    ],
                    faqs: [
                        {
                            question: "How much stability data do I need to file an NDA?",
                            answer: "For commercial batches: at least 12 months of long-term stability data at commercial scale (ICH Q1A). You can file with 6 months if you commit to continue testing and submit annual updates. For registration batches, 12 months is the minimum for most regions. We help design protocols that satisfy all regions simultaneously."
                        },
                        {
                            question: "What's the difference between real-time and accelerated stability?",
                            answer: "Real-time stability is conducted at your proposed storage condition (e.g., 25°C/60% RH for room temperature storage). Accelerated stability uses elevated stress conditions (e.g., 40°C/75% RH) to predict long-term behavior quickly. Both are required—real-time supports your shelf life claim, accelerated identifies degradation pathways early."
                        },
                        {
                            question: "Can I extrapolate shelf life beyond my actual data?",
                            answer: "To some extent. If you have 12 months of data and a linear degradation trend, you might support an 18-month shelf life with a commitment to continue testing. The FDA rarely grants more than 2x your actual data. Extrapolation is a negotiation point—we help make the statistical case."
                        },
                        {
                            question: "What happens if a stability batch fails specifications?",
                            answer: "First, investigate. Is it real degradation or an analytical artifact? If real, you may need to reduce your shelf life claim, revise specifications, or implement additional controls. Depending on timing, this can delay approval. We build contingency plans into stability protocols."
                        },
                        {
                            question: "Do I need stability data from my commercial manufacturer?",
                            answer: "Yes. Registration stability should ideally be from the to-be-marketed site. If you're switching manufacturers post-approval, you'll need comparability data and bridging stability from the new site. The FDA wants assurance that the product they approved is what patients will receive."
                        },
                        {
                            question: "How often do I test after approval?",
                            answer: "Confirmed shelf life requires annual stability testing on at least one commercial batch per year (more if you have multiple strengths or presentations). This is an ongoing commitment. If you slack off, inspectors will notice and your shelf life could be questioned."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "ICH Q1A(R2): Stability Testing of New Drug Substances and Products",
                            url: "https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "ICH Q1E: Evaluation of Stability Data",
                            url: "https://database.ich.org/sites/default/files/Q1E%20Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "FDA Guidance: Expiration Dating and Stability Testing",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/expiration-dating-and-stability-testing-human-drug-products",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "Our stability protocol was overly complex and inefficient. Adelphi redesigned it to meet all regional requirements with 40% fewer timepoints. Smart science, better economics.",
                        author: "Tom Richardson",
                        role: "CMC Lead",
                        company: "Global Pharmaceutical"
                    }
                }
            },
            {
                slug: "impurity-qualification",
                title: "Impurity Qualification",
                description: "Strategic guidance on qualifying impurities and degradants.",
                icon: Microscope,
                fullContent: {
                    heroTitle: "Impurity Qualification Strategy",
                    heroSubtitle: "Managing Safety Risks in Your Drug Substance",
                    introduction: "Impurities are inevitable, but their risk must be managed. We guide you through the complex landscape of ICH Q3A/B/C/D guidelines to identify, control, and qualify impurities, degradants, and residual solvents. We help you design the right toxicology studies to justify specification limits.",
                    features: [
                        "Genotoxic impurity assessment (ICH M7)",
                        "Elemental impurity risk assessment (ICH Q3D)",
                        "Qualification study design",
                        "Specification limit justification"
                    ],
                    benefits: [
                        "Patient safety assurance",
                        "Regulatory acceptance of specifications",
                        "Avoidance of clinical holds",
                        "Clear control strategy"
                    ],
                    process: [
                        { title: "Risk Identification", description: "Screening your process for potential impurities and degradants." },
                        { title: "Toxicological Evaluation", description: "Comparing levels against safety thresholds (TTC, PDE)." },
                        { title: "Control Strategy", description: "Implementing process controls or testing to keep levels safe." }
                    ],
                    faqs: [
                        {
                            question: "What's the difference between identification, qualification, and specification?",
                            answer: "Identification means you know the structure of an impurity. Qualification means you've evaluated its safety (toxicology if needed). Specification is the acceptance limit you set. You must identify/qualify any impurity above ICH thresholds before commercializing."
                        },
                        {
                            question: "At what level do I need to qualify impurities?",
                            answer: "Per ICH Q3A/Q3B: ≥0.1% for drug substance, ≥0.1% for drug product (or even lower for very high doses). Below these thresholds, identification/qualification may not be needed. Above them, you need a safety rationale—either tox studies or scientific justification."
                        },
                        {
                            question: "Can I use literature data to qualify an impurity?",
                            answer: "Sometimes. If your impurity is a known compound with published safety data (e.g., a USP degradant or a metabolite), you can reference that literature rather than conducting new animal studies. We're experts at finding and leveraging existing data to avoid costly tox studies."
                        },
                        {
                            question: "What if an impurity shows up late in development?",
                            answer: "If it's a new impurity not seen in clinical batches, it's a problem. You'll need to either demonstrate it's safe (qualification), prove it was below detection limits earlier (not truly 'new'), or revise your manufacturing process to control it. Late-stage impurity issues delay filings."
                        },
                        {
                            question: "How does the FDA view process-related impurities vs. degradants?",
                            answer: "Process-related impurities (from synthesis) are controlled through manufacturing. Degradants (formed over time) are controlled through formulation and packaging. Both need qualification if above thresholds, but degradants also drive your stability program. We integrate impurity control into both process design and stability strategy."
                        },
                        {
                            question: "Do I need to test for mutagenic impurities?",
                            answer: "Yes, per ICH M7. Certain chemical classes (e.g., alkyl halides, nitrosamines) have mutagenic potential. Even if you don't detect them, you must perform a risk assessment and have a control strategy. Recently, nitrosamine impurities have caused major product recalls. We conduct ICH M7 assessments proactively."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "ICH Q3A(R2): Impurities in New Drug Substances",
                            url: "https://database.ich.org/sites/default/files/Q3A%28R2%29%20Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "ICH Q3B(R2): Impurities in New Drug Products",
                            url: "https://database.ich.org/sites/default/files/Q3B%28R2%29%20Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "ICH M7(R2): Assessment and Control of DNA Reactive (Mutagenic) Impurities",
                            url: "https://database.ich.org/sites/default/files/M7%28R2%29%20Guideline.pdf",
                            source: "ICH"
                        }
                    ],
                    testimonial: {
                        quote: "An unexpected impurity appeared in our pivotal batches at 0.12%. Adelphi found published safety data that qualified it without delaying our NDA. That saved us 6 months and $500K in tox studies.",
                        author: "Dr. Lisa Park",
                        role: "Development Chemist",
                        company: "Specialty Pharma"
                    }
                }
            }
        ]
    },
    "fda-submissions": {
        id: "fda-submissions",
        title: "FDA Submissions",
        deliverables: [
            {
                slug: "ind-nda-bla-authoring",
                title: "IND, NDA, & BLA Authoring",
                description: "End-to-end management of major applications.",
                icon: FileText,
                fullContent: {
                    heroTitle: "IND, NDA, & BLA Authoring",
                    heroSubtitle: "The Core of Your Regulatory Journey",
                    introduction: "The submission of an IND, NDA, or BLA is a monumental milestone. We provide end-to-end management of these critical applications. Our team of medical writers, regulatory strategists, and publishers work in unison to produce a high-quality, scientifically cohesive dossier that tells the story of your drug's safety and efficacy.",
                    features: [
                        "Module 1-5 authorship and compilation",
                        "Integrated Summary of Safety/Efficacy (ISS/ISE)",
                        "Clinical Study Report (CSR) writing",
                        "Submission project management"
                    ],
                    benefits: [
                        "Cohesive scientific narrative",
                        "Reduced review times",
                        "Minimized technical rejection risk",
                        "Full team alignment"
                    ],
                    process: [
                        { title: "Kick-off & Planning", description: "Establishing the timeline, TOC, and resource plan." },
                        { title: "Content Creation", description: "Iterative drafting and review of all submission components." },
                        { title: "Finalization", description: "Quality control, publishing, and transmission to the FDA." }
                    ],
                    faqs: [
                        {
                            question: "What's the difference between an IND, NDA, and BLA?",
                            answer: "An IND (Investigational New Drug application) allows you to begin clinical trials in humans—it's required before Phase 1 studies. An NDA (New Drug Application) is what you submit after clinical trials to get marketing approval for small-molecule drugs. A BLA (Biologics License Application) serves the same purpose as an NDA but is for biological products like monoclonal antibodies, vaccines, and cell therapies."
                        },
                        {
                            question: "How long does it take the FDA to review an NDA or BLA?",
                            answer: "Under PDUFA VII (2023-2027), the FDA commits to reviewing 90% of standard NDA/BLA applications within 10 months of the 60-day filing date. Priority Review applications have a 6-month goal. These are action dates, meaning FDA will issue either an approval or a Complete Response Letter by then."
                        },
                        {
                            question: "What are the most common reasons for Refuse to File (RTF)?",
                            answer: "RTF decisions often stem from incomplete CMC data, missing clinical study reports, inadequate safety databases, or poorly organized submissions. Technical formatting issues with eCTD can also trigger rejection. We conduct pre-submission quality reviews to catch these issues before Day 60."
                        },
                        {
                            question: "Can the FDA place my IND on clinical hold?",
                            answer: "Yes. Under 21 CFR 312.42, the FDA can issue a clinical hold if the IND doesn't contain sufficient safety information, if the protocol exposes subjects to unreasonable risk, or if the investigators are unqualified. We structure IND submissions to minimize hold risk and respond rapidly if one occurs."
                        },
                        {
                            question: "What's the 30-day review period for INDs?",
                            answer: "After you submit an IND, there's a mandatory 30-day waiting period before you can begin clinical trials. If FDA doesn't respond with concerns or a clinical hold within 30 days, you may proceed. However, silence isn't approval—it just means you can start your trial. The IND remains active and subject to ongoing FDA oversight."
                        },
                        {
                            question: "Do I need separate INDs for different indications?",
                            answer: "Not necessarily. You can add new indications to an existing IND through protocol amendments. However, some sponsors maintain separate INDs for strategic reasons—keeping programs independent or managing different development teams. We help you decide the best IND architecture for your portfolio."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "21 CFR Part 312: Investigational New Drug Application",
                            url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312",
                            source: "FDA"
                        },
                        {
                            title: "FDA Guidance: IND Applications for Sponsor-Investigators",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/investigational-new-drug-applications-prepared-and-submitted-sponsor-investigators",
                            source: "FDA"
                        },
                        {
                            title: "FDA Guidance: Content and Format of INDs for Phase 1 Studies",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/content-and-format-investigational-new-drug-applications-inds-phase-1-studies-drugs-including",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "Our NDA was a massive undertaking with 18 clinical studies. Adelphi's project management kept 40 contributors on track, and we filed on schedule. The FDA accepted our submission without any filing issues.",
                        author: "Dr. Robert Chen",
                        role: "SVP Regulatory Affairs",
                        company: "Mid-Size Pharma"
                    }
                }
            },
            {
                slug: "ectd-publishing",
                title: "eCTD Publishing & Validation",
                description: "Technical preparation of your dossier in the mandatory eCTD format.",
                icon: UploadCloud,
                fullContent: {
                    heroTitle: "eCTD Publishing & Validation",
                    heroSubtitle: "Technical Precision for Seamless Review",
                    introduction: "A great drug can be delayed by a bad submission format. We handle the technical complexities of electronic Common Technical Document (eCTD) publishing. We ensure your submission is hyperlinked, bookmarked, and validated against the latest FDA criteria, ensuring a smooth technical screening process.",
                    features: [
                        "Document level publishing (PDF rendering)",
                        "XML backbone creation",
                        "Hyperlinking and bookmarking",
                        "Validation and error resolution"
                    ],
                    benefits: [
                        "Zero technical refusals",
                        "Enhanced reviewer navigation",
                        "Lifecycle management readiness",
                        "Compliance with e-submission mandates"
                    ],
                    process: [
                        { title: "Source Review", description: "Checking source documents for formatting and legibility." },
                        { title: "Publishing", description: "Building the eCTD structure and linking documents." },
                        { title: "Validation", description: "Running validation software to catch and fix errors before submission." }
                    ],
                    faqs: [
                        {
                            question: "What is eCTD and why is it required?",
                            answer: "eCTD (electronic Common Technical Document) is the mandatory format for submitting applications to the FDA, EMA, and most global regulatory agencies. It standardizes how documents are organized (Modules 1-5), enables hyperlinking between sections, and creates a consistent XML backbone for lifecycle management. FDA has required eCTD for most submissions since May 2017."
                        },
                        {
                            question: "What versions of eCTD does the FDA accept?",
                            answer: "The FDA currently accepts eCTD v3.2.2 and v4.0. As of September 2024, new applications can be submitted in v4.0 format, which offers improved lifecycle management and messaging capabilities. However, existing applications must continue in v3.2.2 until forward compatibility is available. We help you navigate versioning decisions."
                        },
                        {
                            question: "What happens if my submission fails validation?",
                            answer: "The FDA will reject submissions that fail high-severity validation errors. Since October 2021, validations 1551 and 1553 (related to document referencing) trigger automatic rejection. Validations 1306 and 1323 were added in March 2022. We run the same validation software FDA uses to catch errors before you submit."
                        },
                        {
                            question: "How should I format documents for eCTD?",
                            answer: "All documents must be PDF format with specific requirements: properly bookmarked, with working hyperlinks, text must be searchable (not scanned images), and files should be reasonably sized. FDA forms must be electronic fillable versions with e-signatures—scanned forms are rejected. We provide document preparation guidelines to your authors."
                        },
                        {
                            question: "Can I submit large files through the FDA gateway?",
                            answer: "Submissions up to 10 GB can go through the FDA Electronic Submissions Gateway (ESG). Larger submissions require special arrangements. Clinical study data in SEND format can significantly increase file sizes. We optimize file sizes and coordinate with FDA when exceptions are needed."
                        },
                        {
                            question: "How do I manage ongoing amendments and supplements in eCTD?",
                            answer: "eCTD is designed for lifecycle management. Each submission sequence builds on the previous one, with the XML backbone tracking what's new, replaced, or deleted. This requires careful planning—especially when multiple amendments are in progress simultaneously. We maintain your submission history and ensure each sequence is technically correct."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Electronic Common Technical Document (eCTD)",
                            url: "https://www.fda.gov/drugs/electronic-regulatory-submission-and-review/electronic-common-technical-document-ectd",
                            source: "FDA"
                        },
                        {
                            title: "FDA: eCTD Technical Conformance Guide",
                            url: "https://www.fda.gov/media/119751/download",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Specifications for eCTD Validation Criteria",
                            url: "https://www.fda.gov/drugs/electronic-regulatory-submission-and-review/ectd-validation-criteria",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "We had a last-minute CMC amendment that needed to be published in 48 hours. Adelphi's publishing team worked through the weekend and delivered a clean, validated sequence. No technical issues flagged by FDA.",
                        author: "Sandra Williams",
                        role: "Regulatory Operations Director",
                        company: "Biotech Company"
                    }
                }
            },
            {
                slug: "505b2-applications",
                title: "505(b)(2) Applications",
                description: "Specialized support for streamlined approval pathways.",
                icon: BookOpen,
                fullContent: {
                    heroTitle: "505(b)(2) NDA Pathway",
                    heroSubtitle: "Accelerating Innovation through Existing Data",
                    introduction: "The 505(b)(2) pathway allows you to leverage existing public data to accelerate approval and reduce costs. We are experts in this nuanced pathway, helping you identify the right 'bridge' to the listed drug and constructing a scientific argument that minimizes your own clinical burden.",
                    features: [
                        "Reference Listed Drug (RLD) selection",
                        "Bridging study strategy",
                        "Patent certification (Paragraph IV)",
                        "Labeling carve-outs"
                    ],
                    benefits: [
                        "Reduced clinical trial costs",
                        "Faster time to market",
                        "Lower development risk",
                        "Market exclusivity opportunities"
                    ],
                    process: [
                        { title: "Feasibility", description: "Determining if your product qualifies and identifying the RLD." },
                        { title: "Gap Analysis", description: "Identifying what new data is needed vs. what can be bridged." },
                        { title: "Submission", description: "Crafting the unique 505(b)(2) argument in your NDA." }
                    ],
                    faqs: [
                        {
                            question: "What exactly is a 505(b)(2) NDA?",
                            answer: "A 505(b)(2) NDA is a hybrid application that relies partly on your own data and partly on the FDA's previous findings for an approved 'listed drug' or published literature. It's defined in Section 505(b)(2) of the Federal Food, Drug, and Cosmetic Act. This pathway is ideal for modifications to existing drugs—new formulations, new routes, new combinations, or new indications."
                        },
                        {
                            question: "How is 505(b)(2) different from a generic (ANDA)?",
                            answer: "An ANDA (505(j)) requires your product to be pharmaceutically equivalent and bioequivalent to the Reference Listed Drug—same active ingredient, same dosage form, same route. A 505(b)(2) allows differences from the RLD but requires you to establish a 'bridge' showing your product is safe and effective. This bridge often involves clinical pharmacology studies rather than full Phase 3 trials."
                        },
                        {
                            question: "What bridging studies are typically required?",
                            answer: "The most common bridge is a single-dose bioavailability/bioequivalence study comparing your product to the RLD. For oral products, this typically includes a food effect study. About 70% of approved 505(b)(2) NDAs used a BA/BE study as the primary bridge. Depending on your changes, you might also need local tolerability studies, pharmacokinetic studies in special populations, or limited efficacy data."
                        },
                        {
                            question: "Can I use 505(b)(2) for a new indication?",
                            answer: "Yes, but you'll likely need clinical efficacy data for the new indication. You can still reference the RLD's safety database rather than generating your own from scratch. For example, if you're pursuing a new indication for an existing molecule, your 505(b)(2) might include one pivotal efficacy study plus the RLD's established safety profile."
                        },
                        {
                            question: "What are the patent certification requirements?",
                            answer: "Like an ANDA, a 505(b)(2) must include patent certifications for any patents listed in the Orange Book for the RLD. A Paragraph IV certification (claiming the patent is invalid or not infringed) can trigger a 45-day period for the patent holder to sue, potentially resulting in a 30-month stay. We help you navigate the patent landscape strategically."
                        },
                        {
                            question: "How popular is the 505(b)(2) pathway?",
                            answer: "Increasingly popular. In 2024, 505(b)(2) approvals accounted for about 40% of all new FDA drug approvals, outpacing generic approvals. Companies are using it strategically to extend product lifecycles, enter markets with differentiated products, and reduce development costs compared to full NDAs."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA Guidance: Applications Covered by Section 505(b)(2)",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/applications-covered-section-505b2",
                            source: "FDA"
                        },
                        {
                            title: "FDA Guidance: Determining Whether to Submit an ANDA or 505(b)(2)",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/determining-whether-submit-anda-or-505b2-application",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Orange Book (Approved Drug Products)",
                            url: "https://www.accessdata.fda.gov/scripts/cder/ob/index.cfm",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "We thought we'd need full clinical trials for our extended-release formulation. Adelphi identified a 505(b)(2) pathway that required only a PK bridging study. We saved three years and $30 million in development costs.",
                        author: "Dr. Michelle Torres",
                        role: "Chief Scientific Officer",
                        company: "Specialty Pharma"
                    }
                }
            },
            {
                slug: "fast-track-breakthrough",
                title: "Fast Track & Breakthrough Requests",
                description: "Compelling arguments for expedited programs.",
                icon: Zap,
                fullContent: {
                    heroTitle: "Expedited Programs",
                    heroSubtitle: "Speeding Therapies to Patients in Need",
                    introduction: "For drugs treating serious conditions with unmet needs, time is of the essence. We help you apply for FDA expedited programs like Fast Track, Breakthrough Therapy, and Priority Review. We craft the medical arguments that demonstrate your drug's potential to significantly improve patient outcomes.",
                    features: [
                        "Designation request authorship",
                        "Unmet medical need justification",
                        "Preliminary clinical evidence presentation",
                        "Rolling review planning"
                    ],
                    benefits: [
                        "More frequent FDA interactions",
                        "Rolling review of the NDA/BLA",
                        "Reduced review clock (6 months vs 10)",
                        "Organizational commitment from FDA"
                    ],
                    process: [
                        { title: "Data Assessment", description: "Evaluating if your data meets the high bar for designation." },
                        { title: "Request Drafting", description: "Writing a focused, data-driven request." },
                        { title: "Advocacy", description: "Championing your request during agency discussions." }
                    ],
                    faqs: [
                        {
                            question: "What's the difference between Fast Track and Breakthrough Therapy designation?",
                            answer: "Fast Track is for drugs treating serious conditions with unmet medical need—qualification can be based on preclinical data alone. Breakthrough Therapy has a higher bar: you must show preliminary clinical evidence of substantial improvement over existing therapies. Breakthrough gets you everything Fast Track offers, plus intensive FDA guidance, senior manager involvement, and organizational commitment."
                        },
                        {
                            question: "When should I apply for these designations?",
                            answer: "Fast Track can be requested anytime during development—even before you file an IND. Breakthrough Therapy requests should ideally be submitted before your End-of-Phase 2 meeting to maximize benefits. Both can be requested with an IND, as a standalone request, or as part of a meeting request. Earlier is generally better."
                        },
                        {
                            question: "What does 'serious condition' mean for eligibility?",
                            answer: "The FDA considers a condition serious if it has substantial impact on day-to-day functioning, or if it's life-threatening. This includes diseases like cancer, heart failure, HIV, Alzheimer's, and rare diseases—but also conditions like depression, epilepsy, and diabetes. The key is demonstrating significant morbidity, not just inconvenience."
                        },
                        {
                            question: "What is 'unmet medical need'?",
                            answer: "Unmet medical need means no adequate therapy exists, or your drug could provide advantages over existing treatments. This could mean treating patients who don't respond to current therapies, offering a better safety profile, addressing a specific population (like pediatrics), or providing a more convenient route of administration. We help you articulate the unmet need compellingly."
                        },
                        {
                            question: "What's Accelerated Approval and how is it different?",
                            answer: "Accelerated Approval allows drugs for serious conditions to be approved based on a surrogate endpoint (like tumor shrinkage) rather than clinical endpoints (like survival). It requires post-marketing confirmatory trials. Unlike Fast Track and Breakthrough (which are development designations), Accelerated Approval is a regulatory pathway that affects how your drug gets approved."
                        },
                        {
                            question: "What's the benefit of rolling review?",
                            answer: "Normally, FDA won't review your NDA until it's complete. With rolling review (available to Fast Track and Breakthrough drugs), you can submit completed sections as they're finished. This can shave months off your timeline because FDA starts reviewing Module 3 (CMC) while you're still finalizing clinical study reports."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA Guidance: Expedited Programs for Serious Conditions",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/expedited-programs-serious-conditions-drugs-and-biologics",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Fast Track, Breakthrough, Accelerated Approval, Priority Review",
                            url: "https://www.fda.gov/patients/learn-about-drug-and-device-approvals/fast-track-breakthrough-therapy-accelerated-approval-priority-review",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Breakthrough Therapy FAQ",
                            url: "https://www.fda.gov/regulatory-information/food-and-drug-administration-safety-and-innovation-act-fdasia/frequently-asked-questions-breakthrough-therapies",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "Our Phase 2 data showed a 40% response rate in a cancer with no approved therapies. Adelphi helped us secure Breakthrough designation, which gave us direct access to FDA reviewers throughout development. We went from Phase 2 to approval in under 3 years.",
                        author: "Dr. James Park",
                        role: "Chief Medical Officer",
                        company: "Oncology Biotech"
                    }
                }
            },
            {
                slug: "fda-meeting-management",
                title: "FDA Meeting Management",
                description: "Strategic preparation for Type A, B, and C meetings.",
                icon: Shield,
                fullContent: {
                    heroTitle: "FDA Meeting Management",
                    heroSubtitle: "Orchestrating Successful Agency Interactions",
                    introduction: "We manage the entire lifecycle of your FDA interactions, from Type A meetings for dispute resolution to Type B milestone meetings and Type C guidance discussions. We ensure you ask the right questions and get the answers you need to proceed with confidence.",
                    features: [
                        "Meeting type selection and timing",
                        "Briefing package strategy",
                        "Rehearsal facilitation",
                        "Minutes analysis and follow-up"
                    ],
                    benefits: [
                        "Clarity on regulatory expectations",
                        "Documentation of agency agreements",
                        "Risk mitigation",
                        "Efficient program progression"
                    ],
                    process: [
                        { title: "Preparation", description: "Aligning your team and your data." },
                        { title: "Execution", description: "Leading the meeting with professionalism and strategy." },
                        { title: "Documentation", description: "Ensuring the official record reflects the discussion accurately." }
                    ],
                    faqs: [
                        {
                            question: "What are the different types of FDA meetings?",
                            answer: "Under PDUFA VII, there are five meeting types: Type A (critical path issues, clinical holds, post-Complete Response Letter meetings), Type B (milestone meetings like Pre-IND, End-of-Phase 2, Pre-NDA), Type C (specific guidance questions), Type D (narrow issues, fewer disciplines), and INTERACT (early development questions before IND). Each has different timelines and procedures."
                        },
                        {
                            question: "How far in advance do I need to request a meeting?",
                            answer: "Timelines vary by type. Type A meetings are scheduled within 30 days. Type B meetings require a 60-day advance request—FDA has 14 days to grant, then 60 days to the meeting, with your briefing package due 30 days before. Type D meetings have a combined request/briefing book with 60 days to meeting. INTERACT meetings are scheduled within 75 days of request."
                        },
                        {
                            question: "What should be in my briefing package?",
                            answer: "Keep it focused and concise—typically 30-50 pages. Lead with your questions (10 maximum for a 60-minute meeting), provide just enough background and data to enable FDA to answer them, and include relevant tables and figures. The FDA isn't reviewing your entire program—they're answering specific questions. We craft packages that make it easy for reviewers to say yes."
                        },
                        {
                            question: "Are FDA meetings still virtual post-COVID?",
                            answer: "Yes, most meetings remain virtual via Microsoft Teams. This is actually advantageous: no travel costs, easy inclusion of global team members, and ability to reference documents in real-time. In-person meetings at White Oak are rare and reserved for complex, high-stakes discussions. We've successfully managed hundreds of virtual meetings."
                        },
                        {
                            question: "What if FDA doesn't agree with my proposed approach?",
                            answer: "Meeting minutes document the discussion, but FDA positions aren't always binding. If they raise concerns, you can revise your approach, provide additional data, or request a follow-up meeting. Sometimes FDA pushback leads to a stronger design. We help you navigate disagreements strategically and know when to push back versus when to adapt."
                        },
                        {
                            question: "What's an INTERACT meeting?",
                            answer: "INTERACT (Initial Targeted Engagement for Regulatory Advice on CDER and CBER Products) meetings are for novel questions in early development, before IND filing. They're ideal for first-in-class molecules, novel platforms, or unique development challenges. FDA responds to requests within 21 days and schedules meetings within 75 days. Note: many requests are rejected for inappropriate questions."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA Guidance: Formal Meetings Between FDA and Sponsors",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/formal-meetings-between-fda-and-sponsors-or-applicants-pdufa-products",
                            source: "FDA"
                        },
                        {
                            title: "FDA SOPP 8101.1: Regulatory Meetings with Sponsors",
                            url: "https://www.fda.gov/media/84040/download",
                            source: "FDA"
                        },
                        {
                            title: "PDUFA VII Commitment Letter",
                            url: "https://www.fda.gov/media/151712/download",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "Our End-of-Phase 2 meeting was make-or-break for our pivotal trial design. Adelphi's mock meeting preparation was so thorough that when FDA pushed back on our primary endpoint, we had three alternative proposals ready. We left with alignment on a path forward.",
                        author: "Dr. Katherine Yang",
                        role: "VP Clinical Development",
                        company: "Biotech Startup"
                    }
                }
            }
        ]
    },
    "global-submissions": {
        id: "global-submissions",
        title: "Global Submissions",
        deliverables: [
            {
                slug: "ema-marketing-authorization",
                title: "EMA Marketing Authorization (MAA)",
                description: "Navigate the centralized procedure for European approval.",
                icon: Flag,
                fullContent: {
                    heroTitle: "EMA Marketing Authorization",
                    heroSubtitle: "Your Gateway to the European Market",
                    introduction: "Accessing the European market requires navigating the European Medicines Agency (EMA) and its centralized procedure. We guide you through the specific requirements of the MAA, including PIPS, eligibility requests, and the Rapporteur/Co-Rapporteur appointment process.",
                    features: [
                        "Centralized Procedure management",
                        "SmPC and PIL development",
                        "Rapporteur interaction strategy",
                        "Response to Day 80/120 questions"
                    ],
                    benefits: [
                        "Single license for all EU member states",
                        "Streamlined assessment process",
                        "Access to 450 million patients",
                        "Harmonized labeling"
                    ],
                    process: [
                        { title: "Eligibility", description: "Confirming access to the Centralized Procedure." },
                        { title: "Pre-Submission", description: "Meeting with EMA and handling administrative steps." },
                        { title: "Review Management", description: "Coordinating responses to the CHMP's assessment." }
                    ],
                    faqs: [
                        {
                            question: "How long does the EMA centralized procedure take?",
                            answer: "The standard assessment timeline is 210 days, but this excludes clock stops. At Day 120 and Day 180, the clock stops while you respond to CHMP questions—typically 3-6 months per clock stop. After a positive CHMP opinion (around Day 210), the European Commission has 67 days to issue the marketing authorization. Total time from submission to approval is typically 12-15 months."
                        },
                        {
                            question: "What is accelerated assessment and how do I qualify?",
                            answer: "Accelerated assessment reduces the CHMP review timeline from 210 to 150 days. Your product must be of major interest for public health and represent therapeutic innovation. Request it 2-3 months before MAA submission, and EMA recommends a pre-submission meeting 6-7 months in advance. Be aware that accelerated assessment can revert to standard if questions arise."
                        },
                        {
                            question: "What's the difference between centralized and decentralized procedures?",
                            answer: "The Centralized Procedure gives you a single marketing authorization valid in all EU member states—mandatory for biologics, orphan drugs, and certain therapeutic areas. The Decentralized Procedure involves submitting to multiple countries with one as the Reference Member State. For innovative therapies targeting the whole EU, centralized is usually the right choice."
                        },
                        {
                            question: "What are Day 80 and Day 120 questions?",
                            answer: "At Day 80, the Rapporteur and Co-Rapporteur submit preliminary assessment reports. The CHMP then issues a consolidated list of questions at Day 120, stopping the clock for your response. These questions can be extensive—covering CMC, clinical, and nonclinical issues. The quality of your responses significantly impacts approval likelihood."
                        },
                        {
                            question: "Do I need a PIP (Paediatric Investigation Plan) for EMA?",
                            answer: "Yes, for most products. The EU Paediatric Regulation requires an agreed PIP or a waiver before MAA submission. Unlike the US, where pediatric requirements come later, the EU expects your pediatric plan resolved before you file for adult approval. We recommend engaging the Paediatric Committee (PDCO) during Phase 2 development."
                        },
                        {
                            question: "What's the role of the Rapporteur and Co-Rapporteur?",
                            answer: "The Rapporteur leads the scientific assessment, with the Co-Rapporteur providing independent review. Both are CHMP members from EU national agencies. Their countries cannot have commercial conflicts. While you can't choose them, strategic engagement before submission can inform appointment. Building rapport with these assessors is critical to success."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "EMA: Centralised Authorisation Procedure",
                            url: "https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/obtaining-marketing-authorisation/marketing-authorisation-centralised-procedure",
                            source: "EMA"
                        },
                        {
                            title: "EMA: Accelerated Assessment",
                            url: "https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/accelerated-assessment",
                            source: "EMA"
                        },
                        {
                            title: "EMA: Paediatric Investigation Plans",
                            url: "https://www.ema.europa.eu/en/human-regulatory/research-development/paediatric-medicines/paediatric-investigation-plans",
                            source: "EMA"
                        }
                    ],
                    testimonial: {
                        quote: "The Day 120 questions were extensive—over 200 items. Adelphi helped us prioritize, draft clear responses, and negotiate which studies were truly necessary. We received a positive CHMP opinion on the first cycle.",
                        author: "Dr. Hans Mueller",
                        role: "Head of EU Regulatory",
                        company: "Global Pharmaceutical"
                    }
                }
            },
            {
                slug: "health-canada-submissions",
                title: "Health Canada Submissions",
                description: "Expert support for NDS and SNDS filings.",
                icon: Map,
                fullContent: {
                    heroTitle: "Health Canada Submissions",
                    heroSubtitle: "Navigating the Canadian Regulatory Landscape",
                    introduction: "Canada is a key market often aligned with US development. We help you adapt your US or EU dossier for Health Canada requirements, managing New Drug Submissions (NDS) and Supplemental NDS filings. We understand the nuances of the Food and Drugs Act and Regulations.",
                    features: [
                        "NDS and SNDS preparation",
                        "Canadian-specific Module 1",
                        "Product Monograph development",
                        "Clarifax response management"
                    ],
                    benefits: [
                        "Efficient market entry in Canada",
                        "Leveraging of foreign reviews",
                        "Compliance with bilingual requirements",
                        "Strategic launch timing"
                    ],
                    process: [
                        { title: "Gap Analysis", description: "Identifying Canadian-specific requirements." },
                        { title: "Conversion", description: "Adapting the CTD to Health Canada specifications." },
                        { title: "Submission", description: "Filing via the Common Electronic Submissions Gateway (CESG)." }
                    ],
                    faqs: [
                        {
                            question: "Can I leverage my FDA or EMA approval for Health Canada?",
                            answer: "Yes, Health Canada participates in several international collaboration initiatives. Through Project Orbis (oncology) and Access Consortium, Health Canada can conduct parallel reviews with FDA, EMA, and other agencies. For standard submissions, they'll consider foreign reviews but still conduct their own assessment. Having FDA or EMA approval strengthens your submission."
                        },
                        {
                            question: "What's unique about the Canadian Product Monograph?",
                            answer: "The Product Monograph (PM) is Canada's equivalent of the USPI/SmPC, but it has a specific format and must be bilingual (English and French). It's more detailed than US labeling in some areas. Health Canada reviews the PM closely and negotiates language. We ensure your PM is consistent with your USPI while meeting Canadian requirements."
                        },
                        {
                            question: "How do I submit electronically to Health Canada?",
                            answer: "All NDS and SNDS submissions go through the Common Electronic Submissions Gateway (CESG) in eCTD format. You need a Regulatory Enrolment Process (REP) account. The Canadian Module 1 has specific requirements different from FDA or EMA. Recent guidance updates in December 2024 align with Health Canada's 'Agile Regulations' framework."
                        },
                        {
                            question: "What are Clarifax letters?",
                            answer: "Clarifax is Health Canada's system for sending questions during review—similar to FDA information requests. You'll receive questions via the CESG portal, typically with a response deadline. The quality and timeliness of your Clarifax responses directly impact your review timeline. We help draft clear, complete responses to keep your review on track."
                        },
                        {
                            question: "How long does Health Canada review take?",
                            answer: "Standard NDS review targets are 300 days. Priority Review (for serious, life-threatening conditions with unmet need) targets 180 days. Notice of Compliance with Conditions (NOC/c) can be faster for drugs addressing serious conditions. The December 2024 Agile Regulations introduced more flexibility for public health emergency drugs."
                        },
                        {
                            question: "Do I need Canadian clinical data?",
                            answer: "Generally no, if your pivotal trials included North American sites and your product will be used similarly in Canada. Health Canada accepts foreign clinical data under ICH E5 principles. However, if there are concerns about ethnic factors or if Canada wasn't represented in your trials, bridging data might be requested. We assess this early in your submission strategy."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "Health Canada: Management of Drug Submissions Guidance",
                            url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/applications-submissions/guidance-documents/management-drug-submissions/industry.html",
                            source: "Health Canada"
                        },
                        {
                            title: "Health Canada: Quality (CMC) Guidance for NDS/ANDS",
                            url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/applications-submissions/guidance-documents/chemical-entity-products-quality/guidance-document-quality-chemistry-manufacturing-guidance-new-drug-submissions-ndss-abbreviated-new-drug-submissions.html",
                            source: "Health Canada"
                        },
                        {
                            title: "Access Consortium (International Collaboration)",
                            url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/applications-submissions/international-partnerships/access-consortium.html",
                            source: "Health Canada"
                        }
                    ],
                    testimonial: {
                        quote: "We needed Canadian approval within 6 months of our FDA approval. Adelphi prepared our NDS in parallel with our NDA, leveraged Project Orbis for parallel review, and we received our Notice of Compliance just 8 weeks after FDA approval.",
                        author: "Jennifer Walsh",
                        role: "VP Global Regulatory",
                        company: "Oncology Biotech"
                    }
                }
            },
            {
                slug: "pmda-consultations",
                title: "PMDA (Japan) Consultations",
                description: "Strategic guidance for entering the Japanese market.",
                icon: Languages,
                fullContent: {
                    heroTitle: "PMDA (Japan) Strategy",
                    heroSubtitle: "Bridging the Gap to the Japanese Market",
                    introduction: "Japan is the world's third-largest pharmaceutical market but has unique regulatory hurdles. We support your interactions with the PMDA, helping you design bridging strategies to use foreign clinical data and manage the formal consultation process required for approval.",
                    features: [
                        "Clinical data bridging strategy",
                        "PMDA consultation management",
                        "Sakigake designation support",
                        "Orphan drug applications in Japan"
                    ],
                    benefits: [
                        "Access to a major global market",
                        "Reduced need for local trials",
                        "Clear regulatory path",
                        "Cultural and scientific alignment"
                    ],
                    process: [
                        { title: "Assessment", description: "Evaluating the applicability of foreign data (ICH E5)." },
                        { title: "Consultation", description: "Formal meetings with PMDA to agree on the data package." },
                        { title: "J-NDA", description: "Supporting the Japanese New Drug Application." }
                    ],
                    faqs: [
                        {
                            question: "What is ICH E5 and why does it matter for Japan?",
                            answer: "ICH E5 (Ethnic Factors in the Acceptability of Foreign Clinical Data) is a guideline that allows Japan to accept foreign clinical data if ethnic factors won't affect safety or efficacy. It defines 'intrinsic' factors (genetics, body weight) and 'extrinsic' factors (diet, medical practice). Before E5 (1998), Japan often required complete local clinical programs. Now, bridging studies can demonstrate applicability of foreign data."
                        },
                        {
                            question: "Do I always need a Japanese bridging study?",
                            answer: "Not always. If your global MRCT is well-designed with sufficient Japanese patients, standalone bridging trials may be unnecessary. Over 30 years of experience since ICH E5 has shown that for many therapeutic areas, ethnic differences are minimal. However, PMDA still expects PK data in Japanese subjects for most drugs. We assess the bridging strategy based on your specific molecule and indication."
                        },
                        {
                            question: "What is the Sakigake designation?",
                            answer: "Sakigake ('pioneer') designation is Japan's expedited pathway for innovative drugs addressing serious conditions with no existing treatments—conceptually similar to FDA Breakthrough. Benefits include priority PMDA consultations, a 6-month review target (vs. 12 months standard), and potential for global-first approval. It's designed to address Japan's historical 'drug lag.'"
                        },
                        {
                            question: "How do PMDA consultations work?",
                            answer: "PMDA consultations are formal paid meetings at various development stages: Pre-application, Pre-Phase 2, Pre-Phase 3, and Pre-NDA. Unlike FDA meetings where you submit questions, PMDA consultations are more structured with specific forms and fees. Japanese language submissions are required, though meetings can be conducted in English with interpretation. We handle the logistics and cultural nuances."
                        },
                        {
                            question: "What's the typical timeline for J-NDA approval?",
                            answer: "Standard review is 12 months. Priority review (for drugs with high medical need) targets 9 months. Sakigake drugs target 6 months. Japan also participates in ICMRA's Project Orbis for oncology products. In recent years, Japan has significantly reduced its historical 'drug lag' and approvals often come within months of FDA/EMA."
                        },
                        {
                            question: "Can I include Japanese patients in my global trial instead of a separate bridging study?",
                            answer: "Yes, this is the preferred modern approach under ICH E17 (MRCTs). If you include adequate Japanese patients in your pivotal trials, you can analyze consistency of results between Japanese and non-Japanese populations. PMDA generally finds this more compelling than a small standalone bridging study. We help design global trials with appropriate Japanese enrollment targets."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "ICH E5: Ethnic Factors in Acceptability of Foreign Clinical Data",
                            url: "https://database.ich.org/sites/default/files/E5_R1__Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "PMDA: Sakigake Designation System",
                            url: "https://www.pmda.go.jp/english/review-services/sakigake/0001.html",
                            source: "PMDA"
                        },
                        {
                            title: "ICH E17: General Principles for Planning Multi-Regional Clinical Trials",
                            url: "https://database.ich.org/sites/default/files/E17EWG_Step4_2017_1116.pdf",
                            source: "ICH"
                        }
                    ],
                    testimonial: {
                        quote: "PMDA initially requested a full bridging study. Adelphi helped us make the case that our global MRCT with 15% Japanese enrollment was sufficient. The PMDA consultation went smoothly, and we received approval 3 months after FDA.",
                        author: "Dr. Kenji Yamamoto",
                        role: "Global Development Lead",
                        company: "Pharmaceutical Company"
                    }
                }
            },
            {
                slug: "row-strategy",
                title: "Rest of World (ROW) Strategy",
                description: "Efficient rollout strategies for emerging markets.",
                icon: Globe,
                fullContent: {
                    heroTitle: "Rest of World (ROW) Strategy",
                    heroSubtitle: "Expanding Your Footprint Globally",
                    introduction: "Beyond the ICH regions, the world offers vast opportunities. We help you develop a rollout strategy for emerging markets in Asia, Latin America, and the Middle East. We leverage Certificate of Pharmaceutical Product (CPP) strategies to minimize local requirements.",
                    features: [
                        "Regional prioritization strategy",
                        "CPP management",
                        "Local partner identification",
                        "Dossier customization"
                    ],
                    benefits: [
                        "Maximized global revenue",
                        "Efficient use of core dossier",
                        "Risk diversification",
                        "Patient access worldwide"
                    ],
                    process: [
                        { title: "Prioritization", description: "Ranking markets based on potential and ease of entry." },
                        { title: "Planning", description: "Sequencing submissions to optimize CPP availability." },
                        { title: "Execution", description: "Managing local filings through affiliates or partners." }
                    ],
                    faqs: [
                        {
                            question: "What is a Certificate of Pharmaceutical Product (CPP)?",
                            answer: "A CPP is a WHO-format document issued by a regulatory authority (like FDA or EMA) certifying that a drug product is authorized for sale in that country. Over 80 countries require CPPs as part of their registration dossiers. It's essentially proof that a trusted agency has already reviewed your product's quality, safety, and efficacy—allowing local agencies to rely on that assessment."
                        },
                        {
                            question: "Why does submission sequence matter for emerging markets?",
                            answer: "Many ROW countries won't review your dossier until you have a CPP from FDA, EMA, or another reference authority. Getting your US or EU approval first 'unlocks' these markets. Strategic sequencing means prioritizing your reference market, then quickly rolling out to countries that rely on that CPP. A 6-month delay in FDA approval could mean a year delay across 20 emerging markets."
                        },
                        {
                            question: "Which countries are easiest to enter first?",
                            answer: "Generally, countries with strong reliance models are fastest: Australia (TGA), Switzerland (Swissmedic), and GCC (Gulf Cooperation Council) countries often recognize FDA/EMA approvals. Saudi Arabia's SFDA and Brazil's ANVISA have grown more sophisticated but still value reference approvals. We rank markets by commercial potential, regulatory complexity, and CPP requirements to optimize your sequence."
                        },
                        {
                            question: "Do I need local clinical data for emerging markets?",
                            answer: "It depends on the country and your disease area. Some countries (notably China, until recently) required local clinical trials. Others accept global data with varying levels of scrutiny. ICH membership has expanded—China and Brazil are now members—which increases harmonization. We assess local data requirements early to avoid surprises."
                        },
                        {
                            question: "What about countries that aren't ICH members?",
                            answer: "Many ROW countries follow ICH guidelines even without formal membership. They often rely on WHO prequalification or reference agency approvals. However, specific local requirements vary: some need local stability data for their climate zone, others require specific labeling languages, and many have unique administrative requirements. We maintain databases of country-specific requirements."
                        },
                        {
                            question: "Should I work with local partners or register directly?",
                            answer: "Most emerging markets require a local Marketing Authorization Holder (MAH) or at least a local agent. Some countries (UAE, Saudi Arabia) allow foreign companies to hold authorizations through local representatives. Partners with regulatory expertise and distribution capabilities often accelerate market entry. We help you evaluate partner capabilities and structure agreements that protect your interests."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "WHO: Certificate of Pharmaceutical Product Scheme",
                            url: "https://www.who.int/teams/regulation-prequalification/regulation-and-safety/regulatory-convergence-networks/certification-scheme",
                            source: "WHO"
                        },
                        {
                            title: "FDA: Electronic Certificates of Pharmaceutical Product",
                            url: "https://www.fda.gov/drugs/human-drug-exports/electronic-certificates-pharmaceutical-product",
                            source: "FDA"
                        },
                        {
                            title: "IFPMA: Certificate of Pharmaceutical Product (CPP) Publications",
                            url: "https://www.ifpma.org/publications/cpp-publications/",
                            source: "IFPMA"
                        }
                    ],
                    testimonial: {
                        quote: "We had 40 markets to cover with limited resources. Adelphi prioritized the top 15 by ROI, sequenced submissions around our FDA CPP availability, and identified local partners in each market. We achieved 90% market coverage within 18 months of our first approval.",
                        author: "Maria Santos",
                        role: "Director International Regulatory",
                        company: "Mid-Size Pharma"
                    }
                }
            },
            {
                slug: "mrct-alignment",
                title: "Multi-Regional Clinical Trials",
                description: "Alignment of clinical development plans across regions.",
                icon: Network,
                fullContent: {
                    heroTitle: "Multi-Regional Clinical Trials (MRCT)",
                    heroSubtitle: "One Trial, Global Acceptance",
                    introduction: "Conducting separate trials for every region is no longer feasible. We help you design Multi-Regional Clinical Trials (MRCTs) that satisfy the statistical and ethnic sensitivity requirements of the FDA, EMA, PMDA, and NMPA simultaneously.",
                    features: [
                        "Global protocol design",
                        "Statistical analysis planning for regions",
                        "Ethnic sensitivity assessment",
                        "Operational feasibility"
                    ],
                    benefits: [
                        "Reduced total development cost",
                        "Simultaneous global submissions",
                        "Faster patient recruitment",
                        "Consistent safety profile"
                    ],
                    process: [
                        { title: "Design", description: "Creating a protocol that meets all regional guidelines." },
                        { title: "Validation", description: "Confirming acceptance with health authorities." },
                        { title: "Oversight", description: "Ensuring consistent execution across all sites." }
                    ],
                    faqs: [
                        {
                            question: "What is ICH E17 and why does it matter?",
                            answer: "ICH E17 (General Principles for Planning and Design of Multi-Regional Clinical Trials) was finalized in 2017 to facilitate simultaneous global drug development. It provides a framework for designing pivotal trials that satisfy multiple regulatory agencies—FDA, EMA, PMDA, NMPA—with a single protocol. The goal is reducing duplicative regional studies and accelerating global patient access."
                        },
                        {
                            question: "How many patients from each region do I need?",
                            answer: "There's no fixed number—it depends on your drug's ethnic sensitivity and the statistical analysis plan. ICH E17 emphasizes 'consistency evaluation' rather than powering each region independently. For drugs with low ethnic sensitivity, even modest regional representation may suffice. For drugs with known ethnic differences in PK or response, larger regional samples are needed. We work with biostatisticians to design appropriate regional allocations."
                        },
                        {
                            question: "What is 'ethnic sensitivity' in drug development?",
                            answer: "Ethnic sensitivity refers to how a drug's pharmacokinetics, efficacy, or safety might vary across populations due to intrinsic factors (genetics, body composition) or extrinsic factors (diet, disease patterns, medical practice). Some drug classes—like those metabolized by CYP2D6—show significant ethnic variation. Others, like many oncology drugs, show minimal differences. Understanding your drug's ethnic sensitivity determines your MRCT design."
                        },
                        {
                            question: "Can I pool data from multiple East Asian countries?",
                            answer: "Yes, 'pooling' is a key ICH E17 concept. East Asian regions (Japan, Korea, China, Taiwan) share similarities in genetics and disease patterns that may justify pooling for certain analyses. However, pooling requires scientific justification—you can't simply combine data without demonstrating similarity. Regulators in each country still want to see their population represented, even if pooled analysis supports the primary endpoint."
                        },
                        {
                            question: "What's the advantage of an MRCT over sequential regional trials?",
                            answer: "Speed and cost. An MRCT can support simultaneous submissions to FDA, EMA, PMDA, and NMPA, potentially achieving global approval within months of each other. Sequential regional trials could add 3-5 years and hundreds of millions in development costs. MRCTs also provide a more consistent global safety database. The challenge is operational complexity—coordinating sites across continents requires robust infrastructure."
                        },
                        {
                            question: "How do I get regulatory buy-in for my MRCT design?",
                            answer: "Engage early with each target agency. Use FDA Type B meetings, EMA Scientific Advice, and PMDA consultations to present your MRCT design and get feedback on regional enrollment targets and statistical approaches. Some agencies participate in parallel scientific advice (e.g., FDA-EMA parallel advice). Documenting these discussions protects you from later disagreements about trial design acceptability."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "ICH E17: General Principles for Planning and Design of MRCTs",
                            url: "https://database.ich.org/sites/default/files/E17EWG_Step4_2017_1116.pdf",
                            source: "ICH"
                        },
                        {
                            title: "FDA Guidance: E17 General Principles for Planning MRCTs",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e17-general-principles-planning-and-design-multi-regional-clinical-trials",
                            source: "FDA"
                        },
                        {
                            title: "ICH E5: Ethnic Factors in the Acceptability of Foreign Clinical Data",
                            url: "https://database.ich.org/sites/default/files/E5_R1__Guideline.pdf",
                            source: "ICH"
                        }
                    ],
                    testimonial: {
                        quote: "Designing an MRCT that satisfied FDA, EMA, PMDA, and NMPA seemed impossible. Adelphi facilitated parallel scientific advice meetings with all four agencies and helped us find a design everyone could accept. Our pivotal trial supported simultaneous global submissions.",
                        author: "Dr. Sarah Chen",
                        role: "Head of Global Clinical Development",
                        company: "Global Biotech"
                    }
                }
            }
        ]
    },
    "lifecycle-management": {
        id: "lifecycle-management",
        title: "Lifecycle Management",
        deliverables: [
            {
                slug: "post-market-variations",
                title: "Post-Market Variations",
                description: "Management of changes to your approved product.",
                icon: RefreshCw,
                fullContent: {
                    heroTitle: "Post-Market Variations",
                    heroSubtitle: "Managing Change in a Regulated Environment",
                    introduction: "Change is constant. Whether it's a new manufacturing site, a process improvement, or a supplier change, we determine the appropriate reporting category (CBE-0, CBE-30, PAS, Type IA/IB/II) and manage the submission to ensure your supply chain remains uninterrupted.",
                    features: [
                        "Change control regulatory assessment",
                        "Variation/Supplement preparation",
                        "Comparability protocol design",
                        "Global variation management"
                    ],
                    benefits: [
                        "Supply chain continuity",
                        "Compliance with reporting rules",
                        "Operational flexibility",
                        "Reduced regulatory burden"
                    ],
                    process: [
                        { title: "Assessment", description: "Reviewing the change and determining the filing strategy." },
                        { title: "Compilation", description: "Gathering data and writing the supplement." },
                        { title: "Submission", description: "Filing and managing approval." }
                    ],
                    faqs: [
                        {
                            question: "What's the difference between PAS, CBE-30, CBE-0, and Annual Report?",
                            answer: "These are the four FDA reporting categories for post-approval changes under 21 CFR 314.70. PAS (Prior Approval Supplement) is for major changes requiring FDA approval before implementation. CBE-30 means you can implement 30 days after submission unless FDA objects. CBE-0 allows immediate implementation with concurrent notification. Annual Report is for minor changes reported once yearly. The category depends on the change's potential to affect product quality, safety, or efficacy."
                        },
                        {
                            question: "When does a manufacturing site change require a PAS?",
                            answer: "Under current guidance, a PAS is generally required when moving to a new facility without a satisfactory GMP inspection history within 2 years, or when the site change involves significant process modifications. However, many manufacturing site changes for drug products can now be filed as CBE-30 or even Annual Report, per FDA's 2004 changes. We assess each change against current guidance to minimize regulatory burden."
                        },
                        {
                            question: "What if FDA objects to my CBE-30 supplement?",
                            answer: "If FDA notifies you within 30 days that the change requires prior approval (PAS) or that information is missing, you must not distribute product made with that change. FDA will administratively close the CBE supplement (considered withdrawn), and you'll need to resubmit as a PAS. We ensure CBE-30 submissions are complete and appropriately categorized to avoid this situation."
                        },
                        {
                            question: "How do I handle global variations for the same change?",
                            answer: "A single manufacturing change may require different submissions across regions: a CBE-30 in the US, a Type IB variation in the EU, a Notifiable Change in Canada, and various submissions in ROW countries. We develop a global variation strategy that coordinates timing, ensures consistent data packages, and optimizes the sequence to maintain supply continuity across all markets."
                        },
                        {
                            question: "Can I request expedited review of a supplement?",
                            answer: "Yes. If there's a public health reason or if delay would cause extraordinary hardship (like drug shortage), you can request expedited review by marking your supplement 'Prior Approval Supplement—Expedited Review Requested.' You'll need to justify the request. FDA will prioritize accordingly, though they can't guarantee specific timelines."
                        },
                        {
                            question: "What's a comparability protocol and when should I use one?",
                            answer: "A comparability protocol is a pre-approved plan for evaluating future changes without needing individual supplements. For example, you might establish acceptance criteria for scaling up batch size. Once FDA approves the protocol, you can make those changes and report in Annual Reports rather than supplements. It's ideal for predictable changes like process scale-up or site transfers within your network."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Changes to an Approved NDA or ANDA",
                            url: "https://www.fda.gov/files/drugs/published/Changes-to-an-Approved-NDA-or-ANDA.pdf",
                            source: "FDA"
                        },
                        {
                            title: "21 CFR 314.70: Supplements and Changes to an Approved NDA",
                            url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-314/subpart-B/section-314.70",
                            source: "FDA"
                        },
                        {
                            title: "FDA: CMC Postapproval Manufacturing Changes",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cmc-postapproval-manufacturing-changes-be-documented-annual-reports",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "We had 12 post-approval changes pending across multiple products. Adelphi assessed each one, identified 3 that could be CBE-0 instead of CBE-30, and developed a comparability protocol that streamlined future changes. Our regulatory burden dropped significantly.",
                        author: "Linda Martinez",
                        role: "Director Regulatory CMC",
                        company: "Generic Pharma"
                    }
                }
            },
            {
                slug: "annual-reports",
                title: "Annual Reports (PADER/PSUR)",
                description: "Timely preparation and submission of mandatory periodic reports.",
                icon: Calendar,
                fullContent: {
                    heroTitle: "Annual & Periodic Reporting",
                    heroSubtitle: "Routine Compliance, Rigorously Managed",
                    introduction: "Maintaining your license requires diligent reporting. We handle the preparation and submission of Annual Reports, PADERs, PSURs/PBRERs, and DSURs. We ensure your safety and status reporting is accurate, timely, and compliant with all regional requirements.",
                    features: [
                        "NDA/IND Annual Reports",
                        "PADER/PSUR/PBRER authorship",
                        "DSUR preparation",
                        "Submission calendaring"
                    ],
                    benefits: [
                        "Avoidance of compliance penalties",
                        "Transparent safety profile",
                        "Resource offloading",
                        "Peace of mind"
                    ],
                    process: [
                        { title: "Data Collection", description: "Gathering clinical, CMC, and safety data." },
                        { title: "Authorship", description: "Drafting the report according to templates." },
                        { title: "Submission", description: "Timely filing to the agency." }
                    ],
                    faqs: [
                        {
                            question: "When are NDA Annual Reports due?",
                            answer: "Per 21 CFR 314.81, NDA Annual Reports must be submitted within 60 days of the anniversary of your US approval date. For example, if your NDA was approved on March 15, your annual report is due by May 14 each year. Missing this deadline is a compliance violation that can trigger FDA enforcement action."
                        },
                        {
                            question: "What's the difference between PADER, PSUR, and PBRER?",
                            answer: "PADER (Periodic Adverse Drug Experience Report) is the US FDA periodic safety report, required quarterly for the first 3 years post-approval, then annually. PSUR (Periodic Safety Update Report) was the EU equivalent, now replaced by PBRER (Periodic Benefit-Risk Evaluation Report) under ICH E2C(R2). PBRERs provide a more comprehensive benefit-risk analysis and are required at specific intervals set in your approved pharmacovigilance plan."
                        },
                        {
                            question: "What's a DSUR and when do I need one?",
                            answer: "A DSUR (Development Safety Update Report) is required annually for ongoing clinical trials. It provides a comprehensive assessment of safety data collected during the reporting period. DSURs are required globally per ICH E2F and must be submitted to all countries where you have active trials. The data lock point is the International Birth Date anniversary, with submission due within 60 days."
                        },
                        {
                            question: "How do I track reporting deadlines across multiple products and regions?",
                            answer: "This is a significant operational challenge. Each product has different approval dates in each region, creating a complex calendar of PADERs, PBRERs, DSURs, and annual reports. We maintain regulatory calendars that track all deadlines months in advance, ensure data collection starts on time, and prevent the costly mistake of missing a submission deadline."
                        },
                        {
                            question: "What format do I need to submit these reports in?",
                            answer: "Since 2018, FDA requires electronic submission in eCTD format for NDA annual reports. Safety reports (ICSRs, PADERs) must be submitted electronically per ICH E2B(R3) specifications through the FDA Electronic Submissions Gateway. The EU has similar electronic requirements. We ensure all reports meet current technical specifications."
                        },
                        {
                            question: "What happens if I miss an annual report deadline?",
                            answer: "Missing an annual report is a serious compliance violation. FDA can issue warning letters, and repeated violations can escalate to consent decrees or even application withdrawal. More practically, it signals to FDA that your quality systems may be inadequate. We've never missed a deadline for a client—our calendaring and project management ensures timely submission every time."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "21 CFR 314.81: Other Postmarketing Reports",
                            url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-314/subpart-B/section-314.81",
                            source: "FDA"
                        },
                        {
                            title: "ICH E2C(R2): Periodic Benefit-Risk Evaluation Report (PBRER)",
                            url: "https://database.ich.org/sites/default/files/E2C_R2_Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "ICH E2F: Development Safety Update Report (DSUR)",
                            url: "https://database.ich.org/sites/default/files/E2F_Guideline.pdf",
                            source: "ICH"
                        }
                    ],
                    testimonial: {
                        quote: "With 8 marketed products across 40 countries, our annual reporting calendar was chaos. Adelphi built us a comprehensive tracking system and took over all periodic report preparation. We haven't had a late submission in 3 years.",
                        author: "Patricia Kim",
                        role: "Global Regulatory Operations",
                        company: "Specialty Pharma"
                    }
                }
            },
            {
                slug: "labeling-updates",
                title: "Labeling Updates",
                description: "Strategic management of labeling changes.",
                icon: Tag,
                fullContent: {
                    heroTitle: "Labeling Management",
                    heroSubtitle: "Communicating Safety and Efficacy Clearly",
                    introduction: "Your label is your product's identity. We manage the lifecycle of your Prescribing Information (USPI), SmPC, and patient labeling. From safety updates to new indications, we ensure your labeling is compliant, competitive, and aligned with your Company Core Data Sheet (CCDS).",
                    features: [
                        "CCDS maintenance",
                        "Labeling negotiation with FDA/EMA",
                        "Structured Product Labeling (SPL)",
                        "Promotional review (MLR)"
                    ],
                    benefits: [
                        "Accurate safety communication",
                        "Competitive claims",
                        "Global consistency",
                        "Compliance with formatting rules"
                    ],
                    process: [
                        { title: "Signal Detection", description: "Identifying need for label updates." },
                        { title: "Drafting", description: "Revising the label text and CCDS." },
                        { title: "Implementation", description: "Rolling out changes to packaging and promotion." }
                    ],
                    faqs: [
                        {
                            question: "What is a CCDS and why do I need one?",
                            answer: "A Company Core Data Sheet (CCDS) is your internal master document containing all approved safety and efficacy information for your product. It serves as the reference for all regional labels (USPI, SmPC, etc.) and ensures global consistency. When new safety information emerges, you update the CCDS first, then cascade changes to regional labels. Without a well-maintained CCDS, global labeling becomes chaotic."
                        },
                        {
                            question: "Can I update my label without FDA approval?",
                            answer: "For certain safety-related changes, yes. Under 21 CFR 314.70(c)(6)(iii), you can use a CBE-0 supplement to immediately add or strengthen warnings, precautions, contraindications, or adverse reactions. This 'Changes Being Effected' process allows you to update labeling as soon as you have safety information, with FDA review happening after implementation. It's a critical tool for protecting patients."
                        },
                        {
                            question: "What's the difference between PLR and non-PLR format labeling?",
                            answer: "PLR (Physician Labeling Rule) format is the modern US labeling structure required for drugs approved after 2006. It includes the 'Highlights' section with the most important information upfront. Non-PLR format is the older structure without Highlights. If you modify a non-PLR label significantly, you may be required to convert to PLR format. We help navigate these formatting transitions."
                        },
                        {
                            question: "How long does it take to implement a global labeling change?",
                            answer: "A typical cascade from CCDS update to fully implemented global labeling takes 90-180 days. After updating the CCDS, you submit to reference agencies (FDA, EMA), wait for approval, then cascade to ROW countries. Each country has its own review timeline and language requirements. For urgent safety changes, expedited pathways exist, but coordination is complex."
                        },
                        {
                            question: "What's SPL and how does it relate to my USPI?",
                            answer: "SPL (Structured Product Labeling) is the XML-based format FDA requires for electronic submission of US labeling. Your USPI content gets encoded in SPL format and submitted to the FDA's DailyMed database, where it's publicly accessible. SPL includes technical codes for ingredients, routes, and dosage forms. We ensure your SPL files are technically valid and content-accurate."
                        },
                        {
                            question: "What happens if my regional labels are inconsistent with my CCDS?",
                            answer: "This is a significant regulatory and legal risk. If safety information in your CCDS isn't reflected in regional labels, you could face regulatory action and product liability exposure. Inspectors and plaintiffs' attorneys look for these inconsistencies. We conduct regular audits to ensure all regional labels are consistent with your CCDS and with each other."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Labeling for Human Prescription Drugs (PLR)",
                            url: "https://www.fda.gov/drugs/laws-acts-and-rules/fdas-labeling-resources-human-prescription-drugs",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Safety Labeling Changes Implementation",
                            url: "https://www.fda.gov/media/116594/download",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Drug Safety-related Labeling Changes Database",
                            url: "https://www.fda.gov/drugs/drug-safety-and-availability/drug-safety-related-labeling-changes-srlc-database-overview-updates-safety-information-fda-approved",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "A post-marketing signal required urgent labeling updates across 30 countries. Adelphi coordinated the CBE-0 submission to FDA, cascaded to EMA and Health Canada, and managed the ROW updates—all within 45 days. Our risk was contained quickly.",
                        author: "Dr. Andrew Thompson",
                        role: "Chief Medical Officer",
                        company: "Mid-Size Pharma"
                    }
                }
            },
            {
                slug: "safety-reporting",
                title: "Safety Reporting",
                description: "Ongoing pharmacovigilance support.",
                icon: AlertTriangle,
                fullContent: {
                    heroTitle: "Pharmacovigilance & Safety",
                    heroSubtitle: "Vigilance Beyond Approval",
                    introduction: "Patient safety doesn't stop at approval. We support your pharmacovigilance (PV) activities, including adverse event processing, signal detection, and risk management planning (REMS/RMP). We help you maintain a favorable benefit-risk profile throughout the product lifecycle.",
                    features: [
                        "ICSR case processing",
                        "Signal detection and evaluation",
                        "REMS design and implementation",
                        "Safety database management"
                    ],
                    benefits: [
                        "Patient safety protection",
                        "Regulatory compliance",
                        "Risk mitigation",
                        "License maintenance"
                    ],
                    process: [
                        { title: "Monitoring", description: "Continuous surveillance of safety data." },
                        { title: "Assessment", description: "Evaluating signals for clinical significance." },
                        { title: "Action", description: "Updating labels or implementing risk minimization." }
                    ],
                    faqs: [
                        {
                            question: "What is an ICSR and how quickly must I report it?",
                            answer: "An ICSR (Individual Case Safety Report) documents a single adverse event. Reporting timelines depend on seriousness and expectedness: serious and unexpected events must be reported to FDA within 15 calendar days (7 days for fatal/life-threatening). Expected serious events get 15 days. Non-serious events go into periodic reports. We ensure your cases are properly assessed and reported on time."
                        },
                        {
                            question: "What's a REMS and when is it required?",
                            answer: "A Risk Evaluation and Mitigation Strategy (REMS) is an FDA-required program to manage known serious risks. REMS can include Medication Guides, communication plans, or ETASU (Elements to Assure Safe Use)—the most restrictive form requiring prescriber certification, patient registries, or restricted distribution. FDA may require REMS at approval or any time post-market when standard labeling isn't sufficient."
                        },
                        {
                            question: "How does signal detection work?",
                            answer: "Signal detection involves systematically reviewing safety data to identify potential new risks or changes in known risks. Sources include spontaneous reports (FAERS), clinical trials, literature, and real-world data. Statistical methods like Proportional Reporting Ratio (PRR) and data mining help prioritize signals for further evaluation. We conduct regular signal detection and assessment for our clients."
                        },
                        {
                            question: "What's the difference between a REMS and an RMP?",
                            answer: "REMS (Risk Evaluation and Mitigation Strategy) is the US system under FDA. RMP (Risk Management Plan) is the EU system under EMA. Both aim to manage drug risks, but they differ in structure and requirements. All centrally approved EU drugs require an RMP; only about 5% of US drugs have REMS. The EU RMP includes pharmacovigilance activities, while US REMS focuses on additional risk minimization beyond labeling."
                        },
                        {
                            question: "How has FDA modernized pharmacovigilance?",
                            answer: "FDA's Office of Surveillance and Epidemiology now uses AI to support adverse event review and is piloting standardized REMS data. The Sentinel System provides active surveillance using real-world data from millions of patients. FDA evaluates over 2 million adverse event reports annually. These tools help identify safety signals earlier and more reliably than traditional spontaneous reporting alone."
                        },
                        {
                            question: "What are my obligations if I identify a new safety signal?",
                            answer: "You must assess whether the signal requires labeling changes, additional studies, or regulatory notification. Serious unexpected findings may require expedited reporting (15-day alert report). If the benefit-risk balance changes, you may need to update your CCDS and regional labels. For significant safety issues, FDA can require a REMS. We guide you through signal evaluation and appropriate regulatory actions."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Risk Evaluation and Mitigation Strategies (REMS)",
                            url: "https://www.fda.gov/drugs/drug-safety-and-availability/risk-evaluation-and-mitigation-strategies-rems",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Postmarketing Safety Reporting for Drugs and Biologics",
                            url: "https://www.fda.gov/media/72504/download",
                            source: "FDA"
                        },
                        {
                            title: "FDA: FAERS (Adverse Event Reporting System)",
                            url: "https://www.fda.gov/drugs/surveillance/fda-adverse-event-reporting-system-faers",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "When our safety database flagged a potential cardiac signal, Adelphi's pharmacovigilance team conducted a rapid assessment, determined the signal was confounded, and prepared documentation that satisfied FDA's questions. No label change was needed, and we avoided unnecessary alarm.",
                        author: "Dr. Rachel Green",
                        role: "VP Drug Safety",
                        company: "Biotech Company"
                    }
                }
            },
            {
                slug: "license-renewals",
                title: "License Renewals",
                description: "Tracking and management of marketing authorization renewals.",
                icon: FileText,
                fullContent: {
                    heroTitle: "License Renewals",
                    heroSubtitle: "Protecting Your Market Access",
                    introduction: "In many regions, marketing authorizations are not perpetual. We track your renewal dates and manage the renewal application process, ensuring you provide the necessary benefit-risk re-evaluation data to keep your product on the market without interruption.",
                    features: [
                        "Renewal timeline tracking",
                        "Benefit-risk re-evaluation",
                        "Renewal dossier preparation",
                        "Agency communication"
                    ],
                    benefits: [
                        "Uninterrupted sales",
                        "Regulatory good standing",
                        "Strategic portfolio management",
                        "Reduced administrative burden"
                    ],
                    process: [
                        { title: "Planning", description: "Identifying renewal windows years in advance." },
                        { title: "Compilation", description: "Gathering the 5-year data package." },
                        { title: "Submission", description: "Filing the renewal application." }
                    ],
                    faqs: [
                        {
                            question: "Do US FDA approvals expire?",
                            answer: "No. Unlike many other countries, US NDA/BLA approvals are granted indefinitely—they don't require periodic renewal. However, you must maintain compliance through annual reports, safety reporting, and keeping your facilities in good standing. FDA can withdraw approval if you violate regulations, but there's no automatic expiration date requiring renewal applications."
                        },
                        {
                            question: "How does the EU 5-year renewal work?",
                            answer: "EU marketing authorizations are initially valid for 5 years from approval. Before expiration, you must submit a renewal application demonstrating the benefit-risk balance remains favorable. Once renewed, the authorization becomes unlimited—no further renewals needed. However, EMA can require an additional 5-year renewal for pharmacovigilance reasons if patient exposure data is still limited."
                        },
                        {
                            question: "What data do I need for a renewal application?",
                            answer: "Renewals require a comprehensive benefit-risk re-evaluation: all post-marketing safety data, any new efficacy data, literature review, exposure estimates, and assessment of any changes since approval. You're essentially demonstrating that with 5 years of real-world experience, the product still merits marketing authorization. We compile this into a compelling renewal dossier."
                        },
                        {
                            question: "What happens if I miss a renewal deadline?",
                            answer: "Missing a renewal deadline can result in loss of marketing authorization—meaning you must stop selling the product in that market until you obtain a new approval. The consequences are severe: supply interruptions, revenue loss, and potential patient harm. We track renewal dates across all markets and begin preparation 12-18 months in advance to ensure no deadlines are missed."
                        },
                        {
                            question: "Which countries require periodic renewals?",
                            answer: "Most ROW countries require renewals, typically every 5 years. EU, Japan, Canada, Australia, and most Asian, Latin American, and Middle Eastern countries have renewal requirements. Requirements vary: some require full benefit-risk assessments, others just administrative updates. We maintain country-specific databases and manage renewals globally."
                        },
                        {
                            question: "Are there changes coming to EU renewal requirements?",
                            answer: "Yes. Under proposed EU pharmaceutical legislation reforms, standard marketing authorizations would be granted for an indefinite period from the start—eliminating the 5-year renewal for most products. However, products approved under exceptional circumstances would still require renewal and periodic re-assessment. These changes are expected to reduce regulatory burden significantly when implemented."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "EMA: Renewal and Annual Re-assessment of Marketing Authorisation",
                            url: "https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/renewal-annual-re-assessment-marketing-authorisation",
                            source: "EMA"
                        },
                        {
                            title: "EU Regulation 726/2004: Marketing Authorisation Procedures",
                            url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0726",
                            source: "EMA"
                        },
                        {
                            title: "Health Canada: Drug Identification Number (DIN) Requirements",
                            url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/applications-submissions/guidance-documents/regulatory-requirements-drug-identification-numbers/document.html",
                            source: "Health Canada"
                        }
                    ],
                    testimonial: {
                        quote: "We acquired a company with 15 marketed products across 60 countries. License renewal tracking was a nightmare. Adelphi built us a comprehensive renewal database, caught 3 products that were about to lapse, and now manages all our renewals proactively.",
                        author: "Steven Richards",
                        role: "Head of Regulatory Operations",
                        company: "Global Pharma"
                    }
                }
            }
        ]
    },
    "due-diligence": {
        id: "due-diligence",
        title: "Due Diligence",
        deliverables: [
            {
                slug: "regulatory-gap-analysis",
                title: "Regulatory Gap Analysis",
                description: "Deep-dive assessment of regulatory status and documentation.",
                icon: Search,
                fullContent: {
                    heroTitle: "Regulatory Gap Analysis",
                    heroSubtitle: "Finding the Flaws Before They Become Failures",
                    introduction: "Whether you are preparing for a submission or buying an asset, you need to know where the bodies are buried. Our gap analysis digs deep into the data, documentation, and strategy to identify compliance risks, missing data, and scientific weaknesses.",
                    features: [
                        "Data integrity review",
                        "Compliance vs. Guideline assessment",
                        "Submission readiness check",
                        "Strategic alignment review"
                    ],
                    benefits: [
                        "Clear view of program risk",
                        "Prioritized remediation plan",
                        "Accurate valuation",
                        "Negotiation leverage"
                    ],
                    process: [
                        { title: "Review", description: "Systematic evaluation of the data room." },
                        { title: "Identify", description: "Flagging critical, major, and minor gaps." },
                        { title: "Report", description: "Delivering a detailed risk map." }
                    ],
                    faqs: [
                        {
                            question: "What does a regulatory gap analysis cover?",
                            answer: "A comprehensive gap analysis reviews all regulatory-relevant data: nonclinical studies (GLP compliance, study design), clinical trials (GCP compliance, protocol deviations, data integrity), CMC documentation (process validation, stability data, impurity profiles), regulatory submissions history, agency correspondence, and strategic alignment with current guidance. We look for missing data, outdated studies, and compliance issues."
                        },
                        {
                            question: "How do you categorize the gaps you find?",
                            answer: "We use a tiered classification: Critical gaps are showstoppers—issues that would likely result in a Complete Response Letter or clinical hold. Major gaps require remediation before filing but may be addressable with additional work. Minor gaps are deficiencies that should be fixed but won't derail approval. This prioritization helps you allocate resources efficiently."
                        },
                        {
                            question: "How long does a gap analysis take?",
                            answer: "Timing depends on program complexity and data room accessibility. A focused pre-IND gap analysis might take 2-3 weeks. A comprehensive pre-NDA assessment of a large program could take 6-8 weeks. For M&A diligence with tight timelines, we can deliver preliminary findings in 1-2 weeks with detailed follow-up. We scale our team to your timeline."
                        },
                        {
                            question: "What's the most common gap you find?",
                            answer: "Data integrity issues and incomplete documentation are the most frequent problems. Companies often have the data but can't prove it's reliable—missing audit trails, inadequate source documentation, or unclear analytical method validation. CMC gaps are also common, especially in emerging biotechs that focused on clinical development while outsourcing manufacturing."
                        },
                        {
                            question: "Can gaps be fixed, or do I need to start over?",
                            answer: "Most gaps can be remediated without starting over, though the cost and timeline vary. Some require additional studies (expensive, time-consuming). Others need better documentation of existing work (relatively quick). The worst scenario is data integrity failures in pivotal studies, which may require repeat trials. We provide remediation strategies with each gap we identify."
                        },
                        {
                            question: "How does a gap analysis differ from an FDA Type B meeting?",
                            answer: "A gap analysis is our internal assessment of your program's readiness and risks. An FDA meeting gets the agency's perspective on your proposed path. Both are valuable at different stages. We recommend conducting a gap analysis before requesting an FDA meeting—you want to understand your vulnerabilities before exposing them to regulators, and you want to ask the right questions."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Pre-IND Meeting Guidance",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/ind-meetings-drugs-and-biological-products",
                            source: "FDA"
                        },
                        {
                            title: "ICH E8(R1): General Considerations for Clinical Studies",
                            url: "https://database.ich.org/sites/default/files/E8-R1_Guideline_Step4_2021_1006.pdf",
                            source: "ICH"
                        },
                        {
                            title: "FDA: Content and Format of INDs",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/content-and-format-investigational-new-drug-applications-inds-phase-1-studies-drugs-including",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "We thought we were 6 months from filing our NDA. Adelphi's gap analysis revealed critical stability data gaps and a process validation issue that would have resulted in a CRL. We fixed them before filing and received approval on the first cycle.",
                        author: "Dr. William Foster",
                        role: "VP Regulatory Affairs",
                        company: "Biotech Startup"
                    }
                }
            },
            {
                slug: "ma-support",
                title: "M&A Support",
                description: "Expert regulatory evaluation of target assets.",
                icon: Briefcase,
                fullContent: {
                    heroTitle: "M&A Regulatory Support",
                    heroSubtitle: "Informing Investment with Regulatory Intelligence",
                    introduction: "Regulatory risk is a primary driver of deal value. We support venture capital, private equity, and pharma business development teams during M&A transactions. We assess the probability of regulatory success (PRS) and estimate the time and cost to approval.",
                    features: [
                        "Probability of Success (POS) scoring",
                        "Timeline and cost modeling",
                        "Competitive regulatory landscape",
                        "Post-deal integration planning"
                    ],
                    benefits: [
                        "Informed valuation models",
                        "Risk-adjusted deal terms",
                        "Smoother integration",
                        "Avoidance of bad assets"
                    ],
                    process: [
                        { title: "Diligence", description: "Rapid review of the target asset." },
                        { title: "Valuation", description: "Inputting regulatory assumptions into the model." },
                        { title: "Negotiation", description: "Supporting deal terms based on findings." }
                    ],
                    faqs: [
                        {
                            question: "What is PTRS and how do you calculate it?",
                            answer: "PTRS (Probability of Technical and Regulatory Success) combines two factors: PTS (Probability of Technical Success—meeting clinical endpoints) and PRS (Probability of Regulatory Success—gaining approval). Industry-wide, only about 10% of Phase 1 drugs reach approval. We assess your specific asset against historical benchmarks, adjusting for therapeutic area, mechanism of action, clinical data quality, and regulatory pathway to estimate PTRS."
                        },
                        {
                            question: "How do regulatory issues affect deal valuation?",
                            answer: "Significantly. A 10% drop in PTRS can reduce NPV by hundreds of millions. Specific issues impact value differently: a clinical hold adds 6-12 months and remediation costs; a likely CRL might require an additional pivotal trial; a compliance issue at a manufacturing site could delay launch by years. We quantify these risks so your financial models reflect reality."
                        },
                        {
                            question: "What regulatory red flags should kill a deal?",
                            answer: "Absolute deal-breakers include: data integrity fraud in pivotal trials, ongoing FDA Warning Letters at critical manufacturing sites, unresolved clinical holds with no clear remediation path, or fundamental safety signals that change the benefit-risk calculus. Near-fatal issues include: CMC platform not scalable, missing critical nonclinical studies that require repeat trials, or regulatory pathway that doesn't exist for the product."
                        },
                        {
                            question: "How quickly can you complete due diligence?",
                            answer: "Deal timelines are often compressed. For a single-asset Phase 2 program, we can deliver preliminary findings in 5-7 business days with full report in 2-3 weeks. Complex portfolios or late-stage programs take longer. We staff flexibly to meet your timeline. Critical findings are communicated immediately—we won't wait for the final report to flag a deal-breaker."
                        },
                        {
                            question: "What happens post-deal for regulatory integration?",
                            answer: "After closing, significant regulatory work is needed: transferring INDs/NDAs to the new sponsor, updating manufacturing agreements and filings, notifying FDA and global agencies of the ownership change, integrating pharmacovigilance systems, and transferring marketing authorizations globally. Some transfers require prior approval; others are notifications. We manage the entire integration process."
                        },
                        {
                            question: "Do you work for buyers or sellers?",
                            answer: "Both. For buyers, we identify risks and value gaps. For sellers, we prepare data rooms, anticipate diligence questions, and remediate issues before they become deal-killers. We've also supported licensing deals, joint ventures, and spin-outs. Our only rule: we don't work both sides of the same transaction to avoid conflicts."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "ABA: Compliance and Regulatory Due Diligence in Pharma M&A",
                            url: "https://www.americanbar.org/groups/business_law/resources/business-law-today/2023-september/the-compliance-and-regulatory-due-diligence-process/",
                            source: "ABA"
                        },
                        {
                            title: "FDA: Transfer of Ownership of an Application",
                            url: "https://www.fda.gov/drugs/investigational-new-drug-ind-application/transfer-ownership-application",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Change of Ownership and Transfers (Devices)",
                            url: "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/change-ownership-and-transfers",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "We were about to close on a $400M acquisition when Adelphi's diligence uncovered a process validation failure that would delay approval by 18 months. We renegotiated the deal with milestone payments tied to FDA approval. That insight saved us from overpaying by $80M.",
                        author: "Michael Chen",
                        role: "Managing Partner",
                        company: "Healthcare-Focused PE Firm"
                    }
                }
            },
            {
                slug: "portfolio-assessment",
                title: "Portfolio Assessment",
                description: "Strategic review of product portfolios.",
                icon: BarChart,
                fullContent: {
                    heroTitle: "Portfolio Assessment",
                    heroSubtitle: "Optimizing Your R&D Spend",
                    introduction: "Not every program can be a priority. We help you evaluate your entire portfolio to identify the highest-value opportunities and the candidates that should be deprioritized. We look at regulatory feasibility, market potential, and development cost to optimize your R&D strategy.",
                    features: [
                        "Portfolio prioritization ranking",
                        "Resource allocation modeling",
                        "Indication expansion strategy",
                        "Lifecycle extension opportunities"
                    ],
                    benefits: [
                        "Higher ROI on R&D spend",
                        "Strategic focus",
                        "Balanced risk profile",
                        "Objective decision making"
                    ],
                    process: [
                        { title: "Audit", description: "Reviewing the status of all programs." },
                        { title: "Rank", description: "Scoring assets based on value and risk." },
                        { title: "Optimize", description: "Recommending a balanced portfolio mix." }
                    ],
                    faqs: [
                        {
                            question: "How do you evaluate programs across different therapeutic areas?",
                            answer: "We use a standardized scoring framework that accounts for therapeutic area-specific success rates. Oncology drugs have different baseline PTRS than cardiovascular drugs. We also assess competitive landscape, unmet medical need, and regulatory pathway clarity. This allows apples-to-apples comparison even when programs are at different stages and in different indications."
                        },
                        {
                            question: "What factors drive program prioritization?",
                            answer: "We consider four dimensions: regulatory feasibility (PTRS, pathway clarity, data quality), commercial potential (market size, competition, pricing), resource requirements (remaining development cost, timeline), and strategic fit (alignment with company capabilities, portfolio balance). Each dimension is weighted based on your company's priorities. The result is a ranked portfolio with clear rationale."
                        },
                        {
                            question: "Should orphan drugs be evaluated differently?",
                            answer: "Yes. Orphan drugs have unique dynamics: smaller patient populations but higher pricing, shorter trials, and regulatory incentives (7-year US exclusivity, tax credits, fee waivers). Commercial viability assessment differs—you're looking at willingness-to-pay in rare diseases, not volume. We've helped companies recognize orphan opportunities they were undervaluing and avoid overcrowded rare disease spaces."
                        },
                        {
                            question: "How do you identify lifecycle extension opportunities?",
                            answer: "We systematically evaluate: new indications (where can existing data support expansion?), new formulations (can reformulation extend exclusivity?), pediatric development (PREA/BPCA obligations and extensions), geographic expansion (which markets aren't captured?), and combination therapies. Each opportunity has a regulatory pathway and timeline. We prioritize by risk-adjusted return."
                        },
                        {
                            question: "When should we kill a program?",
                            answer: "The hardest decisions are killing programs with sunk costs. We recommend termination when: the science no longer supports the hypothesis, regulatory pathway is blocked or prohibitively expensive, competitive landscape has shifted unfavorably, or resources would generate better returns elsewhere. We provide objective analysis to support difficult but necessary decisions."
                        },
                        {
                            question: "How often should we reassess the portfolio?",
                            answer: "Annually at minimum, but also after major events: Phase 2 readouts, competitive approvals, regulatory feedback, or M&A activity. The pharmaceutical landscape shifts constantly—yesterday's priority may be today's deprioritization candidate. We can provide ongoing portfolio monitoring or point-in-time assessments as needed."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Orphan Drug Designation",
                            url: "https://www.fda.gov/industry/medical-products-rare-diseases-and-conditions/designating-orphan-product-drugs-and-biological-products",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Pediatric Research Equity Act (PREA)",
                            url: "https://www.fda.gov/drugs/development-resources/pediatric-drug-development-pediatric-research-equity-act-and-best-pharmaceuticals-children-act",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Product Lifecycle Management",
                            url: "https://www.fda.gov/drugs/pharmaceutical-quality-resources/lifecycle-management",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "Our R&D budget was stretched across 8 programs. Adelphi's portfolio assessment revealed 2 programs with blocking issues and 3 with underexploited lifecycle opportunities. Reallocating resources let us advance our best assets faster while pursuing additional indications we hadn't considered.",
                        author: "Dr. Susan Mitchell",
                        role: "Chief Scientific Officer",
                        company: "Mid-Size Pharma"
                    }
                }
            },
            {
                slug: "compliance-history-review",
                title: "Compliance History Review",
                description: "Thorough investigation of past interactions with health authorities.",
                icon: FileSearch,
                fullContent: {
                    heroTitle: "Compliance History Review",
                    heroSubtitle: "Understanding the Track Record",
                    introduction: "A company's history with regulators tells a story. We investigate the compliance history of potential partners or acquisition targets, reviewing 483s, Warning Letters, and correspondence to assess the culture of quality and regulatory standing.",
                    features: [
                        "Inspection history analysis",
                        "Enforcement action review",
                        "Recall history assessment",
                        "Quality culture evaluation"
                    ],
                    benefits: [
                        "Identification of systemic issues",
                        "Prediction of future compliance risk",
                        "Character assessment of management",
                        "Protection of reputation"
                    ],
                    process: [
                        { title: "Search", description: "Mining public and private databases." },
                        { title: "Analyze", description: "Looking for patterns of non-compliance." },
                        { title: "Assess", description: "Determining the impact on the deal." }
                    ],
                    faqs: [
                        {
                            question: "What public databases do you search?",
                            answer: "We search multiple FDA databases: Warning Letters, Form 483 observations, import alerts, recall database, debarment list, clinical trial registry (for holds and terminations), and inspection classification database. We also check EMA and other global regulators for enforcement actions, and monitor court filings for consent decrees and qui tam actions. Our search is comprehensive and systematic."
                        },
                        {
                            question: "How do you interpret Form 483 observations?",
                            answer: "Context matters. A single 483 observation on a minor issue is routine—most inspections result in some observations. However, multiple observations on data integrity, repeat observations on the same issue, or observations that indicate systemic quality culture problems are serious. We analyze patterns across inspections and compare to industry benchmarks to distinguish normal from concerning."
                        },
                        {
                            question: "What's the significance of a Warning Letter?",
                            answer: "Warning Letters are serious—they indicate FDA found significant violations and the company's response was inadequate. Unresolved Warning Letters can block new approvals, delay supplements, and prevent product exports. The severity depends on the nature of violations and remediation status. We assess whether the company has genuinely fixed the issues or just addressed the immediate citations."
                        },
                        {
                            question: "How far back do you look?",
                            answer: "We typically review 10 years of compliance history, though we go further for companies with significant issues. More importantly, we look for patterns and trends. A company that had problems 8 years ago but has clean inspections since shows improvement. A company with recurring issues shows a quality culture problem that likely persists."
                        },
                        {
                            question: "What about compliance history of CMOs and suppliers?",
                            answer: "Critical. Your product's quality depends on your supply chain. We review compliance history of all critical vendors: API manufacturers, CMOs, testing laboratories, and packaging sites. A Warning Letter at your CMO is your problem too. We identify supply chain vulnerabilities that could affect your approval or marketed product."
                        },
                        {
                            question: "How does compliance history affect M&A deals?",
                            answer: "Compliance issues can significantly impact deal value and structure. Unresolved Warning Letters might require price reduction, escrow holdbacks, or specific indemnifications. Consent decrees often require assuming expensive ongoing obligations. We quantify the cost of remediation and ongoing compliance burden so these factors are reflected in deal terms."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Warning Letters Database",
                            url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters",
                            source: "FDA"
                        },
                        {
                            title: "FDA: Inspection Classification Database",
                            url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-references/inspection-classification-database",
                            source: "FDA"
                        },
                        {
                            title: "FDA: FDA Debarment List",
                            url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/enforcement-actions/fda-debarment-list-drug-product-applications",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "We were acquiring a company with 3 manufacturing sites. Adelphi's compliance review found one site had received 5 Form 483s with repeat observations on data integrity. We required the seller to remediate before closing and held back 15% of the purchase price pending FDA reinspection.",
                        author: "Laura Jackson",
                        role: "General Counsel",
                        company: "Pharmaceutical Acquirer"
                    }
                }
            },
            {
                slug: "risk-mitigation-strategies",
                title: "Risk Mitigation Strategies",
                description: "Actionable recommendations to address identified risks.",
                icon: AlertOctagon,
                fullContent: {
                    heroTitle: "Risk Mitigation Strategies",
                    heroSubtitle: "Turning Problems into Plans",
                    introduction: "Identifying a risk is only the first step. We provide actionable strategies to mitigate those risks, whether through additional studies, alternative regulatory pathways, or operational changes. We help you fix the problems we find.",
                    features: [
                        "Remediation roadmaps",
                        "Alternative development scenarios",
                        "Agency engagement strategies",
                        "Contingency planning"
                    ],
                    benefits: [
                        "Path forward for troubled assets",
                        "Cost-effective solutions",
                        "Restored stakeholder confidence",
                        "Saved programs"
                    ],
                    process: [
                        { title: "Prioritize", description: "Ranking risks by severity and impact." },
                        { title: "Solutioning", description: "Developing specific fixes for each risk." },
                        { title: "Implementation", description: "Guiding the execution of the plan." }
                    ],
                    faqs: [
                        {
                            question: "How do you prioritize which risks to address first?",
                            answer: "We use a risk matrix considering severity (impact on approval/safety) and likelihood (how certain is FDA to find it?). Critical risks that are certain to be caught get immediate attention. We also consider interdependencies—some fixes enable others. The result is a sequenced remediation roadmap that addresses the most important issues first while managing resource constraints."
                        },
                        {
                            question: "What if a risk can't be fully mitigated?",
                            answer: "Some risks require management rather than elimination. If you can't generate missing data, you might pursue a different regulatory pathway, seek FDA guidance on acceptable alternatives, or design post-marketing commitments. We help you develop 'Plan B' strategies for risks that can't be fully resolved, ensuring you have options when the primary path is blocked."
                        },
                        {
                            question: "When should we engage FDA about identified risks?",
                            answer: "Timing is strategic. For some issues, early FDA engagement is essential—you need their input before investing in remediation. For others, it's better to fix the problem first and present a solution, not just a problem. We help you decide when to go to FDA and how to frame the discussion to maximize constructive dialogue."
                        },
                        {
                            question: "How do you handle 'show-stopper' findings?",
                            answer: "Not every program can be saved. When we find issues that fundamentally undermine the drug's viability—pivotal trial fraud, irreparable safety signals, or non-scalable manufacturing—we provide honest assessment. Sometimes the mitigation strategy is program termination to redirect resources. We'd rather give you hard truths than false hope."
                        },
                        {
                            question: "Can you help implement the mitigation strategies?",
                            answer: "Absolutely. Identifying risks and developing strategies is only valuable if they're executed. We support implementation: designing and overseeing additional studies, preparing agency briefing documents, managing remediation projects, and monitoring progress. We stay engaged until the risks are actually resolved, not just identified."
                        },
                        {
                            question: "How do you know the mitigation worked?",
                            answer: "We establish clear success criteria upfront: specific data to be generated, documentation to be completed, or agency feedback to be obtained. After implementation, we reassess the program against the same gap analysis framework. The risk should be resolved or reduced to acceptable levels. We don't declare victory until the issue is genuinely fixed."
                        }
                    ],
                    relatedGuidance: [
                        {
                            title: "FDA: Formal Meetings Between FDA and Sponsors",
                            url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/formal-meetings-between-fda-and-sponsors-or-applicants-pdufa-products",
                            source: "FDA"
                        },
                        {
                            title: "ICH Q9: Quality Risk Management",
                            url: "https://database.ich.org/sites/default/files/Q9%20Guideline.pdf",
                            source: "ICH"
                        },
                        {
                            title: "FDA: Complete Response Letters",
                            url: "https://www.fda.gov/drugs/nda-and-bla-approvals/complete-response-letters",
                            source: "FDA"
                        }
                    ],
                    testimonial: {
                        quote: "After a Complete Response Letter, we were stuck. Adelphi developed a mitigation strategy that reframed our efficacy argument, addressed the CMC concerns with targeted studies, and prepared us for a successful Type A meeting. We were approved 11 months later.",
                        author: "Dr. David Park",
                        role: "CEO",
                        company: "Biotech Company"
                    }
                }
            }
        ]
    }
};
