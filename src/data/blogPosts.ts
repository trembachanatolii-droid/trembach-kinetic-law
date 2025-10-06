export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime?: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding California Personal Injury Law: Your Rights After an Accident",
    excerpt: "California personal injury law provides crucial protections for accident victims. Learn about your rights to compensation, the statute of limitations, and how to navigate the claims process effectively.",
    date: "Oct 5, 2025",
    category: "Legal Insights",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    slug: "understanding-california-personal-injury-law",
    readTime: "7 min read",
    author: "Trembach Law Firm"
  },
  {
    id: "2",
    title: "The True Cost of Car Accidents: Beyond the Initial Impact",
    excerpt: "Car accidents create financial burdens that extend far beyond immediate medical bills. Discover the hidden costs including lost wages, rehabilitation, and long-term care that victims often face.",
    date: "Oct 3, 2025",
    category: "Auto Accidents",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    slug: "true-cost-of-car-accidents",
    readTime: "6 min read"
  },
  {
    id: "3",
    title: "Why Medical Documentation is Critical in Personal Injury Cases",
    excerpt: "Proper medical documentation can make or break your personal injury claim. Learn what records you need, how to obtain them, and why timely medical treatment is essential for your case.",
    date: "Sep 30, 2025",
    category: "Case Strategy",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    slug: "medical-documentation-critical",
    readTime: "8 min read"
  },
  {
    id: "4",
    title: "Navigating Insurance Companies After an Accident: What You Need to Know",
    excerpt: "Insurance companies have one goal: minimizing payouts. Understand their tactics, why you shouldn't accept the first offer, and how having legal representation levels the playing field.",
    date: "Sep 27, 2025",
    category: "Insurance Claims",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    slug: "navigating-insurance-companies",
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "Rideshare Accidents: Unique Legal Challenges with Uber and Lyft Cases",
    excerpt: "Rideshare accidents involve complex liability questions. Learn about driver classifications, insurance coverage gaps, and why these cases require specialized legal knowledge.",
    date: "Sep 24, 2025",
    category: "Rideshare Accidents",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    slug: "rideshare-accidents-legal-challenges",
    readTime: "9 min read"
  },
  {
    id: "6",
    title: "Common Myths About Personal Injury Lawsuits Debunked",
    excerpt: "Don't let misconceptions prevent you from seeking justice. We debunk common myths about personal injury cases, lawsuit timelines, and what to expect from the legal process.",
    date: "Sep 21, 2025",
    category: "Legal Education",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
    slug: "personal-injury-myths-debunked",
    readTime: "6 min read"
  },
  {
    id: "7",
    title: "Statute of Limitations in California: Don't Miss Your Legal Deadline",
    excerpt: "California law sets strict deadlines for filing personal injury claims. Missing these deadlines can forfeit your right to compensation. Learn the timelines for different types of cases.",
    date: "Sep 18, 2025",
    category: "Legal Deadlines",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    slug: "california-statute-of-limitations",
    readTime: "5 min read"
  },
  {
    id: "8",
    title: "How Pre-Existing Conditions Affect Your Injury Claim",
    excerpt: "Having pre-existing conditions doesn't disqualify you from seeking compensation. Learn how the law protects your rights and how to properly document aggravated conditions.",
    date: "Sep 15, 2025",
    category: "Case Strategy",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    slug: "pre-existing-conditions-injury-claims",
    readTime: "7 min read"
  },
  {
    id: "9",
    title: "Truck Accidents vs. Car Accidents: Understanding the Differences",
    excerpt: "Commercial truck accidents involve federal regulations, multiple liable parties, and severe injuries. Discover why these cases require specialized legal expertise and investigation.",
    date: "Sep 12, 2025",
    category: "Truck Accidents",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    slug: "truck-vs-car-accidents",
    readTime: "8 min read"
  },
  {
    id: "10",
    title: "Protecting Your Rights at the Accident Scene: A Step-by-Step Guide",
    excerpt: "The moments after an accident are crucial. Learn what steps to take, what information to gather, and common mistakes that can jeopardize your future claim.",
    date: "Sep 9, 2025",
    category: "Accident Response",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    slug: "protecting-rights-accident-scene",
    readTime: "6 min read"
  },
  {
    id: "11",
    title: "When to Hire a Personal Injury Attorney: Timing Matters",
    excerpt: "Early legal representation makes a significant difference in case outcomes. Understand when you need an attorney and how they can protect your interests from day one.",
    date: "Sep 6, 2025",
    category: "Legal Guidance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    slug: "when-to-hire-attorney",
    readTime: "7 min read"
  },
  {
    id: "12",
    title: "Understanding Pain and Suffering Damages in California",
    excerpt: "Non-economic damages can constitute a significant portion of your compensation. Learn how pain and suffering is calculated and what factors influence these awards.",
    date: "Sep 3, 2025",
    category: "Compensation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    slug: "pain-suffering-damages",
    readTime: "8 min read"
  },
  {
    id: "13",
    title: "Motorcycle Accidents: Overcoming Bias and Securing Fair Compensation",
    excerpt: "Motorcyclists face unique challenges including insurance bias. Discover how to combat stereotypes and build a strong case despite common prejudices.",
    date: "Aug 31, 2025",
    category: "Motorcycle Accidents",
    image: "https://images.unsplash.com/photo-1558981033-6f9c2c46abdd?w=800&h=600&fit=crop",
    slug: "motorcycle-accidents-overcoming-bias",
    readTime: "6 min read"
  },
  {
    id: "14",
    title: "The Role of Expert Witnesses in Personal Injury Cases",
    excerpt: "Expert testimony strengthens your case and validates your claims. Learn about different types of experts and how they contribute to successful outcomes.",
    date: "Aug 28, 2025",
    category: "Legal Strategy",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    slug: "expert-witnesses-injury-cases",
    readTime: "9 min read"
  },
  {
    id: "15",
    title: "Pedestrian Accidents: Protecting Vulnerable Road Users",
    excerpt: "Pedestrians have minimal protection against vehicles. Understand liability in crosswalk accidents, driver negligence, and your rights as a vulnerable road user.",
    date: "Aug 25, 2025",
    category: "Pedestrian Accidents",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop",
    slug: "pedestrian-accidents-protection",
    readTime: "7 min read"
  },
  {
    id: "16",
    title: "Social Media and Your Personal Injury Case: What Not to Post",
    excerpt: "Insurance companies monitor social media to undermine claims. Learn what posts can damage your case and how to protect your privacy during litigation.",
    date: "Aug 22, 2025",
    category: "Case Protection",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    slug: "social-media-injury-cases",
    readTime: "5 min read"
  },
  {
    id: "17",
    title: "Wrongful Death Claims: Seeking Justice for Lost Loved Ones",
    excerpt: "Losing a loved one to negligence is devastating. Understand who can file wrongful death claims, what damages are recoverable, and how the legal process provides accountability.",
    date: "Aug 19, 2025",
    category: "Wrongful Death",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
    slug: "wrongful-death-claims-justice",
    readTime: "10 min read"
  },
  {
    id: "18",
    title: "Brain Injuries: The Hidden Epidemic from Accidents",
    excerpt: "Traumatic brain injuries often go undiagnosed initially but cause lifelong complications. Learn about symptoms, diagnostic tools, and why specialized medical evaluation is critical.",
    date: "Aug 16, 2025",
    category: "Serious Injuries",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    slug: "brain-injuries-hidden-epidemic",
    readTime: "8 min read"
  },
  {
    id: "19",
    title: "Premises Liability: When Property Owners Are Responsible for Injuries",
    excerpt: "Property owners have duties to maintain safe conditions. Understand slip and fall cases, inadequate security claims, and what constitutes negligent maintenance.",
    date: "Aug 13, 2025",
    category: "Premises Liability",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    slug: "premises-liability-property-owners",
    readTime: "7 min read"
  },
  {
    id: "20",
    title: "Medical Malpractice in California: When Healthcare Causes Harm",
    excerpt: "Medical errors are among the leading causes of death. Learn about standards of care, common types of malpractice, and the unique challenges these cases present.",
    date: "Aug 10, 2025",
    category: "Medical Malpractice",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    slug: "medical-malpractice-california",
    readTime: "9 min read"
  },
  {
    id: "21",
    title: "Product Liability: Holding Manufacturers Accountable",
    excerpt: "Defective products cause thousands of injuries annually. Understand manufacturer liability, different types of defects, and how to prove a product liability claim.",
    date: "Aug 7, 2025",
    category: "Product Liability",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    slug: "product-liability-manufacturers"
  },
  {
    id: "22",
    title: "Negotiating with Insurance Adjusters: Protecting Your Interests",
    excerpt: "Insurance adjusters are trained negotiators working against you. Learn their common tactics, how to counter lowball offers, and when settlement negotiations should end.",
    date: "Aug 4, 2025",
    category: "Insurance Claims",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    slug: "negotiating-insurance-adjusters"
  },
  {
    id: "23",
    title: "Spinal Cord Injuries: Life-Changing Consequences Require Maximum Compensation",
    excerpt: "Spinal cord injuries result in permanent disabilities and enormous lifetime costs. Understand the levels of injury, required care, and why these cases demand substantial compensation.",
    date: "Aug 1, 2025",
    category: "Catastrophic Injuries",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    slug: "spinal-cord-injuries-consequences"
  },
  {
    id: "24",
    title: "Hit and Run Accidents: Your Options When the Driver Flees",
    excerpt: "Hit and run accidents create unique challenges. Learn about uninsured motorist coverage, police investigations, and how to recover compensation when the at-fault driver cannot be found.",
    date: "Jul 29, 2025",
    category: "Auto Accidents",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    slug: "hit-and-run-accidents-options"
  },
  {
    id: "25",
    title: "Bicycle Accidents: Cyclist Rights and Driver Responsibilities",
    excerpt: "Cyclists have the same road rights as motorists. Understand California's three-foot law, common causes of bicycle accidents, and how to prove driver negligence.",
    date: "Jul 26, 2025",
    category: "Bicycle Accidents",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&h=600&fit=crop",
    slug: "bicycle-accidents-cyclist-rights"
  },
  {
    id: "26",
    title: "Comparative Negligence in California: When You Share Fault",
    excerpt: "California's pure comparative negligence system allows recovery even when partially at fault. Learn how fault percentages affect compensation and why this law is favorable to victims.",
    date: "Jul 23, 2025",
    category: "Legal Concepts",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
    slug: "comparative-negligence-california"
  },
  {
    id: "27",
    title: "Construction Site Accidents: Multiple Parties, Complex Liability",
    excerpt: "Construction sites present numerous hazards. Understand OSHA violations, third-party liability beyond workers' comp, and why these cases involve multiple defendants.",
    date: "Jul 20, 2025",
    category: "Workplace Injuries",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    slug: "construction-site-accidents"
  },
  {
    id: "28",
    title: "Dog Bite Laws in California: Strict Liability Protection",
    excerpt: "California holds dog owners strictly liable for bites. Learn about dangerous breed regulations, homeowner insurance coverage, and what to do immediately after a dog attack.",
    date: "Jul 17, 2025",
    category: "Animal Attacks",
    image: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&h=600&fit=crop",
    slug: "dog-bite-laws-california"
  },
  {
    id: "29",
    title: "Understanding Punitive Damages: When Negligence Becomes Recklessness",
    excerpt: "Punitive damages punish egregious conduct and deter future misconduct. Learn when they apply, how they're calculated, and cases where courts award these additional damages.",
    date: "Jul 14, 2025",
    category: "Legal Remedies",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    slug: "understanding-punitive-damages"
  },
  {
    id: "30",
    title: "Burn Injuries: Devastating Consequences Requiring Specialized Care",
    excerpt: "Severe burns cause physical and psychological trauma requiring extensive treatment. Understand burn classifications, treatment costs, and why these injuries warrant maximum compensation.",
    date: "Jul 11, 2025",
    category: "Catastrophic Injuries",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    slug: "burn-injuries-devastating-consequences"
  },
  {
    id: "31",
    title: "Elder Abuse in Nursing Homes: Protecting Vulnerable Seniors",
    excerpt: "Nursing home abuse is shockingly common. Learn warning signs of neglect and abuse, resident rights, and how families can hold facilities accountable for substandard care.",
    date: "Jul 8, 2025",
    category: "Elder Abuse",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    slug: "elder-abuse-nursing-homes"
  },
  {
    id: "32",
    title: "Amputation Injuries: Adapting to Permanent Loss",
    excerpt: "Losing a limb changes every aspect of life. Understand prosthetics costs, rehabilitation needs, psychological impacts, and why lifetime care planning is essential in these cases.",
    date: "Jul 5, 2025",
    category: "Catastrophic Injuries",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    slug: "amputation-injuries-permanent-loss"
  },
  {
    id: "33",
    title: "Distracted Driving: The Modern Epidemic Causing Preventable Accidents",
    excerpt: "Distracted driving kills thousands annually. Learn about texting and driving laws, other forms of distraction, and how to prove distraction caused your accident.",
    date: "Jul 2, 2025",
    category: "Auto Safety",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    slug: "distracted-driving-epidemic"
  },
  {
    id: "34",
    title: "Mass Torts vs. Class Actions: Understanding Large-Scale Litigation",
    excerpt: "When many people suffer similar harm, collective legal action becomes possible. Learn the differences between mass torts and class actions and which approach serves victims better.",
    date: "Jun 29, 2025",
    category: "Complex Litigation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    slug: "mass-torts-class-actions"
  },
  {
    id: "35",
    title: "Traumatic Brain Injuries: Recognizing the Invisible Injury",
    excerpt: "TBIs often have no visible signs but cause profound impairments. Learn about cognitive symptoms, diagnostic challenges, and why immediate medical evaluation is crucial after head trauma.",
    date: "Jun 26, 2025",
    category: "Brain Injuries",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    slug: "traumatic-brain-injuries-invisible"
  },
  {
    id: "36",
    title: "Drunk Driving Accidents: Civil Remedies Beyond Criminal Prosecution",
    excerpt: "DUI drivers face criminal charges, but victims deserve civil compensation. Understand dram shop liability, punitive damages in DUI cases, and recovering from intoxicated drivers.",
    date: "Jun 23, 2025",
    category: "Auto Accidents",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    slug: "drunk-driving-civil-remedies"
  },
  {
    id: "37",
    title: "The Discovery Process: Building Your Case Through Investigation",
    excerpt: "Discovery uncovers evidence that proves your case. Learn about depositions, interrogatories, document requests, and how attorneys gather the information needed for success.",
    date: "Jun 20, 2025",
    category: "Legal Process",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    slug: "discovery-process-investigation"
  },
  {
    id: "38",
    title: "Vicarious Liability: When Employers Pay for Employee Negligence",
    excerpt: "Employers can be liable for employee actions. Understand respondeat superior, scope of employment, and why this doctrine expands compensation sources in injury cases.",
    date: "Jun 17, 2025",
    category: "Legal Concepts",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
    slug: "vicarious-liability-employers"
  },
  {
    id: "39",
    title: "Whiplash and Soft Tissue Injuries: Often Dismissed, Always Serious",
    excerpt: "Insurance companies minimize soft tissue injuries. Learn why whiplash causes real pain, diagnostic challenges, and how to prove these commonly disputed injuries.",
    date: "Jun 14, 2025",
    category: "Common Injuries",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    slug: "whiplash-soft-tissue-injuries"
  },
  {
    id: "40",
    title: "Negotiating Medical Liens: Maximizing Your Net Recovery",
    excerpt: "Medical providers may place liens on settlements. Understand Medicare liens, hospital liens, and strategies to reduce medical bills and increase your take-home compensation.",
    date: "Jun 11, 2025",
    category: "Settlement Strategy",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    slug: "negotiating-medical-liens"
  },
  {
    id: "41",
    title: "Psychological Injuries: When Trauma is Emotional, Not Physical",
    excerpt: "PTSD and emotional distress are compensable injuries. Learn about psychological evaluations, proving emotional harm, and why mental health treatment is both necessary and valuable.",
    date: "Jun 8, 2025",
    category: "Emotional Trauma",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    slug: "psychological-injuries-emotional-trauma"
  },
  {
    id: "42",
    title: "Uninsured and Underinsured Motorist Coverage: Your Safety Net",
    excerpt: "Your own insurance protects you when others lack coverage. Understand UM/UIM policies, stacking coverage, and why this insurance is essential protection in California.",
    date: "Jun 5, 2025",
    category: "Insurance Coverage",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    slug: "uninsured-underinsured-motorist"
  },
  {
    id: "43",
    title: "Depositions: What to Expect When Giving Testimony Under Oath",
    excerpt: "Depositions can be intimidating but preparation eliminates fear. Learn what happens during depositions, how to prepare, and common tactics opposing attorneys use.",
    date: "Jun 2, 2025",
    category: "Legal Process",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    slug: "depositions-testimony-under-oath"
  },
  {
    id: "44",
    title: "Loss of Consortium: Compensating Family Members for Your Injury",
    excerpt: "Serious injuries affect entire families. Understand loss of consortium claims, who can file, and how spouses recover for the impact your injury has on your relationship.",
    date: "May 30, 2025",
    category: "Family Impact",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    slug: "loss-of-consortium-family"
  },
  {
    id: "45",
    title: "Seat Belt Defense: When Insurance Uses Safety Against You",
    excerpt: "Insurers claim non-use of seat belts caused injuries. Learn about California's seat belt law, how this defense works, and strategies to counter these arguments.",
    date: "May 27, 2025",
    category: "Insurance Defense",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    slug: "seat-belt-defense-insurance"
  },
  {
    id: "46",
    title: "Settlement vs. Trial: Making the Right Decision for Your Case",
    excerpt: "Most cases settle, but some require trial. Understand the pros and cons of each path, factors affecting this decision, and how to know when to accept an offer.",
    date: "May 24, 2025",
    category: "Case Resolution",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
    slug: "settlement-vs-trial-decision"
  },
  {
    id: "47",
    title: "Future Medical Expenses: Accounting for Long-Term Care Needs",
    excerpt: "Serious injuries require lifetime treatment. Learn how life care planners calculate future costs, why these projections are essential, and how to prove future medical needs.",
    date: "May 21, 2025",
    category: "Damages Calculation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    slug: "future-medical-expenses"
  },
  {
    id: "48",
    title: "Defective Road Design: When Infrastructure Causes Accidents",
    excerpt: "Dangerous road conditions contribute to crashes. Understand government liability, design defect claims, and overcoming sovereign immunity in roadway cases.",
    date: "May 18, 2025",
    category: "Government Liability",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    slug: "defective-road-design"
  },
  {
    id: "49",
    title: "Witness Testimony: The Power of Eyewitness Accounts",
    excerpt: "Witnesses strengthen your case significantly. Learn how to identify witnesses, preserve their testimony, and why witness credibility often determines case outcomes.",
    date: "May 15, 2025",
    category: "Evidence",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    slug: "witness-testimony-eyewitness"
  },
  {
    id: "50",
    title: "Contingency Fees: How Personal Injury Attorneys Make Justice Accessible",
    excerpt: "Contingency fees eliminate financial barriers to legal representation. Understand how these arrangements work, typical percentages, and why they align attorney and client interests.",
    date: "May 12, 2025",
    category: "Legal Fees",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    slug: "contingency-fees-accessibility"
  }
];
