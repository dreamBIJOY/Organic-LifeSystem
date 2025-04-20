import React from 'react'

function LastSection() {

const datas = [
        {
          "icon": "https://i.imghippo.com/files/FRJh6306OxE.png",
          "title": "Worldwide Shipping",
          "subtitle": "Order Above $100"
        },
        {
          "icon": "https://i.imghippo.com/files/vGJ2514Who.png",
          "title": "Money Back Guarantee",
          "subtitle": "Guarantee Within 30 Days"
        },
        {
          "icon": "https://i.imghippo.com/files/OQ6086MG.png",
          "title": "Offers And Discounts",
          "subtitle": "Back Returns In 7 Days"
        },
        {
          "icon": "https://i.imghippo.com/files/jwM2384eUo.png",
          "title": "24/7 Support Services",
          "subtitle": "Any Time Support"
        }
      ]
      
  return (
    <div className='bg-green-700'>
        <div className='w-10/12 mx-auto flex items-center justify-center gap-20'>
            {
                datas.map((data, index)=>(
                    <div className='bg-green-700 w-[300px] h-[120px] pt-6' key={index}>
                        <div className='flex items-center justify-center place-items-center gap-3'>
                            <img src={data.icon} alt="" />

                            <div>
                                <h1 className='text-[18px] font-semibold text-white'>{data.title}</h1>
                                <p className='text-[15px] text-gray-100'>{data.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LastSection