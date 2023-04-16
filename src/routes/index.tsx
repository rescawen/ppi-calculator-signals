import { createSignal, createMemo, createEffect, For } from "solid-js";
import { mockDisplayData } from "~/interfaces/DisplayData";
import Input from "~/components/Input";
import Display from "~/components/Display";

const [filter, setFilter] = createSignal("");
const [filterHori, setFilterHori] = createSignal(NaN);
const [filterVerti, setFilterVerti] = createSignal(NaN);

createEffect(() => console.log(filter()));
createEffect(() => console.log(filterHori()));
createEffect(() => console.log(filterVerti()));

export default function Home() {
  const filteredDisplays = createMemo(() => {
    let displays = mockDisplayData;
    if (filter() !== "") {
      displays = displays.filter(
        (display) =>
          display.brand.includes(filter()) ||
          display.horizontal_resolution.toString().includes(filter()) ||
          display.vertical_resolution.toString().includes(filter())
      );
    }
    if (typeof filterHori() === "number" && !isNaN(filterHori())) {
      displays = displays.filter(
        (display) => display.horizontal_resolution === filterHori()
      );
    }
    if (typeof filterVerti() === "number" && !isNaN(filterVerti())) {
      displays = displays.filter(
        (display) => display.vertical_resolution === filterVerti()
      );
    }
    return displays;
  }, [filter, filterHori, filterVerti]);

  createEffect(() => console.log(filteredDisplays()));

  const totalPixels = createMemo(
    () =>
      isNaN(filterHori()) || isNaN(filterVerti())
        ? ""
        : filterHori() * filterVerti(),
    [filterHori, filterVerti]
  );

  createEffect(() => console.log(totalPixels()));

  return (
    <main>
      <h1>PPI Calculator using Solid Signals</h1>

      <div class="border-2 border-black p-4 max-w-lg">
        <Input
          title={"All filter:"}
          filter={filter}
          setFilter={setFilter}
          type="text"
          onInput={({ target }) => setFilter(target.value)}
        />
        <Input
          title="Horizontal Resolution"
          type="number"
          filter={filterHori}
          setFilter={setFilterHori}
          onInput={({ target }) => setFilterHori(parseInt(target.value))}
        />
        <Input
          title="Vertical Resolution"
          type="number"
          filter={filterVerti}
          setFilter={setFilterVerti}
          onInput={({ target }) => setFilterVerti(parseInt(target.value))}
        />
        <div class="pt-1">Total pixels: {totalPixels().toString()}</div>
      </div>
      <br />

      <For each={filteredDisplays()} fallback={<div>Loading...</div>}>
        {(display) => <Display display={display} />}
      </For>
    </main>
  );
}
