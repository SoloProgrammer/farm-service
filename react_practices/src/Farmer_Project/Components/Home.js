import React from 'react'
import farm_banner from '../Images/farm.jpg'
import service_img from '../Images/service.jpeg'

function Home() {
  return (
    <div className='Home_box'>
      <section className='section'>
        <h1 className="header_title text-center">
          <span>Welcome To Rental Farming Equipment</span>
        </h1>
      </section>
      <section className='header section'>
        <div className="header_img">
          <img src={farm_banner} alt="" srcset="" />
        </div>
      </section>
      <section className='section m-top'>
        <h1 className="header_title text-center">
          <span>Find Your best Farm Equipment Here</span> <span style={{"marginTop":"1rem","display":"inline-block"}}><img width={80} src="https://cdn-icons-png.flaticon.com/512/3665/3665077.png" alt="" /></span> 
        </h1>
      </section>
      <section className='all_equipments'>
          <div className="equip"><img src="https://i.ytimg.com/vi/THv0yUx7sTA/maxresdefault.jpg" alt="" /></div>
          <div className="equip"><img src="https://tse4.mm.bing.net/th?id=OIP.BR9Jx8qAClEOyNEyWNldhAAAAA&pid=Api&P=0" alt="" /></div>
          <div className="equip"><img src="https://qph.fs.quoracdn.net/main-qimg-828b62f0a55b75f8269c6680991b4c96" alt="" /></div>
      </section>
      <section className='section m-top'>
        <h1 className="text-center">
          <span>Our Service!</span>
        </h1>
      </section>
      <section id='Our_service' className='section m-top'>
          <div className="left">
            <img src={service_img} alt="" />
          </div>
          <div className="right">
             <h3>
                RENTAL FARM EQUIPMENT <span><img width={45} src="https://cdn-icons-png.flaticon.com/512/7390/7390236.png" alt="" /></span> SERVICE!
             </h3>
             <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, unde suscipit quos quasi excepturi nesciunt explicabo beatae numquam id cum, odit, nostrum ullam similique labore eos fugiat consequuntur. Iusto neque, distinctio incidunt eligendi necessitatibus animi, sint accusamus, veniam vel placeat itaque fugit laboriosam sit quibusdam quae suscipit! Asperiores eaque cum suscipit necessitatibus esse saepe illum minima ad nemo. Blanditiis laboriosam est accusantium repellendus doloribus ad dicta architecto necessitatibus odit, illo ullam? Vero, culpa. Cum voluptas in asperiores nobis assumenda cumque sed! Rerum repudiandae amet earum, aut consequuntur fuga in eveniet adipisci ex cupiditate quibusdam enim. Hic eligendi velit ab quaerat?
             </p>
          </div>
      </section>
    </div>
  )
}

export default Home
