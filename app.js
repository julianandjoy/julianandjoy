// === Wedding Website - Single Page App (no build tools needed) ===

// Replace this with your actual Google Apps Script deployment URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVMnyNSJWTsgnSEQq-kRukBPLiTDwVKjI7kOIOHCE-G9SDzm0VLr8nyOYt-XOVUE6O/exec';

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
      <p class="hero-date">May 22, 2027</p>
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
      
      <h3 class="day-title" style="margin-top: 2rem; margin-bottom: 1.5rem; font-weight: 400;">Day 1 (5/21)</h3>
      
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
          <strong style="color: var(--color-accent);">Dress Code:</strong> Casual &amp; Comfortable — <a href="#dress-code" style="text-decoration: underline;">View attire guidelines &amp; mood boards</a>
        </p>
      </div>
      
      <div class="divider-small"></div>
      
      <h3 class="day-title" style="margin-top: 2rem; margin-bottom: 1.5rem; font-weight: 400;">Day 2 (5/22)</h3>
      
      <div class="event-card">
        <h3>Brunch</h3>
        <p class="event-time">Morning</p>
        <p class="event-desc">Enjoy a casual brunch on the property! We’ll have an assortment of options as a buffet.</p>
        <p class="event-desc" style="font-size: 0.9rem; opacity: 0.8;">
          <strong>Dress Code:</strong> Come in whatever you are comfortable in!
        </p>
      </div>
      
      <div class="event-card">
        <h3>Wedding Ceremony</h3>
        <p class="event-time">Afternoon Onwards</p>
        <p class="event-desc">Julian and Joy get married! We make it official with all the people we love as witnesses.</p>
        <p class="event-desc" style="font-size: 0.95rem; margin-top: 0.75rem;">
          <strong style="color: var(--color-accent);">Dress Code:</strong> Semi-Formal / Cocktail Attire — <a href="#dress-code" style="text-decoration: underline;">View attire guidelines &amp; mood boards</a>
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
      
      <div class="divider-small"></div>
      
      <h3 class="day-title" style="margin-top: 2rem; margin-bottom: 1.5rem; font-weight: 400;">Day 3 (5/23)</h3>
      
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
      
      <div class="divider-small"></div>
      
      <h3 class="day-title" style="margin-top: 2rem; margin-bottom: 1.5rem; font-weight: 400;">Day 4 (5/24)</h3>
      
      <div class="event-card">
        <h3>Breakfast &amp; Check Out</h3>
        <p class="event-time">Morning</p>
        <p class="event-desc">Check out!</p>
      </div>
    </section>
  `,

  venue: `
    <section class="page-section">
      <h2 class="page-title">Venue</h2>
      <div class="divider"></div>
      <h3>Château de la Couronne</h3>
      <p style="margin-bottom: 1.5rem; opacity: 0.8;">Marthon, France</p>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
        <div style="flex: 1 1 200px; max-width: 220px; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Cv6g5LBm8Xh-0P9adhm-QomRqCEaLNONemB-4f0sug&s=10" alt="Château Exterior" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
        </div>
        <div style="flex: 1 1 200px; max-width: 220px; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYNpOpRgpT4O96iZRmRGHpcghuZD05sE-xGiYTCWoqQ&s=10" alt="Château Aerial" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
        </div>
        <div style="flex: 1 1 200px; max-width: 220px; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd12C6jHr2Uqo0hhKxntirUjuHP4cN_EbWRzZcLL8niA&s" alt="Château Pool &amp; Garden" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
        </div>
        <div style="flex: 1 1 200px; max-width: 220px; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGjTeeJzw6_yIdqb1oToIvxRMC2ParkdFX46X9Co9ig&s=10" alt="Château Entrance" style="width: 100%; height: 180px; object-fit: cover; display: block;" />
        </div>
      </div>
      
      <div class="divider-small"></div>
      <p style="max-width:600px;margin:0 auto;line-height:1.8;">
        We are thrilled to host our celebration at the enchanting Château de la Couronne! 
        Nestled in the picturesque French countryside, this stunning 16th-century estate features sprawling gardens, luxurious rooms, and endless charm.
      </p>
      <p style="margin-top: 1.5rem;">
        <a href="https://chateaudelacouronne.com" target="_blank" class="btn">Visit Venue Website</a>
      </p>
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
      
      <div class="info-block">
        <div style="text-align:center;margin-bottom:2rem;">
          <h3>Venue Address</h3>
          <p style="font-size:1.2rem;margin-bottom:0.2rem;"><strong>Château de la Couronne</strong></p>
          <p>16380 Marthon, France</p>
          <p style="margin-top:0.5rem;font-size:0.85rem;opacity:0.8;font-style:italic;">
            ⚠️ Please ensure your GPS is set to <strong>Marthon (16380)</strong>, as there is another town called "La Couronne" nearby!
          </p>
          <a href="https://maps.google.com/?q=Chateau+de+la+Couronne+16380+Marthon+France" target="_blank" class="btn" style="margin-top:1rem;display:inline-block;">Open in Google Maps</a>
        </div>
        
        <div class="divider"></div>
        
        <h3>Getting There by Train 🚆</h3>
        <p style="line-height:1.8;">
          The closest major train station is <strong>Angoulême TGV Station</strong>, located about a 25-minute drive from the château. 
          There are direct high-speed TGV trains from Paris (Gare Montparnasse) to Angoulême that take approximately <strong>1 hour and 45 minutes</strong>. 
          From the station, you can easily take a taxi or rent a car to reach the venue.
        </p>
        
        <div class="divider"></div>
        
        <h3>Getting There by Air ✈️</h3>
        <p style="line-height:1.8;margin-bottom:0.5rem;">
          If you are flying in, several regional airports are within easy driving distance:
        </p>
        <ul style="line-height:2;list-style-type:none;padding-left:0.5rem;opacity:0.9;">
          <li>• <strong>Limoges Airport (LIG):</strong> ~1 hour drive</li>
          <li>• <strong>Poitiers Airport (PIS):</strong> ~1 hour drive</li>
          <li>• <strong>Bergerac Airport (EGC):</strong> ~1 hour 30 min drive</li>
          <li>• <strong>Bordeaux Airport (BOD):</strong> ~1 hour 45 min drive</li>
        </ul>
        <p style="line-height:1.8;margin-top:1rem;">
          We recommend renting a car at the airport or train station for the easiest travel around the beautiful Charente countryside!
        </p>
        
        <div class="divider"></div>
        
        <h3>Accommodations 🏨</h3>
        <p style="line-height:1.8;">
          We are thrilled to share that <strong>we are hosting everyone on-site</strong> at Château de la Couronne! 
          You do not need to book a separate hotel. We will be reaching out directly with details regarding your room assignment and stay at the estate.
        </p>
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

  gallery: `
    <section class="page-section">
      <h2 class="page-title">Elopement Gallery</h2>
      <div class="divider"></div>
      <p style="max-width:600px;margin:0 auto 2rem;line-height:1.8;">
        Here are some memories from our intimate elopement! We wanted to share these special moments with you as we prepare for the wedding weekend.
      </p>

      <div class="carousel-container">
        <!-- Slide 1 (Replace src with your actual photo URLs) -->
        <div class="carousel-slide active">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" alt="Elopement Photo 1" />
        </div>
        <!-- Slide 2 -->
        <div class="carousel-slide">
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" alt="Elopement Photo 2" />
        </div>
        <!-- Slide 3 -->
        <div class="carousel-slide">
          <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80" alt="Elopement Photo 3" />
        </div>
        <!-- Slide 4 -->
        <div class="carousel-slide">
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Elopement Photo 4" />
        </div>

        <!-- Arrows -->
        <button class="carousel-btn carousel-prev">&#10094;</button>
        <button class="carousel-btn carousel-next">&#10095;</button>

        <!-- Indicators -->
        <div class="carousel-indicators">
          <span class="carousel-dot active" data-slide="0"></span>
          <span class="carousel-dot" data-slide="1"></span>
          <span class="carousel-dot" data-slide="2"></span>
          <span class="carousel-dot" data-slide="3"></span>
        </div>
      </div>
      <p style="font-style: italic; opacity: 0.6; margin-top: 1rem; font-size: 0.85rem;">
        *Tip: You can easily swap these placeholders with your actual photos inside app.js!
      </p>
    </section>
  `,
};

