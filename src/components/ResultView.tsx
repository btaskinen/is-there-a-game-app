import { GameDetails } from '../types';
import HappyFace from '../assets/smiley-square-face-svgrepo-com.svg?react';
import SadFace from '../assets/sad-face-in-rounded-square-svgrepo-com.svg?react';
import './ResultView.css';

type Props = {
  game: GameDetails | null;
  setButtonClicked: (a: boolean) => void;
};

const ResultView = ({ game, setButtonClicked }: Props) => {
  return (
    <>
      {game ? (
        <div className="ResultView_resultGame" data-cy="result-container">
          <SadFace className="ResultView_svg game" />
          <p data-cy="result-text">There is a Game Today.</p>
          <p data-cy="game-details">
            {game.tampereTeam} plays {game.opponent} at{' '}
            {game.date.substring(11, 16)}
          </p>
        </div>
      ) : (
        <div className="ResultView_resultNoGame" data-cy="result-container">
          <HappyFace className="ResultView_svg noGame" />
          <p data-cy="result-text">No game Today!</p>
        </div>
      )}
      <button
        className="ResultView_backButton"
        onClick={() => setButtonClicked(false)}
        data-cy="back-button"
      >
        Check again!
      </button>
    </>
  );
};

export default ResultView;
