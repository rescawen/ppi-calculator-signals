interface FilterInputsProps {
  title: string;
  filter: () => string | number;
  setFilter: (value: string | number) => void;
  type: "text" | "number";
  onInput: (e: any) => void;
}

export default function Input(props: FilterInputsProps) {
  return (
    <div>
      {props.title}
      <input type={props.type} value={props.filter()} onInput={props.onInput} />
    </div>
  );
}
