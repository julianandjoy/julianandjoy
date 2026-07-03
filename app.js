// === Wedding Website - Single Page App (no build tools needed) ===

// Replace this with your actual Google Apps Script deployment URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

// Page content templates
const pages = {
  home: `
    <section class="hero">
      <p class="hero-subtitle">Together with their families</p>
      <h1 class="hero-names">
        Julian
        <span class="ampersand">&amp;</span>
        Joy
      </h1>
      <div class="divider"></div>
      <p class="hero-date">September 25, 2027</p>
      <p class="hero-location">City, State</p>
    </section>
    <section class="page-section">
      <h2>Our Story</h2>
      <div class="divider-small"></div>
      <p style="max-width:600px;margin:0 auto;line-height:1.8;">
        Our journey began with a chance meeting and quickly grew into something
        special, filled with laughter, adventures, and unforgettable memories.
        As we prepare to say "I do," we're excited to celebrate this next
        chapter with our loved ones.
      </p>
    </section>
  `,

  schedule: `
    <section class="page-section">
      <h2 class="page-title">Schedule of Events</h2>
      <div class="divider"></div>
      <div class="event-card">
        <h3>Welcome Party</h3>
        <p class="event-date">Friday, September 24</p>
        <p class="event-time">4:00 PM</p>
        <p class="event-venue">Venue Name</p>
        <p class="event-desc">Come by for some appetizers and drinks, and help us kick off our celebration!</p>
      </div>
      <div class="divider-small"></div>
      <div class="event-card">
        <h3>Wedding Ceremony &amp; Reception</h3>
        <p class="event-date">Saturday, September 25</p>
        <p class="event-time">4:30 PM – 10:00 PM</p>
        <p class="event-venue">Venue Name</p>
        <p class="event-desc">The ceremony will begin promptly at 4:30 PM. Please plan your transportation in advance.</p>
      </div>
      <div class="divider-small"></div>
      <div class="event-card">
        <h3>After Party</h3>
        <p class="event-date">Saturday, September 25</p>
        <p class="event-time">10:00 PM – 2:00 AM</p>
        <p class="event-venue">Venue Name</p>
        <p class="event-desc">Dancing, drinks, and late-night snacks. Transportation provided from the reception.</p>
      </div>
      <div class="divider-small"></div>
      <div class="event-card">
        <h3>Farewell Breakfast</h3>
        <p class="event-date">Sunday, September 26</p>
        <p class="event-time">10:00 AM – 1:00 PM</p>
        <p class="event-venue">Venue Name</p>
        <p class="event-desc">Join us for a light breakfast and coffee before you head home.</p>
      </div>
    </section>
  `,

  venue: `
    <section class="page-section">
      <h2 class="page-title">Venue</h2>
      <div class="divider"></div>
      <h3>Ceremony &amp; Reception</h3>
      <p>Venue Name</p>
      <p>123 Street Address</p>
      <p>City, State ZIP</p>
      <div class="divider-small"></div>
      <p style="max-width:500px;margin:0 auto;line-height:1.8;">
        More details about the venue, parking information, and anything else
        your guests should know.
      </p>
    </section>
  `,

  'dress-code': `
    <section class="page-section">
      <h2 class="page-title">Dress Code</h2>
      <div class="divider"></div>
      <h3>Semi-Formal / Cocktail Attire</h3>
      <div class="divider-small"></div>
      <p style="max-width:600px;margin:0 auto;line-height:1.8;">
        We want everyone to feel comfortable and look their best.
      </p>
      <div style="max-width:500px;margin:2rem auto;text-align:left;">
        <p><strong style="color:var(--color-accent)">For her:</strong> Cocktail dresses, jumpsuits, or dressy separates. Floor-length gowns are welcome too.</p>
        <p><strong style="color:var(--color-accent)">For him:</strong> Suit and tie, or dress shirt with slacks. No need for a full tuxedo.</p>
      </div>
      <div class="divider-small"></div>
      <p style="font-style:italic;opacity:0.8;">Please avoid wearing white or ivory.</p>
    </section>
  `,

  'music-requests': `
    <section class="page-section">
      <h2 class="page-title">Music Requests</h2>
      <div class="divider"></div>
      <p style="max-width:500px;margin:0 auto 2rem;line-height:1.8;">
        Help us build the perfect playlist! Request a song that will get you on the dance floor.
      </p>
      <form class="music-form" id="music-form">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div class="form-group">
          <label for="song">Song Title *</label>
          <input type="text" id="song" name="song" placeholder="Song name" required />
        </div>
        <div class="form-group">
          <label for="artist">Artist</label>
          <input type="text" id="artist" name="artist" placeholder="Artist name" />
        </div>
        <button type="submit" class="btn">Submit Request</button>
        <p class="form-message" id="form-message"></p>
      </form>
    </section>
  `,

  faq: `
    <section class="page-section">
      <h2 class="page-title">Frequently Asked Questions</h2>
      <div class="divider"></div>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question"><span>What time should I arrive for the ceremony?</span><span class="faq-toggle">+</span></div>
          <p class="faq-answer">We kindly ask that you arrive 15-20 minutes early. This will allow ample time to find your seat.</p>
        </div>
        <div class="faq-item">
          <div class="faq-question"><span>Will transportation be provided?</span><span class="faq-toggle">+</span></div>
          <p class="faq-answer">There will be a shuttle from the ceremony to the after party and back to the hotel.</p>
        </div>
        <div class="faq-item">
          <div class="faq-question"><span>Is there parking at the venue?</span><span class="faq-toggle">+</span></div>
          <p class="faq-answer">Yes, complimentary parking will be available at both the ceremony and reception venues.</p>
        </div>
        <div class="faq-item">
          <div class="faq-question"><span>Are kids welcome?</span><span class="faq-toggle">+</span></div>
          <p class="faq-answer">While we adore all the children in our lives, our wedding celebration will be an adults-only event.</p>
        </div>
        <div class="faq-item">
          <div class="faq-question"><span>How do I know if I can bring a plus-one?</span><span class="faq-toggle">+</span></div>
          <p class="faq-answer">All plus-ones are specified on your invitation. We kindly ask that you RSVP only for those listed.</p>
        </div>
        <div class="faq-item">
          <div class="faq-question"><span>Will there be options for dietary restrictions?</span><span class="faq-toggle">+</span></div>
          <p class="faq-answer">Yes! Please inform us of any dietary restrictions or allergies and we will gladly accommodate.</p>
        </div>
        <div class="faq-item">
          <div class="faq-question"><span>What should I do while I'm in town?</span><span class="faq-toggle">+</span></div>
          <p class="faq-answer">Check the Travel page for our local recommendations!</p>
        </div>
      </div>
    </section>
  `,

  travel: `
    <section class="page-section">
      <h2 class="page-title">Travel &amp; Accommodations</h2>
      <div class="divider"></div>
      <div class="info-block">
        <h3>Hotel</h3>
        <p>Hotel Name</p>
        <p>123 Hotel Address, City, State ZIP</p>
        <p style="margin-top:1rem;line-height:1.8;">
          We have a room block reserved. Use code
          <strong style="color:var(--color-accent)">WEDDINGCODE</strong> for the group rate.
        </p>
        <a href="#" class="btn" style="margin-top:1rem;display:inline-block;">Book Hotel</a>
        <div class="divider"></div>
        <h3>Getting There</h3>
        <p style="line-height:1.8;"><strong style="color:var(--color-accent)">By air:</strong> The nearest airport is XYZ International (ABC), about 30 minutes from the venue.</p>
        <p style="line-height:1.8;"><strong style="color:var(--color-accent)">By car:</strong> Parking is available on site.</p>
        <div class="divider"></div>
        <h3>Things to Do</h3>
        <ul>
          <li>Local restaurant recommendation</li>
          <li>Scenic spot or activity</li>
          <li>Coffee shop or cafe</li>
        </ul>
      </div>
    </section>
  `,

  registry: `
    <section class="page-section">
      <h2 class="page-title">Registry</h2>
      <div class="divider"></div>
      <p style="max-width:500px;margin:0 auto 2.5rem;line-height:1.8;">
        Your presence is the only present we need. However, if you'd like to give a gift,
        we've registered at the following places:
      </p>
      <div class="registry-card">
        <h3>Registry Name</h3>
        <p>Kitchen, home, and entertaining essentials.</p>
        <a href="#" class="btn">View Registry</a>
      </div>
      <div class="registry-card">
        <h3>Honeymoon Fund</h3>
        <p>Help us create unforgettable memories on our honeymoon.</p>
        <a href="#" class="btn">View Registry</a>
      </div>
    </section>
  `,
};

