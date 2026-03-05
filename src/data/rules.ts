export interface Rule {
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  wellnessInterpretation: string;
  deepExplanation: string;
  dailyTips: string[];
  relatedRules: number[];
}

export const rules: Rule[] = [
  {
    number: 1,
    slug: "stand-up-straight",
    title: "Stand Up Straight With Your Shoulders Back",
    subtitle: "Embrace confidence through posture and presence",
    description:
      "Your body language shapes your biochemistry. Standing tall isn't just about posture — it's about signalling to yourself and the world that you're ready to face challenges head-on.",
    wellnessInterpretation:
      "Physical posture directly influences your mental state. Research shows that adopting an upright posture increases testosterone and decreases cortisol, creating a cascade of confidence and resilience. When you stand tall, you breathe deeper, think clearer, and project an energy that transforms how others respond to you. This rule is the foundation of embodied wellness — the recognition that how you carry your body is how you carry your life.",
    deepExplanation:
      "In the natural world, hierarchies exist everywhere. Lobsters, with nervous systems dating back 350 million years, demonstrate that serotonin governs confidence and social standing. When a lobster wins a confrontation, its serotonin levels rise, causing it to stand taller and become more assertive. The same neurochemistry operates in humans. When life beats you down, your posture collapses, serotonin drops, and a vicious cycle begins. Breaking this cycle starts with the simplest physical act: straightening your spine. This isn't motivational fluff — it's neuroscience. By choosing to stand up straight, you initiate a positive feedback loop that rewires your brain for courage.",
    dailyTips: [
      "Start each morning with a 2-minute posture check: feet hip-width apart, shoulders rolled back, chin parallel to the ground",
      "Set hourly reminders to correct your posture throughout the workday",
      "Practice deep diaphragmatic breathing — 4 seconds in, 7 seconds hold, 8 seconds out",
      "Incorporate a 10-minute stretching routine focusing on chest openers and shoulder mobility",
      "Before any challenging conversation, take 30 seconds to ground yourself in confident posture",
    ],
    relatedRules: [4, 7, 12],
  },
  {
    number: 2,
    slug: "treat-yourself-like-someone-you-are-responsible-for-helping",
    title: "Treat Yourself Like Someone You Are Responsible for Helping",
    subtitle: "Practice radical self-compassion",
    description:
      "People are better at caring for their pets than themselves. Extend the same compassion and discipline to your own wellbeing that you'd offer someone you love.",
    wellnessInterpretation:
      "Self-care isn't selfish — it's essential. Studies show that people consistently fill prescriptions for their pets more reliably than for themselves. This reveals a deep pattern of self-neglect that undermines every wellness goal. True health begins when you treat yourself as someone worthy of care: feeding yourself well, moving your body with intention, protecting your sleep, and speaking to yourself with the same kindness you'd show a dear friend.",
    deepExplanation:
      "There's something peculiar about human nature. We know what's good for us yet consistently fail to do it. We stay up too late, eat poorly, skip exercise, and neglect medical appointments — yet we'd never allow someone we love to do the same. This paradox stems from a deep awareness of our own flaws. We know our darkest thoughts, our failures, our cowardice. This intimate knowledge can breed contempt. The antidote is to recognise that despite — and perhaps because of — your imperfections, you deserve the same meticulous care you'd give to someone depending on you. You are that someone.",
    dailyTips: [
      "Schedule your meals, exercise, and sleep as non-negotiable appointments",
      "Prepare nourishing meals with the same care you'd cook for a loved guest",
      "Replace negative self-talk with the advice you'd give a close friend",
      "Book regular health check-ups and actually attend them",
      "Create a bedtime routine that honours your need for rest",
    ],
    relatedRules: [1, 5, 6],
  },
  {
    number: 3,
    slug: "make-friends-with-people-who-want-the-best-for-you",
    title: "Make Friends With People Who Want the Best for You",
    subtitle: "Curate your social environment for growth",
    description:
      "Your social circle profoundly shapes your habits, mindset, and trajectory. Surround yourself with people who challenge you to grow, not those who pull you down.",
    wellnessInterpretation:
      "Research consistently shows that your health behaviours mirror those of your closest five contacts. Obesity, smoking, happiness, and even loneliness spread through social networks. Choosing friends who value wellness, growth, and accountability isn't elitism — it's survival strategy. A supportive community amplifies your best intentions and catches you when you falter.",
    deepExplanation:
      "Not everyone who is failing is a victim, and not everyone who is succeeding is an oppressor. Some people choose to surround themselves with those who are failing because it removes the pressure to improve. If everyone around you is struggling, your own stagnation becomes invisible. True friendship demands mutual growth. A real friend will tell you uncomfortable truths, celebrate your genuine achievements, and refuse to enable your self-destruction. Choosing such friends is an act of courage that says: I believe I'm worth the effort of improvement.",
    dailyTips: [
      "Audit your social circle: identify who energises you and who drains you",
      "Join a wellness community, running club, or mastermind group",
      "Schedule regular quality time with friends who inspire positive change",
      "Have honest conversations about mutual goals and growth",
      "Limit exposure to relationships that consistently undermine your wellbeing",
    ],
    relatedRules: [2, 9, 10],
  },
  {
    number: 4,
    slug: "compare-yourself-to-who-you-were-yesterday",
    title: "Compare Yourself to Who You Were Yesterday, Not to Who Someone Else Is Today",
    subtitle: "Master the art of personal progress",
    description:
      "The only meaningful comparison is with your former self. Track your growth, celebrate small wins, and build a life of continuous, incremental improvement.",
    wellnessInterpretation:
      "Social media has weaponised comparison. We see curated highlight reels and measure our messy reality against them, breeding anxiety and paralysis. True wellness tracking means measuring your own trajectory: Did you sleep better than last week? Can you lift more than last month? Is your mindfulness practice deeper than last year? Progress, not perfection, is the metric that matters.",
    deepExplanation:
      "The world is infinitely complex. No matter how well you do at any particular thing, there is someone who does it better. If you use that as your standard, you'll always be inadequate. But there's another way to measure. You can compare yourself to who you were yesterday. This internal metric is infinitely more useful because it's specific to your unique circumstances, challenges, and starting point. The person who goes from unable to run to completing a 5K has achieved something more meaningful — for them — than the effortless athlete winning their tenth marathon.",
    dailyTips: [
      "Keep a daily journal tracking three things you did better than yesterday",
      "Set personal benchmarks rather than comparing to others' achievements",
      "Unfollow social media accounts that trigger unhealthy comparison",
      "Celebrate micro-improvements: one more rep, one fewer cigarette, one minute more of meditation",
      "Review your monthly progress photos, journals, or metrics to see your trajectory",
    ],
    relatedRules: [1, 7, 12],
  },
  {
    number: 5,
    slug: "do-not-let-your-children-do-anything-that-makes-you-dislike-them",
    title: "Do Not Let Your Children Do Anything That Makes You Dislike Them",
    subtitle: "Set boundaries with love and clarity",
    description:
      "Healthy boundaries aren't restrictions — they're the framework for thriving relationships. Discipline, applied with love, creates the structure that children (and adults) need to flourish.",
    wellnessInterpretation:
      "Boundary-setting is a core wellness skill that extends far beyond parenting. In your own life, setting clear limits on what you'll tolerate — from your diet to your daily routine to your relationships — creates the container within which genuine flourishing happens. Without boundaries, life becomes chaotic and health deteriorates.",
    deepExplanation:
      "Modern culture sometimes confuses kindness with permissiveness. But allowing harmful behaviour unchecked isn't kind — it's negligent. A parent who never says no creates a child unprepared for a world that constantly says no. The same principle applies to self-discipline. When you refuse to set limits on your own behaviour — eating, screen time, sleep habits — you become someone you dislike. The discomfort of discipline is always less than the pain of regret.",
    dailyTips: [
      "Define three non-negotiable daily habits that maintain your wellbeing",
      "Practice saying no to commitments that compromise your health",
      "Set clear boundaries around work hours to protect rest time",
      "Establish screen-free periods, especially before bed",
      "Create consequences for your own boundary violations — accountability matters",
    ],
    relatedRules: [2, 6, 8],
  },
  {
    number: 6,
    slug: "set-your-house-in-perfect-order",
    title: "Set Your House in Perfect Order Before You Criticise the World",
    subtitle: "Begin transformation in your immediate environment",
    description:
      "Before trying to change the world, organise your own life. Clean your room, fix your schedule, honour your commitments. Order in your personal domain radiates outward.",
    wellnessInterpretation:
      "Your physical environment directly impacts your mental health. Cluttered spaces create cluttered minds. Research links disorganised living spaces to elevated cortisol, poor sleep, and increased anxiety. Wellness begins at home — literally. An ordered space creates the mental clarity needed for every other positive change.",
    deepExplanation:
      "When people feel powerless about the state of the world, they often neglect the immense power they have over their immediate environment. Your room, your schedule, your relationships, your health — these are domains you can actually influence. And the transformation is remarkable. When your space is clean, your schedule is intentional, and your commitments are honoured, you develop the competence and confidence to take on larger challenges. Order your micro-world, and the macro-world starts to make more sense.",
    dailyTips: [
      "Make your bed every morning — start the day with one completed task",
      "Declutter one space per week: a drawer, a shelf, a digital folder",
      "Create a weekly meal prep routine to eliminate daily food stress",
      "Organise your workspace for focus: minimal items, clear surfaces",
      "End each day by tidying up and preparing tomorrow's priorities",
    ],
    relatedRules: [2, 5, 7],
  },
  {
    number: 7,
    slug: "pursue-what-is-meaningful",
    title: "Pursue What Is Meaningful, Not What Is Expedient",
    subtitle: "Choose long-term fulfilment over instant gratification",
    description:
      "Instant gratification is the enemy of lasting achievement. True wellness comes from consistently choosing what matters most over what feels good right now.",
    wellnessInterpretation:
      "Every wellness journey involves choosing discomfort now for wellbeing later: the workout over the couch, the salad over the burger, the early bedtime over the late-night scroll. This rule is the engine of health transformation. Meaningful pursuits — whether physical fitness, mental clarity, or emotional resilience — require the daily sacrifice of expedience.",
    deepExplanation:
      "Expediency says: lie, cheat, steal, take shortcuts, avoid responsibility. It whispers that the easy path is the smart path. But expedience borrows from the future to pay for the present, and the interest rates are devastating. Meaning, on the other hand, requires sacrifice — the voluntary acceptance of short-term suffering for long-term benefit. Every meaningful achievement in human history was built on this principle. Your health is no different.",
    dailyTips: [
      "Before any decision, ask: 'Does this serve my future self or just my present comfort?'",
      "Replace one daily convenience habit with a meaningful alternative",
      "Set a compelling long-term health vision and review it weekly",
      "Practice delayed gratification: wait 10 minutes before giving in to cravings",
      "Invest time in activities that compound: exercise, learning, deep relationships",
    ],
    relatedRules: [1, 4, 12],
  },
  {
    number: 8,
    slug: "tell-the-truth",
    title: "Tell the Truth — Or, at Least, Don't Lie",
    subtitle: "Build your life on radical honesty",
    description:
      "Lies — even small ones — corrode your sense of self and your relationships. Honest living, though harder, creates the solid foundation on which genuine wellbeing is built.",
    wellnessInterpretation:
      "Honesty is a wellness practice. The stress of maintaining lies elevates cortisol, disrupts sleep, and erodes self-trust. When you're honest about your habits, your health, and your struggles, you create the conditions for real change. Self-deception is the greatest barrier to wellness — you can't fix what you won't acknowledge.",
    deepExplanation:
      "Every lie you tell — to others or yourself — warps your perception of reality. You start living in a world of your own fabrication, increasingly disconnected from what's actually happening. And in that distorted world, you can't navigate effectively. Telling the truth, even when it's painful, keeps you aligned with reality. And reality, however harsh, is the only place where meaningful action can occur. You cannot fix your health if you lie to yourself about your habits. You cannot improve your relationships if you won't acknowledge your role in their problems.",
    dailyTips: [
      "Keep an honest food and activity journal — no sanitising or omitting",
      "When asked how you're doing, give a genuine answer to someone you trust",
      "Acknowledge one uncomfortable truth about your health each month",
      "Stop making excuses for missed workouts or poor dietary choices — just note them honestly",
      "Practice radical transparency in one relationship this week",
    ],
    relatedRules: [5, 9, 10],
  },
  {
    number: 9,
    slug: "assume-the-person-you-are-listening-to-knows-something-you-dont",
    title: "Assume That the Person You Are Listening to Might Know Something You Don't",
    subtitle: "Cultivate deep, transformative listening",
    description:
      "Genuine listening is a rare skill with extraordinary power. When you truly listen, you learn, you heal, and you connect on a level that transforms both speaker and listener.",
    wellnessInterpretation:
      "Listening is a wellness superpower. Active listening reduces stress in both parties, strengthens relationships (a key longevity factor), and exposes you to perspectives that can transform your approach to health. The person who listens learns faster, adapts quicker, and builds the social connections that are more predictive of longevity than almost any other factor.",
    deepExplanation:
      "Most people don't listen — they wait to talk. They formulate responses while the other person is still speaking, missing nuance, emotion, and insight. True listening means setting aside your assumptions and genuinely considering that this other person, with their unique experience, might possess knowledge you lack. This humility is the gateway to growth. In wellness, it means listening to your body's signals, your doctor's advice, and the experiences of those who've walked paths you haven't yet explored.",
    dailyTips: [
      "In your next conversation, focus entirely on understanding before responding",
      "Practice summarising what someone said before offering your perspective",
      "Listen to your body's hunger, fatigue, and stress signals without judgement",
      "Seek out a podcast or book from someone with a very different wellness philosophy",
      "Ask one genuine, curious question every day about someone else's experience",
    ],
    relatedRules: [3, 8, 10],
  },
  {
    number: 10,
    slug: "be-precise-in-your-speech",
    title: "Be Precise in Your Speech",
    subtitle: "Clarify your thoughts to clarify your life",
    description:
      "Vague language creates vague thinking and vague outcomes. When you articulate your goals, struggles, and needs precisely, you gain the power to address them.",
    wellnessInterpretation:
      "Precision in language transforms wellness outcomes. 'I want to get healthy' is vague and powerless. 'I will walk 8,000 steps daily, sleep by 10pm, and eat vegetables at every meal' is precise and actionable. The difference between people who achieve their health goals and those who don't often comes down to the specificity of their intentions.",
    deepExplanation:
      "The world is a fog of infinite complexity. Without precise language, problems remain nebulous — too large and vague to tackle. But when you name something precisely, you give it boundaries. A bounded problem can be solved. 'I'm unhappy' is overwhelming. 'I'm unhappy because I've neglected my fitness and my sleep schedule is chaotic' is solvable. Precision in speech is precision in thought, and precision in thought is the precursor to effective action.",
    dailyTips: [
      "Replace vague goals with specific, measurable targets",
      "When something bothers you, articulate exactly what and why — write it down",
      "Describe your emotions with precision: not 'bad' but 'anxious about tomorrow's presentation'",
      "Communicate your needs clearly to partners, colleagues, and healthcare providers",
      "Review your wellness goals monthly and sharpen any that have become vague",
    ],
    relatedRules: [8, 9, 12],
  },
  {
    number: 11,
    slug: "do-not-bother-children-when-they-are-skateboarding",
    title: "Do Not Bother Children When They Are Skateboarding",
    subtitle: "Embrace risk, play, and the edge of capability",
    description:
      "Growth requires risk. Overprotecting yourself from discomfort, challenge, and even danger prevents the development of resilience, competence, and true confidence.",
    wellnessInterpretation:
      "A wellness philosophy that avoids all risk is no philosophy at all. Challenging your body with intense exercise, your mind with difficult learning, and your comfort zone with novel experiences is how you build genuine resilience. The cold plunge, the heavy deadlift, the difficult conversation — these are the skateboard ramps of adult wellness.",
    deepExplanation:
      "When children skateboard, they're testing limits — pushing against the boundary of what they can do. Yes, they might fall. They might get hurt. But through that process, they develop courage, skill, and an accurate sense of their own capabilities. Remove the risk, and you remove the growth. Modern culture's obsession with safety has created a paradox: in trying to protect people from every danger, we've made them fragile. True wellness requires anti-fragility — becoming stronger through exposure to manageable stress.",
    dailyTips: [
      "Add one challenging physical activity per week that pushes your current limits",
      "Try a new sport, skill, or activity every month — embrace the beginner's phase",
      "Practice cold exposure: cold showers, ice baths, or winter swimming",
      "Take on a project that genuinely intimidates you",
      "Allow yourself to fail at something publicly — and learn from it without shame",
    ],
    relatedRules: [1, 4, 7],
  },
  {
    number: 12,
    slug: "pet-a-cat-when-you-encounter-one",
    title: "Pet a Cat When You Encounter One on the Street",
    subtitle: "Find beauty in small moments amidst life's suffering",
    description:
      "Life contains unavoidable suffering. Amidst the struggle, pause to notice beauty, joy, and grace in the smallest moments. These pauses sustain you through the hardest times.",
    wellnessInterpretation:
      "Mindfulness and gratitude aren't just buzzwords — they're survival strategies. Research shows that noticing and savouring small positive moments reduces stress, boosts immunity, and increases life satisfaction. The ability to pause, breathe, and appreciate a sunset, a child's laugh, or a perfect cup of tea is a wellness practice as powerful as any exercise regime.",
    deepExplanation:
      "Life is suffering — this isn't pessimism, it's the starting point of every profound philosophical and spiritual tradition. But within the suffering, moments of grace appear: a cat crossing your path, sunlight through leaves, the warmth of a cup in your hands. These aren't trivial distractions from the 'real' business of life — they are the real business of life. The person who can notice and appreciate these moments has mastered something that no amount of achievement can provide: the ability to be present in their own existence.",
    dailyTips: [
      "Practice a 5-minute daily gratitude meditation, focusing on sensory details",
      "Take a 'noticing walk' — no phone, no music, just observation of your environment",
      "Pause between tasks to take three conscious breaths",
      "Keep a gratitude journal: three specific, sensory-rich moments from each day",
      "When you encounter beauty — a sunset, a kind gesture, a perfect meal — stop and fully experience it",
    ],
    relatedRules: [4, 7, 11],
  },
];

export function getRuleBySlug(slug: string): Rule | undefined {
  return rules.find((r) => r.slug === slug);
}

export function getRuleByNumber(num: number): Rule | undefined {
  return rules.find((r) => r.number === num);
}
