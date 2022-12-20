// dummy menu
import soup from "../assets/restaurantMenus/25097.jpg";
import mainMeal from "../assets/restaurantMenus/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg";
import hotMeal from "../assets/restaurantMenus/Hot_meal_header_copy.jpg";
import salad from "../assets/restaurantMenus/salmon-nicoise-salad-FT-RECIPE0221-984254ccb3734468836570330b4ff897.jpg";
import cocacola from "../assets/restaurantMenus/cocacola_can.png";

// control panel
import call from "../assets/images/menu-panel/call.png";
import complaint from "../assets/images/menu-panel/complaint.png";
import request from "../assets/images/menu-panel/request.png";
import electrician from "../assets/images/menu-panel/electrician.png";
import mechanic from "../assets/images/menu-panel/mechanic.png";
import guest from "../assets/images/menu-panel/guest.png";
import meeting from "../assets/images/menu-panel/meeting.png";
import cinema from "../assets/images/menu-panel/cinema.png";
import massage from "../assets/images/menu-panel/massage.png";

import servicePayment from "../assets/images/menu-panel/pbrlogo.png";
import utilities from "../assets/images/menu-panel/utilities.svg";
import phone from "../assets/images/menu-panel/telephone.svg";
import internet from "../assets/images/menu-panel/internet.svg";
import cableTv from "../assets/images/menu-panel/tv.svg";

// control panel
import generalBase from "../assets/managmentPanel/data-network.png";
import tasks from "../assets/managmentPanel/list.png";
import card from "../assets/managmentPanel/card.png";
import notification from "../assets/managmentPanel/notification.png";
import report from "../assets/managmentPanel/report.png";
import sync from "../assets/managmentPanel/sync.png";
import user from "../assets/managmentPanel/user.png";
import email from "../assets/managmentPanel/email.png";
import money from "../assets/managmentPanel/money.png";
import wallet from "../assets/managmentPanel/wallet.png";
import setting from "../assets/managmentPanel/setting.png";
import tools from "../assets/managmentPanel/tools.png";
import phoneCall from "../assets/managmentPanel/phone-call.png";
import magnifiyingGlass from "../assets/managmentPanel/magnifying-glass.png";
import announcement from "../assets/managmentPanel/megaphone.png";
import rent from "../assets/managmentPanel/rent.png";
import invoice from "../assets/managmentPanel/invoice.png";
import bed from "../assets/managmentPanel/bed.png";
import chef from "../assets/managmentPanel/chef.png";

// sidebar
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";

import onlineRegistration from "../assets/managmentPanel/online-registration.png";
import parking from "../assets/managmentPanel/parking.png";
import maintenance from "../assets/managmentPanel/maintenance.png";
import meetingRoom from "../assets/managmentPanel/coworking.png";
import paymentGateway from "../assets/managmentPanel/payment-gateway.png";
import customerService from "../assets/managmentPanel/customer-service.png";
import market from "../assets/managmentPanel/market.png";

