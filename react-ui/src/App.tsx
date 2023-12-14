import {EmojiButton} from "./components/EmojiButton.tsx";
import {CallToActionText} from "./components/CallToActionText.tsx";
import {Header} from "./components/Header.tsx";

function App() {
  return (
    <>
      <Header/>
      <EmojiButton emoji="🔥"/>
      <CallToActionText/>
    </>
  );
}

export default App
