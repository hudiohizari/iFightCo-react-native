import { IconVirus, 
    IconHospital, 
    IconBook,
    IconStethoscope,
    IconDatabase,
    IconPhone,
    IconDtPeduli,
    IconSearch,
    IconBarChart } from '../utils/repo/local/SvgRequestManager'

import Keys from './Keys'

export const ActiveOpacityDashboardMenu = Platform.OS == "android" ? 0.85 : 0.6

export const MenuList = [
    {
        id: Keys.KEY_MENU_RS_RUJUKAN,
        title: 'RS Rujukan',
        img: IconHospital,
        isActive: false
    },
    {
        id: Keys.KEY_MENU_EDUKASI_COVID,
        title: 'Edukasi COVID-19',
        img: IconBook,
        link: "https://www.prixa.ai/post/corona-covid-19/",
        isActive: true
    },
    {
        id: Keys.KEY_MENU_DIAGNOSA_MANDIRI,
        title: 'Diagnosa Mandiri',
        img: IconStethoscope,
        link: "https://covid19.prixa.ai/?pId=817d1193-f4ce-439e-b357-16466695d970&appId=9f9d9731-8331-4cb3-a441-95d5d8b44d7f/",
        isActive: true
    },
    {
        id: Keys.KEY_MENU_DATA_INTERNASIONAL,
        title: 'Data Internasional',
        img: IconDatabase,
        link: "https://www.worldometers.info/coronavirus/",
        isActive: true
    },
    {
        id: Keys.KEY_MENU_HOTLINE,
        title: 'Hotline',
        img: IconPhone,
        isActive: true
    },
    {
        id: Keys.KEY_MENU_INDONESIA_PEDULI,
        title: 'Indonesia Peduli',
        img: IconDtPeduli,
        link: "https://dtpeduli.org/donasi/program/",
        isActive: true
    },
    {
        id: Keys.KEY_MENU_LACAK_ODSODP,
        title: 'Lacak ODS/ODP Belitung',
        img: IconSearch,
        isActive: false
    },
    {
        id: Keys.KEY_MENU_GRAFIK_INDONESIA,
        title: 'Grafik Indonesia',
        img: IconBarChart,
        link: "https://infocorona.id/chart/",
        isActive: true
    },
]

export const SponsorList = [
    {
        id: Keys.KEY_SPONSOR_KEMENKES,
        title: 'Kemenkes',
        img: require('../assets/images/img_kemenkes.png'),
        link: "https://www.kemkes.go.id/",
        isActive: true
    },
    {
        id: Keys.KEY_SPONSOR_BNBP,
        title: 'BNBP',
        img: require('../assets/images/img_bnbp.png'),
        link: "https://bnpb.go.id/",
        isActive: true
    },
    {
        id: Keys.KEY_SPONSOR_PRIXA,
        title: 'Prixa',
        img: require('../assets/images/img_prixa.png'),
        link: "https://www.prixa.ai/",
        isActive: true
    },
    {
        id: Keys.KEY_SPONSOR_IDCLOUDHOST,
        title: 'ID Cloudhost',
        img: require('../assets/images/img_idcloudhost.png'),
        link: "https://idcloudhost.com/",
        isActive: true
    },
    {
        id: Keys.KEY_SPONSOR_DRAMA_TELYU,
        title: 'DRAMA TEL-U',
        img: require('../assets/images/img_drama_telyu.png'),
        link: "https://www.instagram.com/drama.telyu/",
        isActive: true
    },
    {
        id: Keys.KEY_SPONSOR_BELITUNG,
        title: 'Kabupaten Belitung',
        img: require('../assets/images/img_belitung.png'),
        link: "https://belitungkab.go.id/",
        isActive: true
    }
]