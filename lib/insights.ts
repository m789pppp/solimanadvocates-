import type { Lang } from '@/lib/content'

export type InsightArticle = {
  tag: string
  date: string
  title: string
  excerpt: string
  body: readonly string[]
}

export type InsightsLang = {
  navLabel: string
  hero: { eyebrow: string; title: string; subtitle: string }
  latestEyebrow: string
  latestTitle: string
  viewAll: string
  readMore: string
  back: string
  by: string
  author: string
  authorRole: string
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  articles: readonly InsightArticle[]
}

/** URL slugs, same order as articles below */
export const INSIGHT_SLUGS = [
  'ship-arrest-egypt-practical-guide',
  'sister-ship-arrest-egyptian-law',
  'releasing-arrested-vessel-egypt',
  'bunker-claims-ship-arrest-egypt',
] as const

export const insightsContent: Record<Lang, InsightsLang> = {
  en: {
    navLabel: 'Insights',
    hero: {
      eyebrow: 'Insights',
      title: 'Legal Insights & Briefings',
      subtitle:
        'Practical analysis on ship arrest and maritime law in Egypt — written from the Suez Canal.',
    },
    latestEyebrow: 'Knowledge',
    latestTitle: 'Latest insights.',
    viewAll: 'View all insights',
    readMore: 'Read article',
    back: 'All insights',
    by: 'By',
    author: 'Mr. Usama Soliman',
    authorRole: 'Founder & CEO · Cassation Lawyer',
    ctaTitle: 'Facing a live maritime matter?',
    ctaDesc:
      'Our team is available 24/7 for urgent ship arrest and time-critical applications in all Egyptian ports.',
    ctaButton: 'Talk to our team',
    articles: [
      {
        tag: 'Ship Arrest',
        date: 'July 2026',
        title: 'Ship Arrest in Egypt: A Practical Guide',
        excerpt:
          'What it takes to arrest a vessel in Egyptian ports — the legal basis, the documents, and why hours matter.',
        body: [
          'Egypt sits on one of the world’s busiest shipping lanes, and its courts deal with vessel arrests on a routine basis. Arrest is governed by the 1952 Brussels Convention on the Arrest of Sea-Going Ships together with the Egyptian Maritime Trade Law No. 8 of 1990, Articles 59–66. Together they define which claims qualify as maritime debts and how conservatory arrest is obtained.',
          'The application is filed before the competent court of the port where the vessel is located. The claimant must show that the debt is due and that it qualifies as a maritime debt, supported by a notarized power of attorney and the debt documents accompanied by an Arabic translation. Prepared correctly, an arrest order can be granted within hours of the vessel’s arrival.',
          'A feature that makes Egypt attractive for claimants: the court does not require a counter-security from the arresting party, whether Egyptian or foreign. This lowers the barrier for suppliers, agents, yards and cargo interests seeking leverage for payment or security.',
          'Timing is everything. A vessel that sails before the order is issued may not return for months. We monitor vessel movements, prepare papers before arrival, and file the moment the vessel is within jurisdiction — in Suez, Port Said, Alexandria and Damietta.',
        ],
      },
      {
        tag: 'Ship Arrest',
        date: 'June 2026',
        title: 'Sister-Ship Arrest under Egyptian Law',
        excerpt:
          'When the debtor’s vessel is out of reach, Egyptian law may allow you to arrest her sister — if you can prove common ownership.',
        body: [
          'Shipowners often structure fleets through one-ship companies precisely to insulate assets from claims. Egyptian law, following the 1952 Brussels Convention, tempers this by permitting the arrest of a sister ship: a vessel in the same ownership as the ship in respect of which the maritime claim arose.',
          'The decisive condition is common ownership at the time the debt arose — not at the time of arrest. The claimant must put evidence of this before the court, typically through ship registries, classification records and corporate documentation linking both vessels to the same owner.',
          'In practice, the evidentiary work is where sister-ship arrests are won or lost. Registry extracts must be current, translated and consistent; beneficial-ownership arguments require careful preparation. A poorly evidenced application risks dismissal — or exposure for wrongful arrest.',
          'Our office maintains direct access to port and registry records and coordinates with foreign counsel to assemble the ownership chain quickly, so the application is ready before the target vessel reaches an Egyptian port.',
        ],
      },
      {
        tag: 'Vessel Release',
        date: 'May 2026',
        title: 'Releasing an Arrested Vessel: Guarantees and Alternatives',
        excerpt:
          'For owners, every day under arrest costs money. The routes to release — and how to choose between them.',
        body: [
          'When a vessel is arrested in Egypt, the standard route to release is providing an unconditional bank guarantee issued by a first-class Egyptian bank covering the claim. Once the guarantee is accepted, the vessel sails and the dispute continues over the security instead of the ship.',
          'A guarantee is not the only route. If the arrest is unjustified — for procedural defects or on the substance, for example where the debt has been paid — an urgent application can be made to the court to review and lift the arrest without security.',
          'Club letters of undertaking (P&I LOUs) are a frequent point of negotiation. Their acceptance in Egypt is not automatic and depends on the claimant’s agreement; converting an LOU standoff into an accepted security package is often where experienced local counsel adds the most value.',
          'Owners should engage counsel within hours of arrest, not days. Early engagement shapes the security discussion, limits detention losses, and preserves counterclaims for wrongful arrest where the seizure was abusive.',
        ],
      },
      {
        tag: 'Bunker Claims',
        date: 'March 2026',
        title: 'Unpaid Bunkers: Arresting for Marine Fuel Claims in Egypt',
        excerpt:
          'Bunker suppliers are among the most frequent arrest claimants in Egyptian ports. How to convert an unpaid invoice into security.',
        body: [
          'Claims for bunkers supplied to a vessel are recognized maritime debts under Egyptian law and the 1952 Brussels Convention, making them a solid foundation for arrest. For suppliers, arrest is often the only effective leverage once a vessel has sailed and invoices remain unpaid.',
          'The file should establish the supply and its terms: the bunker confirmation, delivery note signed on board, invoices, and the contractual chain. Where fuel was ordered by a charterer rather than the owner, the analysis of who is liable — and which vessel may be arrested — requires particular care.',
          'Physical suppliers and contractual traders do not always share the same position. We assess each claim’s arrestability honestly before filing, because a well-founded application obtains an order in hours, while a weak one wastes the only window the vessel’s call provides.',
          'With offices at Port Tawfik on the Suez Canal, we receive instructions around the clock and routinely file urgent bunker arrest applications in Suez, Port Said, Alexandria and Damietta before the vessel completes her transit or discharge.',
        ],
      },
    ],
  },
  ar: {
    navLabel: 'رؤى قانونية',
    hero: {
      eyebrow: 'رؤى قانونية',
      title: 'مقالات وتحليلات قانونية',
      subtitle:
        'تحليلات عملية في حجز السفن والقانون البحري في مصر — مكتوبة من قلب قناة السويس.',
    },
    latestEyebrow: 'المعرفة',
    latestTitle: 'أحدث المقالات.',
    viewAll: 'كل المقالات',
    readMore: 'اقرأ المقال',
    back: 'كل المقالات',
    by: 'بقلم',
    author: 'الأستاذ أسامة سليمان',
    authorRole: 'المؤسس والرئيس التنفيذي · محامٍ بالنقض',
    ctaTitle: 'لديك قضية بحرية قائمة؟',
    ctaDesc:
      'فريقنا متاح على مدار الساعة لحجوزات السفن العاجلة والطلبات الحساسة زمنيًا في جميع الموانئ المصرية.',
    ctaButton: 'تحدث إلى فريقنا',
    articles: [
      {
        tag: 'حجز السفن',
        date: 'يوليو ٢٠٢٦',
        title: 'حجز السفن في مصر: دليل عملي',
        excerpt:
          'ما الذي يتطلبه حجز سفينة في الموانئ المصرية — الأساس القانوني والمستندات، ولماذا تُحسب المسألة بالساعات.',
        body: [
          'تقع مصر على أحد أكثر الممرات الملاحية ازدحامًا في العالم، وتتعامل محاكمها مع حجز السفن بشكل منتظم. يُنظَّم الحجز باتفاقية بروكسل لعام ١٩٥٢ بشأن حجز السفن البحرية، إلى جانب قانون التجارة البحرية المصري رقم ٨ لسنة ١٩٩٠ (المواد ٥٩–٦٦)، وهما معًا يحددان المطالبات التي تُعد ديونًا بحرية وكيفية توقيع الحجز التحفظي.',
          'يُقدَّم الطلب إلى المحكمة المختصة في الميناء الذي توجد فيه السفينة. وعلى طالب الحجز إثبات أن الدين مستحق وأنه دين بحري، مدعومًا بتوكيل موثّق ومستندات الدين مترجمة إلى العربية. ومتى أُعدّ الملف إعدادًا صحيحًا، يمكن صدور أمر الحجز خلال ساعات من وصول السفينة.',
          'من المزايا التي تجعل مصر ولاية قضائية جاذبة لأصحاب المطالبات: أن المحكمة لا تشترط كفالة مقابلة من طالب الحجز، مصريًا كان أو أجنبيًا — وهو ما يخفض الحاجز أمام المورّدين والوكلاء والترسانات وأصحاب البضائع الساعين للضغط من أجل السداد أو الضمان.',
          'التوقيت هو كل شيء؛ فالسفينة التي تبحر قبل صدور الأمر قد لا تعود لشهور. نحن نراقب تحركات السفن، ونجهّز الأوراق قبل الوصول، ونقدّم الطلب لحظة دخول السفينة نطاق الاختصاص — في السويس وبورسعيد والإسكندرية ودمياط.',
        ],
      },
      {
        tag: 'حجز السفن',
        date: 'يونيو ٢٠٢٦',
        title: 'حجز السفينة الشقيقة في القانون المصري',
        excerpt:
          'عندما تكون سفينة المدين بعيدة عن المتناول، قد يتيح لك القانون المصري حجز شقيقتها — إذا أثبتّ وحدة الملكية.',
        body: [
          'كثيرًا ما يهيكل ملّاك السفن أساطيلهم عبر شركات السفينة الواحدة تحديدًا لعزل الأصول عن المطالبات. غير أن القانون المصري، اتساقًا مع اتفاقية بروكسل ١٩٥٢، يوازن ذلك بإجازة حجز السفينة الشقيقة: أي سفينة مملوكة لذات مالك السفينة التي نشأت المطالبة البحرية بشأنها.',
          'الشرط الحاسم هو وحدة الملكية وقت نشوء الدين — لا وقت توقيع الحجز. وعلى طالب الحجز أن يضع أمام المحكمة دليلًا على ذلك، عادةً عبر سجلات السفن وشهادات التصنيف والمستندات المؤسسية التي تربط السفينتين بالمالك نفسه.',
          'عمليًا، العمل الإثباتي هو ما تُكسب به دعاوى حجز السفينة الشقيقة أو تُخسر. يجب أن تكون مستخرجات السجلات حديثة ومترجمة ومتسقة، وتحتاج حجج الملكية المستترة إعدادًا دقيقًا؛ فالطلب ضعيف الإثبات معرّض للرفض — أو للمساءلة عن حجز تعسفي.',
          'يحتفظ مكتبنا بوصول مباشر إلى سجلات الموانئ والسفن، وينسّق مع مكاتب المحاماة الأجنبية لتجميع سلسلة الملكية سريعًا، بحيث يكون الطلب جاهزًا قبل أن تبلغ السفينة المستهدفة أي ميناء مصري.',
        ],
      },
      {
        tag: 'رفع الحجز',
        date: 'مايو ٢٠٢٦',
        title: 'رفع الحجز عن السفينة: الضمانات والبدائل',
        excerpt:
          'كل يوم تحت الحجز يكلّف المالك أموالًا. طرق رفع الحجز — وكيف تختار بينها.',
        body: [
          'عند حجز سفينة في مصر، فإن الطريق المعتاد لرفع الحجز هو تقديم كفالة بنكية غير مشروطة صادرة عن بنك مصري من الدرجة الأولى تغطي المطالبة. وبمجرد قبول الكفالة، تبحر السفينة ويستمر النزاع على الضمان بدلًا من السفينة.',
          'الكفالة ليست الطريق الوحيد؛ فإذا كان الحجز غير مبرَّر — لعيوب إجرائية أو لأسباب موضوعية كسداد الدين — يمكن تقديم طلب عاجل إلى المحكمة لمراجعة الحجز ورفعه دون ضمان.',
          'خطابات الضمان الصادرة عن نوادي الحماية والتعويض (P&I LOUs) نقطة تفاوض متكررة؛ فقبولها في مصر ليس تلقائيًا ويتوقف على موافقة طالب الحجز. وتحويل الخلاف حول خطاب الضمان إلى حزمة ضمان مقبولة هو غالبًا الموضع الذي يضيف فيه المستشار المحلي الخبير أكبر قيمة.',
          'على الملّاك إشراك محاميهم خلال ساعات من الحجز لا أيام؛ فالتحرك المبكر يشكّل مسار مناقشة الضمان، ويحدّ من خسائر التوقف، ويحفظ الحق في دعاوى الحجز التعسفي متى كان الحجز مسيئًا.',
        ],
      },
      {
        tag: 'مطالبات الوقود',
        date: 'مارس ٢٠٢٦',
        title: 'الوقود غير المدفوع: الحجز مقابل مطالبات الوقود البحري في مصر',
        excerpt:
          'مورّدو الوقود من أكثر طالبي الحجز في الموانئ المصرية. كيف تحوّل فاتورة غير مدفوعة إلى ضمان.',
        body: [
          'مطالبات الوقود المورَّد للسفن ديون بحرية معترف بها في القانون المصري واتفاقية بروكسل ١٩٥٢، ما يجعلها أساسًا متينًا للحجز. وبالنسبة للمورّدين، غالبًا ما يكون الحجز وسيلة الضغط الفعّالة الوحيدة بعد إبحار السفينة وبقاء الفواتير دون سداد.',
          'ينبغي أن يُثبت الملف واقعة التوريد وشروطه: تأكيد التوريد، وإذن التسليم الموقَّع على متن السفينة، والفواتير، وسلسلة التعاقد. وحيثما كان طالب الوقود مستأجرًا لا مالكًا، فإن تحليل مَن يتحمل المسؤولية — وأي سفينة يجوز حجزها — يتطلب عناية خاصة.',
          'لا يتطابق مركز المورّد الفعلي دائمًا مع مركز التاجر المتعاقد. نحن نقيّم قابلية كل مطالبة للحجز بصراحة قبل التقديم؛ فالطلب المؤسس جيدًا يحصل على أمره خلال ساعات، بينما يهدر الطلب الضعيف النافذة الوحيدة التي تتيحها رسوّة السفينة.',
          'من مقرنا في بورتوفيق على قناة السويس، نتلقى التكليفات على مدار الساعة، ونقدّم بشكل معتاد طلبات حجز عاجلة لمطالبات الوقود في السويس وبورسعيد والإسكندرية ودمياط قبل أن تُكمل السفينة عبورها أو تفريغها.',
        ],
      },
    ],
  },
}
