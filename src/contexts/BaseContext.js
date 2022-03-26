import { useState } from "react";

/**
 *
 * Create an context object with basic states already created and some aditional values
 *
 * @param {React.Context<{}>} Context The context objecto that will be created.
 * @param {React.ReactElement} children The content that will be inside de Context.Provider
 * @param {{}} [additionalValues] Aditional values to be added to the context
 * @returns The object context
 */
function BaseContext(Context, children, additionalValues = {}) {
  const [content, setContent] = useState({});
  const [loaded, setLoaded] = useState(false);

  function _setContent(content) {
    setContent(content);
    if (!loaded) setLoaded(true);
  }

  return (
    <Context.Provider
      value={{
        content,
        setContent: _setContent,
        loaded,
        ...additionalValues,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default BaseContext;
