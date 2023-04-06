export function Events() {
  function handleClick(e) {
    console.log("Click event triggered");
    e.preventDefault();
  }

  function handleMouseEnter(e) {
    console.log("Mouse enter event triggered");
  }

  function handleOnChange(e) {
    console.log("On change event triggered");
  }

  function handleBubble(e) {
    console.log("Bubble event triggered");
  }

  function handleCapture(e) {
    console.log("Capture event triggered");
  }

  function handleStopPropagation(e) {
    console.log("Stop propagation event triggered");
    e.stopPropagation();
  }

  return (
    <div className="card">
      <button onClick={handleClick}>Click me</button>

      <input type="text" onChange={handleOnChange} />

      <div onClick={handleBubble}>
        <button onClick={handleStopPropagation}>Stop Propagation</button>
      </div>

      <div onClickCapture={handleCapture}>
        <button onClick={handleBubble}>Capture</button>
      </div>

      <div onMouseEnter={handleMouseEnter}>Mouse enter event</div>
    </div>
  );
}
