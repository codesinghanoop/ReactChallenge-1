import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TripData = (props) => (
    <div className='tableContainer'>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Type</TableCell>
                </TableRow>
            </TableHead>
                <TableBody>
                    {props.tripData.map((ele, i) => 
                        <TableRow key={i}>
                            <TableCell>{ele.date}</TableCell>
                            <TableCell>{ele.place}</TableCell>
                            <TableCell>{ele.type}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
        </Table>
    </div>
)

export default TripData
