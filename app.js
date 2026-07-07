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
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-19_websize.jpg" alt="Elopement 1" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-20_websize.jpg" alt="Elopement 2" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-22_websize.jpg" alt="Elopement 3" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-51_websize.jpg" alt="Elopement 4" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-95_websize.jpg" alt="Elopement 5" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-106_websize.jpg" alt="Elopement 6" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-111_websize.jpg" alt="Elopement 7" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-128_websize.jpg" alt="Elopement 8" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-132_websize.jpg" alt="Elopement 9" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-133_websize.jpg" alt="Elopement 10" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-141_websize.jpg" alt="Elopement 11" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-147_websize.jpg" alt="Elopement 12" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-157_websize.jpg" alt="Elopement 13" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-158_websize.jpg" alt="Elopement 14" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-163_websize.jpg" alt="Elopement 15" /></div>
          <div class="tornado-card"><img src="images/elopement_images/joyjulian-164_websize.jpg" alt="Elopement 16" /></div>
        </div>
        <div class="tornado-hint">Scroll down to swirl memories &darr;</div>
      </div>
    </div>
  `,

  schedule: `
    <section class="page-section">
      <h2 class="page-title">Schedule of Events</h2>
      <div class="divider"></div>
      
      <!-- Chronological Interactive Timeline -->
      <div class="timeline-wrapper">
        <div class="timeline-line">
          <div class="timeline-progress-bar"></div>
        </div>

        <!-- Day 1 Segment -->
        <div class="timeline-day-header">Day 1 — Friday, May 21</div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">16:00</div>
          <div class="timeline-content">
            <h3>Check In</h3>
            <p>Welcome to Château de la Couronne! Settle in, explore the estate, and make yourself comfortable.</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">18:00</div>
          <div class="timeline-content">
            <h3>Welcome Dinner</h3>
            <p>Join us for dinner to kick off the celebration weekend! We’ll have welcome drinks, bites, and pizzas!</p>
            <p class="timeline-dress-code"><strong>Dress Code:</strong> Casual &amp; Comfortable — <a href="#dress-code">View attire mood boards</a></p>
          </div>
        </div>

        <!-- Day 2 Segment -->
        <div class="timeline-day-header">Day 2 — Saturday, May 22</div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Morning</div>
          <div class="timeline-content">
            <h3>Brunch</h3>
            <p>Enjoy a casual buffet brunch on the château lawns. An assortment of local French pastries and hot breakfast options will be served.</p>
            <p class="timeline-dress-code"><strong>Dress Code:</strong> Come in whatever you are most comfortable in!</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Afternoon</div>
          <div class="timeline-content">
            <h3>Wedding Ceremony</h3>
            <p>Julian and Joy get married! We make it official with our closest family and friends as witnesses.</p>
            <p class="timeline-dress-code"><strong>Dress Code:</strong> Semi-Formal / Cocktail Attire — <a href="#dress-code">View attire mood boards</a></p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Afternoon</div>
          <div class="timeline-content">
            <h3>Cocktail Hour</h3>
            <p>Raise a glass with us! There will be cocktails, wine, seasonal hors d'oeuvres, and live acoustic music on the terrace.</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Evening</div>
          <div class="timeline-content">
            <h3>Seated Dinner</h3>
            <p>Join us in the grand dining room for a multi-course dinner celebrating local French gastronomy.</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Late Night</div>
          <div class="timeline-content">
            <h3>Late Night Dancing</h3>
            <p>Time to hit the dance floor! We have a live DJ, late-night snacks, and drinks until the early morning hours.</p>
          </div>
        </div>

        <!-- Day 3 Segment -->
        <div class="timeline-day-header">Day 3 — Sunday, May 23</div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Morning</div>
          <div class="timeline-content">
            <h3>Breakfast</h3>
            <p>Nothing cures a hangover better than a hearty French breakfast (and maybe some fresh hot coffee).</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Afternoon</div>
          <div class="timeline-content">
            <h3>Pool Party</h3>
            <p>Relax and recover by the heated swimming pool! We'll have a casual outdoor BBQ, garden lawn games, and drinks.</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Evening</div>
          <div class="timeline-content">
            <h3>Game Night</h3>
            <p>Gather around for a casual, fun night of games and drinks. We’ll set up Mahjong tables, card games, and poker tables!</p>
          </div>
        </div>

        <!-- Day 4 Segment -->
        <div class="timeline-day-header">Day 4 — Monday, May 24</div>

        <div class="timeline-item">
          <div class="timeline-marker"><div class="timeline-dot"></div></div>
          <div class="timeline-time">Morning</div>
          <div class="timeline-content">
            <h3>Farewell Breakfast &amp; Check Out</h3>
            <p>One last breakfast together before bidding farewell and checking out. Thank you for joining us for our special weekend!</p>
          </div>
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
            <img src="images/Gemini_Generated_Image_6ox6av6ox6av6ox6.jpeg" alt="Château de la Couronne" />
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
  if (page === 'schedule') initScheduleTimeline();
  if (page === 'venue') {
    if (window.innerWidth > 900) initVenueScrollStory();
    else initMobileScrollAnimation();
  }
  if (page === 'home') {
    if (window.innerWidth > 900) initHomeCollageScroll();
    else initMobileScrollAnimation();
  }

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
    const startY = 90; // Top navigation bar height offset

    // Start morphing after scrolling past 120px (scroll buffer threshold)
    // and complete the transition over the next 320px of scroll.
    const scrollY = window.scrollY;
    const startThreshold = 120;
    const morphDuration = 320;
    
    let ratio = 0;
    if (scrollY > startThreshold) {
      ratio = (scrollY - startThreshold) / morphDuration;
      ratio = Math.max(0, Math.min(1, ratio)); // Clamp between 0 and 1
    }

    // 1. Image Morphing (spans the entire entry timeline)
    const imgProgress = ratio;

    // Width morphs from 92% (most of screen) to 35%
    const imgWidth = 92 - (imgProgress * 57);
    // Height morphs from 80vh (most of screen) to 60vh
    const imgHeight = 80 - (imgProgress * 20);
    // Slide left viewport coordinate translation (further left for larger gap)
    const imgTranslateX = imgProgress * -26;

    imgWrapper.style.width = `${imgWidth}%`;
    imgWrapper.style.height = `${imgHeight}vh`;
    imgWrapper.style.transform = `translate3d(${imgTranslateX}vw, 0, 0)`;

    // 2. Text storytelling fade & slide in (triggers past 30% of entry scroll progress)
    if (ratio > 0.3) {
      let textProgress = (ratio - 0.3) / 0.7;
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

    // Start tracking scroll ratio (0 to 1) from entry bottom to exit top
    const totalHeight = viewHeight + rect.height;
    const scrolled = viewHeight - rect.top;

    let ratio = scrolled / totalHeight;
    ratio = Math.max(0, Math.min(1, ratio)); // 0 to 1

    const totalCards = cards.length;
    const verticalGap = 165; // Spacing gap between cards vertically

    cards.forEach((card, i) => {
      // Deterministic pseudo-random offsets for each card index (stateless & fluid)
      const r1 = Math.sin(i * 12.9898) * 43758.5453;
      const randX = r1 - Math.floor(r1);

      const r2 = Math.sin(i * 78.233) * 43758.5453;
      const randZ = r2 - Math.floor(r2);

      const r3 = Math.sin(i * 37.719) * 43758.5453;
      const randTilt = r3 - Math.floor(r3);

      // Horizontal scatter (flying all over the place)
      const x = (randX - 0.5) * 550; // Spreads from -275px to +275px
      // Depth scatter (parallax depth layers)
      const z = (randZ - 0.5) * 320; // Spreads depth from -160px to +160px
      // Chaotic Z-axis tilts
      const tilt = (randTilt - 0.5) * 36; // Staggers tilts from -18deg to +18deg

      // Vertical position relative to screen center
      const baseY = (i - (totalCards / 2)) * verticalGap;
      // Shift entire layout up as we scroll (starts offset +380px down on load so top images fade in)
      const yOffset = baseY - (ratio * totalCards * verticalGap) + ((totalCards * verticalGap) / 2) + (1 - ratio) * 380;

      // Focus spotlight trigger: cards fade and scale in as they cross center screen
      const isFocused = Math.abs(yOffset) < 180;
      const normalizedZ = z / 160; // -1 to 1 depth mapping

      let scale, opacity;
      if (isFocused) {
        // Focus weight factor (0 to 1) based on center screen proximity
        const focusWeight = 1 - (Math.abs(yOffset) / 180);
        scale = 0.95 + focusWeight * 0.1; // Scales up to 1.05x
        opacity = 0.8 + focusWeight * 0.2; // Brightens up to 1.0
        card.style.borderColor = `rgba(236, 233, 213, ${0.15 + focusWeight * 0.85})`;
        card.style.boxShadow = `0 ${12 + focusWeight * 18}px ${30 + focusWeight * 20}px rgba(0, 0, 0, ${0.25 + focusWeight * 0.15})`;
      } else {
        // Blur / fade out in background orbit (keeps cards visible in background heap)
        scale = 0.72 + (normalizedZ + 1) * 0.1; // Range: 0.72x to 0.92x
        opacity = 0.25 + (normalizedZ + 1) * 0.2; // Range: 0.25 to 0.65
        card.style.borderColor = 'rgba(236, 233, 213, 0.08)';
        card.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
      }

      // Compute zIndex dynamically to draw foreground elements over background
      const zIndex = Math.round((normalizedZ + 1) * 200);

      // Apply 3D coordinate transform with organic Z-rotation
      card.style.transform = `translate3d(${x}px, ${yOffset}px, ${z}px) scale(${scale}) rotate(${tilt}deg)`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
    });
  };

  // Bind the scroll event listener
  scrollListener = handleCollageScroll;
  window.addEventListener('scroll', scrollListener);
  // Trigger once initially
  handleCollageScroll();
}

