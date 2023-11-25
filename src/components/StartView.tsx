import QuestionMark from '../assets/question-mark-draw-svgrepo-com.svg?react';
import './StartView.css';

type Props = {
  onClick: () => void;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

const StartView = ({ onClick, setSelectedDate }: Props) => {
  const datePickerHandler = (value: string) => {
    const pickedDate = new Date(value);
    setSelectedDate(pickedDate);
  };

  return (
    <>
      <div className="StartView_datePickerContainer">
        <label className="StartView_label">Select Date</label>
        <input
          type="date"
          min="2023-09-13"
          max="2024-03-12"
          onChange={(event) => datePickerHandler(event.target.value)}
          data-cy="date-picker"
        />
      </div>

      <div className="StartView_mainContent">
        <img
          className="StartView_ilvesLogo"
          src="https://upload.wikimedia.org/wikipedia/fi/5/52/Tampereen_Ilveksen_logo.svg"
          alt="Logo of Tampere Ilves Ice Hockey Team"
          data-cy="ilves-logo"
        />
        <button
          className="StartView_findOutButton"
          type="button"
          onClick={onClick}
          data-cy="start-view-button"
        >
          <QuestionMark className="StartView_svg" />
          <i className="StartView_buttonText">Click to Find out!</i>
        </button>
        <img
          className="StartView_tapparaLogo"
          src="https://upload.wikimedia.org/wikipedia/fi/3/32/Tapparan_logo.svg"
          alt="Logo of Tampere Tappera Ice Hockey Team"
          data-cy="tappara-logo"
        />
      </div>
    </>
  );
};

export default StartView;
