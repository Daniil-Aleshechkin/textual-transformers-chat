import Image from "next/image";
import Chat from "./components/chat";
import "src/app/styles/App.scss"

export default function Home() {
  return (
    <main>
      <div className="header-block">
        <h1 className = "header">AiDA</h1>
      </div>
      <Chat></Chat>
    </main>
  );
}
