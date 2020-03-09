import { IData } from './interfaces'

export const DATA: IData[] = [
  {
    id: '1',
    img: 'https://images.barrons.com/im-117923?width=620&size=1.5005861664712778',
    text: 'Awesome text for post 1',
    date: new Date().toJSON(),
    booked: true,
  },
  {
    id: '2',
    img: 'http://congress.cimne.com/DBMC2020/frontal/images/BCN-City/1.jpg',
    text: 'Awesome text for post 2',
    date: new Date().toJSON(),
    booked: false,
  },
  {
    id: '3',
    img: 'https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/019/TokyoMtFuji_Adobe.jpg',
    text: 'Awesome text for post 3',
    date: new Date().toJSON(),
    booked: false,
  },
  {
    id: '4',
    img: 'https://la-mansh.com.ua/images/kartinki/kartinki_articles/kiev.jpg',
    text: 'Awesome text for post 4',
    date: new Date().toJSON(),
    booked: true,
  },
  {
    id: '5',
    img: 'https://i.ytimg.com/vi/RHeaChyTciM/maxresdefault.jpg',
    text: 'Awesome text for post 5',
    date: new Date().toJSON(),
    booked: false,
  },
]