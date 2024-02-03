import { useState } from 'react'

function App() {
  let [timeLeft, setTimeLeft] = useState(5)
  let [activeMode, setActiveMode] = useState('pomodoro')
  let [activeInterval, setActiveInterval] = useState()
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="pomodoroContainer">
          <div className="modes">
            <div className="modeButton active">Pomodoro</div>
            <div className="modeButton">Break</div>
          </div>
          <div className="Timer">{timeLeft}</div>
          <div>
            <button
              onClick={() => {
                let interval = setInterval(() => {
                  setTimeLeft((timeLeft) =>{ 
                  if (timeLeft == 0) {
                    clearInterval(interval)
                    return 0
                  }
                  return timeLeft - 1
                }
                  )
                  
                  
                }, 1000)
              }}
            >
              Start
            </button>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
