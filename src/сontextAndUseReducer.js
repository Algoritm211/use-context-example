import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";
import Main from "./Main";

function сontextAndUseReducer() {
 
  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />
        <Main />
      </div>
    </AlertProvider>

  );
}

export default сontextAndUseReducer;
