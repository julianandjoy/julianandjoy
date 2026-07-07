// === Wedding Website - Single Page App (no build tools needed) ===

// Replace this with your actual Google Apps Script deployment URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVMnyNSJWTsgnSEQq-kRukBPLiTDwVKjI7kOIOHCE-G9SDzm0VLr8nyOYt-XOVUE6O/exec';

// Page content templates
const pages = {
  home: `
    <section class="hero" style="margin-bottom: 3rem;">
      <p class="hero-subtitle">Together with their families</p>
      <h1 class="hero-names">
        Julian
        <span class="ampersand">&amp;</span>
        Joy
      </h1>
      <div class="divider"></div>
      <p class="hero-date">May 22, 2027</p>
      <p class="hero-location">City, State</p>
    </section>

    <!-- Swirling 3D Tornado Collage -->
    <div class="tornado-track">
      <div class="tornado-viewport">
        <div class="tornado-stage">
          <div class="tornado-card">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" alt="Elopement 1" />
          </div>
          <div class="tornado-card">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" alt="Elopement 2" />
          </div>
          <div class="tornado-card">
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80" alt="Elopement 3" />
          </div>
          <div class="tornado-card">
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Elopement 4" />
          </div>
        </div>
        <div class="tornado-hint">Scroll down to swirl photos &darr;</div>
      </div>
    </div>
  `,

  schedule: `
    <section class="page-section">
      <h2 class="page-title">Schedule of Events</h2>
      <div class="divider"></div>
      
      <h3 class="day-title" style="margin-top: 2.5rem; margin-bottom: 1.5rem; font-weight: 400; font-size: 1.6rem; color: var(--color-accent);">Day 1 (5/21)</h3>
      <div class="events-grid">
        <div class="event-card">
          <h3>Check In</h3>
          <p class="event-time">16:00</p>
          <p class="event-desc">Welcome to Chateau de la Couronne! Settle in, explore the chateau, and make yourself comfortable.</p>
        </div>
        <div class="event-card">
          <h3>Welcome Dinner</h3>
          <p class="event-time">18:00</p>
          <p class="event-desc">Join us for a dinner to kick off the weekend! We’ll have welcome drinks, snax, and pizzas!</p>
          <p class="event-desc" style="font-size: 0.95rem; margin-top: 0.75rem;">
            <strong style="color: var(--color-accent);">Dress Code:</strong> Casual &amp; Comfortable — <a href="#dress-code">View attire guidelines &amp; mood boards</a>
          </p>
        </div>
      </div>
      
      <div class="divider-small"></div>
      
      <h3 class="day-title" style="margin-top: 2.5rem; margin-bottom: 1.5rem; font-weight: 400; font-size: 1.6rem; color: var(--color-accent);">Day 2 (5/22)</h3>
      <div class="events-grid">
        <div class="event-card">
          <h3>Brunch</h3>
          <p class="event-time">Morning</p>
          <p class="event-desc">Enjoy a casual brunch on the property! We’ll have an assortment of options as a buffet.</p>
          <p class="event-desc" style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">
            <strong>Dress Code:</strong> Come in whatever you are comfortable in!
          </p>
        </div>
        <div class="event-card">
          <h3>Wedding Ceremony</h3>
          <p class="event-time">Afternoon Onwards</p>
          <p class="event-desc">Julian and Joy get married! We make it official with all the people we love as witnesses.</p>
          <p class="event-desc" style="font-size: 0.95rem; margin-top: 0.75rem;">
            <strong style="color: var(--color-accent);">Dress Code:</strong> Semi-Formal / Cocktail Attire — <a href="#dress-code">View attire guidelines &amp; mood boards</a>
          </p>
        </div>
        <div class="event-card">
          <h3>Cocktail Hour</h3>
          <p class="event-time">Afternoon</p>
          <p class="event-desc">There will be drinks, snacks, and live music!</p>
        </div>
        <div class="event-card">
          <h3>Seated Dinner</h3>
          <p class="event-time">Evening</p>
          <p class="event-desc">Ready for some food? We got you!</p>
        </div>
        <div class="event-card">
          <h3>Late Night Dancing</h3>
          <p class="event-time">Late Night</p>
          <p class="event-desc">weeeeeee</p>
        </div>
      </div>
      
      <div class="divider-small"></div>
      
      <h3 class="day-title" style="margin-top: 2.5rem; margin-bottom: 1.5rem; font-weight: 400; font-size: 1.6rem; color: var(--color-accent);">Day 3 (5/23)</h3>
      <div class="events-grid">
        <div class="event-card">
          <h3>Breakfast</h3>
          <p class="event-time">Morning</p>
          <p class="event-desc">Nothing cures a hangover better than a hearty breakfast (or some more drinks - later)</p>
        </div>
        <div class="event-card">
          <h3>Pool Party</h3>
          <p class="event-time">Afternoon</p>
          <p class="event-desc">Celebrate with us on our first day as a married couple! Relax and recover by the pool while enjoying some BBQ, games, and drinks!</p>
        </div>
        <div class="event-card">
          <h3>Game Night</h3>
          <p class="event-time">Evening</p>
          <p class="event-desc">It’s time! Enjoy some light bites and drinks and we do what we do best - gamble! Join in on a casual night of gambling - we’ll have mahjong, cards, and poker chips!</p>
        </div>
      </div>
      
      <div class="divider-small"></div>
      
      <h3 class="day-title" style="margin-top: 2.5rem; margin-bottom: 1.5rem; font-weight: 400; font-size: 1.6rem; color: var(--color-accent);">Day 4 (5/24)</h3>
      <div class="events-grid">
        <div class="event-card">
          <h3>Breakfast &amp; Check Out</h3>
          <p class="event-time">Morning</p>
          <p class="event-desc">Check out!</p>
        </div>
      </div>
    </section>
  `,

  venue: `
    <section class="page-section" style="padding: 4.5rem 0 0 0; max-width: 100%;">
      <h2 class="page-title" style="margin-bottom: 0;">Venue</h2>
      <div class="divider" style="margin-bottom: 2rem;"></div>
      
      <!-- Interactive Scroll Track (Apple Style) -->
      <div class="venue-interactive-track">
        <div class="venue-sticky-viewport">
          <div class="venue-image-panel">
            <img src="https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=1600&q=90" alt="Château de la Couronne" />
          </div>
          
          <div class="venue-text-panel">
            <h3 style="font-size: 2.2rem; font-family: var(--font-display); color: var(--color-accent); margin-bottom: 0.5rem; margin-top: 0;">Château de la Couronne</h3>
            <p style="opacity: 0.8; font-size: 1.1rem; margin-bottom: 1.5rem; font-style: italic;">Marthon, France</p>
            <div class="divider-small" style="margin: 0 0 1.5rem 0;"></div>
            
            <p style="line-height: 1.9; font-size: 1.05rem; opacity: 0.9; margin-bottom: 1.5rem;">
              We are thrilled to host our wedding weekend at the enchanting Château de la Couronne. 
              Nestled in the picturesque French countryside, this stunning 16th-century private estate blends timeless historic architecture with luxurious modern design.
            </p>
            <p style="line-height: 1.9; font-size: 1.05rem; opacity: 0.9; margin-bottom: 2rem;">
              The château is surrounded by private rolling lawns, a walled garden, and a heated swimming pool. Inside, you'll find large stylish salons, billiards, and boutique suites where all of our guests will be staying.
            </p>
            <a href="https://chateaudelacouronne.com" target="_blank" class="btn" style="display: inline-block;">Visit Official Website</a>
          </div>
        </div>
      </div>
    </section>
  `,

  'dress-code': `
    <section class="page-section">
      <h2 class="page-title">Dress Code</h2>
      <div class="divider"></div>
      <p style="max-width:600px;margin:0 auto 2.5rem;line-height:1.8;">
        We want everyone to feel comfortable and look their best throughout the celebration! Check out our Pinterest mood boards below for inspiration on attire, colors, and vibes for each event.
      </p>
      
      <!-- Welcome Dinner Section -->
      <div style="margin-bottom: 4rem;">
        <h3 style="font-size: 1.8rem; color: var(--color-text); margin-bottom: 0.5rem;">Welcome Dinner</h3>
        <p style="color: var(--color-accent); font-style: italic; margin-bottom: 2rem;">Casual &amp; Comfortable</p>
        
        <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem;">
          <!-- Women's Welcome Dinner Board -->
          <div style="flex: 1 1 300px; max-width: 400px; text-align: center;">
            <h4 style="color: var(--color-accent); margin-bottom: 1rem; font-size: 1.2rem;">Women's Welcome Dinner</h4>
            <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="280" data-pin-scale-width="115" href="https://www.pinterest.com/joiiewang/welcome-dinner-guests/"></a>
          </div>
          
          <!-- Men's Welcome Dinner Board -->
          <div style="flex: 1 1 300px; max-width: 400px; text-align: center;">
            <h4 style="color: var(--color-accent); margin-bottom: 1rem; font-size: 1.2rem;">Men's Welcome Dinner</h4>
            <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="280" data-pin-scale-width="115" href="https://www.pinterest.com/joiiewang/mens-welcome-dinner/"></a>
          </div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <!-- Wedding Day Section -->
      <div style="margin-top: 3rem;">
        <h3 style="font-size: 1.8rem; color: var(--color-text); margin-bottom: 0.5rem;">Wedding Day</h3>
        <p style="color: var(--color-accent); font-style: italic; margin-bottom: 2rem;">Semi-Formal / Cocktail Attire</p>
        
        <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
          <!-- Women's Wedding Day Board -->
          <div style="flex: 1 1 300px; max-width: 400px; text-align: center;">
            <h4 style="color: var(--color-accent); margin-bottom: 1rem; font-size: 1.2rem;">Women's Wedding Day</h4>
            <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="280" data-pin-scale-width="115" href="https://www.pinterest.com/joiiewang/wedding-guests/"></a>
          </div>
          
          <!-- Men's Wedding Day Board -->
          <div style="flex: 1 1 300px; max-width: 400px; text-align: center;">
            <h4 style="color: var(--color-accent); margin-bottom: 1rem; font-size: 1.2rem;">Men's Wedding Day</h4>
            <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="280" data-pin-scale-width="115" href="https://www.pinterest.com/julianw0132/mens-wedding-outfits/"></a>
          </div>
        </div>
        
        <div class="divider-small"></div>
        <div style="max-width:500px;margin:1.5rem auto;text-align:left;">
          <p><strong style="color:var(--color-accent)">For her:</strong> Cocktail dresses, jumpsuits, or dressy separates. Floor-length gowns are welcome too.</p>
          <p><strong style="color:var(--color-accent)">For him:</strong> Suit and tie, or dress shirt with slacks. No need for a full tuxedo.</p>
        </div>
        <p style="font-style:italic;opacity:0.8;">Please avoid wearing white or ivory.</p>
      </div>
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
      
      <div class="travel-layout" style="display: flex; gap: 3.5rem; justify-content: center; flex-wrap: wrap; text-align: left; margin-top: 2rem;">
        <!-- Left Column: Getting There -->
        <div style="flex: 1 1 450px; max-width: 600px;">
          <h3 style="color: var(--color-accent); border-bottom: 1px solid rgba(236, 233, 213, 0.1); padding-bottom: 0.5rem; margin-bottom: 1.5rem; font-size: 1.4rem;">Getting There</h3>
          
          <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--color-text);">By Train 🚆</h4>
          <p style="line-height:1.8; margin-bottom: 2rem; opacity: 0.9;">
            The closest major train station is <strong>Angoulême TGV Station</strong>, located about a 25-minute drive from the château. 
            There are direct high-speed TGV trains from Paris (Gare Montparnasse) to Angoulême that take approximately <strong>1 hour and 45 minutes</strong>. 
            From the station, you can easily take a taxi or rent a car to reach the venue.
          </p>
          
          <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--color-text);">By Air ✈️</h4>
          <p style="line-height:1.8; margin-bottom: 0.75rem; opacity: 0.9;">
            If you are flying in, several regional airports are within easy driving distance:
          </p>
          <ul style="line-height:2; list-style-type:none; padding-left:0; opacity:0.9; margin-bottom: 1.5rem;">
            <li>• <strong>Limoges Airport (LIG):</strong> ~1 hour drive</li>
            <li>• <strong>Poitiers Airport (PIS):</strong> ~1 hour drive</li>
            <li>• <strong>Bergerac Airport (EGC):</strong> ~1 hour 30 min drive</li>
            <li>• <strong>Bordeaux Airport (BOD):</strong> ~1 hour 45 min drive</li>
          </ul>
          <p style="line-height:1.8; font-style: italic; opacity:0.85; border-left: 2px solid var(--color-accent); padding-left: 1rem; color: var(--color-accent);">
            We recommend renting a car at the airport or train station for the easiest travel around the beautiful Charente countryside!
          </p>
        </div>

        <!-- Right Column: Venue Address & Accommodations -->
        <div style="flex: 1 1 450px; max-width: 600px;">
          <h3 style="color: var(--color-accent); border-bottom: 1px solid rgba(236, 233, 213, 0.1); padding-bottom: 0.5rem; margin-bottom: 1.5rem; font-size: 1.4rem;">Venue &amp; Stay</h3>
          
          <div style="margin-bottom: 3rem;">
            <h4 style="margin-bottom: 0.3rem; font-size: 1.1rem; color: var(--color-text);">Château de la Couronne</h4>
            <p style="margin-bottom: 0.5rem; opacity: 0.9;">16380 Marthon, France</p>
            <p style="font-size:0.85rem; opacity:0.8; font-style:italic; margin-bottom:1.25rem; color:#bdc786;">
              ⚠️ Please ensure your GPS is set to Marthon (16380), as there is another town named "La Couronne" nearby!
            </p>
            <a href="https://maps.google.com/?q=Chateau+de+la+Couronne+16380+Marthon+France" target="_blank" class="btn" style="display:inline-block;">Open in Google Maps</a>
          </div>

          <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--color-text);">Accommodations 🏨</h4>
          <p style="line-height:1.8; opacity: 0.9;">
            We are thrilled to share that <strong>we are hosting everyone on-site</strong> at Château de la Couronne! 
            You do not need to book a separate hotel. We will be reaching out directly with details regarding your room assignment and stay at the estate.
          </p>
        </div>
      </div>
    </section>
  `,

  registry: `
    <section class="page-section">
      <h2 class="page-title">Registry</h2>
      <div class="divider"></div>
      <p style="max-width:600px;margin:0 auto;line-height:1.8;">
        Your presence is the only present we need. However, if you'd like to give a gift, we've registered at the following places:
      </p>
      
      <div class="registry-container">
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
      </div>
    </section>
  `,
};

