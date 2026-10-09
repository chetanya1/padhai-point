import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

const subjects = [
  ["01", "Mathematics", "Build number sense, problem-solving and exam confidence."],
  ["02", "Science", "Understand concepts through examples, not just memorised lines."],
  ["03", "Social studies", "Connect history, geography and civics to the bigger picture."],
  ["04", "Hindi & English", "Strengthen grammar, reading, writing and communication."],
  ["05", "Computer fundamentals", "Build digital literacy, programming and practical computer skills."],
  ["06", "College computer science", "Explore programming, ML, DL and industry-oriented workflows."],
];
const faqs = [
  ["Do you teach at an institute?", "Padhai Point is a home-tuition service, not a walk-in coaching centre. Sessions take place at a student's home by prior arrangement."],
  ["Which classes are covered?", "The planned school offering covers Classes 1 to 10 across Maths, Science, Social Studies, Hindi, English and Computer Science. Availability can be discussed before booking."],
  ["Do you teach college-level CS?", "Yes, the advanced learning track is designed around computer science foundations, machine learning, deep learning and practical workflows. The syllabus is agreed individually."],
  ["How do I enquire?", "Use the form to prepare a message with the student's class and learning goal. A verified contact number or connected form service is needed to send it."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Padhai Point | Home Tuition in Laxmi Nagar, Delhi" },
      { name: "description", content: "Personalised home tuition for Classes 1 to 10 in Laxmi Nagar, Delhi, plus computer science support for college students. Meet tutor Chetanya Sapra." },
      { name: "keywords", content: "home tuition Laxmi Nagar, private tutor Laxmi Nagar Delhi, tuition classes 1 to 10, computer science tutor Delhi, Chetanya Sapra" },
      { property: "og:title", content: "Padhai Point | Learn with clarity" },
      { property: "og:description", content: "Personalised home tuition for school students and practical computer science learning." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Class 8");
  const [goal, setGoal] = useState("School tuition");
  const [enquiry, setEnquiry] = useState("");
  const [notice, setNotice] = useState("");
  const [faqOpen, setFaqOpen] = useState(0);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnquiry("Hello Padhai Point, I am " + name + ". I am enquiring about " + goal + " for " + level + ". Please share details about home tuition availability in Laxmi Nagar.");
    setNotice("");
  }
  async function copyEnquiry() {
    try { await navigator.clipboard.writeText(enquiry); setNotice("Copied. Paste this into WhatsApp or SMS after adding the real contact number."); }
    catch { setNotice("Select the enquiry text above and copy it manually."); }
  }

  return <main className="pp-site">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      "@context":"https://schema.org","@type":"EducationalOrganization","name":"Padhai Point",
      "description":"Home tuition for school students in Classes 1 to 10 and computer science learning support for college students.",
      "url":"https://www.google.com/maps/search/?api=1&query=Padhai+Point+16+Kishan+Kunj+Block+G+Vishwakarma+Park+Laxmi+Nagar+Delhi+110092",
      "telephone":"+919582207172",
      "address":{"@type":"PostalAddress","streetAddress":"16, Kishan Kunj, Block G, Vishwakarma Park","addressLocality":"Laxmi Nagar, Delhi","postalCode":"110092","addressCountry":"IN"},
      "areaServed":{"@type":"Place","name":"Laxmi Nagar, Delhi, India"},
      "founder":{"@type":"Person","name":"Chetanya Sapra","jobTitle":"Tutor","description":"B.Tech student and private tutor"},
      "knowsAbout":["Mathematics","Science","Social Studies","Hindi","English","Computer Science","Machine Learning","Deep Learning"],
      "serviceType":"Home tuition",
    })}} />
    <header className="pp-nav" id="top">
      <a className="pp-brand" href="#top" aria-label="Padhai Point home"><span className="pp-mark">P<i /></span><span><strong>Padhai Point</strong><small>LEARN WITH CLARITY</small></span></a>
      <button className="pp-menu-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close −" : "Menu +"}</button>
      <nav className={menuOpen ? "pp-links is-open" : "pp-links"} aria-label="Main navigation">
        <a href="#subjects" onClick={() => setMenuOpen(false)}>Subjects</a><a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a><a href="#about" onClick={() => setMenuOpen(false)}>About tutor</a><a className="pp-nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Enquire <b>↗</b></a>
      </nav>
    </header>

    <section className="pp-hero">
      <div className="pp-hero-copy">
        <div className="pp-overline"><i /> HOME TUITION · LAXMI NAGAR, DELHI</div>
        <h1>Make learning<br/>feel <em>possible.</em></h1>
        <p>One-to-one guidance for school subjects and practical computer science, built around how each student learns.</p>
        <div className="pp-actions"><a className="pp-button dark" href="#contact">Find your learning plan <b>↗</b></a><a className="pp-underlink" href="#subjects">Explore subjects ↓</a></div>
        <div className="pp-hero-foot"><span>PERSONAL ATTENTION</span><span>CLASSES 1–10 + COLLEGE CS</span></div>
      </div>
      <div className="pp-art" role="img" aria-label="Stylised study desk with a book and mathematics notes">
        <div className="pp-orbit one"/><div className="pp-orbit two"/>
        <div className="pp-art-label top">IDEAS INTO UNDERSTANDING <b>✳</b></div>
        <div className="pp-paper"><strong>f(x)</strong><small>TRY · THINK · LEARN</small><i/></div>
        <div className="pp-book"><div><b>01</b><strong>THE<br/>BASICS</strong><i/></div><div><b>BUILD</b><strong>ONE IDEA<br/>AT A TIME</strong><i/><i/><i/></div></div>
        <div className="pp-note"><small>LEARNING NOTE</small><strong>Curiosity<br/>comes first.</strong><i/></div>
        <div className="pp-art-label bottom">STAY CURIOUS. KEEP GROWING. <b>↗</b></div><div className="pp-formula">x² + y²</div>
      </div>
    </section>

    <div className="pp-ticker"><div className="pp-ticker-track"><span>MATHEMATICS</span><i>✳</i><span>SCIENCE</span><i>✳</i><span>LANGUAGES</span><i>✳</i><span>COMPUTER SCIENCE</span><i>✳</i><span>PERSONALISED LEARNING</span><i>✳</i><span>MATHEMATICS</span><i>✳</i><span>SCIENCE</span><i>✳</i><span>LANGUAGES</span><i>✳</i><span>COMPUTER SCIENCE</span></div></div>

    <section className="pp-section" id="subjects">
      <div className="pp-section-heading" data-reveal><div><span className="pp-kicker">WHAT WE CAN WORK ON</span><h2>A stronger base.<br/><em>A wider future.</em></h2></div><p>From the first school concepts to the tools behind modern software, learning starts with understanding the why.</p></div>
      <div className="pp-subject-list">{subjects.map((s) => <article className="pp-subject-row" key={s[0]} data-reveal><span className="pp-number">{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><a href="#contact" aria-label={"Enquire about " + s[1]}>↗</a></article>)}</div>
      <p className="pp-fine">School tuition is intended for Classes 1 to 10. College-level computer science sessions are planned separately around your current level and goals.</p>
    </section>

    <section className="pp-approach" id="approach">
      <div className="pp-approach-top" data-reveal><span className="pp-kicker">A BETTER WAY TO LEARN</span><span>NO RUSH. REAL UNDERSTANDING.</span></div>
      <div className="pp-approach-grid"><div data-reveal><h2>Not just answers.<br/><em>Understanding.</em></h2><p>Good tutoring should help students think independently, not depend on memorised steps.</p></div>
      <div className="pp-steps">{[["01","Start with the student","Discuss goals, identify difficult topics and understand the student's current level."],["02","Make concepts click","Break ideas into manageable steps, use worked examples and encourage questions."],["03","Practise with purpose","Use guided practice, revision and feedback to strengthen recall and problem-solving."]].map((s)=><article key={s[0]} data-reveal><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div><b>↗</b></article>)}</div></div>
    </section>

    <section className="pp-about" id="about">
      <div className="pp-about-art" data-reveal><div className="pp-about-frame"><small>A LITTLE ABOUT YOUR TUTOR</small><div>CS<span>.</span></div><footer><span>TECHNOLOGY</span><span>TEACHING</span><span>CURIOSITY</span></footer></div><span className="pp-stamp">LEARN<br/>BY DOING <b>✳</b></span></div>
      <div className="pp-about-copy" data-reveal><span className="pp-kicker">MEET YOUR TUTOR</span><h2>Hi, I'm<br/><em>Chetanya Sapra.</em></h2><p className="pp-lead">A B.Tech student who enjoys technology, problem-solving and making complex ideas easier to approach.</p><p>My learning journey spans programming and modern computer science topics, alongside a belief that strong fundamentals make advanced ideas less intimidating. At Padhai Point, the aim is to bring that clarity into one-to-one learning.</p><div className="pp-credential"><span>↗</span><div><strong>B.Tech background</strong><small>Technology-informed approach to learning</small></div></div><p className="pp-fine">Sessions, subjects and the depth of advanced topics are agreed individually. No unverified grades, results or years of teaching experience are claimed here.</p></div>
    </section>

    <section className="pp-computing"><div data-reveal><span className="pp-kicker">BEYOND THE TEXTBOOK</span><h2>From school basics<br/>to <em>building with tech.</em></h2><p>For college students, explore computer science with a practical lens. Start from your current level, connect theory to examples, then work toward useful projects and workflows.</p><a className="pp-button light" href="#contact">Discuss computer science <b>↗</b></a></div>
      <div className="pp-tech-board" data-reveal><div className="pp-tech-top"><span>LEARNING MAP / CS</span><span>BUILT AROUND YOUR GOALS</span></div><div className="pp-code-lines"><span><i>01</i> foundations <em>= clear concepts</em></span><span><i>02</i> programming <em>= solve problems</em></span><span><i>03</i> machine learning <em>= learn patterns</em></span><span><i>04</i> deep learning <em>= neural networks</em></span><span><i>05</i> industry workflows <em>= build and iterate</em></span></div><div className="pp-tech-bottom">CONCEPT → PRACTICE → PROJECT <b>↗</b></div></div>
    </section>

    <section className="pp-faq"><div data-reveal><span className="pp-kicker">GOOD TO KNOW</span><h2>Before we begin.</h2><p>A few practical details for families and students.</p></div><div className="pp-faq-list">{faqs.map((f,i)=><article key={f[0]} data-reveal><button aria-expanded={faqOpen===i} onClick={()=>setFaqOpen(faqOpen===i?-1:i)}><span>{f[0]}</span><b>{faqOpen===i?"−":"+"}</b></button>{faqOpen===i&&<p>{f[1]}</p>}</article>)}</div></section>

    <section className="pp-contact" id="contact"><div data-reveal><span className="pp-kicker">YOUR NEXT STEP</span><h2>Let's make learning<br/><em>feel clearer.</em></h2><p>Tell me what the student is working on. We'll use that as the starting point for a conversation about the right support.</p><a className="pp-contact-detail pp-contact-link" href="https://www.google.com/maps/search/?api=1&query=Padhai+Point%2C+16+Kishan+Kunj%2C+Block+G%2C+Vishwakarma+Park%2C+Laxmi+Nagar%2C+Delhi+110092" target="_blank" rel="noreferrer"><b>⌖</b><div><strong>16, Kishan Kunj, Block G</strong><small>Vishwakarma Park, Laxmi Nagar, Delhi 110092</small><small className="pp-map-cta">Open business location in Google Maps ↗</small></div></a><a className="pp-contact-detail pp-contact-link" href="tel:+919582207172"><b>☎</b><div><strong>095822 07172</strong><small>Call Padhai Point</small></div></a><div className="pp-contact-detail"><b>◷</b><div><strong>Business hours</strong><small>Google Business Profile currently shows open · closes at 10 pm. Confirm hours before visiting.</small></div></div><a className="pp-contact-detail pp-contact-link" href="https://www.google.com/maps/search/?api=1&query=Padhai+Point%2C+Laxmi+Nagar%2C+Delhi" target="_blank" rel="noreferrer"><b>★</b><div><strong>5.0 / 5 on Google · 1 review</strong><small>As shown in the supplied Business Profile screenshot</small></div></a></div>
      <form className="pp-form" onSubmit={prepareEnquiry} data-reveal><div className="pp-form-heading"><span>ENQUIRY FORM</span><span>01 / 03</span></div><label htmlFor="pp-name">Your name</label><input id="pp-name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Parent or student's name" required/><label htmlFor="pp-level">Student's class / level</label><select id="pp-level" value={level} onChange={(e)=>setLevel(e.target.value)}>{["Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10","College student"].map((x)=><option key={x}>{x}</option>)}</select><label htmlFor="pp-goal">What are you looking for?</label><select id="pp-goal" value={goal} onChange={(e)=>setGoal(e.target.value)}>{["School tuition","Maths support","Science support","Languages / Social Studies","Computer fundamentals","College computer science","Machine learning / deep learning"].map((x)=><option key={x}>{x}</option>)}</select><button className="pp-button dark pp-submit" type="submit">Prepare my enquiry <b>↗</b></button>{enquiry&&<div className="pp-result" role="status"><strong>Your enquiry is ready</strong><p>{enquiry}</p><button type="button" onClick={copyEnquiry}>Copy enquiry text ↗</button>{notice&&<small>{notice}</small>}</div>}<p className="pp-fine">This form prepares enquiry text in your browser. Copy it, then call Padhai Point at 095822 07172. Sessions are arranged at students’ homes; the listed address is the Business Profile address, not a walk-in tuition centre.</p></form>
    </section>

    <footer className="pp-footer"><a className="pp-brand" href="#top"><span className="pp-mark">P<i/></span><span><strong>Padhai Point</strong><small>LEARN WITH CLARITY</small></span></a><p>Personalised learning, one step at a time.</p><div><a href="#subjects">Subjects</a><a href="#about">About</a><a href="#contact">Enquire ↗</a></div><small className="pp-footer-bottom">© {new Date().getFullYear()} Padhai Point · 16, Kishan Kunj, Block G, Vishwakarma Park, Laxmi Nagar, Delhi 110092 · <a href="https://www.google.com/maps/search/?api=1&query=Padhai+Point%2C+Laxmi+Nagar%2C+Delhi" target="_blank" rel="noreferrer">Google Maps ↗</a></small></footer>
  </main>;
}
