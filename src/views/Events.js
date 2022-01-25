import React from "react";
import {Link } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next';

function Events() {
  const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];

  const products = [{
    id : 1,
    name : 'zaky',
    price: '1000'
  }];
  return (
    <div>
     
    </div>
  );
}

export default Events;
