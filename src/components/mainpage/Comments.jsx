import React from 'react'
import man from "../../img/man.png"
import woman from "../../img/woman.png"
function Comments() {
  return (
    <div className="comments">
      <div className="messages">
      <div className="message">
      <div className="face">
        <img src={woman}/>
      </div>
      <div className="text1">
        <p>I received the swag package! Thank you so much! We brewed some of the coffee today for everyone here to try. I think it’s great! I worked all weekend (at my second job) so I really needed a kick start this morning!!”</p>
      </div>
      </div>
      <div className="message">
      <div className="face">
      <img src={man}/>
      </div>
      <div className="text1">
        <p>Your coffee is a big hit with the fellows here. Every morning I make a pot or 2 for any that want some. It is the best tasting coffee I have ever had.</p>
      </div>
      </div>
      </div>

       </div>
  )
}

export default Comments
