import {
  Content,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai';
import { prompt } from './prompt';

export const MODEL_NAME = 'gemini-1.0-pro';

export const generationConfig = {
  temperature: 0.2,
  topK: 1,
  topP: 1,
  maxOutputTokens: 1000,
};

export const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

export let summary_history: Content[] = [
  {
    role: 'user',
    parts: [{ text: `${prompt.summary}` }],
  },
  {
    role: 'model',
    parts: [
      {
        text:
          "Hello! Please give me some text. I'm happy to summarize.",
      },
    ],
  },
  {
    role: 'user',
    parts: [
      {
        text:
          'School violence occurs when school stakeholders, not limited to students and teachers, physically or verbally attack others on the campus. This violence has many forms, ranging from students fighting students, teachers punishing students, and students verbally abusing teachers, and these incidents are at an alarming rate worldwide. After conducting a survey of 96 countries and territories in 2019, The United Nations Educational, Scientific and Cultural Organization (UNESCO) delineate that nearly 30% of children are liable to one act of violence every month and 11.2% of them experienced sexual jokes, comments, or gestures (UNESCO, 2019). In South Korea, at least once did teachers inflict their acts of emotional maltreatment on students—with the number of approximately 20%—in the form of mockery or humiliation (Cheung et al., 2019). Meanwhile, 80% of American teachers encountered at least one of the 11 different acts of violence on campuses during their previous school years (Yang et al., 2021). More seriously, the prevalence of physical fighting among 68 low-to-middle-income countries is more than 36% and serious injuries account for nearly 43% (Han et al., 2019).',
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text:
          'School violence is a global problem affecting both students and teachers. It includes physical fights, verbal abuse, and emotional maltreatment. Studies show alarming rates: 30% of children experience violence monthly, with 11.2% facing sexual harassment. In South Korea, 20% of students report emotional maltreatment by teachers, while 80% of American teachers have experienced violence on campus. Physical fights are prevalent in many countries, with serious injuries. This issue demands immediate attention and intervention.',
      },
    ],
  },
];

export let recommend_diagrams_history: Content[] = [
  {
    role: 'user',
    parts: [{ text: `${prompt.recommendDiagrams}` }],
  },
  {
    role: 'model',
    parts: [
      {
        text:
          "Hello! Please give me some text. I'm happy to recommend diagrams.",
      },
    ],
  },
  {
    role: 'user',
    parts: [
      {
        text:
          'School violence occurs when school stakeholders, not limited to students and teachers, physically or verbally attack others on the campus. This violence has many forms, ranging from students fighting students, teachers punishing students, and students verbally abusing teachers, and these incidents are at an alarming rate worldwide. After conducting a survey of 96 countries and territories in 2019, The United Nations Educational, Scientific and Cultural Organization (UNESCO) delineate that nearly 30% of children are liable to one act of violence every month and 11.2% of them experienced sexual jokes, comments, or gestures (UNESCO, 2019). In South Korea, at least once did teachers inflict their acts of emotional maltreatment on students—with the number of approximately 20%—in the form of mockery or humiliation (Cheung et al., 2019). Meanwhile, 80% of American teachers encountered at least one of the 11 different acts of violence on campuses during their previous school years (Yang et al., 2021). More seriously, the prevalence of physical fighting among 68 low-to-middle-income countries is more than 36% and serious injuries account for nearly 43% (Han et al., 2019).',
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text: '["Sequence Diagram"]',
      },
    ],
  },
  {
    role: 'user',
    parts: [
      {
        text:
          'Climate change significantly affects various regions around the globe. For instance, in the Arctic, the average temperature has risen at twice the global rate, leading to severe ice melt and habitat destruction. In the Amazon rainforest, increased temperatures and altered precipitation patterns are exacerbating forest fires and threatening biodiversity. Coastal cities worldwide are experiencing higher sea levels, increasing the frequency and severity of flooding events. Moreover, in agricultural regions such as the Midwest USA, variable rainfall and hotter temperatures are impacting crop yields.',
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text: '["Mind Map", "State Diagram"]',
      },
    ],
  },
];

export let diagram_history: Content[] = [
  {
    role: 'user',
    parts: [{ text: `${prompt.diagram}` }],
  },
  {
    role: 'model',
    parts: [
      {
        text:
          "Hello! Please give me any questions about text, UML code or diagram. I'm happy to answer.",
      },
    ],
  },
  {
    role: 'user',
    parts: [
      {
        text:
          "Type: Sequence Diagram. Text: 2.1. CCTV application in education: a double-edged sword\n\nResearch on the application of CCTV to combat school violence dates back to the mid twentieth century. Since its introduction into the educational context, many schools, especially in the United States (US), have increased the use of surveillance systems such as cameras and metal detectors to reduce crime and violence. When CCTV surveillance was first adopted, its intention was to protect against intruders, but its usage has shifted to internal observation and monitoring. Currently, CCTV is a common method for controlling school crimes and violence. However, there's concern about increased classroom misconduct, prompting the need for evidence to address wrongdoings.\n\nCCTV adoption aids in storing evidence for fair misconduct evaluation, controlling behaviors, and increasing self-surveillance awareness. Additionally, it's believed to reduce labor costs and improve student supervision effectiveness. Despite these benefits, CCTV implementation poses a trade-off between security and privacy. Some scholars argue that it decreases safety perception within schools and infringes on privacy rights. Furthermore, there's a concern that it may shift focus from behavioral education to crime detection and punishment, potentially increasing crime in certain contexts.\n\nThis raises questions about whether CCTV should be installed and how it should be managed in the education sector.",
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text:
          '@startuml\n!pragma teoz true\ntitle CCTV Application in Education: A Double-Edged Sword\nparticipant Schools\nparticipant CCTV\nparticipant Students\nparticipant Teachers\n== Early Adoption and Purpose ==\nSchools -> CCTV: Installs CCTV for security and to prevent external intrusion\nnote right: Mid 20th Century - Present (US)\n== Transformation in Usage ==\nSchools -> CCTV: Shifts focus to internal observation and monitoring\nnote right: (Norris & Armstron, 1999)\n== Benefits ==\nSchools -> CCTV: Utilizes CCTV to control school crimes and violence\nnote right: (Fisher et al., 2021)\nSchools -> CCTV: Stores evidence of misconduct for fair evaluation\nnote right: Controls behavior, encourages self-surveillance (Birnhack and Perry-Hazan, 2020)\nSchools -> CCTV: Reduces labor costs and increases supervision effectiveness\nnote right: (Manolev et al., 2019)\n== Drawbacks ==\nStudents -> Schools: Express concerns about privacy intrusion and mistrust\nnote right: (Horton, 2012; Taylor, 2010)\nTeachers -> Schools: Express concerns about punitive environment and shift from education to punishment\nnote right: (Fisher et al., 2020)\nSchools -> CCTV: Questions effectiveness due to potential crime relocation or increase\nnote right: (Cerezo, 2013; McLean et al., 2013)\n== Uncertainty and Debate ==\nSchools -> Schools: Raises questions about CCTV implementation and management in education\n@enduml',
      },
    ],
  },
  {
    role: 'user',
    parts: [
      {
        text:
          'Type: Sequence Diagram. Text: School violence occurs when school stakeholders, not limited to students and teachers, physically or verbally attack others on the campus. This violence has many forms, ranging from students fighting students, teachers punishing students, and students verbally abusing teachers, and these incidents are at an alarming rate worldwide. After conducting a survey of 96 countries and territories in 2019, The United Nations Educational, Scientific and Cultural Organization (UNESCO) delineate that nearly 30% of children are liable to one act of violence every month and 11.2% of them experienced sexual jokes, comments, or gestures (UNESCO, 2019). In South Korea, at least once did teachers inflict their acts of emotional maltreatment on students—with the number of approximately 20%—in the form of mockery or humiliation (Cheung et al., 2019). Meanwhile, 80% of American teachers encountered at least one of the 11 different acts of violence on campuses during their previous school years (Yang et al., 2021). More seriously, the prevalence of physical fighting among 68 low-to-middle-income countries is more than 36% and serious injuries account for nearly 43% (Han et al., 2019).',
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text:
          '@startuml\n' +
          '!pragma teoz true\n' +
          'title School Violence: A Global Issue\n' +
          'participant Students\n' +
          'participant Teachers\n' +
          'participant UNESCO\n' +
          'participant South_Korea\n' +
          'participant USA\n' +
          'participant Han_et_al.\n' +
          '== Global Prevalence ==\n' +
          'UNESCO -> Students: 30% of children experience violence monthly\n' +
          'UNESCO -> Students: 11.2% of children experience sexual harassment\n' +
          '== South_Korea ==\n' +
          'South_Korea -> Teachers: 20% of students experience emotional maltreatment\n' +
          '== USA ==\n' +
          'USA -> Teachers: 80% of teachers experience violence\n' +
          '== Low-to-Middle-Income Countries ==\n' +
          'Han_et_al. -> Students: 36% of students experience physical fighting\n' +
          'Han_et_al. -> Students: 43% of physical fighting results in serious injuries\n' +
          '@enduml',
      },
    ],
  },
  {
    role: 'user',
    parts: [
      {
        text:
          'Type: State Diagram. Text: This paper provides the first systematic analysis of the effects of COVID-19 on higher education. To study these effects, we surveyed 1,500 students at Arizona State University, and present quantitative evidence showing the negative effects of the pandemic on students’ outcomes and expectations. For example, we find that 13% of students have delayed graduation due to COVID-19. Expanding upon these results, we show that the effects of the pandemic are highly heterogeneous, with lower-income students 55% more likely to delay graduation compared to their higher-income counterparts. We further show that the negative economic and health impacts of COVID-19 have been significantly more pronounced for less advantaged groups, and that these are partially responsible for the underlying heterogeneity in the impacts that we document. Our results suggest that by focusing on addressing the economic and health burden imposed by COVID-19, as measured by a relatively narrow set of mitigating factors, policy makers may be able to prevent COVID-19 from widening existing achievement gaps in higher education',
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text:
          '@startuml\n' +
          '[*] --> Surveyed1500Students\n' +
          'Surveyed1500Students --> FoundNegativeEffectsOnStudents\n' +
          'FoundNegativeEffectsOnStudents --> ThirteenPercentDelayedGraduation\n' +
          'ThirteenPercentDelayedGraduation --> LowerIncomeStudentsFiftyFivePercentMoreLikelyToDelayGraduation\n' +
          'LowerIncomeStudentsFiftyFivePercentMoreLikelyToDelayGraduation --> NegativeEconomicAndHealthImpactsMorePronounced\n' +
          'NegativeEconomicAndHealthImpactsMorePronounced --> PartiallyResponsibleForHeterogeneityInImpacts\n' +
          'PartiallyResponsibleForHeterogeneityInImpacts --> PolicyMakersMayPreventWideningAchievementGaps\n' +
          '@enduml',
      },
    ],
  },
];