// Global scroll event listener reference
let scrollListener = null;

// Router
// Router
function navigate(page) {
  const app = document.getElementById('app');
  app.innerHTML = pages[page] || pages.home;

  // Trigger fade-in animation
  app.classList.remove('fade-in');
  void app.offsetWidth; // Force layout recalculation to reset CSS animation
  app.classList.add('fade-in');

  // Clean up scroll listeners to prevent duplication
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener);
    scrollListener = null;
  }

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Re-attach event listeners / initialize components for dynamic pages
  if (page === 'music-requests') initMusicForm();
  if (page === 'faq') initFAQ();
  if (page === 'venue') initVenueScrollStory();
  if (page === 'home') initHomeCollageScroll();

  // Re-render Pinterest widgets if embedded boards are present
  if (page === 'dress-code' || page === 'schedule') {
    const renderPins = () => {
      if (window.PinUtils && window.PinUtils.build) {
        window.PinUtils.build();
      } else if (!document.getElementById('pinterest-js')) {
        const script = document.createElement('script');
        script.id = 'pinterest-js';
        script.src = 'https://assets.pinterest.com/js/pinit.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };
    renderPins();
    setTimeout(renderPins, 500);
    setTimeout(renderPins, 1500);
    setTimeout(renderPins, 3000);
  }

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
        mode: 'no-cors',
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

// Dynamic sticky split panel logic on scroll
// Dynamic scroll-driven image morphing and storytelling logic (Apple style)
function initVenueScrollStory() {
  const track = document.querySelector('.venue-interactive-track');
  const viewport = document.querySelector('.venue-sticky-viewport');
  const imgWrapper = document.querySelector('.venue-image-panel');
  const textWrapper = document.querySelector('.venue-text-panel');
  if (!track || !viewport || !imgWrapper || !textWrapper) return;

  const handleScroll = () => {
    // Disable interactive scroll story on mobile viewports for clean usability
    if (window.innerWidth <= 900) {
      imgWrapper.style.transform = '';
      imgWrapper.style.width = '';
      imgWrapper.style.height = '';
      textWrapper.style.opacity = '';
      textWrapper.style.transform = '';
      return;
    }

    const rect = track.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    // Calculate progress ratio (0 to 1) of scrolling through the track
    const startY = 90; // Top navigation bar height offset
    const totalDuration = rect.height - (viewHeight - startY);
    const elapsed = -rect.top + startY;

    let ratio = elapsed / totalDuration;
    ratio = Math.max(0, Math.min(1, ratio));

    // 1. Image Morphing (from 0.0 to 0.45 scroll progress)
    let imgProgress = ratio / 0.45;
    imgProgress = Math.max(0, Math.min(1, imgProgress));

    // Width morphs from 90% to 35%
    const imgWidth = 90 - (imgProgress * 55);
    // Height morphs from 75vh to 60vh
    const imgHeight = 75 - (imgProgress * 15);
    // Slide left viewport coordinate translation (further left for larger gap)
    const imgTranslateX = imgProgress * -26;

    imgWrapper.style.width = `${imgWidth}%`;
    imgWrapper.style.height = `${imgHeight}vh`;
    imgWrapper.style.transform = `translate3d(${imgTranslateX}vw, 0, 0)`;

    // 2. Text storytelling fade & slide in (from 0.35 to 0.8 scroll progress)
    if (ratio > 0.35) {
      let textProgress = (ratio - 0.35) / 0.45;
      textProgress = Math.max(0, Math.min(1, textProgress));

      textWrapper.style.opacity = textProgress;
      textWrapper.style.visibility = 'visible';
      
      const textTranslateY = (1 - textProgress) * 40; // Slide up offset
      const textTranslateX = 18 * textProgress; // Slide right offset (further right for larger gap)
      textWrapper.style.transform = `translate3d(${textTranslateX}vw, ${textTranslateY}px, 0)`;
    } else {
      textWrapper.style.opacity = 0;
      textWrapper.style.visibility = 'hidden';
      textWrapper.style.transform = 'translate3d(0, 40px, 0)';
    }
  };

  // Bind scroll event listener
  scrollListener = handleScroll;
  window.addEventListener('scroll', scrollListener);
  // Trigger once initially to position layouts on load
  handleScroll();
}

// Dynamic scroll-driven home collage organic rotation & floating stagger (Tornado Helix layout)
function initHomeCollageScroll() {
  const track = document.querySelector('.tornado-track');
  const cards = document.querySelectorAll('.tornado-card');
  if (!track || cards.length === 0) return;

  const handleCollageScroll = () => {
    // Disable scrolling movement on mobile viewports
    if (window.innerWidth <= 900) {
      cards.forEach(card => {
        card.style.transform = '';
        card.style.opacity = '';
        card.style.zIndex = '';
        card.style.borderColor = '';
      });
      return;
    }

    const rect = track.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    const startY = 90; // Top navigation bar height offset
    const totalDuration = rect.height - (viewHeight - startY);
    const elapsed = -rect.top + startY;

    let ratio = elapsed / totalDuration;
    ratio = Math.max(0, Math.min(1, ratio)); // 0 to 1

    // Map scroll ratio to 1.5 full rotations (540 degrees of spin)
    const globalRotation = ratio * 540;

    // 3D Orbit size parameters
    const radiusX = window.innerWidth * 0.18; // Horizontal orbit spread (18% of screen width)
    const radiusZ = 280; // Depth perspective radius
    
    cards.forEach((card, i) => {
      // base angle separation (90 degrees between each card in orbit)
      const baseAngle = i * 90;
      const currentAngle = globalRotation + baseAngle;
      const rad = currentAngle * Math.PI / 180;

      // Calculate Trig circular coordinates
      const x = Math.sin(rad) * radiusX;
      const z = Math.cos(rad) * radiusZ;
      
      // Vertical helix layout (stagger cards to form vertical tornado shape)
      const baseY = (i - 1.5) * 80;
      const yOffset = baseY + (ratio * 60 - 30); // Dynamic vertical drift as it spins

      // Compute scale & opacity based on Z depth position
      // z is positive when closer to screen (front stage)
      const normalizedZ = z / radiusZ; // Range: -1 to 1
      const scale = 0.75 + (normalizedZ + 1) * 0.15; // Range: 0.75 to 1.05
      const opacity = 0.25 + (normalizedZ + 1) * 0.375; // Range: 0.25 to 1.0
      
      // Compute zIndex dynamically to draw foreground elements over background
      const zIndex = Math.round((normalizedZ + 1) * 200);

      // Apply 3D coordinate transform
      card.style.transform = `translate3d(${x}px, ${yOffset}px, ${z}px) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;

      // Add a border highlight if the card is in foreground (center stage)
      if (normalizedZ > 0.82) {
        card.style.borderColor = 'var(--color-accent)';
      } else {
        card.style.borderColor = 'rgba(236, 233, 213, 0.08)';
      }
    });
  };

  // Bind the scroll event listener
  scrollListener = handleCollageScroll;
  window.addEventListener('scroll', scrollListener);
  // Trigger once initially
  handleCollageScroll();
}

// Navigation click handlers
document.querySelectorAll('.nav-link, .nav-logo-link').forEach((link) => {
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
