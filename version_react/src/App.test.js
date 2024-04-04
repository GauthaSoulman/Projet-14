import { render, screen,waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter} from "react-router-dom"
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout"
import { BrowserRouter } from "react-router-dom"
import Employee from './pages/Employee/Employee';
import Home from './pages/Home/Home';
import DataTable from './components/Datatable/Datatable';

describe("When the URI is \"/\"", () => {
  test("Display the Header)", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
            <Layout/>
        </MemoryRouter>
    )
    const save = screen.getByText("Create a new employee")
    expect(save).toBeInTheDocument()
  })
})

describe("Given the user is the create employee page and tries to submit the form",
         () => {
    test("Then a modal is displayed", () => {
      render(
        <BrowserRouter>
            <Home />

        </BrowserRouter>
      )
      const buttonSave = screen.getByText("Save")
      expect(buttonSave).toBeInTheDocument()
      
      })
    })

;