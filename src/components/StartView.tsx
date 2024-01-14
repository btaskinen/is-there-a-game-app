import QuestionMark from '../assets/question-mark-draw-svgrepo-com.svg?react';
import DatePicker from 'react-datepicker';
import './StartView.css';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  onClick: () => void;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

const StartView = ({ onClick, selectedDate, setSelectedDate }: Props) => {
  const datePickerHandler = (date: Date | null) => {
    console.log(date);

    if (date === null) {
      setSelectedDate(new Date());
    } else {
      setSelectedDate(date);
    }
  };
  return (
    <>
      <div className="StartView_datePickerContainer">
        <label className="StartView_label">Select Date</label>
        <DatePicker
          showIcon
          selected={selectedDate}
          onChange={(date) => datePickerHandler(date)}
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
