import augmentationImage from '../assets/images/Augmentation.jpg'
import consultationImage from '../assets/images/2consult.png'
import preparationImage from '../assets/images/preparation.jpg'
import surgeryImage from '../assets/images/surgery.jpg'
import surgeryImage1 from '../assets/images/surgeriImage1.png'
import surgeryImage2 from '../assets/images/surgeriImage2.jpg'
import rehabilitationImage from '../assets/images/reabilitacion.jpg'
import resultsImage from '../assets/images/results.jpg'
import abdominoplastyImage from '../assets/images/bodi1.jpg'

const operationsData = {
  operations: [
    {
      title: 'Augmentation',
      description:
        'Операція по збільшенню грудей. підходить жінкам, які мають помітні вікові зміни молочних залоз...',
      shortDescription:
        'Повернути красиву форму грудей можливо після пологів та грудного вигодовування.',
      image: augmentationImage,

      consultation: {
        title: 'Консультація по збільшенню грудей',
        details: `
          <ul>
            <li> Консультація хірурга: огляд, анамнез, підбір імплантів, пояснення процедури. </li>
            <li> Проведення лабораторних аналізів та додаткових обстежень. </li>
            <li> Консультації інших фахівців — терапевта, анестезіолога. </li>
          </ul>
        `,
        image: consultationImage,
      },

      preparation: {
        title: 'Підготовка до операції',
        steps: [
          'Пройдіть медичне обстеження',
          'Здайте аналізи',
          'УЗД молочних залоз, R-графія, ЕКГ...',
        ],
        image: preparationImage,
      },

      surgery: {
        title: 'Процес операції',
        description: `
          Операція триває 2-3 години під загальним наркозом.
          Методи проведення операції та способи встановлення імплантату.
        `,
        image: [surgeryImage, surgeryImage1, surgeryImage2],
      },

      rehabilitation: {
        title: 'Реабілітація після операції',
        steps: [
          '7 днів без фізичних навантажень.',
          'Носіть компресійну білизну.',
          'Уникайте тренувань та вагітності протягом 6 місяців.',
        ],
        image: rehabilitationImage,
      },

      results: {
        title: 'Результати операції',
        description:
          'Після повної реабілітації ви отримаєте бажаний результат...',
        image: resultsImage,
      },
    },

    {
      title: 'Abdominoplasty',
      description:
        'Абдомінопластика — це пластика живота для покращення контурів тіла...',
      shortDescription: 'Пластика живота для створення стрункішого тіла.',
      image: abdominoplastyImage,

      consultation: {
        title: 'Консультація по абдомінопластиці',
        details: `
          <ul>
            <li>Огляд і консультація з хірургом.</li>
            <li>Планування процедури та обговорення ризиків.</li>
            <li>Проведення необхідних аналізів.</li>
          </ul>
        `,
        image: consultationImage,
      },

      preparation: {
        title: 'Підготовка до операції',
        steps: [
          'Проведення аналізів.',
          'Консультації з фахівцями.',
          'Підготовка тіла до операції.',
        ],
        image: preparationImage,
      },

      surgery: {
        title: 'Процес операції',
        description: `
          Операція полягає у видаленні надлишкової шкіри та жиру і підтяжці м’язів живота.
        `,
        image: surgeryImage,
      },

      rehabilitation: {
        title: 'Реабілітація після операції',
        steps: [
          'Дотримання постільного режиму.',
          'Носіння компресійного одягу.',
          'Обмеження фізичних навантажень.',
        ],
        image: rehabilitationImage,
      },

      results: {
        title: 'Результати операції',
        description: 'Плоский живіт та покращені контури тіла.',
        image: resultsImage,
      },
    },

    // інші операції
  ],
}

export default operationsData
