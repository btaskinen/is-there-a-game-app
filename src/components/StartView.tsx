import QuestionMark from '../assets/question-mark-draw-svgrepo-com.svg?react';
import './StartView.css';

type Props = {
  onClick: () => void;
};

const StartView = ({ onClick }: Props) => {
  return (
    <div className="StartView_mainContent">
      <img
        className="StartView_ilvesLogo"
        src="https://upload.wikimedia.org/wikipedia/fi/5/52/Tampereen_Ilveksen_logo.svg"
        alt="Logo of Tampere Ilves Ice Hockey Team"
      />
      <button
        className="StartView_findOutButton"
        type="button"
        onClick={onClick}
      >
        <QuestionMark className="StartView_svg" />
        <i className="StartView_buttonText">Click to Find out!</i>
      </button>
      <img
        className="StartView_tapparaLogo"
        src="https://upload.wikimedia.org/wikipedia/fi/3/32/Tapparan_logo.svg"
        alt="Logo of Tampere Tappera Ice Hockey Team"
      />
    </div>
  );
};

export default StartView;
