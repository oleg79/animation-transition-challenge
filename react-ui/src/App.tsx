import React from "react";
import {EmojiButton} from "./components/EmojiButton.tsx";
import {CallToActionText} from "./components/CallToActionText.tsx";
import {Header} from "./components/Header.tsx";

function App() {
  const [isPopupOpen, setIspOpupOpen] = React.useState<null | boolean>(null);

  const handleTogglePopup = () => setIspOpupOpen(v => !v);

  return (
    <>
      <Header/>
      <EmojiButton emoji="🔥" onClick={handleTogglePopup} isPopupOpen={isPopupOpen}/>
      <CallToActionText/>
    </>
  );
}

export default App
