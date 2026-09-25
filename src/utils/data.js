const data = [
  {
    id: "avatar",
    isNav: false,
    photo: require("#assets/photo.png"),
    name: "Елена Коробова",
    position: "Frontend-разработчик (React)"
  },
  {
    id: "about",
    isNav: true,
    title: "о себе",
    icon: "about",
    content: {
      text: "Frontend-разработчик с коммерческим опытом от 2 лет по созданию клиентской части на React + TypeScript. Обладаю практическим опытом бэкенд-разработки на Node.js и проектирования реляционных (PostgreSQL) и нереляционных (MongoDB) баз данных. Самостоятельно реализовывала фичи от верстки интерфейса до проектирования API и схемы БД."
    }
  },
  {
    id: "skills",
    isNav: true,
    title: "навыки",
    icon: "skills",
    content: [
      {
        title: "Технический стек",
        array: ["react", "react\u00A0router", "redux toolkit", "typescript", "javascript", "node.js"]
      },
      {
        title: "Программные средства",
        array: ["vite", "webpack", "git", "docker", "postgresql", "sequelize", "mongodb", "mongoose"]
      }
    ]
  },
  {
    id: "projects",
    isNav: true,
    title: "проекты",
    icon: "projects",
    content: [
      {
        title: "railway booking system",
        cover: require("#assets/cover-railway.png"),
        link: "https://github.com/wee-owl/fe-diploma"
      },
      // {
      //   title: "chaos organizer",
      //   cover: require("#assets/cover-organizer.png"),
      //   link: "https://github.com/wee-owl/chaos-organizer"
      // },
      {
        title: "like trello",
        cover: require("#assets/cover-trello.png"),
        link: "https://github.com/wee-owl/ahj_dnd_like_trello"
      },
      // {
      //   title: "help desk",
      //   cover: require("#assets/cover-helpdesk.png"),
      //   link: "https://github.com/wee-owl/ahj_http_helpdesk"
      // },
      {
        title: "goblin game",
        cover: require("#assets/cover-goblin.png"),
        link: "https://github.com/wee-owl/ahj_event_goblin-game"
      },
      {
        title: "tetris",
        cover: require("#assets/cover-tetris.png"),
        link: "https://github.com/wee-owl/Tetris"
      },
      // {
      //   title: "your meal",
      //   cover: require("#assets/cover-yourmeal.png"),
      //   link: "https://github.com/wee-owl/your_meal"
      // },
      {
        title: "songbird quiz",
        cover: require("#assets/cover-songbird.png"),
        link: "https://github.com/wee-owl/quiz"
      },
      // {
      //   title: "photo stream",
      //   cover: require("#assets/cover-photostream.png"),
      //   link: "https://github.com/wee-owl/Photo-Stream"
      // },
      {
        title: "pomodoro",
        cover: require("#assets/cover-pomodoro.png"),
        link: "https://github.com/wee-owl/pomodoro"
      },
      {
        title: "online zoo",
        cover: require("#assets/cover-zoo.png"),
        link: "https://github.com/wee-owl/online-zoo"
      },
      // {
      //   title: "barbershop",
      //   cover: require("#assets/cover-barbershop.png"),
      //   link: "https://github.com/wee-owl/barbershop"
      // },
      // {
      //   title: "money exchange service",
      //   cover: require("#assets/cover-moneyexchange.png"),
      //   link: "https://github.com/wee-owl/Money_exchange_service"
      // },
      {
        title: "shelter",
        cover: require("#assets/cover-shelter.png"),
        link: "https://github.com/wee-owl/shelter"
      },
      {
        title: "noemi",
        cover: require("#assets/cover-noemi.png"),
        link: "https://github.com/wee-owl/noemi"
      },
      {
        title: "travel portal",
        cover: require("#assets/cover-travelportal.png"),
        link: "https://github.com/wee-owl/TravelPortal"
      },
    ]
  },
  {
    id: "experience",
    isNav: true,
    title: "опыт",
    icon: "experience",
    content: [
      {
        position: "Frontend-разработчик",
        period: "08.2024 – н.в.",
        company: "Институт навигационных технологий",
        title: "",
        text: [
          "В рамках работы над созданием проекта внутрикорпоративного портала госорганизации отвечала за фронтенд-часть на React (+TypeScript) и бэкенд-часть в рамках архитектуры БД и обработки запросов (API).",
          "Разработала справочник компании (50+ подразделений) со сквозным поиском с использованием Redux Toolkit, рекурсивной отрисовки дерева из плоского массива API и роутинга карточек сотрудников через useParams.",
          "Спроектировала модуль визуального редактора оргструктуры: реализовала компонент ZoomArea с обработкой MouseEvent и WheelEvent, рекурсивную отрисовку иерархии и двустороннюю синхронизацию состояния узлов с Redux Toolkit.",
          "Реализовала end-to-end сервис оформления командировок: 9 этапов последовательного и параллельного согласования с сохранением состояния в store, а также рендер шаблонов документов на базе React-PDF.",
          "В рамках программы импортозамещения перевела архитектуру портала с MongoDB на PostgreSQL, разработала реляционную модель данных с нуля, переписав 30+ коллекций.",
          "Внедрила Sequelize ORM в бекэнд на Node.js, переписала 20+ моделей БД с обеспечением двусторонней связи (через .belongsTo и .hasMany), настроила систему миграций (Sequelize CLI) и сидирования данных.",
          "Оптимизировала docker-compose.yml для микросервисов: внедрила healthchecks, автоматизировала миграции, сидинг СУБД (npx sequelize-cli) и импорт бэкапов через volume-скрипты. Время подготовки окружения первичного запуска сокращено до двух команд без необходимости ручного импорта.",
        ]
      },
      {
        position: "Ведущий специалист",
        period: "07.2014 – 07.2024",
        company: "Концерн «Моринформсиситема – Агат»",
        title: "",
        text: [
          "Разработала и внедрила 48 документов (ТЗ, ТУ, РЭ, ПС, УТП и т.д.) по 6 проектам в соответствии с ГОСТ, РД и ЕСКД в рамках выполнения ГОЗ.",
          "Подготовила и провела 12 комплексных технических экспертиз КД и ТД как внутри компании, так и при приемке систем у организаций-контрагентов.",
          "Обеспечила полный цикл ведения 4 проектов по ГОЗ: от разработки ТЗ до сдачи этапов Заказчик.",
          "Обеспечивала своевременное выявление и устранение технических неисправностей систем на объектах Заказчикаисполнительных команд на объектах ведения разработок и эксплуатации систем и комплексов, своевременное выявление и устранение технических неисправностей.",
        ]
      }
    ]
  },
  {
    id: "education",
    isNav: true,
    title: "образование",
    icon: "education",
    content: [
      {
        qualification: "Frontend-разработчик, профессиональная переподготовка",
        year: "2024",
        institution: "ООО «Нетология»",
        city: "г.\u00A0Москва"
      },
      {
        qualification: "Информационные системы и технологии, магистр",
        year: "2016",
        institution: "Российский технологический университет «МИРЭА»",
        city: "г.\u00A0Москва"
      },
      {
        qualification: "Управление и информатика в технических системах, инженер",
        year: "2014",
        institution: "Национальный исследовательский технологический университет «МИСиС»",
        city: "г.\u00A0Москва"
      }
    ]
  },
  {
    id: "language",
    isNav: false,
    title: "языки",
    icon: "language",
    content: [
      {
        language: "русский язык",
        level: "родной"
      },
      {
        language: "английский язык",
        level: "B1"
      }
    ]
  },
  {
    id: "contacts",
    isNav: true,
    title: "контакты",
    icon: "contacts",
    content: [
      {
        social: "email",
        icon: "email",
        link: "mailto:kem-cv@yandex.ru"
      },
      {
        social: "telegram",
        icon: "telegram",
        link: "https://t.me/emkorobova"
      },
      {
        social: "github",
        icon: "github",
        link: "https://github.com/wee-owl/"
      },
      // {
      //   social: "discord",
      //   icon: "discord",
      //   link: "https://discordapp.com/users/@lienone"
      // },
    ]
  }
];

export default data;