import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, Dropdown } from 'react-bootstrap';
import "./Joingroup.css";
import TopBar from "../TopBar";
import GroupItem from "./Groupitem";
import 'bootstrap/dist/css/bootstrap.min.css';

const Joingroup = () => {
  const [groups, setGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('http://localhost:8000/joingroup');
        if (response.ok) {
          const data = await response.json();
          setGroups(data);
        } else {
          console.error('Nie udało się pobrać danych');
        }
      } catch (error) {
        console.error('Wystąpił błąd podczas pobierania danych', error);
      }
    };

    fetchGroups();
  }, []);



  const handleChangeItemsPerPage = (selectedValue) => {
    setItemsPerPage(parseInt(selectedValue, 10));
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = groups.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="dashboard-page">
      <TopBar></TopBar>
      <div className="dropdown-custom">
        <Form.Group controlId="itemsPerPage" className="items-per-page">
          <Dropdown onSelect={handleChangeItemsPerPage} className="custom-dropdown">
            <Dropdown.Toggle className="custom-dropdown-toggle" variant="secondary" id="dropdown-items-per-page">
              {itemsPerPage}
            </Dropdown.Toggle>
            <Dropdown.Menu className="custom-dropdown-menu">
              <Dropdown.Item eventKey="5" className="custom-dropdown-item">5</Dropdown.Item>
              <Dropdown.Item eventKey="10" className="custom-dropdown-item">10</Dropdown.Item>
              <Dropdown.Item eventKey="15" className="custom-dropdown-item">15</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Form.Group>
        </div>
        <div className="create-page">
        {currentItems.map((group) => (
          <GroupItem key={group.id} group={group} />
        ))}
            </div>
        <nav>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(groups.length / itemsPerPage) }).map((_, index) => (
              <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <Button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

    </div>
  );
};

export default Joingroup;
