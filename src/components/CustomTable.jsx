import { useState } from "react";
import { Menu, Message, Pagination, Table } from "semantic-ui-react";

const CustomTable = ({
    columns = [],
    data = [],
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const totalPages = Math.ceil(data.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const travelObj = (obj = null, path, anyData = false) => {
        if (!path) return obj;
        const pathObj = path.split(".");
        let value = pathObj.reduce((cursor, pathPart) => cursor[pathPart], obj);
        if (anyData) return value;

        return typeof value !== "object" || value !== "function" ? value : "";
    };

    if (!data.length) return (
        <div style={{ overflowX: 'overlay' }}>
            <Message>No hay datos para mostrar.</Message>
        </div>
    );

    return (
        <div style={{ overflowX: 'overlay' }}>
            <Table definition size='large'>
                <Table.Header >
                    <Table.Row >
                        {columns.map((column, key) =>
                            <Table.HeaderCell style={{ backgroundColor: "#db2828", color: "white" }} key={key}>{column.header}</Table.HeaderCell>
                        )}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                    data.map((value, key) =>
                        <Table.Row key={value.id}>
                            {columns.map((column, key2) => (
                                <Table.Cell key={key2} collapsing>
                                    {column.render
                                        ? column.render(travelObj(value, column.accessor, true))
                                        : travelObj(value, column.accessor)}
                                </Table.Cell>
                            ))}
                        </Table.Row>
                    ).slice(startIndex, endIndex)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan={columns.length} >
                            <Menu floated='right' pagination>
                                <Pagination
                                    defaultActivePage={currentPage}
                                    onPageChange={(e, { activePage }) => setCurrentPage(activePage)}
                                    totalPages={totalPages}
                                />
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
};

export default CustomTable;