import { BiArchive } from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/addAppointment"

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        <BiArchive />My Appointments!</h1>
        <AddAppointment />
        <Search />
    </div>
  );
}

export default App;