// Global reference for carousel auto-play
let carouselInterval = null;

// Router
function navigate(page) {
  const app = document.getElementById('app');
  app.innerHTML = pages[page] || pages.home;

  // Trigger fade-in animation
  app.classList.remove('fade-in');
  void app.offsetWidth; // Force layout recalculation to reset CSS animation
  app.classList.add('fade-in');

  // Stop previous carousel rotation if navigating away
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Re-attach event listeners / initialize components for dynamic pages
  if (page === 'music-requests') initMusicForm();
  if (page === 'faq') initFAQ();
  if (page === 'gallery') initCarousel();

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

// Image Carousel Slider
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dots = document.querySelectorAll('.carousel-dot');
  
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  
  function showSlide(index) {
    // Reset index limits
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    // Update slide classes
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    
    // Update indicator dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }
  
  // Event listeners for arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
      resetAutoPlay();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
      resetAutoPlay();
    });
  }
  
  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.getAttribute('data-slide'), 10);
      showSlide(targetIndex);
      resetAutoPlay();
    });
  });
  
  // Auto-play setup
  function startAutoPlay() {
    carouselInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4000); // Change photo every 4 seconds
  }
  
  function resetAutoPlay() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      startAutoPlay();
    }
  }
  
  // Start auto-play initially
  startAutoPlay();
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
