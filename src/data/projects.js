// Portfolio Projects Data
// This file contains all project information. You can add, edit, or remove projects here.
// Please update placeholder URLs (githubUrl, liveDemoUrl, image, screenshots) with your actual links.

export const projects = [
  {
    id: 1,
    title: "Retail Sales Prediction",
    slug: "retail-sales-prediction",
    description: "A data science and machine learning project that analyzes retail sales data, discovers trends, creates visualizations, and predicts future sales.",
    fullDescription: "This project aims to help retail stores optimize their inventory and staffing by forecasting future sales. By analyzing historical transaction data, the system identifies seasonal trends, promotional impacts, and store-specific behaviors, applying machine learning models to forecast demand with high accuracy.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-Learn", "Jupyter Notebook"],
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    status: "Completed",
    githubUrl: "https://github.com/laksh114/Real-World-Data-Science-Project-Retail-Sales-Analysis-Prediction-Project-",
    liveDemoUrl: "#",
    features: [
      "Exploratory Data Analysis (EDA) of transaction datasets",
      "Handling missing data, outliers, and data cleaning routines",
      "Time-series decomposition to extract weekly and monthly seasonality patterns",
      "Regression-based machine learning model to predict sales for the next quarter",
      "Interactive data plots for business stakeholders using Matplotlib and Seaborn"
    ],
    challenges: "Handling the sparse sales data during holiday seasons and managing extreme outliers caused by flash sales events. The models initially overfitted on promotional days, causing inaccurate predictions for regular days.",
    learnings: "I learned how to perform proper feature engineering by creating lag features, rolling averages, and extracting calendar indicators. I also gained experience in model evaluation using Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE)."
  },
  {
    id: 2,
    title: "Smart To-Do List / Task Management System",
    slug: "smart-todo-list",
    description: "A comprehensive task management web application where users can create, manage, update, assign, and track tasks.",
    fullDescription: "A productivity-focused web application designed to help individuals organize daily tasks and track progress. Features an intuitive glassmorphic UI, dynamic task IDs, categorization, searching, and dashboard statistics.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop"
    ],
    status: "Completed",
    githubUrl: "https://github.com/laksh114/smart-todo-list",
    liveDemoUrl: "https://laksh114.github.io/smart-todo-list",
    features: [
      "Auto-generated unique Task IDs for tracking",
      "Create, Read, Update, and Delete (CRUD) tasks",
      "Interactive dashboard showing total, pending, and completed counts",
      "Sort tasks by status or priority",
      "Search filters for task title, owner name, or status",
      "Local Storage persistence to retain task lists across browser sessions"
    ],
    challenges: "Managing application state dynamically in vanilla JavaScript without a framework. Syncing the UI updates with Local Storage required creating a clean render loop to avoid duplicate task rendering.",
    learnings: "Deepened my understanding of Document Object Model (DOM) manipulation, JS event propagation, array filter/sort methods, and storing serialized objects in browser LocalStorage."
  },
  {
    id: 3,
    title: "Data Cleaning & Visualization Project",
    slug: "data-cleaning-visualization",
    description: "A data analysis project that cleans raw datasets by handling missing values, duplicates, and outliers and then presents insights through visualizations.",
    fullDescription: "Data in the real world is messy. This project uses Python and Pandas to clean raw datasets (e.g., e-commerce customer surveys and retail records) and transforms them into clean, structured structures ready for statistical analysis and visualization.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
    ],
    status: "Completed",
    githubUrl: "https://github.com/laksh114/data-cleaning-visualization",
    liveDemoUrl: "#",
    features: [
      "Automated scripts to find and delete duplicated records",
      "Imputation of missing values using mean/median/mode and KNN models",
      "Outlier detection using IQR (Interquartile Range) and Z-score methods",
      "Distribution plotting for quantitative variables",
      "Correlation heatmaps to identify relationships between parameters"
    ],
    challenges: "Deciding whether to drop rows with missing values or impute them, especially when columns had more than 30% missing data. Over-imputing could skew the dataset distribution.",
    learnings: "I learned to approach data preprocessing methodically. I understood when to use median imputation over mean (for skewed data) and how visualizations help identify cleaning requirements."
  },
  {
    id: 4,
    title: "Exploratory Data Analysis",
    slug: "exploratory-data-analysis",
    description: "A data exploration project focusing on extracting key insights and relationships from raw datasets.",
    fullDescription: "An analytical study investigating real-world datasets (such as housing prices or client churn metrics). Utilizes descriptive statistics and multivariate plots to find key correlation patterns and distribution shapes.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    screenshots: [],
    status: "Completed",
    githubUrl: "https://github.com/laksh114/exploratory-data-analysis",
    liveDemoUrl: "#",
    features: [
      "Profiling datasets (shape, columns, null check, memory use)",
      "Univariate, bivariate, and multivariate visualizations",
      "Detecting highly correlated features using heatmaps",
      "Summary reporting with key findings for predictive modeling stages"
    ],
    challenges: "Interpreting complex charts when dealing with highly categorical datasets. I had to group low-frequency values to keep the charts readable.",
    learnings: "Learned how to apply data visualization principles (choosing the right chart types, handling overlapping plots, using proper palettes) to convey numerical ideas effectively."
  },
  {
    id: 5,
    title: "Predictive Modeling Using Machine Learning",
    slug: "predictive-modeling-ml",
    description: "Creating regression and classification models to predict target metrics based on historic datasets.",
    fullDescription: "A machine learning pipeline containing feature scaling, model selection, training, and parameter tuning. Evaluates algorithms like Linear Regression, Decision Trees, and Random Forests.",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter Notebook"],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop",
    screenshots: [],
    status: "Completed",
    githubUrl: "https://github.com/laksh114/predictive-modeling-ml",
    liveDemoUrl: "#",
    features: [
      "Splitting datasets into training, validation, and test subsets",
      "Preprocessing pipelines including standard scaling and one-hot encoding",
      "Training multiple models and comparing metrics",
      "Hyperparameter tuning using GridSearchCV"
    ],
    challenges: "Optimizing the Random Forest classifier to prevent overfitting, which was causing poor accuracy on test data compared to training data.",
    learnings: "Understood the concept of bias-variance tradeoff, the importance of cross-validation, and how hyperparameters like max_depth control model complexity."
  },
  {
    id: 6,
    title: "Cafe Order Management Website",
    slug: "cafe-order-management",
    description: "A front-end restaurant/cafe portal website allowing clients to view menus, add items to cart, and place mock orders.",
    fullDescription: "A responsive website built to learn CSS structures and dynamic JavaScript cart calculations. Users can browse categories, customize orders, and view computed invoices in real time.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    screenshots: [],
    status: "Learning Project",
    githubUrl: "https://github.com/laksh114/cafe-order-management",
    liveDemoUrl: "#",
    features: [
      "Filterable menu items (Coffee, Drinks, Snacks, Desserts)",
      "Dynamic cart updates with item adding/removing",
      "Automatic taxes and totals calculations",
      "Form simulation for checkout details"
    ],
    challenges: "Ensuring the menu grids resize beautifully across mobile screens and styling custom elements like checkmarks and order quantities without external libraries.",
    learnings: "Deepened my skills in CSS Flexbox/Grid layouts, DOM traversal, and tracking cart states in a centralized JS array."
  },
  {
    id: 7,
    title: "Interactive Developer Portfolio",
    slug: "interactive-developer-portfolio",
    description: "My personal developer portfolio website featuring custom glassmorphism, 3D particle spheres, and smooth scroll transitions.",
    fullDescription: "The website you are currently exploring. Designed as a premium portal showcasing developer portfolios, skills, internship timelines, and learning logs.",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Three.js", "Framer Motion", "React Router"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    screenshots: [],
    status: "In Progress",
    githubUrl: "https://github.com/laksh114/portfolio",
    liveDemoUrl: "#",
    features: [
      "Cinematic intro loading sequence",
      "3D particle-emitting interactive data sphere built with Three.js",
      "Responsive navigation drawer and active viewport highlight indicator",
      "Custom cursor follow ring tracker",
      "Integrated project sorting, filter categories, and live search bar"
    ],
    challenges: "Configuring the custom cursor to feel smooth rather than laggy, and optimizing Three.js render frames so they don't consume excessive CPU cycles on mobile devices.",
    learnings: "I learned how to integrate Three.js in a React lifecycle, utilize Framer Motion hooks for layout changes, and structure clean Tailwind utility configurations."
  },
  {
    id: 8,
    title: "Voice Command Virtual Assistant",
    slug: "voice-command-assistant",
    description: "A desktop voice assistant program built in Python that executes speech commands, searches the web, and answers queries.",
    fullDescription: "A custom voice assistant command program. The script captures microphone feeds, runs speech recognition, and performs matching actions such as fetching weather, opening apps, or speaking summaries.",
    category: "Machine Learning",
    technologies: ["Python", "SpeechRecognition", "Pyttsx3", "Wikipedia API", "OS Command Module"],
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800&auto=format&fit=crop",
    screenshots: [],
    status: "Learning Project",
    githubUrl: "https://github.com/laksh114/jarvis-ai-python",
    liveDemoUrl: "#",
    features: [
      "Speech-to-Text conversion using online and offline speech engines",
      "Text-to-Speech feedback (custom voice speed and volume settings)",
      "Web scraping utility for Wikipedia searches",
      "System control commands (Open Notepad, check battery status, play youtube search)"
    ],
    challenges: "Managing audio threshold sensitivities in environments with ambient background noise, which caused incorrect speech recognition triggering.",
    learnings: "Understood Python library APIs, microphone sensor handling, threading processes for vocal callbacks, and basic string parsing for command routing."
  }
];
