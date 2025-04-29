// src/assets/menuData.js
import { Building2, ChartBarStacked, CircleGauge, FileUser, Flag, LayoutDashboard, ListOrdered, PackageSearch, Table } from "lucide-react";
import { BsCashCoin } from "react-icons/bs";
import {FaMoneyCheckAlt } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney, } from "react-icons/gi";
import { MdMonetizationOn } from "react-icons/md";



export const menuData = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: CircleGauge,
    iconColor:'text-green-500',
  },
  {
    name: "Reports",
    path: "/reports",
    icon: Flag,
    iconColor:'text-blue-500',
    submenu: [
      { name: "Satış", path: "/reports/sales" },
      { name: "Giderler", path: "/reports/expense" },
      { name: "Cari Listesi", path: "/reports/current-accounts" },
    ],
  },
  {
    name: "Product",
    path: "/product",
    icon: PackageSearch,
    iconColor:'text-red-500',
    submenu: [
        { name: "Product List", path: "/product/list" },
        { name: "Add Product", path: "/product/add" },
       
      ],
  },
  {
    name: "Category",
    path: "/category",
    icon: ChartBarStacked,
    iconColor:'text-purple-500',
    submenu: [
        { name: "Category List", path: "/category/list" },
        { name: "Add Category", path: "/category/add" },
        { name: "Add SubCategory", path: "/category/add-subcategory" },
        

      ],
  },
  {
    name: "Business",
    path: "/business",
    icon: Building2,
    iconColor:'text-yellow-500',

    submenu: [
        { name: "My Business", path: "/business/profile" },
        { name: "Create Business", path: "/business/add" },
        { name: "Add Wi-Fi", path: "/business/add-wifi" },
        { name: "Wi-Fi List", path: "/business/wifi-list" },


      ],
  },
  {
    name: "Orders",
    path: "/order/list",
    icon: ListOrdered ,
    iconColor:'text-teal-500',

    // submenu: [
    //     { name: "Orders List", path: "/order/list" },
    //     { name: "Paid Orders", path: "/order/paid" },
    //     { name: "Unpaid Orders", path: "/order/unpaid" },
    //   ],
  },
  {
    name: "StepCounter",
    path: "/dad",
    icon: ListOrdered ,
    iconColor:'text-teal-500',

    // submenu: [
    //     { name: "Orders List", path: "/order/list" },
    //     { name: "Paid Orders", path: "/order/paid" },
    //     { name: "Unpaid Orders", path: "/order/unpaid" },
    //   ],
  },
  {
    name: "Tables",
    path: "/table",
    icon: Table,
    iconColor:'text-orange-500',

    submenu: [
        { name: "Tables List", path: "/table/list" },
        { name: "Add Table", path: "/table/add" },
        
      ],
  },
  {
    name: "Personel",
    path: "/personel",
    icon: FileUser,
    iconColor:'text-red-600',

    submenu: [
        { name: "Personel List", path: "/personel/list" },
        { name: "Add Personel", path: "/personel/add" },
      ],
  },
];

export const dashboardData = [
  {
    title: "Günlük Ciro",
    subtitle: "Bugün",
    value: 10200,
    icon: MdMonetizationOn,
    iconColor:{
      bg: " bg-blue-300",
      text: "text-blue-600"
    },
    bgColor: "from-blue-400 to-blue-900",
    textColor: "text-blue-200",
    percentageColor:"text-blue-500",
    openHour: 8,  // Açılış saati
    openMinute: 0, // Açılış dakikası
    closeHour: 23, // Kapanış saati
    closeMinute: 0, // Kapanış dakikası
  },
  {
    title: "Nakit",
    value: 8200,
    subtitle: "Bugün",
    icon: BsCashCoin,
    iconColor:{
      bg: " bg-green-300",
      text: "text-green-600"
    },
    bgColor: "from-green-400 to-green-900",
    textColor: "text-green-200",
    percentage: () => {return (dashboardData[1].value/dashboardData[0].value)*100},
    percentageColor:"text-green-400"
  },
  {
    title: "Kredi Kart",
    value: 2000,
    subtitle: "Bugün",
    icon: FaMoneyCheckAlt, // Farklı bir ikon da ekleyebilirsiniz
    iconColor:{
      bg: " bg-yellow-300",
      text: "text-yellow-600"
    },
    bgColor: "from-yellow-400 to-yellow-900",
    textColor: "text-yellow-200",
    percentage:() => {return (dashboardData[2].value/dashboardData[0].value)*100},
    percentageColor:"text-yellow-400"
  },
  {
    title: "Masraf",
    value: 1000,
    subtitle: "Bugün",
    icon: GiPayMoney,
    iconColor:{
      bg: " bg-red-300",
      text: "text-red-600"
    },
    bgColor: "from-red-400 to-red-900",
    textColor: "text-red-200", 
    percentage:() => {return (dashboardData[3].value/dashboardData[0].value)*100},
    percentageColor:"text-red-400"
  },
  {
    title: "Net Kalan",
    value: 9200,
    subtitle: "Bugün",
    icon: GiReceiveMoney,
    iconColor:{
      bg: "bg-fuchsia-300",
      text: "text-fuchsia-600"
    },
    bgColor: "from-fuchsia-400 to-fuchsia-900",
    textColor: "text-fuchsia-200",
    percentage:() => {return (dashboardData[4].value/dashboardData[0].value)*100},
    percentageColor:"text-fuchsia-400"
  }
];

