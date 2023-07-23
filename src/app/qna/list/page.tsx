'use client'

import * as React from "react";
import "../qna.scss";
import "jodit/build/jodit.min.css";
import JoditReact from "jodit-react-ts";
import { Button } from "@/components/atmos/Button";
import TopTemplate from "@/components/atmos/TopTemplate";
import Editor from "@/components/atmos/Editor/editor";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Input } from '@mui/material';



function createData(
    name: string,
    writer: string,
    title: string,
    answer: string,
    date: string,
) {
    return { name, writer, title, answer, date };
}

export default function QnA() {
    const [value, setValue] = React.useState<string>();
    const rows = [
        createData('1', '아무개', '상품문의', '답변완료', '2023-06-23'),
        createData('2', '아무개', '상품문의', '미답변', '2023-06-23'),
        createData('3', '아무개', '상품문의', '미답변', '2023-06-23'),
    ];

    return (
        <div className='top__container'>
            <TopTemplate title='QnA' red={false} />
            <div className="top__section">
                <div className="search__section">
                    <Input placeholder='작성자' />
                    <Input placeholder='제목' />
                    <Button color='info'>검색</Button>
                </div>
                <div className='info__section'>
                    <Button color='info' sx={{ height: 30 }}>작성하기</Button>
                    <div className="text">등록순</div>
                </div>
            </div>
            <>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell align="right">작성자</TableCell>
                                <TableCell align="right">제목</TableCell>
                                <TableCell align="right">답변상태</TableCell>
                                <TableCell align="right">작성일</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.writer}</TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.answer}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        </div>
    )
}