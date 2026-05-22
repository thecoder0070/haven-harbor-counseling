export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string; // ISO
  dateLabel: string;
  readingTime: string;
  body: string[]; // paragraphs / markdown-lite (we render as <p>, <h2>, <ul> blocks)
}

// Body uses a minimal block syntax:
//   "h2: heading text"  -> <h2>
//   "ul: a | b | c"     -> <ul><li>
//   anything else       -> <p>

export const posts: BlogPost[] = [
  {
    slug: "signs-of-complex-trauma",
    title: "Signs of Complex Trauma You Might Be Missing",
    excerpt: "Complex trauma rarely looks like the movies. Here are the quieter signs that often go unnamed for years.",
    tag: "Trauma",
    date: "2026-05-12",
    dateLabel: "May 12, 2026",
    readingTime: "6 min read",
    body: [
      "When most people picture trauma, they picture a single, dramatic event — a car crash, an assault, a war zone. That picture is real, but it leaves out the people whose trauma was quieter, slower, and woven into the everyday fabric of childhood. That's what clinicians mean when they talk about complex trauma (sometimes called C-PTSD).",
      "Complex trauma develops when something difficult happens repeatedly, over a long stretch of time, in a context you couldn't easily escape — a chaotic home, an emotionally unavailable caregiver, ongoing emotional or spiritual abuse, chronic medical illness, or growing up in a system where you weren't fully safe to be yourself.",
      "h2: It rarely looks like 'trauma'",
      "People with complex trauma often don't recognize themselves in the word. Nothing 'bad enough' happened. Other people had it worse. And by adulthood they've usually built such a competent life that no one would guess at the inner cost.",
      "h2: Quieter signs to take seriously",
      "ul: A persistent inner critic that never lets up | Trouble identifying or naming what you feel | Chronic fatigue, gut issues, or pain with no clear medical cause | Hyper-independence — believing deep down that needing people is dangerous | Big reactions to small things, then shame about reacting | A sense of being 'not quite real' or watching your life from outside | Difficulty resting; productivity as identity | Relationship patterns you keep repeating but can't seem to change",
      "Any one of these by itself doesn't necessarily mean complex trauma. But if several of them have been quietly true for a long time, they're worth paying attention to.",
      "h2: Why it matters that it has a name",
      "Naming complex trauma isn't about adding a diagnosis to your file — it's about understanding why the strategies that kept you safe as a kid are now exhausting you as an adult. The behaviors weren't a flaw. They were brilliant adaptations to a situation you didn't choose.",
      "h2: What helps",
      "Complex trauma usually needs more than insight. It responds best to therapies that work with both the mind and the body — IFS (parts work), EMDR, somatic approaches, and the steady, non-rushed pace of a relationship with a therapist who knows trauma. Healing is real, and it's not as far away as it might feel right now.",
      "If any of this resonates, you're welcome to reach out for a free consult.",
    ],
  },
  {
    slug: "christian-counseling-vs-secular-therapy",
    title: "Christian Counseling vs. Secular Therapy: What's the Difference?",
    excerpt: "The labels get used loosely. Here's what each one usually means — and how to pick the kind of therapist that fits.",
    tag: "Faith",
    date: "2026-04-22",
    dateLabel: "April 22, 2026",
    readingTime: "5 min read",
    body: [
      "If you've been searching for a therapist and tripping over phrases like 'Christian counseling,' 'biblical counseling,' 'faith-integrated therapy,' and 'secular therapy,' you're not imagining the confusion. The terms get used loosely and they often mean different things to different practices.",
      "Here's a short, honest map.",
      "h2: Secular therapy",
      "A secular therapist uses evidence-based clinical methods (CBT, EMDR, IFS, etc.) and is trained to work with clients of any belief system. Faith may come up in your sessions because it's part of your life, but it isn't the framework of the work.",
      "Many Christians do excellent therapy with secular therapists — particularly those who are respectful of faith. The risk is finding a clinician who treats religion as a symptom to be talked out of.",
      "h2: Christian counseling (faith-integrated therapy)",
      "This usually means a licensed clinical therapist who shares your faith and is willing to integrate it — prayer, scripture, a felt sense of God's presence — into the work when you want it. The clinical foundation is the same evidence-based methods used in any good therapy. The difference is that your faith is treated as a meaningful part of who you are, not something to work around.",
      "This is the lane Haven & Harbor sits in.",
      "h2: Biblical counseling",
      "Biblical counseling is a different model. It's typically delivered by pastors or lay counselors trained in a specific theological framework (such as ACBC), often without a clinical mental-health license. Sessions usually focus on scripture, prayer, and discipleship rather than clinical assessment, trauma treatment, or psychotherapy.",
      "It can be deeply meaningful — particularly for spiritual formation — but it isn't a substitute for therapy when you're working with trauma, PTSD, eating disorders, or significant anxiety and depression.",
      "h2: How to pick",
      "ul: If you want clinical trauma work and don't want to translate your faith: a Christian (faith-integrated) therapist | If you want clinical work but faith doesn't need to be in the room: a secular therapist who is respectful of religion | If you want spiritual direction and discipleship: a pastor, spiritual director, or biblical counselor — as a complement to therapy, not a replacement",
      "There isn't a single right answer. The best fit is the one where you can tell the truth.",
    ],
  },
  {
    slug: "trauma-and-sleep",
    title: "Trauma and Sleep: Why You Wake at 3 a.m.",
    excerpt: "The link between trauma and broken sleep, what's actually happening in your nervous system, and a few things that genuinely help.",
    tag: "Trauma",
    date: "2026-03-30",
    dateLabel: "March 30, 2026",
    readingTime: "5 min read",
    body: [
      "Almost every trauma client I've worked with mentions sleep at some point. Sometimes it's the headline complaint, sometimes it's an afterthought — 'oh, and I wake up at 3 a.m. every night, that's been going on for years.' The link between trauma and sleep is real and well-documented, even when nothing visibly stressful is going on in your life right now.",
      "h2: What's happening in the body",
      "Sleep requires the nervous system to feel safe enough to let its guard down. After trauma — especially trauma that was chronic or happened in childhood — the body learns to stay on alert as a baseline. You can be exhausted and still find yourself snapping awake at the same hour every night, hypervigilant for a threat your conscious mind no longer remembers.",
      "Common patterns include difficulty falling asleep, vivid or violent dreams, waking between 2 and 4 a.m. with a racing mind, and feeling unrested even after a full eight hours.",
      "h2: What actually helps (and what doesn't)",
      "ul: Sleep hygiene basics are real and worth doing — consistent wake time, no screens for an hour, cool dark room | Magnesium glycinate at night helps many people | Limit alcohol; it fragments deep sleep even when it helps you fall asleep | Stop forcing sleep at 3 a.m. — get up, dim light, do something boring and analog, return when sleepy",
      "But if trauma is the underlying driver, sleep hygiene alone often isn't enough. The body needs to actually feel safer, not just go through the motions of bedtime.",
      "h2: The therapy piece",
      "Trauma-focused therapy frequently improves sleep as a side effect of regulation work. EMDR and IFS both directly address the parts of the nervous system that are scanning for threat at night. Many clients are surprised that the sleep problem they'd given up on quietly resolves a few months into the work.",
      "If 3 a.m. has been your reality for a while, you're not broken and you're not alone. There's usually a story under it — and there's a way through.",
    ],
  },
  {
    slug: "how-to-know-if-you-need-therapy",
    title: "How to Know If You Actually Need Therapy",
    excerpt: "You don't need to be in crisis to go to therapy. Here are honest signals that it might be time.",
    tag: "Starting therapy",
    date: "2026-03-08",
    dateLabel: "March 8, 2026",
    readingTime: "4 min read",
    body: [
      "One of the most common things I hear in consult calls is a version of, 'I don't know if what I'm dealing with is bad enough to need therapy.' Almost everyone who says it ends up benefiting from therapy. The bar isn't crisis. The bar is honesty.",
      "h2: Signals worth taking seriously",
      "ul: You keep ending up in the same kind of relationship or the same kind of conflict | Something happened (or has been happening) that you keep not thinking about | Your body is talking — chronic tension, stomach issues, headaches, exhaustion | You're 'fine' but you cry in your car or stare at the ceiling at 2 a.m. | You've been getting through life on willpower for a long time | Faith feels harder or quieter than it used to and you can't say why | The kindness you extend to other people, you can't seem to extend to yourself",
      "If two or three of these are quietly true, it's probably time.",
      "h2: What therapy is good for that you can't easily do alone",
      "Books, podcasts, journaling, and the right friends can do a lot of work. What therapy adds is the specific experience of being deeply known by someone whose only job in that hour is to pay attention to you. That sounds simple. For most adults, it isn't something they've ever actually had.",
      "Over time, that relationship becomes a kind of corrective experience — a place where the parts of you that have been working alone for years get to set the load down.",
      "h2: Picking the first step",
      "Booking a consult is a small, low-cost commitment. Fifteen minutes on the phone won't change your life on its own, but it usually tells you whether the person on the other end is someone you could imagine doing real work with. That's the whole purpose of the call.",
      "If you've read this far, that's its own kind of answer.",
    ],
  },
];

export function findPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
