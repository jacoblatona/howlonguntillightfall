import Countdown from "react-countdown";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function App() {
  const timestamp = 1677607200;

  const renderer = ({ days, hours, minutes, seconds }: Props) => {
    return (
      <div className="grid grid-cols-4 text-center text-white font-semibold text-2xl lg:text-4xl">
        <div className="flex gap-2 items-center justify-center">{days}d</div>
        <div className="flex gap-2 items-center justify-center">{hours}h</div>
        <div className="flex gap-2 items-center justify-center">{minutes}m</div>
        <div className="flex gap-2 items-center justify-center">{seconds}s</div>
      </div>
    );
  };

  return (
    <div className="App">
      <div
        className="min-h-screen w-full flex justify-center items-center"
        style={{
          background: `url(/images/bg.png) no-repeat center`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full mx-10 lg:w-[600px] lg:mx-auto bg-gradient-to-r from-emerald-700 to-emerald-400 text-white rounded-lg py-14 break-words opacity-90">
          <h1 className="text-xl lg:text-2xl font-bold text-white text-center mb-10">
            The Witness arrives in
          </h1>
          <div>
            <Countdown
              date={new Date("2023-02-28T10:00:00-08:00")}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
