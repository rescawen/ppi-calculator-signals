import { createSignal, createMemo, createEffect, For } from "solid-js";
import { DisplayData, mockDisplayData } from "~/interfaces/DisplayData";
import Input from "~/components/Input";

const [filter, setFilter] = createSignal("");
const [filterHori, setFilterHori] = createSignal(NaN);
const [filterVerti, setFilterVerti] = createSignal(NaN);

createEffect(() => console.log(filter()));
createEffect(() => console.log(filterHori()));
createEffect(() => console.log(filterVerti()));

const filterUpdated = createMemo(() => filter() !== "");
const filterHoriUpdated = createMemo(() => {
  const horiFilter = filterHori();
  return typeof horiFilter === "number" && !isNaN(horiFilter);
});
const filterVertiUpdated = createMemo(() => {
  const vertiFilter = filterVerti();
  return typeof vertiFilter === "number" && !isNaN(vertiFilter);
});

function Display({ display }: { display: DisplayData }) {
  return (
    <div>
      {display.brand} Horizontal resolution: {display.horizontal_resolution}{" "}
      Vertical resolution: {display.vertical_resolution}
    </div>
  );
}

export default function Home() {
  const displays: DisplayData[] = mockDisplayData;

  const filteredDisplays = createMemo(() =>
    (displays ?? []).filter(
      (display) =>
        display.brand.includes(filter()) ||
        display.horizontal_resolution.toString().includes(filter()) ||
        display.vertical_resolution.toString().includes(filter())
    )
  );

  const filteredHori = createMemo(() =>
    (displays ?? []).filter(
      (display) => display.horizontal_resolution === filterHori()
    )
  );

  const filteredVerti = createMemo(() =>
    (displays ?? []).filter(
      (display) => display.vertical_resolution === filterVerti()
    )
  );

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
      <div>
        Total pixels:{" "}
        {isNaN(filterHori()) || isNaN(filterVerti())
          ? "N/A"
          : filterHori() * filterVerti()}
      </div>
      <br />

      {filterUpdated() ? (
        <For each={filteredDisplays()} fallback={<div>Loading...</div>}>
          {(display) => <Display display={display} />}
        </For>
      ) : null}

      {filterHoriUpdated() ? (
        <For each={filteredHori()} fallback={<div>Loading...</div>}>
          {(display) => <Display display={display} />}
        </For>
      ) : null}

      {filterVertiUpdated() ? (
        <For each={filteredVerti()} fallback={<div>Loading...</div>}>
          {(display) => <Display display={display} />}
        </For>
      ) : null}

      {!filterUpdated() && !filterHoriUpdated() && !filterVertiUpdated() && (
        <For each={displays} fallback={<div>Loading...</div>}>
          {(display) => <Display display={display} />}
        </For>
      )}
    </main>
  );
}
