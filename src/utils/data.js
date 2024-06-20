const data = [
  {
    id: "avatar",
    isNav: false,
    photo: require("#assets/photo.png"),
    name: "Елена Коробова",
    position: "Frontend-разработчик"
  },
  {
    id: "about",
    isNav: true,
    title: "о себе",
    icon: "about",
    content: {
      text: "Работала инженером-разработчиком в компании оборонно-промышленного комплекса. Сменила сферу деятельности на программирование. Прошла профессиональную переподготовку по курсу «Frontend-разработчик с нуля» в Нетологии.\nВ рамках учебных проектов занималась разработкой клиентской части веб-приложений, создавала соответствующую макетам внешнюю оболочку сайта, настраивала рабочий функционал и связывала его с бэкендом.\nУмею решать локальные задачи, которые хорошо декомпозированы и укладываются в принятые в проекте соглашения и архитектурные принципы. Хорошо знаю основной инструментарий – HTML, CSS, JavaScript. Уверенно владею React на уровне, который позволяет решать абсолютное большинство стандартных задач, связанных с интерфейсами.\nУмею ясно излагать свои мысли в письменной и устной форме и понимаю важность проактивности для командной работы. Я постоянно расширяю свои профессиональные компетенции во frontend-разработке."
    }
  },
  {
    id: "skills",
    isNav: true,
    title: "навыки",
    icon: "skills",
    content: [
      {
        title: "stack",
        array: ["react", "react\u00A0router", "typescript", "javascript", "css", "html", "node.js", "jest", "markdown"]
      },
      {
        title: "tools",
        array: ["webpack", "git", "github", "vs code", "figma", "photoshop"]
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
      {
        title: "chaos organizer",
        cover: require("#assets/cover-organizer.png"),
        link: "https://github.com/wee-owl/chaos-organizer"
      },
      {
        title: "like trello",
        cover: require("#assets/cover-trello.png"),
        link: "https://github.com/wee-owl/ahj_dnd_like_trello"
      },
      {
        title: "help desk",
        cover: require("#assets/cover-helpdesk.png"),
        link: "https://github.com/wee-owl/ahj_http_helpdesk"
      },
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
      {
        title: "your meal",
        cover: require("#assets/cover-yourmeal.png"),
        link: "https://github.com/wee-owl/your_meal"
      },
      {
        title: "songbird quiz",
        cover: require("#assets/cover-songbird.png"),
        link: "https://github.com/wee-owl/quiz"
      },
      {
        title: "photo stream",
        cover: require("#assets/cover-photostream.png"),
        link: "https://github.com/wee-owl/Photo-Stream"
      },
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
      {
        title: "barbershop",
        cover: require("#assets/cover-barbershop.png"),
        link: "https://github.com/wee-owl/barbershop"
      },
      {
        title: "money exchange service",
        cover: require("#assets/cover-moneyexchange.png"),
        link: "https://github.com/wee-owl/Money_exchange_service"
      },
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
        period: "05.2022 – н.в.",
        company: "ООО «Нетология»",
        title: "Некоторые учебные проекты",
        text: [
          "Railway Booking System.\nОписание: SPA на React для сервиса покупки билетов на ж/д, свёрстанное по макетам в Figma, в котором в качестве API используется внешний сервер.\nСтек: React, React Router, Context API, Hooks, ESLint.",
          "Chaos Organizer.\nОписание: Приложение-бот, предназначенное для создания сообщений, загрузки изображений, аудио, видео, текстовых файлов (drag&drop), а также их скачивания.\nСтек: клиент - JavaScript, Webpack, Babel, ESLint; сервер - Express, Body-parser, CORS.",
          "Goblin Game.\nОписание: Игра, где в рандомной ячейке каждую секунду появляется гоблин, если пользователь успел за это время кликнуть на него, то засчитывается +1 балл, если пользователь пропустил 5 появлений гоблинов, то игра завершается.\nСтек: JavaScript, Webpack, Babel, ESLint.",
          "Online ZOO.\nОписание: Двухстраничный сайт (main и donate) с каталогом диких животных и возможностью выбора пожертвования для внесения.\nСтек: JavaScript, CSS, HTML."
        ]
      },
      {
        position: "Инженер-разработчик",
        period: "07.2014 – 09.2021",
        company: "АО «Концерн «Моринсис-Агат», г. Москва",
        title: "Задачи/достижения",
        text: [
          "разработка технической документации и ведение проектов в государственной структуре оборонно-промышленного комплекса (разработала и ввела в эксплуатацию 48 документов по 6 проектам в соответствии с ГОСТ, РД и ЕСКД (ТЗ, ТУ, РЭ, ПС, УТП и т.д.);",
          "комплексная работа с организациями-заказчиками и организациями-подрядчиками по разработке и корректировке ТЗ, анализу и планированию трудозатрат на выполнение работ;",
          "организация и проведение комплексных технических экспертиз КД и ТД в соответствии с ГОСТ и РВ (организовала и провела 12 технических экспертиз);",
          "контроль исполнительных команд на объектах ведения разработок и эксплуатации систем и комплексов, своевременное выявление и устранение технических неисправностей."
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
        social: "github",
        icon: "github",
        link: "https://github.com/wee-owl/"
      },
      {
        social: "discord",
        icon: "discord",
        link: "https://discordapp.com/users/@lienone"
      },
      {
        social: "email",
        icon: "email",
        link: "mailto:kem-cv@yandex.ru"
      },
      {
        social: "telegram",
        icon: "telegram",
        link: "https://t.me/emkorobova"
      }
    ]
  }
];

export default data;