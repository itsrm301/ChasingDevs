import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"

export default function BasicTable(props) {
    // console.log(props.gc);
    return (
        <div className='basic_table'>
            <TableContainer component={Paper}>
                <h1>{props.gc.year} General Championship</h1>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><p className='basic_table_hallname'>HALLNAME</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 1</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 2</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 3</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 4</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 5</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 6</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 7</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 8</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 9</p></TableCell>
                            <TableCell align="right"><p className='basic_table_hallname'>EVENT 10</p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.gc.details.map((row) => {
                            //   console.log(row);
                            return (<TableRow
                                key={row.hallname}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.hallname}
                                </TableCell>
                                <TableCell align="right">{row.event[0]}</TableCell>
                                <TableCell align="right">{row.event[1]}</TableCell>
                                <TableCell align="right">{row.event[2]}</TableCell>
                                <TableCell align="right">{row.event[3]}</TableCell>
                                <TableCell align="right">{row.event[4]}</TableCell>
                                <TableCell align="right">{row.event[5]}</TableCell>
                                <TableCell align="right">{row.event[6]}</TableCell>
                                <TableCell align="right">{row.event[7]}</TableCell>
                                <TableCell align="right">{row.event[8]}</TableCell>
                                <TableCell align="right">{row.event[9]}</TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}