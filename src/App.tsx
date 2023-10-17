import { useState } from 'react';
import './App.css';
import data from '../data.json';
import HappyFace from './assets/smiley-square-face-svgrepo-com.svg?react';

type GameDetails = {
  tampereTeam: string;
  opponent: string;
  date: string;
};

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [game, setGame] = useState<GameDetails | null>(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const onClickHandler = () => {
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
        {!buttonClicked && (
          <div className="App_mainContent">
            <img
              className="App_ilvesLogo"
              src="https://upload.wikimedia.org/wikipedia/fi/5/52/Tampereen_Ilveksen_logo.svg"
              alt="Logo of Tampere Ilves Ice Hockey Team"
            />
            <button
              className="App_findOutButton"
              type="button"
              onClick={onClickHandler}
            >
              Click to Find out!
            </button>
            <img
              className="App_tapparaLogo"
              src="https://upload.wikimedia.org/wikipedia/fi/3/32/Tapparan_logo.svg"
              alt="Logo of Tampere Tappera Ice Hockey Team"
            />
          </div>
        )}
        {buttonClicked && (
          <>
            {game ? (
              <div className="App_resultGame">
                <p>There is a Game Today!</p>
                <p>
                  {game.tampereTeam} plays {game.opponent} at{' '}
                  {game.date.substring(11, 16)}
                </p>
              </div>
            ) : (
              <div className="App_resultNoGame">
                <HappyFace className="App_svg" />
                <p>No game Today!</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default App;