// Dynamic mobile scroll-driven focus/reveal (fade & scale in center of screen)
function initMobileScrollAnimation() {
  if (window.innerWidth > 900) return;

  const elements = document.querySelectorAll('.tornado-card, .venue-image-panel, .venue-text-panel');
  if (elements.length === 0) return;

  const handleMobileScroll = () => {
    const viewHeight = window.innerHeight;
    const center = viewHeight / 2;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;

      // Distance of element center from the center of the mobile screen
      const distance = Math.abs(elementCenter - center);
      const maxDistance = viewHeight * 0.48; // Trigger radius

      if (distance < maxDistance) {
        // Linear ratio to ease (0 to 1)
        const ratio = 1 - (distance / maxDistance);
        const ease = Math.sin(ratio * Math.PI / 2); // Smooth trig ease-out curves

        el.style.opacity = 0.35 + ease * 0.65; // Focus scales from 35% opacity to 100% opacity
        el.style.transform = `scale(${0.9 + ease * 0.1})`; // Focus scales from 0.9x to 1.0x size
      } else {
        el.style.opacity = 0.35;
        el.style.transform = 'scale(0.9)';
      }
    });
  };

  // Bind the scroll event listener
  scrollListener = handleMobileScroll;
  window.addEventListener('scroll', scrollListener);
  // Trigger once initially to position current layout correctly on load
  handleMobileScroll();
}

// Dynamic scroll-drawn chronological timeline tracking controller
function initScheduleTimeline() {
  const wrapper = document.querySelector('.timeline-wrapper');
  const progressBar = document.querySelector('.timeline-progress-bar');
  const items = document.querySelectorAll('.timeline-item');
  if (!wrapper || !progressBar) return;

  const handleTimelineScroll = () => {
    const rect = wrapper.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    // Progress bar starts filling when top of timeline reaches middle of viewport
    const startScroll = viewHeight / 2;
    const totalHeight = rect.height;
    const elapsed = startScroll - rect.top;

    let ratio = elapsed / totalHeight;
    ratio = Math.max(0, Math.min(1, ratio)); // Clamp between 0 and 1

    progressBar.style.transform = `scaleY(${ratio})`;

    // Light up and reveal items as timeline progress matches their depth coordinate
    items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      const itemMid = itemRect.top + itemRect.height / 2;

      if (itemMid < startScroll) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  // Bind the scroll event listener
  scrollListener = handleTimelineScroll;
  window.addEventListener('scroll', scrollListener);
  // Trigger once initially
  handleTimelineScroll();
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
