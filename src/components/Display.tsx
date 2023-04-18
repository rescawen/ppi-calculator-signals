import { DisplayData } from "~/interfaces/DisplayData";

export default function Display({ display }: { display: DisplayData }) {
  return (
    <div>
      {display.name} {display.horizontal_resolution}x
      {display.vertical_resolution} @ {display.diagonal}
    </div>
  );
}