// formData.js
export const loginFields = [
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter your password',
  },
];

export const registerFields = [
  {
    id: 'name',
    label: 'Full Name',
    type: 'text',
    name: 'name',
    placeholder: 'Enter your full name',
  },
  {
    id: 'phone',
    label: 'Phone number',
    type: 'number',
    name: 'phone',
    placeholder: 'Enter your phone number',
  },
  ...loginFields,
  {
    id: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Repeat your password',
  },
];

export const foods = [
  {
    id: 1,
    name: 'Adana Kebap',
    price: 120,
    category: 'Kebaplar',
    description: 'Acılı dana ve kuzu etinden hazırlanmış geleneksel Adana kebabı',
  },
  {
    id: 2,
    name: 'İskender',
    price: 135,
    category: 'Kebaplar',
    description: 'Tereyağlı, yoğurtlu döner kebap',
  },
  {
    id: 3,
    name: 'Mercimek Çorbası',
    price: 45,
    category: 'Çorbalar',
    description: 'Kırmızı mercimekten yapılan geleneksel Türk çorbası',
  },
  {
    id: 4,
    name: 'Lahmacun',
    price: 35,
    category: 'Hamur İşleri',
    description: 'İnce hamur üzerine baharatlı kıyma harcı',
  },
  {
    id: 5,
    name: 'Karışık Pide',
    price: 90,
    category: 'Hamur İşleri',
    description: 'Sucuk, kaşar, kıyma ve mantarlı karışık pide',
  },
  {
    id: 6,
    name: 'Künefe',
    price: 65,
    category: 'Tatlılar',
    description: 'İçinde peynir olan şerbetli kadayıf tatlısı',
  },
  {
    id: 7,
    name: 'Menemen',
    price: 55,
    category: 'Kahvaltılıklar',
    description: 'Domates, biber ve yumurtayla yapılan klasik kahvaltılık',
  },
  {
    id: 8,
    name: 'Tavuk Şiş',
    price: 100,
    category: 'Izgaralar',
    description: 'Marine edilmiş tavuk etinden yapılan şiş kebap',
  },
  {
    id: 9,
    name: 'Kuru Fasulye',
    price: 70,
    category: 'Ev Yemekleri',
    description: 'Türk mutfağının klasiklerinden, etli kuru fasulye',
  },
  {
    id: 10,
    name: 'Pilav Üstü Döner',
    price: 95,
    category: 'Döner',
    description: 'Pirinç pilavı üzerinde döner ve tereyağı sosuyla servis edilir',
  },
];

// Ürün alanları
export const productFields = [
  { name: 'name', label: 'Product Name', type: 'text' },
  { name: 'price', label: 'Price', type: 'number' },
  { name: 'category', label: 'Category', type: 'text' },
  { name: 'subcategory', label: 'SubCategory', type: 'text' },
  { name: 'description', label: 'Description', type: 'text' },
];

export const ImageUploadFeild = [
  {
    id: 'image',
    label: 'Product Image',
    type: 'file',
    name: 'image',
    placeholder: 'Upload your product image...',
  }
];

export const businessFields = [
  { name: 'name', label: 'Business Name', type: 'text' },
  { name: 'telephone', label: 'Phone', type: 'number' },
  { name: 'email', label: 'Email', type: 'text' },
  { name: 'address', label: 'Address', type: 'text' },
  { name: 'location', label: 'Location', type: 'text' },
];

export const addPerson = [
  { name: 'name', label: 'Person Name', type: 'text' },
  { name: 'salary', label: 'Person Salary', type: 'number' },
  { name: 'date', label: 'Entry Date', type: 'date' },
  {
    name: 'role',
    label: 'Role',
    type: 'select',
    options : [
      'Kasiyer',       // Casher
      'Garson',        // Waiter
      'Aşçı',          // Cooker
      'Temizlik Görevlisi',
      'Barista',
      'Komî',          // Servis Yardımcısı
      'Şef',           // Head Chef
      'Mutfak Yardımcısı',
      'Kasa Sorumlusu',
    ]
  },

];

