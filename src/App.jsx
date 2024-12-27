import React from "react";
import Counter from "./component/Counter";
import Sculpture from "./component/Sculpture";
import LikeButton from "./component/LikeButton";
import CallbackUpdater from "./component/CallbackUpdater";
function App() {
  return (
    <>
  <h1>Counter App</h1>
  <Counter />
  <h1>Sculpture Task</h1>
  <Sculpture/>
  <h1>Like Button Task</h1>
  <LikeButton/>
  <h1>Callback Updater</h1>
  <CallbackUpdater />
    </>
  )
}

export default App
