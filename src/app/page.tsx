import Chat from "./components/chat";
import "src/app/styles/App.scss"

const profile = { name: 'You', texts: 'You' };
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
