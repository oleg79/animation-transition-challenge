import React from "react";
import {EmojiButton} from "./components/EmojiButton.tsx";
import {CallToActionText} from "./components/CallToActionText.tsx";
import {Header} from "./components/Header.tsx";
import {Popup} from "./components/Popup.tsx";

function App() {
  const [isPopupOpen, setIspPopupOpen] = React.useState(false);

  const handleTogglePopup = () => setIspPopupOpen(v => !v);

  return (
    <>
      <Header/>
      <div style={{
        position: 'relative',
        width: '100px',
        height: '100px'
      }}>
        <EmojiButton emoji="🔥" onClick={handleTogglePopup} isPopupOpen={isPopupOpen}/>
        <Popup isPopupOpen={isPopupOpen} onClick={handleTogglePopup}/>
      </div>
      <CallToActionText/>
    </>
  );
}

export default App
