<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import portraitUrl from "../photo.jpg";

const { locale, t, tm } = useI18n();
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const selectedImpact = ref(null);
const copiedMessage = ref("");
const emailAddress = "manxuan@gmail.com";

const navItems = computed(() => [
  ["profile", t("nav.profile")],
  ["skills", t("nav.skills")],
  ["experience", t("nav.experience")],
  ["projects", t("nav.projects")],
]);

const setLocale = (nextLocale) => {
  locale.value = nextLocale;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleEmailAction = async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    copiedMessage.value = t("contact.copied");
  } catch {
    copiedMessage.value = t("contact.copyFallback");
  }

  window.setTimeout(() => {
    copiedMessage.value = "";
  }, 2600);
};

const openImpact = (impact) => {
  selectedImpact.value = impact;
};

const closeImpact = () => {
  selectedImpact.value = null;
};

const onScroll = () => {
  isScrolled.value = window.scrollY > 12;
};

const onKeydown = (event) => {
  if (event.key === "Escape") closeImpact();
};

watch(
  locale,
  (nextLocale) => {
    localStorage.setItem("portfolio-locale", nextLocale);
    document.documentElement.lang = nextLocale === "en" ? "en" : "zh-Hant";
    closeMenu();
  },
  { immediate: true },
);

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <a class="brand" href="#top" aria-label="Back to top" @click="closeMenu">
      <img class="brand-avatar" :src="portraitUrl" alt="Mandy Lin" />
      <span>Mandy Lin</span>
    </a>

    <nav class="site-nav" :class="{ open: isMenuOpen }" aria-label="Main navigation">
      <a v-for="[id, label] in navItems" :key="id" :href="`#${id}`" @click="closeMenu">
        {{ label }}
      </a>
    </nav>

    <div class="header-actions">
      <div class="language-toggle" aria-label="Language switcher">
        <button type="button" :class="{ active: locale === 'zh' }" @click="setLocale('zh')">中文</button>
        <button type="button" :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
      </div>
      <button
        class="nav-toggle"
        type="button"
        aria-label="Open menu"
        :aria-expanded="String(isMenuOpen)"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <aside class="profile-card" aria-label="Contact information">
        <img :src="portraitUrl" alt="Mandy Lin portrait" />
        <div class="profile-meta">
          <h2>{{ t("contact.title") }}</h2>
          <p>{{ t("contact.role") }}</p>
        </div>
        <div class="contact-panel">
          <dl class="contact-list">
            <div>
              <dt>{{ t("contact.email") }}</dt>
              <dd>
                <button class="email-copy" type="button" @click="handleEmailAction">
                  {{ emailAddress }}
                </button>
                <span v-if="copiedMessage" class="copy-status">{{ copiedMessage }}</span>
              </dd>
            </div>
            <div>
              <dt>{{ t("contact.phone") }}</dt>
              <dd><a href="tel:0978612527">0978-612-527</a></dd>
            </div>
            <div>
              <dt>{{ t("contact.location") }}</dt>
              <dd>{{ t("contact.locationValue") }}</dd>
            </div>
            <div>
              <dt>{{ t("contact.gender") }}</dt>
              <dd>{{ t("contact.genderValue") }}</dd>
            </div>
            <div>
              <dt>{{ t("contact.education") }}</dt>
              <dd>{{ t("contact.educationValue") }}</dd>
            </div>
          </dl>
        </div>
      </aside>

      <div class="hero-main">
        <h1>{{ t("hero.name") }}</h1>
        <p class="hero-lead">{{ t("hero.lead") }}</p>
        <p class="hero-summary">{{ t("hero.summary1") }}</p>
        <p class="hero-summary">{{ t("hero.summary2") }}</p>

        <div class="impact-list" aria-label="Impact highlights">
          <button v-for="item in tm('impact')" :key="item.value" type="button" @click="openImpact(item)">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </button>
        </div>
      </div>
    </section>

    <section class="section-shell profile-section" id="profile">
      <div class="section-heading">
        <h2>{{ t("profile.title") }}</h2>
      </div>
      <div class="profile-layout">
        <div class="statement">
          <p v-for="paragraph in tm('profile.paragraphs')" :key="paragraph">{{ paragraph }}</p>
        </div>
        <div class="focus-list">
          <article v-for="focus in tm('profile.focus')" :key="focus[0]">
            <span>{{ focus[0] }}</span>
            <h3>{{ focus[1] }}</h3>
            <p>{{ focus[2] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-band" id="skills">
      <div class="section-shell">
        <div class="section-heading compact">
          <h2>{{ t("skillsTitle") }}</h2>
        </div>
        <div class="skill-grid">
          <article v-for="skill in tm('skills')" :key="skill[0]">
            <h3>{{ skill[0] }}</h3>
            <p>{{ skill[1] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-shell" id="experience">
      <div class="section-heading compact">
        <h2>{{ t("experienceTitle") }}</h2>
      </div>
      <div class="timeline">
        <article v-for="item in tm('experience')" :key="item.date" class="timeline-item">
          <div class="timeline-date">{{ item.date }}</div>
          <div>
            <h3>{{ item.role }}</h3>
            <p>{{ item.body }}</p>
            <p v-if="item.clients" class="client-line">{{ item.clients }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section-band" id="projects">
      <div class="section-shell">
        <div class="section-heading compact">
          <h2>{{ t("projectsTitle") }}</h2>
        </div>

        <div class="project-list">
          <article v-for="project in tm('projects')" :key="project.title" class="project-card">
            <div class="project-head">
              <div>
                <p class="project-kicker">{{ project.kicker }}</p>
                <h3>{{ project.title }}</h3>
                <p class="project-subtitle">{{ project.subtitle }}</p>
              </div>
              <span class="project-result">{{ project.result }}</span>
            </div>
            <p class="project-summary">{{ project.summary }}</p>
            <div class="project-columns" :class="{ three: project.columns.length === 3 }">
              <div v-for="column in project.columns" :key="column.title">
                <h4>{{ column.title }}</h4>
                <ul>
                  <li v-for="item in column.items" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <Teleport to="body">
    <div v-if="selectedImpact" class="modal-backdrop" @click.self="closeImpact">
      <section class="impact-modal" role="dialog" aria-modal="true" :aria-label="selectedImpact.title">
        <button class="modal-close" type="button" aria-label="Close" @click="closeImpact">×</button>
        <p class="modal-value">{{ selectedImpact.value }}</p>
        <h2>{{ selectedImpact.title }}</h2>
        <p>{{ selectedImpact.description }}</p>
        <ul>
          <li v-for="detail in selectedImpact.details" :key="detail">{{ detail }}</li>
        </ul>
      </section>
    </div>
  </Teleport>

  <footer class="site-footer">
    <span>林蔓萱 Mandy Lin｜Product Manager</span>
  </footer>
</template>
