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
  Gender: [
    {label : "Male"  , value : "male" , color : "green"},
    { label: "Female", value: "female", color: "green" },
    { label: "Others", value: "other", color: "green" },
  ]
  
}