import { createSignal, createMemo, createEffect, For } from "solid-js";
import { mockDisplayData } from "~/interfaces/DisplayData";
import Input from "~/components/Input";
import Display from "~/components/Display";

const [filter, setFilter] = createSignal("");
const [filterHori, setFilterHori] = createSignal(NaN);
const [filterVerti, setFilterVerti] = createSignal(NaN);
const [filterDiag, setFilterDiag] = createSignal(NaN);

// createEffect(() => console.log(filter()));
// createEffect(() => console.log(filterHori()));
// createEffect(() => console.log(filterVerti()));
createEffect(() => console.log("filter diag signal", filterDiag()));
// createEffect(() => console.log("filter diag signal is integer", filterDiag()));

export default function Home() {
  const filteredDisplays = createMemo(() => {
    let displays = mockDisplayData;
    if (filter() !== "") {
      displays = displays.filter(
        (display) =>
          display.name.includes(filter()) ||
          display.horizontal_resolution.toString().includes(filter()) ||
          display.vertical_resolution.toString().includes(filter()) ||
          display.diagonal.toString().includes(filter())
      );
    }
    if (!isNaN(filterHori())) {
      displays = displays.filter(
        (display) => display.horizontal_resolution === filterHori()
      );
    }
    if (!isNaN(filterVerti())) {
      displays = displays.filter(
        (display) => display.vertical_resolution === filterVerti()
      );
    }
    if (!isNaN(filterDiag())) {
      displays = displays.filter(
        (display) => display.diagonal === filterDiag()
      );
    }
    return displays;
  }, [filter, filterHori, filterVerti, filterDiag]);

  // createEffect(() => console.log(filteredDisplays()));

  const totalPixels = createMemo(
    () =>
      isNaN(filterHori()) || isNaN(filterVerti())
        ? ""
        : filterHori() * filterVerti(),
    [filterHori, filterVerti]
  );

  // createEffect(() => console.log(totalPixels()));

  return (
    <main>
      <h1>PPI Calculator using Solid Signals</h1>

      <div class="border-2 border-black p-4 max-w-lg">
        <Input
          title="All filter:"
          filter={filter}
          setFilter={setFilter}
          type="text"
          onInput={({ target }) => setFilter(target.value)}
        />
        <Input
          title="Horizontal Resolution:"
          type="number"
          filter={filterHori}
          setFilter={setFilterHori}
          onInput={({ target }) => setFilterHori(parseInt(target.value))}
        />
        <Input
          title="Vertical Resolution:"
          type="number"
          filter={filterVerti}
          setFilter={setFilterVerti}
          onInput={({ target }) => setFilterVerti(parseInt(target.value))}
        />
        <div>
          {"Diagonal:"}
          <input
            type="number"
            step="0.1"
            value={filterDiag()}
            onInput={(e) => {
              // console.log("event", e);
              const value = parseFloat(e.target.value);
              // console.log("parsed target value", value);
              // if (!isNaN(value)) {
              //   setFilterDiag(value);
              // }
              console.log(isNaN(value));
              console.log(e.inputType === "deleteContentBackward");
              console.log(
                "is filterDiag integer now",
                Number.isInteger(filterDiag())
              );
              if (
                isNaN(value) &&
                e.inputType === "deleteContentBackward" &&
                Number.isInteger(filterDiag())
              ) {
                setFilterDiag(NaN);
              } else if (!isNaN(value)) {
                setFilterDiag(value);
              }
            }}
            // lang="en-US"
          />
        </div>
        <div class="pt-1">Total pixels: {totalPixels().toString()}</div>
      </div>
      <br />

      <div class="grid grid-cols-3">
        <For each={filteredDisplays()} fallback={<div>Loading...</div>}>
          {(display) => <Display display={display} />}
        </For>
      </div>
    </main>
  );
}