// Router
function navigate(page) {
  const app = document.getElementById('app');
  app.innerHTML = pages[page] || pages.home;

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Re-attach event listeners for interactive pages
  if (page === 'music-requests') initMusicForm();
  if (page === 'faq') initFAQ();

  // Scroll to top
  window.scrollTo(0, 0);
}

// Music form handler
function initMusicForm() {
  const form = document.getElementById('music-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-message');
    const btn = form.querySelector('button');
    const data = {
      name: form.name.value,
      song: form.song.value,
      artist: form.artist.value,
    };

    if (!data.song.trim()) return;

    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      msg.textContent = 'Thanks! Your song has been added to our list 🎶';
      msg.className = 'form-message success';
      form.reset();
    } catch {
      msg.textContent = 'Something went wrong. Please try again.';
      msg.className = 'form-message error';
    }

    btn.disabled = false;
    btn.textContent = 'Submit Request';
    setTimeout(() => { msg.textContent = ''; }, 4000);
  });
}

// FAQ accordion
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach((i) => {
        i.classList.remove('open');
        i.querySelector('.faq-toggle').textContent = '+';
      });
      // Toggle clicked
      if (!wasOpen) {
        item.classList.add('open');
        item.querySelector('.faq-toggle').textContent = '−';
      }
    });
  });
}

// Navigation click handlers
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    window.location.hash = page;
  });
});

// Hash-based routing
window.addEventListener('hashchange', () => {
  const page = window.location.hash.slice(1) || 'home';
  navigate(page);
});

// Initial load
const initialPage = window.location.hash.slice(1) || 'home';
navigate(initialPage);
