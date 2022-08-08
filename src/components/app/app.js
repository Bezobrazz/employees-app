import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

function App() {
  const data = [
    { name: "John C.", salary: 700, increase: true, id: 1 },
    { name: "Maria D.", salary: 2300, increase: false, id: 2 },
    { name: "Serg D.", salary: 4100, increase: false, id: 3 },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
