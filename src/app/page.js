'use client'
import React, { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("black");
  return (
    <div className={`flex h-screen mw-screen bg-${color}-800`}>
      {color == "red" ? (
        <><button
          className="border bg-red-800 h-1/6"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button className="border bg-slate-500 h-1/6" onClick={() => setColor("black")}>
        Refresh
        </button></>
      ) : color == "green" ? (
        <><button
          className="border bg-green-800 h-1/6"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button className="border bg-slate-500 h-1/6" onClick={() => setColor("black")}>
        Refresh
        </button></>
      ):color == "blue" ? (
        <><button
          className="border bg-blue-800 h-1/6"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button className="border bg-slate-500 h-1/6" onClick={() => setColor("black")}>
        Refresh
        </button></>
      ):(
        <><button
            className="border bg-red-800 h-1/6"
            onClick={() => setColor("red")}
          >
            Red
          </button><button
            className="border bg-green-800 h-1/6"
            onClick={() => setColor("green")}
          >
             Green
            </button><button
              className="border bg-blue-800 h-1/6"
              onClick={() => setColor("blue")}
            >
              Blue
            </button></>
      )}
    </div>
  );
}