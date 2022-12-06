import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Count = ({ available, minted, Count3 }) => {
  return (
    <div className="count">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {(isVisible) => (
          <div className="lg:flex sm:flex gap-x-5 items-center h-28 text-4xl cutomCount">
            <div
              className=" flex justify-center  lg:px-5"
              style={{ height: 100, color: "white", alignItems: "center" }}
            >
              <div>
                <p>{isVisible ? <CountUp end={available} /> : null}</p>

                <p className="uppercase text-sm text-center md:text-center lg:text-center">
                  Available
                </p>
              </div>
            </div>
            <div
              className=" flex justify-center separator py-5"
              style={{ height: 100, color: "white" }}
            >
              <div className="mb-view-count">
                <p>{isVisible ? <CountUp end={minted} /> : null}</p>

                <p className="uppercase text-sm text-center md:text-center lg:text-center">
                  MINTED
                </p>
              </div>
            </div>
            <div
              className=" flex justify-center  lg:px-5"
              style={{ height: 100, color: "white" }}
            >
              <div className="mb-view-count">
                <p>{isVisible ? <CountUp end={Count3} /> : null}</p>

                <p className="uppercase text-sm text-center md:text-center lg:text-center">
                  ULTRA RARE +
                </p>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default Count;
