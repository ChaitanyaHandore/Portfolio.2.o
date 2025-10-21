type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    description: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Chaitanya Handore — Portfolio",
    fullName: "Chaitanya Handore",
    email: "chaitanyahandore@gmail.com",
  },
  hero: {
    name: "Chaitanya Handore",
    description: "AI Engineer crafting intelligent solutions that bridge the gap between data and innovation",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a dedicated Artificial Intelligence student pursuing MSc in AI at Dublin Business School with strong expertise in Python, Java, C++, and SQL. I'm passionate about machine learning, deep learning, and building scalable AI solutions. I have hands-on experience with PyTorch, TensorFlow, FastAPI, and cloud deployment. I'm a quick learner and love solving real-world problems through technology. Let's work together to bring your AI ideas to life!`,
    },
    experience: {
      p: "My educational journey",
      h2: "Education & Learning.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcase my skills and experience through
    real-world examples of my work in AI, machine learning, and software development. Each project is briefly described with
    links to code repositories and live demos. These projects reflect my
    ability to solve complex problems, work with different technologies,
    and build scalable AI solutions.`,
    },
  },
};
