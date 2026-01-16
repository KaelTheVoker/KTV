export const TEXTS = {
    en: {
        hero: {
            name: "Kael The Voker",
            role: "Fullstack developer",
        },
        principles: {
            title: "Core principles",
            description: (
                <>
                    I believe in <span className="italic">Security</span> by Design.
                    <br className="hidden 2xl:block" />
                    Every architecture decision and line of code considers performance, maintainability, and security.
                </>
            ),
        },
        bestPractices: ['DRY', 'KISS', 'DI', 'YAGNI', 'SRP', 'OWASP'],
        scope: {
            title: "My scope",
            items: ['scalable systems', 'architecture', 'stability', 'refactoring', 'security'],
        },
        experience: {
            title: "Experience",
            items: [
                "Reducing business risks by identifying critical security threats in live products",
                "Increasing development speed and lowering costs by modernizing legacy systems",
                "Building scalable products that are easy to maintain and evolve with business needs",
                "Optimizing business processes through background automation and task distribution",
                "Ensuring predictable deployments and stable growth through standardized infrastructure",
            ],
        },
        tools: {
            title: "Tools & Tech",
            frontend: {
                title: "Frontend",
                items: ['React', 'Next.js', 'Tailwind', 'Zustand', 'ReactQuery'],
            },
            backend: {
                title: "Backend",
                items: ['Node.js', 'TypeScript', 'Express', 'Fastify', 'TypeORM', 'REST/API', 'MongoDB', 'PostgreSQL'],
            },
            infra: {
                title: "Infra",
                items: ['Docker', 'Nginx', 'Caddy', 'PM2', 'S3'],
            },
        },
        contact: {
            title: "Get in touch",
        },
    },

    ru: {
        hero: {
            name: "Kael The Voker",
            role: "Фуллстек разработчик",
        },
        principles: {
            title: "Основные принципы",
            description: (
                <>
                    Я верю в <span className="italic">Безопасность</span> с самого начала.
                    <br className="hidden 2xl:block" />
                    Каждое архитектурное решение и каждая строка кода учитывают производительность, поддерживаемость и безопасность.
                </>
            ),
        },
        bestPractices: ['DRY', 'KISS', 'DI', 'YAGNI', 'SRP', 'OWASP'],
        scope: {
            title: "Моя зона ответственности",
            items: ['масштабируемые системы', 'архитектура', 'стабильность', 'рефакторинг', 'безопасность'],
        },
        experience: {
            title: "Опыт",
            items: [
                "Снижение бизнес-рисков за счёт выявления критических угроз безопасности",
                "Ускорение разработки и снижение затрат через модернизацию legacy-систем",
                "Разработка масштабируемых и поддерживаемых продуктов под рост бизнеса",
                "Оптимизация процессов с помощью фоновой автоматизации и распределения задач",
                "Стабильные деплои и предсказуемый рост благодаря стандартизации инфраструктуры",
            ],
        },
        tools: {
            title: "Инструменты и технологии",
            frontend: {
                title: "Фронтенд",
                items: ['React', 'Next.js', 'Tailwind', 'Zustand', 'ReactQuery'],
            },
            backend: {
                title: "Бэкенд",
                items: ['Node.js', 'TypeScript', 'Express', 'Fastify', 'TypeORM', 'REST/API', 'MongoDB', 'PostgreSQL'],
            },
            infra: {
                title: "Инфраструктура",
                items: ['Docker', 'Nginx', 'Caddy', 'PM2', 'S3'],
            },
        },
        contact: {
            title: "Связаться со мной",
        },
    },
} as const;