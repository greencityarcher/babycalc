import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from './../node_modules/vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'ru',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('ru').create({
      langName: 'Русский',
      title: 'BabyCalc - калькулятор прогнозирования пола ребенка',
      aboutPart1:'Здесь вы можете спрогнозировать пол будущего ребенка.  Для расчетов используется теория обновления крови, китайский лунный календарь  и традиционный японский метод.',
      aboutPart2:'Зная предполагаемую дату зачатия, вы можете узнать кого вы, вероятнее всего ждете - мальчика или девочку.  Также вы можете построить календарь,  в котором будут указан наиболее вероятный пол ребенка для каждого дня зачатия. Эта функция будет полезна тем, кто мечтает о ребенке определенного пола и планирует беременность.',
      aboutPart3:'Для расчетов используется теория обновления крови, китайский лунный календарь  и традиционный японский метод. Вы можете использовать в расчетах все три метода сразу или выбрать предпочтительные.',
      modeSectionHeader: 'Выберите режим',
      mbdayTitle: 'Дата рождения матери',
      fbdayTitle: 'Дата рождения отца',
      concdayTitle: 'Дата зачатия',
      datemodeTitle: 'Спрогнозировать пол ребенка по дате зачатия',
      calendarmodeTitle: 'Построить календарь прогнозов',
      methodslistTitle: 'Методы расчета',
      bloodMethodName: 'Старшинства крови',
      chineseMethodName: 'Китайский лунный календарь',
      japaneseMethodName: 'Японская таблица',
      bloodMethodFullName: 'Рассчитано по методу старшинства крови',
      chineseMethodFullName: 'Рассчитано по китайской таблице',
      japaneseMethodFullName: 'Рассчитано по японской таблице',
      displayOverallTitle: 'Показывать обобщенный прогноз',
      displaySeparatedTitle: 'Показывать результаты методов отдельно',
      methodsWarn: 'Выберите как минимум один метод',
      datesWarn: 'Чтобы получить прогноз, укажите даты рождения родителей',
      chineseAgeWarn: 'Расчет по китайскому лунному календарю доступен для возраста матери от 18 до 45 лет. Указанный вами возраст не входит в этот промежуток и прогноз по китайскому лунному календарю не рассчитан.',
      bloodMethodDescription: 'Метод, основанный на теории обновления крови. Мужская кровь обновляется раз в 4 года, женская - раз в три. Чья кровь моложе на момент зачатия, такого пола будет ребенок',
      chineseMethodDescription: 'Традиционная китайская теория, согласно которой пол ребенка определяется комбинацией возраста матери и месяца зачатия',
      japaneseMethodDescription: 'Японская теория, которая рассчитывает вероятность появления мальчика или девочки, основываясь на возрасте отца и матери, а также месяце зачатия',
      readMore:"Подробнее",
      confidenceBlood: "Уверенность в прогнозе рассчитывается на основании разницы возрастов крови отца и матери. Чем больше разница возрастов, тем выше уверенность в прогнозе",
      confidenceChinese: 'Этот метод не рассчитывает уверенность в прогнозе',
      confidenceJapanese: "Уверенность в прогнозе вычисляется на основании данных таблицы.",
      boy: 'Мальчик',
      girl: 'Девочка',
      boyorgirl: 'Мальчик или девочка с равной вероятностью',
      gender: 'Пол',
      precision: 'Уверенность в прогнозе',
      calendarHeader: 'Календарь вероятности зачатия мальчика или девочки',
      methodsListPanelTitle:"Использовать в расчете методы",
      calendarFooter: 'Условные обозначения',
      powerindex: 'Некоторые методы позволяют рассчитать, насколько преобладает вероятность указанного пола над другим',
      shareUs: "Рекомендуйте калькулятор друзьям",
      writeDevsTitle: "Написать разработчикам",
      writeDevsText1: "Есть вопросы?",
      writeDevsText2: "Напишите нам на электронную почту!",
      donateDevsTitle: "Поддержать разработчиков",
      donateDevsText1: "Если вам нравится BabyCalc, вы можете  материально поддержать разработчиков переводом PayPal",
      donateDevsText2: "Спасибо!",
      disclaimer: 'Внимание! Калькулятор основан на методах расчета, не подтвержденных официальными медицинскими исследованиями и не гарантирует 100% точности!',
      mailButton:'Отправить Email',
      donateButton: 'Отправить перевод PayPal'

    }),

    new MLanguage('en').create({
      langName: 'English',
      title: 'BabyCalc - baby gender prediction calculator',
      aboutPart1:'Here you can predict the gender of the unborn child. For calculations, the theory of blood renewal, the Chinese lunar calendar and the traditional Japanese method are used.',
      aboutPart2:'Knowing the estimated date of conception, you can find out who you are most likely waiting for - a boy or a girl. You can also build a calendar that will indicate the most likely gender of the child for each day of conception. This feature will be useful to those who dream of a child of a certain gender and plan a pregnancy.',
      aboutPart3:'For calculations, the theory of blood renewal, the Chinese lunar calendar and the traditional Japanese method are used. You can use all three methods in the calculations at once or choose preferred ones.',
      modeSectionHeader: 'Choose mode',
      mbdayTitle: 'Mother\'s date of birth',
      fbdayTitle: ' Father\'s date of birth',
      concdayTitle: 'Conception date',
      datemodeTitle: 'Predict the gender of the baby by the date of conception',
      calendarmodeTitle: 'Build a forecast calendar',
      methodslistTitle: 'Calculation methods',
      bloodMethodName: 'Blood seniority',
      chineseMethodName: 'Chinese moon calendar',
      japaneseMethodName: 'Japanese chart',
      bloodMethodFullName: 'Calculated by the method of blood seniority',
      chineseMethodFullName: 'Calculated by the Chinese table',
      japaneseMethodFullName: 'Calculated by the Japanese table',
      displayOverallTitle: 'Show generalized forecast',
      displaySeparatedTitle: 'Show method results separately',
      methodsWarn: 'Please select at least one method',
      datesWarn: 'To get a forecast, enter the date of birth of parents',
      chineseAgeWarn: 'Calculation according to the Chinese lunar calendar is available for mother\'s age from 18 to 45 years. The age you specified is not included in this period and the forecast for the Chinese lunar calendar is not calculated.',
      bloodMethodDescription: 'The method is based on the theory of blood renewal. Male blood is renewed every 4 years, female blood - every three years. Whose blood is younger at the time of conception, such a gender will have a child',
      chineseMethodDescription: 'The traditional Chinese theory, according to which the gender of the child is determined by the combination of the age of the mother and the month of conception',
      japaneseMethodDescription: 'Japanese theory that calculates the probability of a boy or girl, based on the age of the father and mother, as well as the month of conception',
      confidenceBlood: "Confidence in the forecast is calculated based on the difference between the age of blood of mother and father. The greater the age difference, the higher the confidence in the forecast.",
      confidenceChinese: 'This method does not calculate confidence in the forecast.',
      confidenceJapanese: "Confidence in the forecast is calculated based on the data in the table.",
      boy: 'Boy',
      girl: 'Girl',
      boyorgirl: 'Boy or girl with equal probability',
      gender: 'Gender',
      calendarHeader: 'Calendar probability of conceiving a boy or girl',
      methodsListPanelTitle:"Use methods in the calculation",
      calendarFooter: 'Legend',
      precision: 'Precision',
      powerindex: 'Some methods allow you to calculate how prevailing the probability of a given gender over another',
      shareUs: "Recommend the calculator to friends",
      writeDevsTitle: "Write to developers",
      writeDevsText1: "Have questions?",
      writeDevsText2:"Email us!",
      donateDevsTitle: "Donate",
      donateDevsText1: "If you like BabyCalc, you can financially support the developers PayPal transfer",
      donateDevsText2: "Thank you so much!",
      disclaimer: 'Attention! The calculator is based on calculation methods not confirmed by official medical research and does not guarantee 100% accuracy!',
      mailButton:'Send Email',
      donateButton: 'Send PayPal transfer'

    }),
    new MLanguage('es').create({
      langName: 'Español',
      title: 'BabyCalc - calculadora de predicción de género de bebé',
      aboutPart1:'Aquí puedes predecir el género del feto. Para los cálculos, se utilizan la teoría de la renovación de la sangre, el calendario lunar chino y el método tradicional japonés.',
      aboutPart2:'Conociendo la fecha estimada de la concepción, puede averiguar a quién está esperando: un niño o una niña. También puede crear un calendario que indique el género más probable del niño para cada día de concepción. Esta característica será útil para aquellos que sueñan con un niño de cierto género y planean un embarazo.',
      aboutPart3:'Para los cálculos, se utilizan la teoría de la renovación de la sangre, el calendario lunar chino y el método tradicional japonés. Puede usar los tres métodos en los cálculos a la vez o elegir los preferidos.',
      modeSectionHeader: 'Elige un modo',
      mbdayTitle: 'Fecha de nacimiento de la madre',
      fbdayTitle: 'Fecha de nacimiento del padre',
      concdayTitle: 'Fecha de la concepción',
      datemodeTitle: 'Predecir el género del niño por la fecha de concepción',
      calendarmodeTitle: 'Crea un calendario de previsión',
      methodslistTitle: 'Métodos de cálculo',
      bloodMethodName: 'Antigüedad de sangre',
      chineseMethodName: 'Calendario lunar chino',
      japaneseMethodName: 'La tabla japonesa',
      bloodMethodFullName: 'Calculado por el método de antigüedad de sangre',
      chineseMethodFullName: 'Calculado según la tabla china',
      japaneseMethodFullName: 'Calculado por la tabla japonesa',
      displayOverallTitle: 'Mostrar pronóstico generalizado',
      displaySeparatedTitle: 'Mostrar los resultados del método por separado',
      methodsWarn: 'Por favor seleccione al menos un método',
      chineseAgeWarn: 'El cálculo según el calendario lunar chino está disponible para la edad de la madre de 18 a 45 años. La edad que especificó no se incluye en este período y no se calcula el pronóstico para el calendario lunar chino.',
      datesWarn: 'Para obtener un pronóstico, especifique las fechas de nacimiento de los padres',
      bloodMethodDescription: 'El método se basa en la teoría de la renovación sanguínea. La sangre masculina se renueva cada 4 años, la sangre femenina, cada tres años. Cuya sangre es más joven al momento de la concepción, tal género tendrá un hijo',
      chineseMethodDescription: '"La teoría tradicional china, según la cual el género del niño está determinado por la combinación de la edad de la madre y el mes de la concepción",',
      japaneseMethodDescription: 'Teoría japonesa que calcula la probabilidad de un niño o niña en función de la edad del padre y la madre, así como el mes de la concepción',
      confidenceBlood: "La confianza en el pronóstico se calcula en función de la diferencia en las edades de la sangre del padre y la madre. Cuanto mayor es la diferencia de edad, mayor es la confianza en el pronóstico.",
      confidenceChinese: 'Este método no calcula la confianza en el pronóstico.',
      confidenceJapanese: "La confianza en el pronóstico se calcula con base en los datos de la tabla.",
      boy: 'El niño',
      girl: 'La nina',
      boyorgirl: 'El niño o la niña con igual probabilidad',
      gender: 'Género',
      calendarHeader: "Calendario probabilidad de concebir un niño o una niña",
      methodsListPanelTitle:"Usar métodos en el cálculo",
      calendarFooter: 'Leyenda',
      precision: 'Pecisión',
      powerindex: 'Algunos métodos le permiten calcular cómo prevalece la probabilidad de un género determinado sobre otro',
      shareUs: "Recomienda la calculadora a tus amigos",
      writeDevsTitle: "Escribe a los desarrolladores",
      writeDevsText1: "¿Alguna pregunta?",
      writeDevsText2: "¡Envíenos un correo electrónico!",
      donateDevsTitle: "Donar",
      donateDevsText1: "Si te gusta BabyCalc, puedes apoyar financieramente a los desarrolladores con la traducción de PayPal",
      donateDevsText3: "¡Muchas gracias!",
      disclaimer: '¡Atención! La calculadora se basa en métodos de cálculo no confirmados por la investigación médica oficial y no garantiza una precisión del 100%.',
      mailButton:'Enviar correo electrónico',
      donateButton: 'Enviar transferencia de PayPal'
    })
  ]
})
