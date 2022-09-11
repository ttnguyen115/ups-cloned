import { TailwindProvider } from "tailwind-rn";
import { CustomersScreen } from "./screens";
import utilities from "./tailwind.json";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <CustomersScreen />
    </TailwindProvider>
  );
}
