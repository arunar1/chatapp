import React from 'react'
import './Main.css'
export default function Main() {
  return (
    <div>
      <div className='main'>
      <div class="right-section">
                    <h4>Hello,</h4>
                    <form action="" autocomplete="off">
                        <div class="input-group">
                          <input type="text" id="name" required />  
                          <label for="name">Name</label>
                        </div>
                        <div class="input-group">
                            <input type="number" id="emai" required />
                            <label for="emai">Room No</label>
                        </div>
                        
                        <div class="submit-btn">
                            <input type="submit" class="submit" />
                        </div>
                    </form>

                </div>
      </div>
    </div>
  )
}
