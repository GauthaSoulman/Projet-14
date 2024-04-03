import "./Employee.css";
import DataTable from "../../components/Datatable/Datatable";


function Employee() {
    // Employees list
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    let employeesNameData;
    if(employees.length !== 0) {
        employeesNameData = Object.getOwnPropertyNames(employees[0]) || "";
    } else {
        employeesNameData = [];
    }


    // Template
    return (
        <>
            {/* Title */}
            <title>"View current employee(s)"</title>
                
            {/* Table */}
            <DataTable data={employees} nameData={employeesNameData} />
        </>
    );
}

export default Employee;