export type Lang = 'en' | 'ar'

export const content = {
  en: {
    dir: 'ltr' as const,
    nav: {
      about: 'Firm',
      founder: 'Founder',
      practices: 'Practices',
      services: 'Services',
      team: 'People',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Free Consultation',
    },
    hero: {
      eyebrow: 'Ship Arrest & Maritime Disputes · Est. 1988',
      title: 'Your legal gateway to the Mediterranean, the Red Sea and the Suez Canal.',
      subtitle:
        'Soliman Advocates represents shipowners, P&I clubs, insurers, charterers and traders in Egypt’s ports and the Suez Canal — combining deep command of Egyptian maritime courts with international standards of service since 1988.',
      primary: 'Free Consultation',
      secondary: 'Ship Arrest Services',
      stat1: 'Case win rate',
      stat2: 'Years of experience',
      stat3: 'Established',
    },
    marquee: 'Trusted by shipowners, P&I clubs, insurers, charterers and international law firms',
    stats: [
      { value: '1988', label: 'Founded' },
      { value: '35+', label: 'Years of experience' },
      { value: '99%', label: 'Case win rate' },
      { value: '4', label: 'Major Egyptian ports' },
    ],
    about: {
      eyebrow: 'About Us',
      title: 'Defending your rights with commitment since 1988.',
      body1:
        'We fight tirelessly for justice and are always ready to stand by your side. Our unwavering commitment ensures that your rights are protected and your case is handled with the utmost diligence.',
      body2:
        'With years of experience and a proven track record, we approach each case with a strategic mindset and a relentless drive to achieve the best possible outcomes. Our team of dedicated legal professionals is well-prepared to tackle even the most complex legal challenges across the Suez Canal region and beyond.',
      points: [
        'Expert legal advice tailored to your needs',
        'Strong and strategic legal defense',
        '99% case win rate for our clients',
        'A regional reference point in the Suez Canal area',
      ],
      badge: 'Port Tawfik, Suez',
    },
    founder: {
      eyebrow: 'Meet the Founder & CEO',
      name: 'Mr. Usama Soliman',
      role: 'Founder & CEO · Cassation Lawyer',
      body1:
        'Mr. Usama Soliman is a distinguished maritime lawyer and one of Egypt’s leading legal experts in ship arrest, maritime disputes, and marine environmental claims. He founded Soliman Advocates in 1988, and has since built a legacy of excellence in the field of international maritime law.',
      body2:
        'With over 35 years of experience, Mr. Soliman is a cassation lawyer (licensed before the Egyptian Court of Cassation) and a trusted legal advisor to shipowners, P&I clubs, and international law firms. His deep knowledge of Egyptian port regulations and marine litigation procedures has made Soliman Advocates a regional reference point in the Suez Canal area and beyond.',
      tags: ['Ship Arrest', 'Maritime Disputes', 'Court of Cassation'],
    },
    practices: {
      eyebrow: 'Practice Areas',
      title: 'Delivering exceptional legal services.',
      subtitle:
        'At Soliman Advocates, we pride ourselves on delivering the best legal defense services to our clients across maritime and commercial law.',
      items: [
        {
          title: 'Maritime Law',
          desc: 'Focused on ship arrest, maritime disputes, and related claims across all Egyptian ports and the Suez Canal.',
        },
        {
          title: 'Real Estate Law',
          desc: 'Expert guidance in property transactions and dispute resolution.',
        },
        {
          title: 'Intellectual Property',
          desc: 'Comprehensive trademark and copyright services.',
        },
        {
          title: 'Patents',
          desc: 'Assistance with patent applications and protections.',
        },
        {
          title: 'Corporate & Commercial Law',
          desc: 'Business formation, contracts, and M&A support.',
        },
        {
          title: 'Insurance Law',
          desc: 'Handling general and maritime insurance matters.',
        },
        {
          title: 'Environmental Law',
          desc: 'Compliance and resolution of pollution-related issues.',
        },
        {
          title: 'Employment Law',
          desc: 'Legal advice on contracts, disputes, and sector-specific compliance.',
        },
      ],
    },
    approach: {
      eyebrow: 'Why Choose Us',
      title: 'Over 30 years of experience in the Suez Canal.',
      items: [
        {
          title: 'Expert Advice',
          desc: 'Receive expert legal advice tailored to your needs, ensuring informed decisions and effective solutions for your legal challenges.',
        },
        {
          title: 'Legal Defense',
          desc: 'We provide strong and strategic legal defense to protect your rights and achieve the best possible outcome for your case.',
        },
        {
          title: '99% Case Win',
          desc: 'With a 99% case win rate, we are dedicated to providing effective legal defense to achieve the best possible outcomes.',
        },
        {
          title: 'Rapid Response',
          desc: 'Positioned on the Suez Canal, we respond to arrests, detentions and canal incidents within hours — not days.',
        },
      ],
    },
    team: {
      eyebrow: 'Our People',
      title: 'A dedicated team of legal professionals.',
      subtitle:
        'Specialists in maritime and commercial law, admitted before the Egyptian courts.',
      members: [
        { name: 'Mr. Usama Soliman', role: 'Founder & CEO', focus: 'Ship Arrest · Cassation' },
        { name: 'Ms. Laila Soliman', role: 'Business Development Manager', focus: 'International Relations · Client Development' },
        { name: 'Maritime Disputes Team', role: 'Litigation', focus: 'Arrests · Court Applications' },
        { name: 'Claims & Recovery Team', role: 'Advisory', focus: 'Bunker · Cargo · P&I' },
        { name: 'Commercial Team', role: 'Corporate', focus: 'Contracts · Compliance' },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'A record our clients stand behind.',
      items: [
        {
          quote:
            'Thank you to Mr. Usama for his integrity in helping release my detained vessel and securing compensation. Colleagues in the industry recommended Soliman Advocates, and Mr. Usama fully lived up to that trust, handling my case with genuine care.',
          author: 'J.A.',
        },
        {
          quote:
            'I would like to thank Soliman Advocates for their excellent legal support in my compensation case related to the Ever Given incident. Their specialized team worked diligently to ensure I received the deserved compensation despite delays at the start of the case, providing exceptional service at every step.',
          author: 'S.M.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions.',
      items: [
        {
          q: 'What laws govern the detention of ships in Egypt?',
          a: 'The detention of ships in Egypt is regulated by the 1952 Brussels Convention on the Unification of Certain Rules Relating to the Arrest of Sea-Going Ships, as well as the Egyptian Maritime Trade Law No. 8 of 1990, Articles 59-66.',
        },
        {
          q: 'What are the procedures required to detain a ship in Egypt?',
          a: 'A request must be submitted to the competent court along with evidence proving that the debt is due and qualifies as a maritime debt. Certain documents, such as a notarized power of attorney and debt-related documents with an Arabic translation, must also be provided.',
        },
        {
          q: 'Is a counter-security required to detain a ship in Egypt?',
          a: 'Egyptian law does not require the plaintiff to provide a counter-security for detaining a ship, whether the plaintiff is Egyptian or foreign.',
        },
        {
          q: 'Can a ship other than the debtor vessel (a sister ship) be detained?',
          a: 'Yes, a sister ship can be detained, provided it is owned by the same owner of the debtor ship at the time the debt arose. Evidence of this must be presented to the court.',
        },
        {
          q: 'How can a ship detention be lifted in Egypt?',
          a: 'The detention can be lifted by providing an unconditional bank guarantee issued by a first-class Egyptian bank. If the detention is unjustified, it can also be lifted by submitting a request to the court for its cancellation.',
        },
        {
          q: 'Can the detention be lifted without a bank guarantee?',
          a: 'Yes, the detention can be lifted if it is found to be unjustified, whether for procedural or substantive reasons (e.g., debt repayment). An urgent request can be submitted to the court to review and lift the detention.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch with our team.',
      subtitle:
        'For consultations, urgent ship arrests or any maritime matter, reach us directly by email or phone. Our emergency line is available around the clock.',
      emailCtaTitle: 'Email us directly',
      emailCtaDesc: 'Send us the details of your matter and we will respond promptly.',
      emailButton: 'Send an Email',
      office: 'Main Office',
      officeValue: '68 El Gueish St., El Didi Building, Port Tawfik, Suez, Egypt',
      phone: 'Phone',
      phoneValue: '+20 103 307 3171',
      emailLabel: 'Email',
      emailValue: 'usoliman@solimanadvocates.com.eg',
      website: 'Website',
      websiteValue: 'www.solimanadvocates.com',
      hours: 'Emergency ship arrest line available 24/7',
      hoursLabel: 'Working Hours',
      hoursValue: 'Sunday – Thursday: 9:00 AM – 5:00 PM · Friday – Saturday by appointment',
    },
    services: {
      badge: 'Maritime & Admiralty Practice',
      title: 'Ship Arrest in Egypt',
      subtitle: 'Maritime claims we can assist you with',
      ports: ['Damietta', 'Alexandria', 'Port Said', 'Suez'],
      sectionTitle: 'Select a maritime claim type',
      popular: 'Popular',
      learnMore: 'Learn More',
      urgentEyebrow: 'Time-Sensitive: Vessel arriving soon?',
      urgentTitle: 'Need immediate assistance?',
      urgentDesc:
        'Our maritime team is available 24/7 for emergency ship arrest, urgent court applications, and time-critical matters across all Egyptian ports.',
      urgentCta: 'Contact Us Now',
      backHome: 'Back to Home',
      items: [
        {
          title: 'Arrest for Unpaid Bunker Claims',
          desc: 'Recovering unpaid marine fuel invoices.',
          popular: true,
          intro:
            'Unpaid marine fuel invoices are among the strongest grounds for ship arrest in Egypt. We move fast to secure your claim before the vessel sails.',
          points: [
            'Arrest applications filed within hours in any Egyptian port',
            'Claims for physical and contractual bunker suppliers',
            'Security negotiation and settlement where possible',
          ],
        },
        {
          title: 'Arrest for Cargo Claims',
          desc: 'Cargo loss, damage, and shortage.',
          intro:
            'Loss, damage or shortage discovered on discharge must be acted on quickly. We preserve the evidence and secure your recovery.',
          points: [
            'Survey coordination and evidence preservation',
            'Arrest or security for cargo interests and insurers',
            'Recovery actions before the Egyptian maritime courts',
          ],
        },
        {
          title: 'Arrest for Ship Agency Fees',
          desc: 'Port agency, disbursements, cash to master.',
          intro:
            'Port agents are often left unpaid after the vessel departs. Egyptian law treats agency disbursements as maritime debts.',
          points: [
            'Recovery of agency fees, disbursements and cash to master',
            'Arrest of the debtor vessel or a qualifying sister ship',
            'Documentation review and claim preparation',
          ],
        },
        {
          title: 'Arrest for Port Charges',
          desc: 'Terminal dues, port services, pilotage, towage.',
          intro:
            'Terminal dues, pilotage, towage and port services rank as maritime claims under Egyptian law.',
          points: [
            'Claims for terminals, port authorities and service providers',
            'Urgent arrest before the vessel departs',
            'Enforcement and collection through the courts',
          ],
        },
        {
          title: 'Arrest for Ship Repair Claims',
          desc: 'Dry dock, repair, and maintenance.',
          intro:
            'Shipyards and repairers can arrest for unpaid dry dock, repair and maintenance invoices.',
          points: [
            'Claims for shipyards and repair contractors',
            'Arrest as leverage for payment or security',
            'Settlement and enforcement strategies',
          ],
        },
        {
          title: 'Arrest for Salvage Claims',
          desc: 'Salvage operations and reward.',
          intro:
            'Salvage rewards are privileged maritime claims. We act for salvors seeking security and a fair reward.',
          points: [
            'Security for salvage remuneration',
            'Contractual and LOF salvage disputes',
            'Arrest proceedings in support of the award',
          ],
        },
        {
          title: 'Arrest for Collision Claims',
          desc: 'Vessel collision and allision.',
          intro:
            'After a collision or allision, securing jurisdiction and evidence is decisive for the outcome.',
          points: [
            'Arrest to obtain security for collision damages',
            'Casualty investigation and expert coordination',
            'Liability and quantum proceedings',
          ],
        },
        {
          title: 'Arrest for Crew Wage Claims',
          desc: 'Seafarer wages and entitlements.',
          intro:
            "Seafarers' wages rank among the highest maritime liens under Egyptian law.",
          points: [
            'Wage and entitlement claims for masters and crews',
            'Urgent arrest with minimal formalities',
            'Coordination with unions and P&I clubs where relevant',
          ],
        },
        {
          title: 'Arrest for Mortgage Claims',
          desc: 'Ship mortgage and preferred liens.',
          intro:
            'Registered mortgagees can enforce against the vessel while she is in Egyptian waters.',
          points: [
            'Arrest in support of mortgage enforcement',
            'Judicial sale proceedings',
            'Priority and ranking disputes',
          ],
        },
        {
          title: 'Other Maritime Claims',
          desc: 'General maritime debt enforcement.',
          intro:
            'Any maritime debt under the 1952 Brussels Convention and Egyptian law can ground an arrest.',
          points: [
            'Assessment of the claim and its arrestability',
            'Sister-ship arrest where available',
            'A tailored enforcement and recovery strategy',
          ],
        },
      ],
      detail: {
        how: 'How we help',
        briefEyebrow: 'Executive Brief · PDF',
        briefTitle: 'Download the Executive Brief',
        briefDesc: 'Procedure, required documents and timeline — emailed to you as a PDF.',
        allServices: 'All services',
        contactCta: 'Talk to our team',
      },
    },
    download: {
      button: 'Download the Brief',
      note: 'Every claim type comes with a free Executive Brief (PDF). Request it below and it will land in your inbox.',
      modalEyebrow: 'Executive Brief · PDF',
      modalTitle: 'Get the brief by email',
      modalDesc: 'Leave your name and email — our team will send you the brief for:',
      name: 'Full name',
      namePlaceholder: 'Your name',
      email: 'Email address',
      emailPlaceholder: 'you@company.com',
      submit: 'Email me the Brief',
      sending: 'Sending…',
      successTitle: 'Request received',
      successDesc: 'Thank you — the brief will land in your inbox shortly.',
      errorTitle: 'Something went wrong',
      errorDesc: 'Your request could not be sent. Email us directly instead:',
      privacy: 'No spam — we only use your email to send the brief.',
      close: 'Close',
    },
    cases: {
      eyebrow: 'Case Studies',
      title: 'Landmark maritime cases.',
      items: [
        {
          tag: 'Maritime Compensation',
          year: '2021',
          title: 'Ever Given — Suez Canal Blockage',
          desc: 'Secured compensation for clients affected by the Ever Given incident, ensuring deserved recovery despite initial delays.',
          result: 'Compensation secured',
        },
        {
          tag: 'Ship Arrest',
          year: '2023',
          title: 'Detained Vessel Release',
          desc: 'Released a detained vessel through an integrity-driven legal strategy and secured full compensation for the client.',
          result: 'Vessel released',
        },
        {
          tag: 'Environmental Claims',
          year: '2023',
          title: 'Pollution Liability Defense',
          desc: 'Defended a shipowner against marine pollution claims, achieving a favorable settlement and regulatory clearance.',
          result: 'Settlement reached',
        },
      ],
    },
    pages: {
      about: {
        eyebrow: 'The Firm',
        title: 'About Soliman Advocates',
        subtitle: 'A maritime powerhouse anchored on the Suez Canal since 1988.',
      },
      founder: {
        eyebrow: 'Leadership',
        title: 'Founder & CEO',
        subtitle: 'Mr. Usama Soliman — cassation lawyer and maritime law authority.',
      },
      practices: {
        eyebrow: 'Practice Areas',
        title: 'What We Do',
        subtitle: 'Maritime at the core — supported by a full commercial practice.',
      },
      people: {
        eyebrow: 'Our People',
        title: 'The Team',
        subtitle: 'Led by founder Mr. Usama Soliman — specialists admitted before the Egyptian courts.',
      },
      faq: {
        eyebrow: 'Knowledge',
        title: 'Frequently Asked Questions',
        subtitle: 'Ship arrest in Egypt — the essentials, answered.',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Talk to Our Team',
        subtitle: 'Reachable 24/7 for urgent ship arrest matters.',
      },
    },
    footer: {
      tagline:
        'Specialized legal services in maritime and shipping law across all major Egyptian ports, anchored at the Suez Canal.',
      practices: 'Practices',
      firm: 'Firm',
      legal: 'Legal',
      rights: 'All rights reserved. This website is for general informational purposes and does not constitute legal advice.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    brand: 'Soliman Advocates',
    brandSub: 'Ship Arrest & Maritime Law',
  },
  ar: {
    dir: 'rtl' as const,
    nav: {
      about: 'المكتب',
      founder: 'المؤسس',
      practices: 'مجالات العمل',
      services: 'خدماتنا',
      team: 'الفريق',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل',
      cta: 'استشارة مجانية',
    },
    hero: {
      eyebrow: 'حجز السفن والنزاعات البحرية · تأسس عام ١٩٨٨',
      title: 'بوابتك القانونية إلى البحر المتوسط والبحر الأحمر وقناة السويس.',
      subtitle:
        'يمثّل مكتب سليمان للمحاماة ملّاك السفن ونوادي الحماية والتعويض وشركات التأمين والمستأجرين والتجار في الموانئ المصرية وقناة السويس — نجمع بين الإلمام العميق بالمحاكم البحرية المصرية والمعايير الدولية في الخدمة منذ عام ١٩٨٨.',
      primary: 'استشارة مجانية',
      secondary: 'خدمات حجز السفن',
      stat1: 'معدل كسب القضايا',
      stat2: 'عامًا من الخبرة',
      stat3: 'سنة التأسيس',
    },
    marquee: 'موضع ثقة ملّاك السفن ونوادي الحماية والتعويض وشركات التأمين والمستأجرين والمكاتب الدولية',
    stats: [
      { value: '١٩٨٨', label: 'سنة التأسيس' },
      { value: '+٣٥', label: 'عامًا من الخبرة' },
      { value: '٩٩٪', label: 'معدل كسب القضايا' },
      { value: '٤', label: 'موانئ مصرية رئيسية' },
    ],
    about: {
      eyebrow: 'من نحن',
      title: 'ندافع عن حقوقك بالتزام منذ عام ١٩٨٨.',
      body1:
        'نناضل بلا كلل من أجل العدالة، ونحن دائمًا على استعداد للوقوف إلى جانبك. التزامنا الراسخ يضمن حماية حقوقك والتعامل مع قضيتك بأقصى درجات العناية.',
      body2:
        'بسنوات من الخبرة وسجلّ حافل، نتعامل مع كل قضية بعقلية استراتيجية وإصرار دؤوب على تحقيق أفضل النتائج الممكنة. فريقنا من المحترفين القانونيين المتفانين جاهز لمواجهة أعقد التحديات القانونية في منطقة قناة السويس وما وراءها.',
      points: [
        'استشارات قانونية خبيرة مصمّمة حسب احتياجاتك',
        'دفاع قانوني قوي واستراتيجي',
        'معدل كسب قضايا يبلغ ٩٩٪ لعملائنا',
        'مرجع إقليمي في منطقة قناة السويس',
      ],
      badge: 'بورتوفيق، السويس',
    },
    founder: {
      eyebrow: 'تعرّف على المؤسس والرئيس التنفيذي',
      name: 'الأستاذ أسامة سليمان',
      role: 'المؤسس والرئيس التنفيذي · محامٍ بالنقض',
      body1:
        'الأستاذ أسامة سليمان محامٍ بحري بارز وأحد أبرز الخبراء القانونيين في مصر في مجال حجز السفن والنزاعات البحرية ومطالبات التلوث البيئي البحري. أسّس مكتب سليمان للمحاماة عام ١٩٨٨، وبنى منذ ذلك الحين إرثًا من التميّز في مجال القانون البحري الدولي.',
      body2:
        'بخبرة تتجاوز ٣٥ عامًا، الأستاذ سليمان محامٍ أمام محكمة النقض المصرية ومستشار قانوني موثوق لملّاك السفن ونوادي الحماية والتعويض والمكاتب القانونية الدولية. معرفته العميقة بلوائح الموانئ المصرية وإجراءات التقاضي البحري جعلت مكتب سليمان مرجعًا إقليميًا في منطقة قناة السويس وما وراءها.',
      tags: ['حجز السفن', 'النزاعات البحرية', 'محكمة النقض'],
    },
    practices: {
      eyebrow: 'مجالات العمل',
      title: 'نقدّم خدمات قانونية استثنائية.',
      subtitle:
        'في مكتب سليمان للمحاماة، نفخر بتقديم أفضل خدمات الدفاع القانوني لعملائنا في القانون البحري والتجاري.',
      items: [
        {
          title: 'القانون البحري',
          desc: 'متخصص في حجز السفن والنزاعات البحرية والمطالبات ذات الصلة في جميع الموانئ المصرية وقناة السويس.',
        },
        {
          title: 'قانون العقارات',
          desc: 'إرشاد خبير في معاملات الملكية وحلّ النزاعات.',
        },
        {
          title: 'الملكية الفكرية',
          desc: 'خدمات شاملة للعلامات التجارية وحقوق النشر.',
        },
        {
          title: 'براءات الاختراع',
          desc: 'المساعدة في طلبات براءات الاختراع وحمايتها.',
        },
        {
          title: 'قانون الشركات والتجارة',
          desc: 'تأسيس الشركات والعقود ودعم عمليات الاندماج والاستحواذ.',
        },
        {
          title: 'قانون التأمين',
          desc: 'التعامل مع مسائل التأمين العامة والبحرية.',
        },
        {
          title: 'قانون البيئة',
          desc: 'الامتثال وحلّ القضايا المتعلقة بالتلوث.',
        },
        {
          title: 'قانون العمل',
          desc: 'استشارات قانونية في العقود والنزاعات والامتثال القطاعي.',
        },
      ],
    },
    approach: {
      eyebrow: 'لماذا تختارنا',
      title: 'أكثر من ٣٠ عامًا من الخبرة في قناة السويس.',
      items: [
        {
          title: 'استشارة خبيرة',
          desc: 'احصل على استشارة قانونية خبيرة مصمّمة حسب احتياجاتك، تضمن قرارات مدروسة وحلولًا فعّالة لتحدياتك القانونية.',
        },
        {
          title: 'دفاع قانوني',
          desc: 'نقدّم دفاعًا قانونيًا قويًا واستراتيجيًا لحماية حقوقك وتحقيق أفضل نتيجة ممكنة لقضيتك.',
        },
        {
          title: '٩٩٪ كسب القضايا',
          desc: 'بمعدل كسب قضايا يبلغ ٩٩٪، نحن ملتزمون بتقديم دفاع قانوني فعّال لتحقيق أفضل النتائج الممكنة.',
        },
        {
          title: 'استجابة سريعة',
          desc: 'من موقعنا على قناة السويس، نستجيب للحجوزات والاحتجازات وحوادث القناة خلال ساعات — لا أيام.',
        },
      ],
    },
    team: {
      eyebrow: 'فريقنا',
      title: 'فريق متفانٍ من المحترفين القانونيين.',
      subtitle: 'متخصصون في القانون البحري والتجاري، مقبولون أمام المحاكم المصرية.',
      members: [
        { name: 'الأستاذ أسامة سليمان', role: 'المؤسس والرئيس التنفيذي', focus: 'حجز السفن · النقض' },
        { name: 'الأستاذة ليلى سليمان', role: 'مديرة تطوير الأعمال', focus: 'العلاقات الدولية · تطوير العملاء' },
        { name: 'فريق النزاعات البحرية', role: 'التقاضي', focus: 'الحجوزات · الطلبات القضائية' },
        { name: 'فريق المطالبات والاسترداد', role: 'الاستشارات', focus: 'الوقود · البضائع · الحماية' },
        { name: 'الفريق التجاري', role: 'الشركات', focus: 'العقود · الامتثال' },
      ],
    },
    testimonials: {
      eyebrow: 'آراء العملاء',
      title: 'سجلّ يقف خلفه عملاؤنا.',
      items: [
        {
          quote:
            'أشكر الأستاذ أسامة على نزاهته في مساعدتي على الإفراج عن سفينتي المحتجزة وتأمين التعويض. رشّح لي زملاء في المجال مكتب سليمان للمحاماة، وكان الأستاذ أسامة أهلًا لتلك الثقة تمامًا، وتعامل مع قضيتي بعناية حقيقية.',
          author: 'ج. أ.',
        },
        {
          quote:
            'أودّ أن أشكر مكتب سليمان للمحاماة على دعمهم القانوني الممتاز في قضية التعويض المتعلقة بحادثة سفينة "إيفر جيفن". عمل فريقهم المتخصص بجدّ لضمان حصولي على التعويض المستحق رغم التأخيرات في بداية القضية، مقدّمين خدمة استثنائية في كل خطوة.',
          author: 'س. م.',
        },
      ],
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'الأسئلة الأكثر تكرارًا.',
      items: [
        {
          q: 'ما القوانين التي تحكم حجز السفن في مصر؟',
          a: 'يُنظَّم حجز السفن في مصر باتفاقية بروكسل لعام ١٩٥٢ لتوحيد بعض القواعد المتعلقة بالحجز على السفن البحرية، إضافة إلى قانون التجارة البحرية المصري رقم ٨ لسنة ١٩٩٠، المواد ٥٩-٦٦.',
        },
        {
          q: 'ما الإجراءات المطلوبة لحجز سفينة في مصر؟',
          a: 'يجب تقديم طلب إلى المحكمة المختصة مع أدلة تثبت أن الدين مستحق ويُعدّ دينًا بحريًا. كما يجب تقديم مستندات معيّنة مثل توكيل موثّق ومستندات متعلقة بالدين مع ترجمة عربية.',
        },
        {
          q: 'هل يلزم تقديم كفالة مقابلة لحجز سفينة في مصر؟',
          a: 'لا يشترط القانون المصري على المدّعي تقديم كفالة مقابلة لحجز السفينة، سواء كان المدّعي مصريًا أو أجنبيًا.',
        },
        {
          q: 'هل يمكن حجز سفينة أخرى غير سفينة المدين (سفينة شقيقة)؟',
          a: 'نعم، يمكن حجز سفينة شقيقة، بشرط أن تكون مملوكة لنفس مالك السفينة المدينة وقت نشوء الدين. ويجب تقديم دليل على ذلك للمحكمة.',
        },
        {
          q: 'كيف يمكن رفع الحجز عن سفينة في مصر؟',
          a: 'يمكن رفع الحجز بتقديم كفالة بنكية غير مشروطة صادرة عن بنك مصري من الدرجة الأولى. وإذا كان الحجز غير مبرّر، يمكن رفعه أيضًا بتقديم طلب للمحكمة لإلغائه.',
        },
        {
          q: 'هل يمكن رفع الحجز دون كفالة بنكية؟',
          a: 'نعم، يمكن رفع الحجز إذا تبيّن أنه غير مبرّر، سواء لأسباب إجرائية أو موضوعية (مثل سداد الدين). ويمكن تقديم طلب عاجل للمحكمة لمراجعة الحجز ورفعه.',
        },
      ],
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'تواصل مع فريقنا.',
      subtitle:
        'للاستشارات أو حجوزات السفن العاجلة أو أي شأن بحري، تواصل معنا مباشرة عبر البريد الإلكتروني أو الهاتف. خط الطوارئ لدينا متاح على مدار الساعة.',
      emailCtaTitle: 'راسلنا مباشرة',
      emailCtaDesc: 'أرسل لنا تفاصيل قضيتك وسنردّ عليك في أسرع وقت.',
      emailButton: 'أرسل بريدًا إلكترونيًا',
      office: 'المقر الرئيسي',
      officeValue: '٦٨ شارع الجيش، عمارة الديدي، بورتوفيق، السويس، مصر',
      phone: 'الهاتف',
      phoneValue: '‎+20 103 307 3171',
      emailLabel: 'البريد الإلكتروني',
      emailValue: 'usoliman@solimanadvocates.com.eg',
      website: 'الموقع الإلكتروني',
      websiteValue: 'www.solimanadvocates.com',
      hours: 'خط الطوارئ لحجز السفن متاح على مدار الساعة',
      hoursLabel: 'ساعات العمل',
      hoursValue: 'الأحد – الخميس: ٩ صباحًا – ٥ مساءً · الجمعة والسبت بموعد مسبق',
    },
    services: {
      badge: 'ممارسة القانون البحري والملاحة',
      title: 'حجز السفن في مصر',
      subtitle: 'المطالبات البحرية التي يمكننا مساعدتك فيها',
      ports: ['دمياط', 'الإسكندرية', 'بورسعيد', 'السويس'],
      sectionTitle: 'اختر نوع المطالبة البحرية',
      popular: 'الأكثر طلبًا',
      learnMore: 'اعرف المزيد',
      urgentEyebrow: 'عاجل: سفينة على وشك الوصول؟',
      urgentTitle: 'تحتاج مساعدة فورية؟',
      urgentDesc:
        'فريقنا البحري متاح على مدار الساعة طوال أيام الأسبوع لحجوزات السفن الطارئة والطلبات القضائية العاجلة والمسائل الحساسة زمنيًا في جميع الموانئ المصرية.',
      urgentCta: 'تواصل معنا الآن',
      backHome: 'العودة للرئيسية',
      items: [
        {
          title: 'الحجز مقابل مطالبات الوقود غير المدفوعة',
          desc: 'استرداد فواتير الوقود البحري غير المدفوعة.',
          popular: true,
          intro:
            'فواتير الوقود البحري غير المدفوعة من أقوى أسباب حجز السفن في مصر. نتحرك سريعًا لتأمين مطالبتك قبل إبحار السفينة.',
          points: [
            'تقديم طلبات الحجز خلال ساعات في أي ميناء مصري',
            'مطالبات المورّدين الفعليين والتعاقديين للوقود',
            'التفاوض على الضمانات والتسوية متى أمكن',
          ],
        },
        {
          title: 'الحجز مقابل مطالبات البضائع',
          desc: 'فقدان البضائع وتلفها ونقصها.',
          intro:
            'الفقد أو التلف أو النقص المكتشف عند التفريغ يتطلب تحركًا فوريًا. نحافظ على الأدلة ونؤمّن استرداد حقوقك.',
          points: [
            'تنسيق المعاينات والحفاظ على الأدلة',
            'الحجز أو الضمان لمصلحة أصحاب البضائع وشركات التأمين',
            'دعاوى الاسترداد أمام المحاكم البحرية المصرية',
          ],
        },
        {
          title: 'الحجز مقابل أتعاب الوكالة الملاحية',
          desc: 'وكالة الميناء والمصروفات والنقدية للربان.',
          intro:
            'كثيرًا ما يُترك وكلاء الموانئ دون سداد بعد مغادرة السفينة. يعامل القانون المصري مصروفات الوكالة كديون بحرية.',
          points: [
            'استرداد أتعاب الوكالة والمصروفات والنقدية للربان',
            'حجز السفينة المدينة أو سفينة شقيقة مؤهلة',
            'مراجعة المستندات وإعداد المطالبة',
          ],
        },
        {
          title: 'الحجز مقابل رسوم الميناء',
          desc: 'رسوم المحطات وخدمات الميناء والإرشاد والقطر.',
          intro:
            'رسوم المحطات والإرشاد والقطر وخدمات الميناء تُعدّ مطالبات بحرية بموجب القانون المصري.',
          points: [
            'مطالبات المحطات وهيئات الموانئ ومقدمي الخدمات',
            'حجز عاجل قبل مغادرة السفينة',
            'التنفيذ والتحصيل عبر المحاكم',
          ],
        },
        {
          title: 'الحجز مقابل مطالبات إصلاح السفن',
          desc: 'الأحواض الجافة والإصلاح والصيانة.',
          intro:
            'يحق للترسانات وشركات الإصلاح الحجز مقابل فواتير الأحواض الجافة والإصلاح والصيانة غير المدفوعة.',
          points: [
            'مطالبات الترسانات ومقاولي الإصلاح',
            'الحجز كوسيلة ضغط للسداد أو الضمان',
            'استراتيجيات التسوية والتنفيذ',
          ],
        },
        {
          title: 'الحجز مقابل مطالبات الإنقاذ',
          desc: 'عمليات الإنقاذ والمكافأة.',
          intro:
            'مكافآت الإنقاذ مطالبات بحرية ممتازة. نعمل لمصلحة المنقذين لتأمين الضمان والمكافأة العادلة.',
          points: [
            'ضمانات مقابل مكافأة الإنقاذ',
            'نزاعات عقود الإنقاذ بأنواعها',
            'إجراءات الحجز دعمًا للمكافأة',
          ],
        },
        {
          title: 'الحجز مقابل مطالبات التصادم',
          desc: 'تصادم السفن والاصطدام.',
          intro:
            'بعد التصادم أو الاصطدام، يكون تأمين الاختصاص والأدلة عاملًا حاسمًا في النتيجة.',
          points: [
            'الحجز للحصول على ضمان لأضرار التصادم',
            'التحقيق في الحادث والتنسيق مع الخبراء',
            'دعاوى المسؤولية وتقدير التعويض',
          ],
        },
        {
          title: 'الحجز مقابل مطالبات أجور الطاقم',
          desc: 'أجور البحّارة ومستحقاتهم.',
          intro:
            'أجور البحّارة من أعلى الامتيازات البحرية مرتبةً بموجب القانون المصري.',
          points: [
            'مطالبات الأجور والمستحقات للربابنة والأطقم',
            'حجز عاجل بإجراءات ميسّرة',
            'التنسيق مع النقابات ونوادي الحماية عند الحاجة',
          ],
        },
        {
          title: 'الحجز مقابل مطالبات الرهن',
          desc: 'رهن السفن والامتيازات المفضّلة.',
          intro:
            'يحق للدائنين المرتهنين المسجّلين التنفيذ على السفينة أثناء وجودها في المياه المصرية.',
          points: [
            'الحجز دعمًا لتنفيذ الرهن',
            'إجراءات البيع القضائي',
            'نزاعات الأولوية والترتيب',
          ],
        },
        {
          title: 'مطالبات بحرية أخرى',
          desc: 'إنفاذ الديون البحرية العامة.',
          intro:
            'أي دين بحري بموجب اتفاقية بروكسل ١٩٥٢ والقانون المصري يمكن أن يؤسس للحجز.',
          points: [
            'تقييم المطالبة وقابليتها للحجز',
            'حجز السفينة الشقيقة متى توافر',
            'استراتيجية مخصّصة للتنفيذ والاسترداد',
          ],
        },
      ],
      detail: {
        how: 'كيف نساعدك',
        briefEyebrow: 'ملف تعريفي · PDF',
        briefTitle: 'حمّل الملف التعريفي',
        briefDesc: 'الإجراءات والمستندات المطلوبة والمدة الزمنية — يصلك PDF على بريدك.',
        allServices: 'كل الخدمات',
        contactCta: 'تحدث إلى فريقنا',
      },
    },
    download: {
      button: 'تحميل الملف التعريفي',
      note: 'كل نوع مطالبة له ملف تعريفي مجاني (PDF). اطلبه بالأسفل وسيصلك على بريدك الإلكتروني.',
      modalEyebrow: 'ملف تعريفي · PDF',
      modalTitle: 'استلم الملف على بريدك',
      modalDesc: 'اترك اسمك وبريدك الإلكتروني، وسيرسل لك فريقنا الملف الخاص بـ:',
      name: 'الاسم الكامل',
      namePlaceholder: 'اسمك',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'you@company.com',
      submit: 'إرسال الطلب',
      sending: 'جارٍ الإرسال…',
      successTitle: 'تم استلام طلبك',
      successDesc: 'شكرًا لك — سيصلك الملف على بريدك الإلكتروني قريبًا.',
      errorTitle: 'حدثت مشكلة',
      errorDesc: 'تعذّر إرسال الطلب. يمكنك مراسلتنا مباشرة على:',
      privacy: 'نستخدم بريدك فقط لإرسال الملف — لا رسائل مزعجة.',
      close: 'إغلاق',
    },
    cases: {
      eyebrow: 'قضايا بارزة',
      title: 'قضايا بحرية فارقة.',
      items: [
        {
          tag: 'تعويضات بحرية',
          year: '٢٠٢١',
          title: 'إيفر جيفن — إغلاق قناة السويس',
          desc: 'أمّنا تعويضات لعملائنا المتضررين من حادثة إيفر جيفن، وضمنّا استرداد مستحقاتهم رغم التأخيرات في البداية.',
          result: 'تم تأمين التعويض',
        },
        {
          tag: 'حجز السفن',
          year: '٢٠٢٣',
          title: 'الإفراج عن سفينة محتجزة',
          desc: 'أفرجنا عن سفينة محتجزة عبر استراتيجية قانونية قائمة على النزاهة، وأمّنّا تعويضًا كاملًا للعميل.',
          result: 'تم الإفراج عن السفينة',
        },
        {
          tag: 'مطالبات بيئية',
          year: '٢٠٢٣',
          title: 'الدفاع في مسؤولية التلوث',
          desc: 'دافعنا عن مالك سفينة ضد مطالبات تلوث بحري، وحققنا تسوية مواتية وتصريحًا تنظيميًا.',
          result: 'تم التوصل لتسوية',
        },
      ],
    },
    pages: {
      about: {
        eyebrow: 'المكتب',
        title: 'عن مكتب سليمان للمحاماة',
        subtitle: 'قوة قانونية بحرية راسخة على قناة السويس منذ عام ١٩٨٨.',
      },
      founder: {
        eyebrow: 'القيادة',
        title: 'المؤسس والرئيس التنفيذي',
        subtitle: 'الأستاذ أسامة سليمان — محامٍ بالنقض ومرجع في القانون البحري.',
      },
      practices: {
        eyebrow: 'مجالات العمل',
        title: 'ماذا نقدّم',
        subtitle: 'القانون البحري في القلب — تدعمه ممارسة تجارية متكاملة.',
      },
      people: {
        eyebrow: 'فريقنا',
        title: 'الفريق',
        subtitle: 'بقيادة المؤسس الأستاذ أسامة سليمان — متخصصون مقبولون أمام المحاكم المصرية.',
      },
      faq: {
        eyebrow: 'المعرفة',
        title: 'الأسئلة الشائعة',
        subtitle: 'حجز السفن في مصر — الأساسيات بإجابات واضحة.',
      },
      contact: {
        eyebrow: 'تواصل',
        title: 'تحدث إلى فريقنا',
        subtitle: 'متاحون على مدار الساعة لحالات حجز السفن العاجلة.',
      },
    },
    footer: {
      tagline:
        'خدمات قانونية متخصصة في القانون البحري والملاحة عبر جميع الموانئ المصرية الكبرى، متجذّرة عند قناة السويس.',
      practices: 'مجالات العمل',
      firm: 'المكتب',
      legal: 'قانوني',
      rights: 'جميع الحقوق محفوظة. هذا الموقع لأغراض إعلامية عامة ولا يُعدّ استشارة قانونية.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
    },
    brand: 'سليمان للمحاماة',
    brandSub: 'حجز السفن والقانون البحري',
  },
} as const

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T

export type Dict = Widen<(typeof content)['en']>

/** Email that receives Executive Brief requests and inquiries */
export const FIRM_EMAIL = 'usoliman@solimanadvocates.com.eg'

/** URL slugs for the service detail pages, in the same order as services.items */
export const SERVICE_SLUGS = [
  'bunker-claims',
  'cargo-claims',
  'agency-fees',
  'port-charges',
  'ship-repair',
  'salvage-claims',
  'collision-claims',
  'crew-wages',
  'mortgage-claims',
  'other-claims',
] as const
