import { useState } from 'react';
import StartView from './components/StartView';
import ResultView from './components/ResultView';
import './App.css';
import data from '../data.json';
import { GameDetails } from './types.ts';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [game, setGame] = useState<GameDetails | null>(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const onButtonClickHandler = () => {
    const selectedDateAsSubstring = selectedDate.toJSON().substring(0, 10);
    // const selectedDateAsSubstring = '2023-10-20';
    const foundDate = data.find(
      (game) => game.date.substring(0, 10) === selectedDateAsSubstring
    );

    if (foundDate) {
      setGame(foundDate);
    }

    setButtonClicked(true);

    if (!selectedDate) setSelectedDate(new Date('2023-10-15T18:30:00Z'));
  };

  return (
    <>
      <div className="App_container">
        <h1>Is There A Game?</h1>
        {!buttonClicked && <StartView onClick={onButtonClickHandler} />}
        {buttonClicked && (
          <ResultView game={game} setButtonClicked={setButtonClicked} />
        )}
      </div>
    </>
  );
};

export default App;
