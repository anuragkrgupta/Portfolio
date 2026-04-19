(function() {
    // Creative Works: Vision & E-Votify (Original content preserved, only layout changed to diagonal)
    const projects = [
      {
        title: "Vision",
        iconClass: "fas fa-eye",
        tech: ["React", "TensorFlow.js", "Python"],
        desc: "AI-powered visual recognition tool that identifies objects and scenes in real-time with high accuracy.",
        link: "#"
      },
      {
        title: "E-Votify",
        iconClass: "fas fa-vote-yea",
        tech: ["Solidity", "Ethers.js", "Node.js"],
        desc: "Decentralized voting platform ensuring transparency, security, and verifiable election results.",
        link: "#"
      }
    ];

    const projectsGrid = document.getElementById("projectsGrid");
    
    function renderDiagonalProjects() {
      if (!projectsGrid) return;
      projectsGrid.innerHTML = projects.map((proj, idx) => `
        <div class="project-row">
          <div class="project-visual">
            <i class="${proj.iconClass} project-icon"></i>
          </div>
          <div class="project-content">
            <h3 class="project-title">${proj.title}</h3>
            <div class="tech-badge">
              ${proj.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
            <p class="project-desc">${proj.desc}</p>
            <a href="${proj.link}" class="project-link">Live Demo <i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      `).join('');
    }

    renderDiagonalProjects();

    // ---------- LIGHT/DARK MODE TOGGLE ----------
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const rootHtml = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let currentTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
    
    function setTheme(theme) {
      if (theme === "light") {
        rootHtml.setAttribute("data-theme", "light");
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>Dark</span>';
      } else {
        rootHtml.setAttribute("data-theme", "dark");
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> <span>Light</span>';
      }
      localStorage.setItem("theme", theme);
    }
    
    if (currentTheme === "light") setTheme("light");
    else setTheme("dark");
    
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const isDark = rootHtml.getAttribute("data-theme") !== "light";
        setTheme(isDark ? "light" : "dark");
      });
    }
    
    // ---------- HAMBURGER MENU ----------
    const hamburger = document.getElementById("hamburgerBtn");
    const navLinksDiv = document.getElementById("navLinks");
    if (hamburger && navLinksDiv) {
      hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinksDiv.classList.toggle("active");
      });
      const links = navLinksDiv.querySelectorAll("a");
      links.forEach(link => {
        link.addEventListener("click", () => {
          navLinksDiv.classList.remove("active");
        });
      });
      document.addEventListener("click", (e) => {
        if (!navLinksDiv.contains(e.target) && !hamburger.contains(e.target)) {
          navLinksDiv.classList.remove("active");
        }
      });
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: "smooth" });
          if (navLinksDiv) navLinksDiv.classList.remove("active");
        }
      });
    });
    
    // Active link highlight
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a[href^='#']");
    function updateActiveLink() {
      let current = "";
      const scrollPos = window.scrollY + 150;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      navItems.forEach(link => {
        link.style.color = "";
        const href = link.getAttribute("href").substring(1);
        if (href === current && current !== "") {
          link.style.color = "var(--accent)";
        } else {
          link.style.color = "";
        }
      });
    }
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
  })();