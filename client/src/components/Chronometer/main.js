import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import imgTime from "../../images/time.svg";
import axios from "axios";

export default function Chronometer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let intervalRef = useRef();
  const increaseSeconds = () => setSeconds((prev) => prev + 1);
  const increaseMinutes = () => setMinutes((prev) => prev + 1);
  const increaseHours = () => setHours((prev) => prev + 1);

  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [finishTimestamp, setFinish] = useState("");
  const [startTimestamp, setStart] = useState(true);

  const btnStart = useRef(null);

  useEffect(() => {
    console.log(seconds);
    if (seconds === 59) {
      setSeconds(0);
      increaseMinutes();
    }
    if (minutes === 59) {
      setMinutes(0);
      increaseHours();
    }
  }, [minutes, seconds]);

  const Start = () => {
    if (startTimestamp) {
      setAlert(false);
      intervalRef.current = setInterval(increaseSeconds, 1000);
      setStart(false);
      btnStart.current.className = "btn btn-OFF";
      return () => clearInterval(intervalRef.current);
    }
  };

  const Pause = () => {
    setAlert(false);
    setStart(true);
    btnStart.current.className = "btn btn-primary hover";
    clearInterval(intervalRef.current);
  };

  const Reset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  
  const Finish = async () => {
    let timestamp = `${hours > 9 ? hours.toString() : "0" + hours.toString()}:${
      minutes > 9 ? minutes.toString() : "0" + minutes.toString()
    }:${seconds > 9 ? seconds.toString() : "0" + seconds.toString()}`;

    try {
      const res = await axios.post("http://localhost:4000/api/timestamps", {
        timestamp: timestamp,
      });
      setStart(true);
      btnStart.current.className = "btn btn-primary hover";
      setAlert(true);
      setMessage(res.data.message);
      setFinish(res.data.data.timestamp);
      clearInterval(intervalRef.current);
      Reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card  ">
            <div className="card-header bg-success text-white">
              <div className="row">
                <div className="col-md-8">Chronometer</div>
                <div className="col-md-4 ">
                  <img
                    src={imgTime}
                    className="img-fluid mx-auto"
                    alt="imgQuestion"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="container">
                  <div className="bg-white text-dark my-2 p-2 rounded text-center">
                    <h2>
                      {hours > 9 ? "" : 0}
                      {hours} : {minutes > 9 ? "" : 0}
                      {minutes} : {seconds > 9 ? "" : 0}
                      {seconds}
                    </h2>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 text-white">
                        <button
                          ref={btnStart}
                          id="start"
                          className="btn btn-primary hover"
                          onClick={() => Start()}
                        >
                          Start
                        </button>
                      </div>
                      <div className="col-md-4 text-white">
                        <button
                          id="pause"
                          className="btn btn-primary hover"
                          onClick={() => Pause()}
                        >
                          Pause
                        </button>
                      </div>
                      <div className="col-md-4 text-white">
                        <button
                          id="finish"
                          className="btn btn-primary hover"
                          onClick={() => Finish()}
                        >
                          Finish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  {alert && (
                    <div className="bg-info text-white my-2 p-2 rounded text-center">
                      {message}
                      <br />
                      {finishTimestamp}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
