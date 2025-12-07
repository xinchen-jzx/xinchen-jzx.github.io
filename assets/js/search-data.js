// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Collections of my repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching Assistant",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-nudt-compiler",
          title: 'NUDT-Compiler',
          description: "for CSC-2024 Compiler Design Contest",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_SysYCompiler24.html";
            },},{id: "projects-nudt-os",
          title: 'NUDT-OS',
          description: "Open source project miniRust",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_miniRust.html";
            },},{id: "projects-grace23",
          title: 'GRACE23',
          description: "ACL23 - GRACE:Gradient-guided Controllable Retrieval for Augmenting Attribute-based Text Generation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_GRACE23.html";
            },},{id: "projects-llm-knowledgeboundary24",
          title: 'LLM-KnowledgeBoundary24',
          description: "NeurIPS24 - Perception of Knowledge Boundaries for LLMs via Semi-open-ended Question Answering",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_LLM-KnowledgeBoundary24.html";
            },},{id: "projects-nudt-compiler",
          title: 'NUDT-Compiler',
          description: "for CSC-2024 Compiler Design Contest",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_AICompiler44RV25.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%65%78%69%6E%6A%69%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xinchen-jzx", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sAD00b0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
