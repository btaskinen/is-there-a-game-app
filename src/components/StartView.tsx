type Props = {
  onClick: () => void;
};

const StartView = ({ onClick }: Props) => {
  return (
    <div className="App_mainContent">
      <img
        className="App_ilvesLogo"
        src="https://upload.wikimedia.org/wikipedia/fi/5/52/Tampereen_Ilveksen_logo.svg"
        alt="Logo of Tampere Ilves Ice Hockey Team"
      />
      <button className="App_findOutButton" type="button" onClick={onClick}>
        Click to Find out!
      </button>
      <img
        className="App_tapparaLogo"
        src="https://upload.wikimedia.org/wikipedia/fi/3/32/Tapparan_logo.svg"
        alt="Logo of Tampere Tappera Ice Hockey Team"
      />
    </div>
  );
};

export default StartView;
