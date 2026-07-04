function setupMenuHeader() {
  const topbar = document.getElementById('topbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('nav-open');
    });
  }

  window.addEventListener('scroll', () => {
    if (topbar) {
      topbar.classList.toggle('topbar-scrolled', window.scrollY > 20);
    }
  });

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (navLinks) navLinks.classList.remove('nav-open');
          if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
}

function setupBuildSequence() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector('#build-sequence');
  const video = section?.querySelector('#buildVideo');
  const blocks = section?.querySelectorAll('.build-text-block');

  if (!section || !video || !blocks?.length) {
    return;
  }

  const safeDuration = () => Math.max(video.duration || 1, 1);
  const state = { progress: 0 };

  const syncVideoFrame = () => {
    const duration = safeDuration();
    const targetTime = duration * (1 - state.progress);
    if (Math.abs(video.currentTime - targetTime) > 0.04) {
      video.currentTime = targetTime;
    }
  };

  const buildTimeline = gsap.timeline({
    scrollTrigger: {
      id: 'buildSequence',
      trigger: section,
      start: 'center center',
      end: '+=2600',
      scrub: 0.8,
      pin: true,
      anticipatePin: 1,
      onRefresh: (self) => {
        state.progress = self.progress;
        syncVideoFrame();
      },
      onLeave: () => {
        state.progress = 1;
        syncVideoFrame();
      },
      onLeaveBack: () => {
        state.progress = 0;
        syncVideoFrame();
      }
    }
  });

  buildTimeline
    .to(state, { progress: 1, duration: 1, ease: 'none', onUpdate: syncVideoFrame }, 0)
    .fromTo(blocks[0], { autoAlpha: 0, x: -80 }, { autoAlpha: 1, x: 0, duration: 0.6 }, 0)
    .to(blocks[0], { autoAlpha: 0, x: 40, duration: 0.5 }, 0.3)
    .fromTo(blocks[1], { autoAlpha: 0, x: 80 }, { autoAlpha: 1, x: 0, duration: 0.6 }, 0.45)
    .to(blocks[1], { autoAlpha: 0, x: -40, duration: 0.5 }, 0.75)
    .fromTo(blocks[2], { autoAlpha: 0, x: -80 }, { autoAlpha: 1, x: 0, duration: 0.6 }, 0.85)
    .to(blocks[2], { autoAlpha: 0, x: 40, duration: 0.45 }, 1.2);

  video.addEventListener('loadedmetadata', () => {
    const duration = safeDuration();
    video.currentTime = duration;
    state.progress = 0;
    ScrollTrigger.refresh();
  });

  const refreshBuildSequence = () => {
    const buildTrigger = ScrollTrigger.getById('buildSequence');
    if (buildTrigger) {
      buildTrigger.refresh();
      state.progress = buildTrigger.progress;
      syncVideoFrame();
    }
  };

  window.addEventListener('load', refreshBuildSequence);
  window.addEventListener('pageshow', refreshBuildSequence);
}

function init() {
  setupMenuHeader();
  setupBuildSequence();
}

init();
