import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import AddTask from "./AddTask";
import ListTask from "./List";

const Products = () => {
    <div className="col-3">
        <BasicExample/>
    </div>
};

function BasicExample(props) {
    return (
        <div className="container pt-5">
            <h1>Jadwal Kegiatan Harian</h1>
            <AddTask/>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Check</th>
                            <th>Kegiatan</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListTask/>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Products;
