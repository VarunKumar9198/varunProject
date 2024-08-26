import Helper from "./helper"

const {sliderimg1, sliderimg2, sliderimg3, toYourEternity, gundam}=Helper()
export const getDataHelpr = () => {
    const card1SliderData1=[
        {
            id:1,
            title:'Shinobi no Ittoki',
            desc:'Serie',
            subDesc:'Doblajes',
            img:sliderimg1
            
        },
        {
            id:2,
            title:'Dragon Ball Z',
            desc:'Serie',
            subDesc:'Doblajes',
            img:sliderimg2
        },
        {
            id:3,
            title:'Dragon Ball',
            desc:'Serie',
            subDesc:'Doblajes',
            img:sliderimg3
        },
        {
            id:4,
            title:'Shinobi no Ittoki',
            desc:'Serie',
            subDesc:'Sub | Dob',
            img:sliderimg1
            
        },
        {
            id:5,
            title:'Dragon Ball Z',
            desc:'Serie',
            subDesc:'Sub | Dob',
            img:sliderimg2
        },
        {
            id:6,
            title:'Dragon Ball',
            desc:'Serie',
            subDesc:'Sub | Dob',
            img:sliderimg3
        },
        {
            id:7,
            title:'Dragon Ball',
            desc:'Serie',
            subDesc:'Sub | Dob',
            img:sliderimg3
        }
    ]

    const horiziontalCardData=[
        {
            img:gundam,
            title:'To Your Eternity',
            subText:'Serie • Sub | Dob',
            desc:"Al principio el “orbe” llegó a la Tierra. Podía hacer dos cosas: tomar la forma deccualquier cosa con la que interactuara y regenerarse para volver a la vida. El orbe se..",
            btnText1:'SIGUIENTE T2 E1',
            btnText2:'EN MI LISTA'
        },
        {
            img: toYourEternity,
            title:'To Your Eternity',
            subText:'Serie • Sub | Dob',
            desc:"Al principio el “orbe” llegó a la Tierra. Podía hacer dos cosas: tomar la forma deccualquier cosa con la que interactuara y regenerarse para volver a la vida. El orbe se..",
            btnText1:'SIGUIENTE T2 E1',
            btnText2:'EN MI LISTA'
        }
    ]
  return {
    card1SliderData1,
    horiziontalCardData
  }
}
