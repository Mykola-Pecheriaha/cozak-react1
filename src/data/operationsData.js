import augmentationImage from '../assets/images/Augmentation.jpg'
import consultationImage from '../assets/images/2consult.png'
import preparationImage from '../assets/images/preparation.jpg'
import surgeryImage from '../assets/images/surgery.jpg'
import surgeryImage1 from '../assets/images/surgeriImage1.png'
import surgeryImage2 from '../assets/images/surgeriImage2.jpg'
import rehabilitationImage from '../assets/images/reabilitacion.jpg'
import resultsImage from '../assets/images/results.jpg'

const operationsData = {
  operations: [
    {
      title: 'Augmentation',
      description:
        'Операція по збільшенню грудей. підходить жінкам, які мають  помітні вікові зміни молочних залоз, або ж володіють маленьким або великим  об’ємом грудей. Збільшуюча маммопластика рекомендована жінкам з вродженим недорозвиненням грудей, а також в тих випадках, коли молочні залози зазнали змін в результаті великої втрати ваги. Повернути красиву форму грудей можливо після пологів та грудного вигодовування.',
      shortDescription:
        ' Повернути красиву форму грудей можливо після пологів та грудного вигодовування.',
      image: augmentationImage,

      consultation: {
        title: 'Консультація по збільшенню грудей',
        details: `Процес підготовки містить декілька етапів: <br />
          <ul>
            <li> Консультація хірурга: огляд, анамнез, підбір імплантів, пояснення процедури. </li>

          <li>Проведення лабораторних аналізів та додаткових обстежень (УЗД молочних залоз, мамографія, флюорографія).</li>
          <li>Консультації інших фахівців — терапевта, анестезіолога, підбір наркозу. </li>
          <li>Виключення протипоказань до ендопротезування молочних залоз</li>

            </ul>
          За два тижні до операції:
            <ul>
            <li>Припинення прийому препаратів, які впливають на згортання крові.</li>
          <li>За день до втручання: відмова від алкоголю, жирних і гострих страв. </li>
          <li>За 6 годин до операції: припинення їжі; за 4 години — рідини. </li>
          </ul>
        `,

        image: consultationImage, // Додаємо зображення для консультації
      },

      preparation: {
        title: 'Підготовка до операції',
        steps: [
          'Пройдіть медичне обстеження',

          '- ультразвукове дослідження молочних залоз',
          '- R-графія ОГК',
          '- ЕКГ',
          '',
          'Лабораторне дослідження крові',
          '- загальний морфологічний аналіз крові',
          '- загальний аналіз сечі',
          '- коагулограма',
          '- цукор крові',
          '- сечовина і креатинин',
          '- білірубін, АЛТ, АСТ',
          '- група крові і Rh-належність',
          '- RW, HBsAg',
        ],
        image: preparationImage,
      },

      surgery: {
        title: 'Процес операції',
        description: `
          Операція триває 2-3 години під загальним наркозом.
      
          Методи проведення операції:

        Аксілярний (пахвовий).
          Доступ до грудей здійснюється через надріз у пахвових западинах, тканини молочних залоз за такого методу операції не зачіпаються.

        Параареолярний.
          Доступ до грудей через ареоли сосків, при цьому косметичний післяопераційний рубець залишається практично непомітним, часто такий метод застосовується в поєднанні з круговою підтяжкою грудей.

        Субмаммарний. 
          Найбезпечніший метод, доступ до тканин здійснюється через розріз під грудьми в природній складці.
      
          Способи встановлення імплантату:
        Під молочну залозу. 
          Використовується вкрай рідко, встановлення імплантату можливе тільки за наявності достатнього обсягу м’яких тканин і малого розміру грудей.
        Під грудний м’яз у двох площинах.
          Верхня частина імплантатів опиняється під грудним м’язом, а нижня — під залозистою тканиною, що забезпечує надійний захист від промацування і зміщення.
        Під фасцію великого грудного м’яза. 
          Цей спосіб забезпечує додаткову фіксацію протезу завдяки зрощенню з грудним м’язом.
        `,
        image: [surgeryImage, surgeryImage1, surgeryImage2],
      },
      rehabilitation: {
        title: 'Реабілітація після операції',
        steps: [
          'Важливим етапом після корекції, збільшення грудей є період реабілітації. Після операції слід чітко дотримуватись рекомендацій лікаря.',
          'перші 7 днів відмовитись від будь-яких фізичних навантажень;',
          'носити спеціальну компресійну білизну (не менше 2-х місяців);',
          'біля 2-х місяців після операції не займатись фізичними вправами, зменшити навантаження на тіло;',
          '',
          'Носіння компресійної білизни',
          'Уникнення фізичних навантажень...',
          'відмовитись від професійних тренувань, планування вагітності на період від 6 місяців після мамопластики.',
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
      title: 'Reduction',
      description: 'Операція по зменшенню грудей...',
      image: '/path-to-image/reduction.jpg',
      // Додайте такі ж розділи для цієї операції
    },
    // інші операції
  ],
}

export default operationsData
