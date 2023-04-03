import { createSignal, createMemo, createEffect, For } from "solid-js";
import { DisplayData, mockDisplayData } from "~/interfaces/DisplayData";
import Input from "~/components/Input";
import Display from "~/components/Display";

const [filter, setFilter] = createSignal("");
const [filterHori, setFilterHori] = createSignal(NaN);
const [filterVerti, setFilterVerti] = createSignal(NaN);

// createEffect(() => console.log(filter()));
// createEffect(() => console.log(filterHori()));
// createEffect(() => console.log(filterVerti()));

const filteredDisplays = createMemo(() =>
  (mockDisplayData ?? []).filter((display) => {
    console.log("before first if statement inside filteredDisplays");
    if (filter() !== "") {
      return (
        display.brand.includes(filter()) ||
        display.horizontal_resolution.toString().includes(filter()) ||
        display.vertical_resolution.toString().includes(filter())
      );
    }
    console.log("before second if statement inside filteredDisplays");
    if (
      typeof filterHori() === "number" &&
      !isNaN(filterHori()) &&
      display.horizontal_resolution !== filterHori()
    ) {
      return false;
    }
    console.log("before third if statement inside filteredDisplays");
    if (
      typeof filterVerti() === "number" &&
      !isNaN(filterVerti()) &&
      display.vertical_resolution !== filterVerti()
    ) {
      return false;
    }
    console.log("before final truthy return");
    return true;
  })
);

createEffect(() => console.log(filteredDisplays()));

export default function Home() {
  const totalPixels =
    isNaN(filterHori()) || isNaN(filterVerti())
      ? ""
      : filterHori() * filterVerti();

  return (
    <main>
      <h1>PPI Calculator using Solid Signals</h1>

      <Input
        title={"All filter:"}
        filter={filter}
        setFilter={setFilter}
        type="text"
        onInput={(e) => {
          const value = (e.target as HTMLInputElement).value;
          setFilter(value);
        }}
      />
      <Input
        title="Horizontal Resolution"
        type="number"
        filter={filterHori}
        setFilter={setFilterHori}
        onInput={(e) => setFilterHori(parseInt(e.target.value))}
      />

      <Input
        title="Vertical Resolution"
        type="number"
        filter={filterVerti}
        setFilter={setFilterVerti}
        onInput={(e) => setFilterVerti(parseInt(e.target.value))}
      />
      <div>Total pixels: {totalPixels}</div>
      <br />

      <For each={filteredDisplays()} fallback={<div>Loading...</div>}>
        {(display) => <Display display={display} />}
      </For>
    </main>
  );
}
