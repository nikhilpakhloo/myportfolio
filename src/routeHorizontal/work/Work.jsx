import "./work.scss"

export default function Work() {
  return (
    <div className='work'>
      <div className="cardcontainer">
        <div className="card">

          <h5>Weather App -Reactjs</h5>
         
          <a href="https://weather-app-alpha-ivory.vercel.app/" target="_blank"> <button >Check Out</button></a>

        </div>
        <div className="card">
          <h5>TextUtils app - Reactjs</h5>
          <a href="https://utils-five.vercel.app/" target="_blank"> <button >Check Out</button></a>
        

        </div>
        <div className="card">
          <h5>QRCodeGenerator-reactjs</h5>
          <a href="https://qrcode-delta-lyart.vercel.app/" target="_blank"> <button >Check Out</button></a>
         

        </div>
        <div className="card">
          <h5>Coming Soon</h5>
          {/* <a href="" target="_blank"> <button>Check Out</button></a> */}
       

        </div>
      </div>
   
    </div>
  )
}
