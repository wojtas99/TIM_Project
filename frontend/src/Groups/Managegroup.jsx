import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, Dropdown } from 'react-bootstrap';
import TopBar from "../TopBar/TopBar";
import MyGroupItem from "./MyGroupitem";
import 'bootstrap/dist/css/bootstrap.min.css';

const Managegroup = () => {
  const [groups, setGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);


  useEffect(() => {
    const fetchGroups = async (token) => {
      try {
        const response = await fetch('http://localhost:8000/manage', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setGroups(data);
        }
      } catch (error) {
        console.error('Wystąpił błąd podczas pobierania danych', error);
      }
    };

    const token = localStorage.getItem("authToken");
    if (token) {
      fetchGroups(token);
    } else {
      console.error('Brak tokena autoryzacyjnego');
    }
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
    <div className="main-page">
      <TopBar></TopBar>
      <div className="custom-dropdown">
        <Form.Group controlId="itemsPerPage" className="items-per-page">
          <Dropdown onSelect={handleChangeItemsPerPage} className="custom-dropdown">
            <Dropdown.Toggle className="custom-dropdown-toggle" variant="secondary" id="dropdown-items-per-page">
              Items Per Page
            </Dropdown.Toggle>
            <Dropdown.Menu className="custom-dropdown-menu">
              <Dropdown.Item eventKey="3" className="custom-dropdown-item">3</Dropdown.Item>
              <Dropdown.Item eventKey="5" className="custom-dropdown-item">5</Dropdown.Item>
              <Dropdown.Item eventKey="8" className="custom-dropdown-item">10</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </div>
      <div className="create-page">
            {currentItems.map((group) => (
              <MyGroupItem key={group.id} group={group} />
            ))}
      </div>

        <ul className="pagination">
          {Array.from({ length: Math.ceil(groups.length / itemsPerPage) }).map((_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <Button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </Button>
            </li>
          ))}
        </ul>
      </div>
  );
  };
  
  export default Managegroup;
