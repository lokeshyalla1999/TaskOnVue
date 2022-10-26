import { AllInterFaces } from "@/types/InterfacesTask"
export const dataState:AllInterFaces = {
  links: [
    {
      id: 1,
      reference: "https://quasar.dev",
      icon: "school",
      label: "Doc",
      caption: "quasar.dev",
    },
    {
      id: 2,
      reference: "https://github.com/quasarframework/",
      icon: "code",
      label: "GitHub",
      caption: "github.com/quasarframework",
    },
    {
      id: 3,
      reference: "https://chat.quasar.dev",
      icon: "chat",
      label: "Discord Chat Channel",
      caption: "chat.quasar.dev",
    },
    {
      id: 4,
      reference: "https://forum.quasar.dev",
      icon: "forum",
      label: "Forum",
      caption: "forum.quasar.dev",
    },
    {
      id: 5,
      reference: "https://twitter.com/",
      icon: "home",
      label: "About us",
      caption: "twitter.com/quasarframework",
    }
  ],
  options: [
    {
      label: 'Horizontal (default)',
      value: 'horizontal'
    },
    {
      label: 'Vertical',
      value: 'vertical'
    },
    {
      label: 'Cell',
      value: 'cell'
    },
    {
      label: 'None',
      value: 'none'
    }
  ],
  columns: [
    {
      name: "name",
      align: "left",
     // field: (row as IColumns[]) => row.name,
     field : (row) => row.name,
      label: "Dessert (100g serving)",
      sortable: true,
    },
    {
      name: "calories",
      align: "center",
      field: "calories",
      label: "Calories", 
      sortable: true,
    },
    {
      name: "fat",
      align: "center",
      field: "fat",
      label: "Fat (g)",
      
      sortable: true
    },
    {
      name: "carbs",
      align: 'center',
      field: "carbs",
      label: "Carbs (g)",
      
    },
    {
      name: "protein",
      align: "center",
      field: "protein",
      label: "Protein (g)"
      
    },
    {
      name: "sodium",
      align: "center",
      field: "sodium",
      label: "Sodium (mg)",
      
    },
    {
      name: "calcium",
      align : 'center',
      field: "calcium",
      label: "Calcium (%)",
      
      sortable: true,
    },
    {
      name: "iron",
      align: "center",
      field: "iron",
      label: "Iron (%)",
     
      sortable: true
    },
  ],

  rows: [
    {
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: "14%",
      iron: "1%",
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: "8%",
      iron: "1%",
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      sodium: 337,
      calcium: "6%",
      iron: "7%",
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      sodium: 413,
      calcium: "3%",
      iron: "8%",
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      sodium: 327,
      calcium: "7%",
      iron: "16%",
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      sodium: 50,
      calcium: "0%",
      iron: "0%",
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      sodium: 38,
      calcium: "0%",
      iron: "2%",
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      sodium: 562,
      calcium: "0%",
      iron: "45%",
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      sodium: 326,
      calcium: "2%",
      iron: "22%",
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      sodium: 54,
      calcium: "12%",
      iron: "6%",
    },
  ],
  Gender: [
    {label : "Male"  , value : "male" , color : "green"},
    { label: "Female", value: "female", color: "green" },
    { label: "Others", value: "other", color: "green" },
  ]
  
}