export const coupons = [
  {
    id: 1,
    title: "Tatlı İndirimi",
    category: "Tatlı",
    description: "Şekerli tatlar için %20 indirim.",
    expiration: "2025-05-01",
    discount: "20%",
    code: "ABC123",
    icon: "🍰",
    bgGradient: "bg-gradient-to-r from-pink-400 to-red-500",
  },
  {
    id: 2,
    title: "Sağlıklı Seçim",
    category: "Sağlıklı",
    description: "Sağlıklı ürünlerde %15 indirim.",
    expiration: "2025-06-01",
    discount: "15%",
    code: "HEALTH15",
    icon: "🥗",
    bgGradient: "bg-gradient-to-r from-green-400 to-teal-500",
  },
  {
    id: 3,
    title: "Baharatlı Fırsat",
    category: "Baharatlı",
    description: "Baharatlı ürünlerde %10 indirim.",
    expiration: "2025-07-01",
    discount: "10%",
    code: "SPICE10",
    icon: "🌶️",
    bgGradient: "bg-gradient-to-r from-orange-400 to-yellow-500",
  },
  {
    id: 4,
    title: "Kahve",
    category: "Kahve",
    description: "Tüm kahve ürünlerinde %25 indirim.",
    expiration: "2025-08-01",
    discount: "25%",
    code: "COFFEE25",
    icon: "☕",
    bgGradient: "bg-gradient-to-r from-brown-400 to-yellow-600",
  },
  {
    id: 5,
    title: "Vegan",
    category: "Vegan",
    description: "Vegan ürünlerde %30 indirim.",
    expiration: "2025-09-01",
    discount: "30%",
    code: "VEGAN30",
    icon: "🥑",
    bgGradient: "bg-gradient-to-r from-green-500 to-teal-600",
  },
  {
    id: 6,
    title: "Dondurma",
    category: "Dondurma",
    description: "Tüm dondurma çeşitlerinde %10 indirim.",
    expiration: "2025-10-01",
    discount: "10%",
    code: "ICE10",
    icon: "🍦",
    bgGradient: "bg-gradient-to-r from-blue-300 to-indigo-500",
  },
  {
    id: 7,
    title: "Sıcak Yaz İndirimi",
    category: "Sıcak İçecekler",
    description: "Sıcak içeceklerde %15 indirim.",
    expiration: "2025-11-01",
    discount: "15%",
    code: "HOT15",
    icon: "🍵",
    bgGradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    id: 8,
    title: "Klasik Fiyatlar",
    category: "Klasik",
    description: "Klasik tatlarda %5 indirim.",
    expiration: "2025-12-01",
    discount: "5%",
    code: "CLASSIC5",
    icon: "🍪",
    bgGradient: "bg-gradient-to-r from-gray-300 to-gray-500",
  },
  {
    id: 9,
    title: "Sıcak Çikolata",
    category: "Çikolata",
    description: "Sıcak çikolatalarda %20 indirim.",
    expiration: "2025-01-01",
    discount: "20%",
    code: "CHOCOLATE20",
    icon: "🍫",
    bgGradient: "bg-gradient-to-r from-brown-600 to-pink-500",
  },
  {
    id: 10,
    title: "Vegan Lezzetler",
    category: "Vegan Tatlar",
    description: "Vegan tatlar %25 indirimli.",
    expiration: "2025-02-01",
    discount: "25%",
    code: "VEGAN25",
    icon: "🥕",
    bgGradient: "bg-gradient-to-r from-teal-500 to-green-600",
  },
  {
    id: 11,
    title: "Kahve Saatleri",
    category: "Kahve Saatleri",
    description: "Özel kahve saatlerinde %20 indirim.",
    expiration: "2025-03-01",
    discount: "20%",
    code: "COFFEEHOUR20",
    icon: "🌅",
    bgGradient: "bg-gradient-to-r from-pink-600 to-yellow-500",
  },
  {
    id: 12,
    title: "Atıştırmalıklar",
    category: "Atıştırmalıklar",
    description: "Çıtır atıştırmalıklar %15 indirimli.",
    expiration: "2025-04-01",
    discount: "15%",
    code: "SNACK15",
    icon: "🥨",
    bgGradient: "bg-gradient-to-r from-yellow-600 to-orange-700",
    status: "used"
  },
  {
    id: 13,
    title: "Meze Zamanı",
    category: "Meze",
    description: "Mezelerde %10 indirim.",
    expiration: "2025-05-01",
    discount: "10%",
    code: "MEZE10",
    icon: "🍇",
    bgGradient: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    status: "used"
  },
  {
    id: 14,
    title: "Tatlı Sürprizler",
    category: "Tatlılar",
    description: "Tatlılarda %30 indirim fırsatı.",
    expiration: "2025-06-01",
    discount: "30%",
    code: "SWEET30",
    icon: "🍮",
    bgGradient: "bg-gradient-to-r from-yellow-300 to-pink-400",
    status: "used"
  },
  {
    id: 15,
    title: "Buzlu İçecekler",
    category: "Buzlu İçecekler",
    description: "Buzlu içeceklerde %10 indirim.",
    expiration: "2025-07-01",
    discount: "10%",
    code: "COLD10",
    icon: "🥤",
    bgGradient: "bg-gradient-to-r from-cyan-500 to-blue-700",
    status: "used"
  }
];

export const tableField = [
  { name: 'region', label: 'Region Name', type: 'text' },
  { name: 'prefix', label: 'Prefix', type: 'text' },
  { name: 'quantity', label: 'Quantity', type: 'number' },
];