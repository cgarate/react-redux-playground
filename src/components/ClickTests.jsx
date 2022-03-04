// Displays the user's horoscope

import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import "../App.css";
import { setUserData, startRequest, endRequest } from "../redux/actions";
import { getUserData } from "../redux/thunks";
import PacmanLoader from "react-spinners/PacmanLoader";

const mapStateToProps = (state) => ({
  loadingUser: state.ui.loadingUser,
});

const mapDispatchToProps = {
  setUserData,
  startRequest,
  endRequest,
};

const ClickTests = ({
  setUserData,
  startRequest,
  endRequest,
  loadingUser,
}) => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    setUserData();
    window.open("https://www.lensculture.com");
  };

  const handlerClickThunk = () => {
    dispatch(getUserData());
  };

  const handlerSimpleOpenTab = (e) => {
    e.preventDefault();
    window.open("https://www.clik2pay.com");
  };

  const handlerSimpleOpenTabTimeout = (e) => {
    e.preventDefault();
    dispatch(startRequest);
    setTimeout(() => {
      window.open("https://www.clik2pay.com");
      dispatch(endRequest);
    }, 3000);
  };

  return (
    <main>
      <div className="flex-v">
        <div className="spinner">
          <PacmanLoader color="#FAE706" loading={loadingUser}  css={{ display: "block", }} size={30} />
        </div>
        <div className="flex-h">
          <div className="clickContainer">
            <h3>Simple window.open()</h3>
            <button onClick={handlerSimpleOpenTab}>Click me!</button>
          </div>
          <div className="clickContainer flex-v">
            <h3>Simple window.open() with setTimeout</h3>
            <button onClick={handlerSimpleOpenTabTimeout}>Click me!</button>
          </div>
          <div className="clickContainer">
            <h3>Triggering synchronous action to set state in Redux and then open tab with window.open()</h3>
            <button onClick={handlerClick}>Click me!</button>
          </div>
          <div className="clickContainer flex-v">
            <h3>
              Trigger a thunk (async API request) set data into redux and trigger
              another action for window.open()
            </h3>
            <button onClick={handlerClickThunk}>Click me!</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickTests);
