import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';

import Data from './data.js';
import Product from './component/Product';
import Detail from './component/Detail';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      {/* nav bootstrap */}
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
            <Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>  {/* Switch 안에는 모든 Route가 담겨있어야 한다(화면 내 router들이 switch되도록) */}

        <Route exact path="/">
          {/* jumbotron bootstrap */}
          <Jumbotron className="background">
            <h1>20% Season OFF</h1>
            <p>
              This site offer a biggest sale product in the Korea.
              We hope you to enjoy here</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          {/* 상품표기(3등분) */}
          <div className="container">
            <div className="row">  {/* 총 12개의 column(기본)으로 나누겠다는 bootstrap 문법 */}

              {/* col-4 : 4개의 row로 나누겠다는 bootstrap 문법  / col-md-4 : 모바일에서 세로 1열 정렬 되게 만드는 bootstrap 문법 */}
              {/* <div className="col-md-4"> 
            <img src="http://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4> {shoes[0].title} </h4>
            <p> {shoes[0].content} & {shoes[0].price} </p>
          </div>

          <div className="col-md-4">
            <img src="http://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4> {shoes[1].title} </h4>
            <p> {shoes[1].content} &  {shoes[1].price} </p>
          </div>

          <div className="col-md-4">
            <img src="http://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4> {shoes[2].title} </h4>
            <p> {shoes[2].content} &  {shoes[2].price} </p>
          </div> */}

              {
                shoes.map((a, i) => {
                  return (
                    <Product shoes={shoes[i]} i={i} key={i} />
                  )
                })
              }

            </div>
          </div>

        </Route>


        <Route exact path="/detail">
          <Detail />
        </Route>

        <Route path="/:id">  {/* "/모든문자" 라는 경로를 의미 */}
          <div>아무거나 적었을 때 이거 보여주세요</div>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
