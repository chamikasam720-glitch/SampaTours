 "use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X, MapPin, CarFront, Compass, MessageCircle, ShieldCheck, Phone, Mail, Instagram, Facebook, ChevronRight } from "lucide-react";

const WA = "94765402575";
const destinations = [
  { name: "Sigiriya", type: "Culture & heritage", img: "https://images.unsplash.com/photo-1588598198321-9735fd5f9c2c?auto=format&fit=crop&w=900&q=85", desc: "Discover the iconic Lion Rock and the ancient stories of Sri Lanka." },
  { name: "Ella", type: "Hill country", img: "/images/ella/ella_nine_arch_bridge.jpg", desc: "Green mountains, scenic viewpoints and unforgettable train journeys." },
  { name: "Galle", type: "Coastal heritage", img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=900&q=85", desc: "Wander through the historic fort and enjoy the southern coastline." },
  { name: "Mirissa", type: "Beach escape", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85", desc: "Slow down beside palm-fringed beaches and beautiful ocean views." },
  { name: "Kandy", type: "Culture & nature", img: "https://images.unsplash.com/photo-1588598198321-9735fd5f9c2c?auto=format&fit=crop&w=900&q=85", desc: "Explore a cultural capital surrounded by lush green hills." },
  { name: "Yala", type: "Wildlife & nature", img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85", desc: "Experience Sri Lanka's remarkable wildlife and landscapes." }
];
const routes = [
  { days: "05 DAYS", title: "Cultural Highlights", places: "Negombo · Sigiriya · Kandy", detail: "A journey through ancient landmarks, local culture and beautiful scenery." },
  { days: "07 DAYS", title: "Hill Country Escape", places: "Kandy · Nuwara Eliya · Ella", detail: "Tea country, mountain views, waterfalls and scenic roads." },
  { days: "10 DAYS", title: "Island Discovery", places: "Cultural Triangle · Hill Country · South Coast", detail: "A flexible island journey combining heritage, nature and beaches." }
];

function waLink(message: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", arrival: "", days: "", people: "2", pickup: "", destinations: "", notes: "" });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Sampa Tours! I would like a custom travel quotation.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AArrival date: ${form.arrival}%0ADuration: ${form.days}%0ATravelers: ${form.people}%0APickup: ${form.pickup}%0ADestinations: ${form.destinations}%0AAdditional details: ${form.notes}`;
    window.open(`https://wa.me/${WA}?text=${message}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const nav = [["Home", "#home"], ["About", "#about"], ["Destinations", "#destinations"], ["Our service", "#service"], ["Journeys", "#journeys"], ["Contact", "#contact"]];

  return (
    <main>
      <header className="header">
        <a href="#home" className="brand" aria-label="Sampa Tours home"><Image src="/images/sampatus-logo.png" alt="Sampa Tours logo" width={940} height={1280} priority className="brand-logo"/><span className="brand-tagline">HELLO SRI LANKA</span></a>
        <nav className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="nav-cta" href="#quote">Plan your trip <ArrowRight size={16}/></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
      </header>
      {mobileOpen && <div className="mobile-nav">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}</div>}

      <section className="hero" id="home">
        <div className="hero-shade"/>
        <div className="hero-content">
          <span className="eyebrow light">PRIVATE DRIVER • PERSONAL JOURNEYS • SRI LANKA</span>
          <h1>Discover paradise.<br/><em>Travel your way.</em></h1>
          <p>From misty mountain roads to golden beaches, explore the island with the comfort and freedom of your own private vehicle and driver.</p>
          <div className="hero-actions"><a className="button button-gold" href="#quote">Get a custom quote <ArrowRight size={17}/></a><a className="text-link light-link" href="#destinations">Explore Sri Lanka <ChevronRight size={17}/></a></div>
          <div className="hero-note"><span className="note-line"/> YOUR ISLAND. YOUR JOURNEY.</div>
        </div>
        <div className="hero-bottom"><span>01 / SRI LANKA</span><span>DISCOVER MORE ↓</span></div>
      </section>

      <section className="intro section" id="about">
        <div className="intro-image"><img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1100&q=85" alt="Lush tropical Sri Lankan landscape"/><div className="image-tag">AYUBOWAN — WELCOME</div></div>
        <div className="intro-copy"><span className="eyebrow">A WARM SRI LANKAN WELCOME</span><h2>More than a ride.<br/><em>A journey to remember.</em></h2><p>At Sampa Tours, we make exploring Sri Lanka feel personal. Travel at your own pace with private transportation, a dedicated driver and the freedom to shape a journey around the places you want to discover.</p><p>Whether you are here for ancient heritage, cool highlands, wildlife or the coast, let the island unfold one memorable stop at a time.</p><a className="text-link" href="#quote">Let's plan your journey <ArrowRight size={17}/></a></div>
      </section>

      <section className="service-band" id="service"><div className="service-inner"><div><span className="eyebrow light">YOUR JOURNEY, YOUR PACE</span><h2>See more. Worry less.</h2><p>Private vehicle and driver services designed around your travel plans.</p></div><div className="service-points"><div><CarFront/><b>Private travel</b><span>Your own vehicle for your itinerary.</span></div><div><Compass/><b>Flexible routes</b><span>Choose the places you want to see.</span></div><div><ShieldCheck/><b>Personal service</b><span>Friendly communication from inquiry to journey.</span></div></div></div></section>

      <section className="section destinations" id="destinations"><div className="section-heading"><div><span className="eyebrow">THE ISLAND IS YOURS</span><h2>Places to <em>fall in love with.</em></h2></div><p>From timeless cultural treasures to quiet coastal escapes, find the places that make Sri Lanka unforgettable.</p></div><div className="destination-grid">{destinations.map((d, i) => <article className={`destination-card card-${i}`} key={d.name}><img src={d.img} alt={`${d.name}, Sri Lanka`}/><div className="destination-overlay"><span>{d.type}</span><h3>{d.name}</h3><p>{d.desc}</p><a href="#quote" aria-label={`Request a quote for ${d.name}`}>Plan this stop <ArrowRight size={16}/></a></div></article>)}</div></section>

      <section className="journeys section" id="journeys"><div className="section-heading"><div><span className="eyebrow">A LITTLE INSPIRATION</span><h2>Journeys made <em>for you.</em></h2></div><p>Use these suggested routes as a starting point. Every trip can be tailored to your dates, interests and pace.</p></div><div className="route-grid">{routes.map(r => <article className="route-card" key={r.title}><span className="route-days">{r.days}</span><h3>{r.title}</h3><span className="route-places"><MapPin size={14}/>{r.places}</span><p>{r.detail}</p><a href="#quote">Request a custom quote <ArrowRight size={16}/></a></article>)}</div></section>

      <section className="quote-section" id="quote"><div className="quote-intro"><span className="eyebrow light">LET'S MAKE IT HAPPEN</span><h2>Your Sri Lankan story<br/><em>starts here.</em></h2><p>Tell us a little about the trip you have in mind. We will use your details to discuss a personalized journey and quotation.</p><div className="quote-contact"><MessageCircle/><div><b>Prefer WhatsApp?</b><span>Chat with Sampa Tours directly.</span><a href={waLink("Hello Sampa Tours! I would like to discuss a private trip in Sri Lanka.")}>Start a WhatsApp chat <ArrowRight size={15}/></a></div></div></div>
        <form className="quote-form" onSubmit={submit}><div className="form-heading"><span>PERSONALIZED TRAVEL ENQUIRY</span><h3>Plan your journey</h3><p>All fields marked * are required.</p></div><div className="form-grid"><label>Full name *<input required name="name" value={form.name} onChange={update} placeholder="Your name"/></label><label>WhatsApp / phone *<input required name="phone" value={form.phone} onChange={update} placeholder="+ country code"/></label><label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label><label>Arrival date *<input required type="date" name="arrival" value={form.arrival} onChange={update}/></label><label>Trip duration *<input required name="days" value={form.days} onChange={update} placeholder="e.g. 7 days"/></label><label>Number of travelers<select name="people" value={form.people} onChange={update}><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option></select></label><label className="full">Pickup location *<input required name="pickup" value={form.pickup} onChange={update} placeholder="e.g. Colombo / Airport / Hotel"/></label><label className="full">Destinations you would like to visit *<textarea required name="destinations" value={form.destinations} onChange={update} placeholder="Tell us the places on your wish list..."/></label><label className="full">Additional requests<textarea name="notes" value={form.notes} onChange={update} placeholder="Vehicle preferences, interests or anything else..."/></label></div><button className="button button-green submit-button" type="submit">Send enquiry on WhatsApp <ArrowRight size={17}/></button><small className="form-privacy">Your enquiry opens WhatsApp so you can review and send the message. No payment is taken on this website.</small>{sent && <p className="success-msg">WhatsApp should have opened in a new tab. Please send your prepared enquiry.</p>}</form>
      </section>

      <section className="travel-notes section"><div><span className="eyebrow">TRAVEL A LITTLE WISER</span><h2>Good to know<br/><em>before you go.</em></h2></div><div className="notes-list"><article><span>01</span><div><b>When to visit</b><p>Sri Lanka has different seasonal patterns across its coasts. Share your travel dates and we can help plan a suitable route.</p></div></article><article><span>02</span><div><b>Travel at your pace</b><p>Allow time for scenic stops, local experiences and the distances between destinations.</p></div></article><article><span>03</span><div><b>Plan a personal route</b><p>Tell us what you love — beaches, culture, nature or food — and build your own island journey.</p></div></article></div></section>

      <section className="gallery-section"><div className="gallery-title"><span className="eyebrow light">LITTLE MOMENTS, BIG MEMORIES</span><h2>The beauty of <em>Sri Lanka.</em></h2></div><div className="gallery-grid"><img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80" alt="Ocean and beach"/><img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80" alt="Wildlife landscape"/><img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80" alt="Mountain lake"/><img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80" alt="Tropical coastline"/></div></section>

      <footer id="contact"><div className="footer-main"><div className="footer-brand"><a href="#home" className="brand brand-footer" aria-label="Sampa Tours home"><Image src="/images/sampatus-logo.png" alt="Sampa Tours logo" width={940} height={1280} className="footer-logo"/></a><p>Discover paradise. Travel your way. Let your Sri Lankan journey begin with us.</p></div><div><h4>EXPLORE</h4><a href="#destinations">Destinations</a><a href="#service">Private vehicle</a><a href="#journeys">Suggested journeys</a><a href="#quote">Get a quotation</a></div><div><h4>GET IN TOUCH</h4><a href="tel:+94765402575"><Phone size={15}/> +94 76 540 2575</a><a href="mailto:hello@sampatours.lk"><Mail size={15}/> Email us</a><a href={waLink("Hello Sampa Tours!")}><MessageCircle size={15}/> WhatsApp us</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SAMPA TOURS. All rights reserved.</span><span>MADE WITH LOVE IN SRI LANKA 🇱🇰</span></div></footer>
      <a className="floating-wa" href={waLink("Hello Sampa Tours! I would like to plan a private trip in Sri Lanka.")} target="_blank" rel="noreferrer" aria-label="Chat with Sampa Tours on WhatsApp"><MessageCircle size={23}/><span>Chat with us</span></a>
    </main>
  );
}