// control panels
export const adminDashboardPanels = [
  {
    id: 1,
    title: "",
    panels: [
      {
        id: 1,
        img: generalBase,
        title: "umumibaza",
        subCategory: [
          {
            img: request,
            title: "Müraciət",
          },
          {
            img: complaint,
            title: "Şikayət",
          },
          {
            img: call,
            title: "Zəng edin",
          },
        ],
      },
      {
        id: 2,
        img: sync,
        title: "dovriyyemodulu",
        subCategory: [
          {
            img: electrician,
            title: "Elektrik",
          },
          {
            img: mechanic,
            title: "Mexanik",
          },
          {
            img: request,
            title: "Müraciət",
          },
          {
            img: call,
            title: "Zəng edin",
          },
        ],
      },
      {
        id: 3,
        img: card,
        title: "kartlarinqeydiyyatmodulu",
        subCategory: [
          {
            img: request,
            title: "Müraciət",
          },
          {
            img: guest,
            title: "Qonaq Müraciəti",
          },
          {
            img: call,
            title: "Zəng edin",
          },
        ],
      },
      {
        id: 4,
        img: user,
        title: "sexsikabinet",
        subCategory: [
          {
            img: request,
            title: "Müraciət",
          },
          {
            img: complaint,
            title: "Şikayət",
          },
          {
            img: call,
            title: "Zəng edin",
          },
        ],
      },
      {
        id: 5,
        img: tasks,
        title: "tapsiriqmodulu",
        subCategory: [
          {
            img: meeting,
            title: "İclas otağı",
          },
          {
            img: cinema,
            title: "Kinozal",
          },
          {
            img: massage,
            title: "Masaj",
          },
        ],
      },
      {
        id: 6,
        img: report,
        title: "statistikgostericiler",
        link: "/restaurant-menu-orders",
      },
      {
        id: 7,
        img: notification,
        title: "anonsvebildirislermodulu",
        link: "/notifications",
      },
      {
        id: 8,
        img: email,
        title: "muracietler",
        link: "/notifications",
      },
    ],
  },
  {
    id: 2,
    title: "odeneisvemaliyyepaneli",
    panels: [
      {
        id: 1,
        img: wallet,
        title: "mesreflerinqeydiyyati",
        link: "/login",
      },
      {
        id: 2,
        img: money,
        title: "maliyyeplanı",
        link: "/communalservices/utilities",
      },
      {
        id: 3,
        img: magnifiyingGlass,
        title: "maliyyegostericileri",
        link: "/communalservices/telephone",
      },
    ],
  },
];

export const dashboardPanels = [
  {
    id: 1,
    title: "",
    panels: [
      {
        id: 1,
        parentId: 1,
        title: "Qonaqların Qeydiyyatı",
        img: onlineRegistration,
      },
      {
        id: 2,
        title: "Parkinq Sifarişi",
        img: parking,
        link: "/",
      },
      {
        id: 3,
        title: "Texniki Personal",
        img: maintenance,
        subCategory: [
          {
            id: 1,
            title: "Elektrik",
            img: setting,
          },
          {
            id: 2,
            title: "Mexanik",
            img: tools,
          },
          {
            id: 3,
            title: "Müraciət",
            img: email,
          },
          {
            id: 4,
            title: "Zəng edin",
            img: phoneCall,
          },
        ],
      },
      {
        id: 4,
        title: "Daxili Miting Otağı",
        img: meetingRoom,
        link: "/meetingroom",
      },
      {
        id: 5,
        title: "Elanlar lövhəsi",
        img: announcement,
        panels: [],
      },
      {
        id: 6,
        title: "Müraciət və Şikayətlər",
        img: email,
        link: "/requests",
      },
      {
        id: 7,
        title: "Əlavə Xidmətlər",
        img: market,
        subCategory: [
          {
            id: 1,
            img: chef,
            title: "Yemək sifarişi",
            link: "/",
          },
          {
            id: 2,
            img: bed,
            title: "İstirahət otağı",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Ödəniş və Maliyyə",
    panels: [
      {
        id: 1,
        parentId: 2,
        title: "Ödənişlər",
        img: paymentGateway,
        subCategory: [
          {
            id: 1,
            title: "Icarə ödənişi",
            img: rent,
            link: "/rentpayment",
          },
          {
            id: 2,
            title: "Ödənişlərin arxivi",
            img: invoice,
            link: "",
          },
        ],
      },
    ],
  },
];

// sidebar list
export const sideBarMenu = [
  {
    id: 1,
    title: "idareetmepaneli",
    icon: AdminPanelSettingsOutlinedIcon,
    path: "/",
  },
  {
    id: 2,
    title: "elanlarlovhesi",
    icon: CampaignOutlinedIcon,
    path: "/",
  },
  {
    id: 3,
    title: "idareetme",
    icon: BusinessCenterOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "Qonaqların Qeydiyyatı",
        icon: DnsOutlinedIcon,
        path: "/",
      },
      {
        title: "Parkinq Sifarişi",
        icon: CurrencyExchangeIcon,
        path: "/",
      },
      {
        title: "Texniki Personal",
        icon: AddCardOutlinedIcon,
        path: "/",
      },
      {
        title: "Daxil Miting Otağı",
        icon: Person2OutlinedIcon,
        path: "/",
      },
      {
        title: "Müraciət və Şikayətlər",
        icon: FormatListBulletedOutlinedIcon,
        path: "/",
      },
      {
        title: "Biznes Mərkəzi",
        icon: EqualizerOutlinedIcon,
        path: "/",
      },
    ],
  },
  {
    id: 4,
    title: "odeneisvemaliyyepaneli",
    icon: PriceCheckOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "Ödənişlər",
        icon: AccountBalanceWalletOutlinedIcon,
        path: "/",
      },
      {
        title: "Əlavə xidmətlər",
        icon: AttachMoneyOutlinedIcon,
        path: "/",
      },
    ],
  },
  { id: 5, title: "elaqe", icon: LocalPhoneOutlinedIcon, path: "/contact" },
  {
    id: 6,
    title: "melumatmasasi",
    icon: InfoOutlinedIcon,
    path: "/information",
  },
  {
    id: 7,
    title: "istifadeci",
    icon: AccountCircleOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "profil",
        icon: PersonOutlineOutlinedIcon,
        path: "/profile",
      },
      {
        title: "yazisma",
        icon: TelegramIcon,
        path: "/",
      },
    ],
  },
];

