import { GameDetails } from '../types';
import HappyFace from '../assets/smiley-square-face-svgrepo-com.svg?react';

type Props = {
  game: GameDetails | null;
  setButtonClicked: (a: boolean) => void;
};

const ResultView = ({ game, setButtonClicked }: Props) => {
  return (
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
          <button
            className="App_backButton"
            onClick={() => setButtonClicked(false)}
          >
            Check again!
          </button>
        </div>
      )}
    </>
  );
};

export default ResultView;
