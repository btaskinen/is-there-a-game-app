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
  };

  const today = new Date();

  const dateForTitle =
    selectedDate.toJSON().substring(0, 10) === today.toJSON().substring(0, 10)
      ? 'Today'
      : `on ${selectedDate.getDate()}.${
          selectedDate.getMonth() + 1
        }.${selectedDate.getFullYear()}`;

  return (
    <>
      <div className="App_container">
        <h1 data-cy="app-title">Is There A Game {dateForTitle}?</h1>
        {!buttonClicked && (
          <StartView
            onClick={onButtonClickHandler}
            setSelectedDate={setSelectedDate}
          />
        )}
        {buttonClicked && (
          <ResultView game={game} setButtonClicked={setButtonClicked} />
        )}
      </div>
    </>
  );
};

export default App;