// sidebar list
export const adminSidebarMenu = [
  {
    id: 1,
    title: "idareetmepaneli",
    icon: AdminPanelSettingsOutlinedIcon,
    path: "/",
  },
  {
    id: 2,
    title: "elanlarlovhesi",
    icon: CampaignOutlinedIcon,
    path: "/",
  },
  {
    id: 3,
    title: "idareetme",
    icon: BusinessCenterOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "umumibaza",
        icon: DnsOutlinedIcon,
        path: "/",
      },
      {
        title: "dovriyyemodulu",
        icon: CurrencyExchangeIcon,
        path: "/",
      },
      {
        title: "kartlarinqeydiyyatmodulu",
        icon: AddCardOutlinedIcon,
        path: "/",
      },
      {
        title: "sexsikabinet",
        icon: Person2OutlinedIcon,
        path: "/",
      },
      {
        title: "tapsiriqmodulu",
        icon: FormatListBulletedOutlinedIcon,
        path: "/",
      },
      {
        title: "statistikgostericiler",
        icon: EqualizerOutlinedIcon,
        path: "/",
      },
    ],
  },
  {
    id: 4,
    title: "odeneisvemaliyyepaneli",
    icon: PriceCheckOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "mesreflerinqeydiyyati",
        icon: AccountBalanceWalletOutlinedIcon,
        path: "/",
      },
      {
        title: "maliyyeplanı",
        icon: AttachMoneyOutlinedIcon,
        path: "/",
      },
      {
        title: "maliyyegostericileri",
        icon: QueryStatsOutlinedIcon,
        path: "/",
      },
    ],
  },
  { id: 5, title: "elaqe", icon: LocalPhoneOutlinedIcon, path: "/contact" },
  {
    id: 6,
    title: "melumatmasasi",
    icon: InfoOutlinedIcon,
    path: "/information",
  },
  {
    id: 7,
    title: "istifadeci",
    icon: AccountCircleOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "profil",
        icon: PersonOutlineOutlinedIcon,
        path: "/profile",
      },
      {
        title: "yazisma",
        icon: TelegramIcon,
        path: "/",
      },
    ],
  },
];

