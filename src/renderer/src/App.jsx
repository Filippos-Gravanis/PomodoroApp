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
            <div
              className={'modeButton ' + (activeMode == 'pomodoro' ? 'active' : '')}
              onClick={() => {
                if (activeMode!='pomodoro'){
                setActiveMode('pomodoro')
                clearInterval(activeInterval)
                setActiveInterval()}
              }}
            >
              Pomodoro
            </div>
            <div
              onClick={() => {
                if (activeMode!='break'){
                setActiveMode('break')
                clearInterval(activeInterval)
                setActiveInterval()
                }
              }}
              className={'modeButton ' + (activeMode == 'break' ? 'active' : '')}
            >
              Break
            </div>
          </div>
          <div className="Timer">{timeLeft}</div>
          <div>
            <button
              onClick={() => {
                if (activeInterval) {
                  clearInterval(activeInterval)
                  setActiveInterval()
                } else {
                  let interval = setInterval(() => {
                    setTimeLeft((timeLeft) => {
                      if (timeLeft == 0) {
                        clearInterval(interval)
                        setActiveInterval()
                        if (activeMode == 'pomodoro') {
                          setActiveMode('break')
                        } else {
                          setActiveMode('pomodoro')
                        }
                        return 0
                      }
                      return timeLeft - 1
                    })
                  }, 1000)
                  setActiveInterval(interval)
                }
              }}
            >
              {activeInterval ? 'Stop' : 'Start'}
            </button>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
