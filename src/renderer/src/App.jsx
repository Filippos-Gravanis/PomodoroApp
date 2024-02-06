import { useState } from 'react'
import { calculateNewTime , isNonZeroFound } from './calclulateTime'
console.log(isNonZeroFound("0:00"))
function App() {
  let [activeMode, setActiveMode] = useState('pomodoro')
  let [activeInterval, setActiveInterval] = useState()
  let [pomodoroDuration,setPomodoroDuration] = useState("00:05")
  let [breakDuration,setBreakDuration] = useState("10:00")
  let [timeLeft, setTimeLeft] = useState(pomodoroDuration)
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
                setActiveInterval()
                setTimeLeft(pomodoroDuration)}
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
                setTimeLeft(breakDuration)
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
                      if (!isNonZeroFound(timeLeft)) {
                        console.log(isNonZeroFound(timeLeft),"lel")
                        clearInterval(interval)
                        setActiveInterval()
                        if (activeMode == 'pomodoro') {
                          setActiveMode('break')
                          console.log("lel")
                          setTimeLeft(breakDuration)
                        } else {
                          setActiveMode('pomodoro')
                          setTimeLeft(pomodoroDuration)
                        }
                      }
                      console.log(timeLeft)

                      return (calculateNewTime(timeLeft))
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