// restaurant menu
export const dummyMenu = [
  {
    id: 1,
    category: "Suplar",
    subCategory: true,
    content: [
      {
        subCategory: "adi suplar",
        content: [
          {
            id: 1,
            name: "Tomat supu",
            price: 8,
            amount: 8,
            count: 1,
            img: soup,
            rating: 3,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
          {
            id: 2,
            name: "Mərci supu",
            price: 8,
            amount: 8,
            img: soup,
            rating: 4,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            count: 1,
            category: "soups",
          },
          {
            id: 3,
            name: "Toyuq Tərəvəz şorbası",
            price: 8,
            amount: 8,
            img: soup,
            rating: 5,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            count: 1,
            category: "soups",
          },
          {
            id: 4,
            name: "Əriştə",
            price: 8,
            amount: 8,
            img: soup,
            rating: 6,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            count: 1,
            category: "soups",
          },
        ],
      },
      {
        subCategory: "Əriştələr",
        content: [
          {
            id: 1,
            name: "Eriste 1",
            price: 8,
            amount: 8,
            count: 1,
            img: soup,
            rating: 3,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
          {
            id: 1,
            name: "Eriste 2",
            price: 8,
            amount: 8,
            count: 1,
            img: soup,
            rating: 3,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "isti qəlyanaltılar",
    subCategory: false,
    content: [
      {
        id: 5,
        name: "Qızardılmış Krivetler",
        price: 6,
        amount: 6,
        img: hotMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "hot meal",
      },
      {
        id: 6,
        name: "Qızardılmış Toyuq Filesi",
        price: 8,
        amount: 8,
        img: hotMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "hot meal",
      },
      {
        id: 7,
        name: "Qızardılmış Kalimar",
        price: 12,
        amount: 12,
        img: hotMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "hot meal",
      },
      {
        id: 8,
        name: "Pendirli Börək",
        price: 20,
        amount: 20,
        img: hotMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "hot meal",
      },
    ],
  },
  {
    id: 3,
    category: "əsas yemeklər",
    subCategory: false,
    content: [
      {
        id: 9,
        name: "Qızardılmış qızılbalıq",
        price: 20,
        amount: 20,
        img: mainMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "main meal",
      },
      {
        id: 10,
        name: "Kremli qızılbalıq filesi",
        price: 20,
        amount: 20,
        img: mainMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "main meal",
      },
      {
        id: 11,
        name: "Mal əti Tagliata",
        price: 20,
        amount: 20,
        img: mainMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "main meal",
      },
      {
        id: 12,
        name: "Mal əti medalyonu",
        price: 20,
        amount: 20,
        img: mainMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "main meal",
      },
    ],
  },
  {
    id: 4,
    category: "saladlar",
    subCategory: false,
    content: [
      {
        id: 13,
        name: "Toyyuqlu Sezar",
        price: 20,
        amount: 20,
        img: salad,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "salads",
      },
      {
        id: 14,
        name: "Krivetkali Sezar",
        price: 20,
        amount: 20,
        img: salad,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "salads",
      },
      {
        id: 15,
        name: "Qızıl Balıq Salatı",
        price: 20,
        amount: 20,
        img: salad,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "salads",
      },
      {
        id: 16,
        name: "Yunan Salati",
        price: 20,
        amount: 20,
        img: salad,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "salads",
      },
    ],
  },
  {
    id: 5,
    category: "içkilər",
    subCategory: false,
    content: [
      {
        id: 17,
        name: "Coca-Cola",
        price: 3,
        amount: 3,
        img: cocacola,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "drinks",
      },
    ],
  },
];

// communal services
export const mockData = [
  {
    id: 1,
    img: servicePayment,
    title: "servisodenisi",
    path: "/",
  },
  {
    id: 2,
    img: utilities,
    title: "kommunal",
    path: "/communalservices/utilities",
  },
  {
    id: 3,
    img: phone,
    title: "telefon",
    path: "/communalservices/telephone",
  },
  {
    id: 4,
    img: internet,
    title: "internet",
    path: "/",
  },
  {
    id: 5,
    img: cableTv,
    title: "kabeltv",
    path: "/",
  },
];
