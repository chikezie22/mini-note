import { Hero, TextCard, TextWithButton } from './components';
import { useTextStore } from './store/store';

function App() {
  const textArray = useTextStore((state) => state.text);
  return (
    <div className="px-8 py-4 max-w-5xl w-full mx-auto space-y-2">
      <Hero />
      <TextWithButton />
      <div>
        {textArray.map((text) => (
          <TextCard key={text.id} text={text} />
        ))}
      </div>
    </div>
  );
}
export default App;
