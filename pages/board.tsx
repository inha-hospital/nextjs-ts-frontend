import { Avatar, Box, Button, Flex, Heading, Table, TableCell, Text, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon, Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const Board = () => {
    return (
        <Box>
            <Heading size="6">게시판</Heading>

            <Flex direction="row" gap="3">
                <TextField.Root size="3" color="red">
                    <TextField.Slot color="red">
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                    <TextField.Input placeholder="게시글 검색" />
                </TextField.Root>
                <Link href="/board/write">
                    <Button size="3" color="red"><Pencil2Icon width="16" height="16" />글 작성</Button>
                </Link>
            </Flex>

            <Table.Root>
                <Table.Body>
                    <Table.Row>
                    <Table.RowHeaderCell width="70%">
                    <Text as="div" size="4">게시글 작성 방법</Text>
                    </Table.RowHeaderCell>
                    <TableCell width="15%" align="center">
                        <Flex direction="row" gap="1">
                            <Avatar size="1" fallback="A"/>
                            <Text as="div" size="2">작성자 1</Text>
                        </Flex>
                    </TableCell>
                    <Table.Cell width="15%" align="center">
                        <Text as="div" size="2">2024.01.03</Text>
                    </Table.Cell>
                    </Table.Row>
                    
                    <Table.Row>
                    <Table.RowHeaderCell>
                        <Text as="div" size="4">INHA BLOOD 생성 이유</Text>
                    </Table.RowHeaderCell>
                    <TableCell width="15%" align="center">
                        <Flex direction="row" gap="2">
                            <Avatar size="1" fallback="B"/>
                            <Text as="div" size="2">작성자 2</Text>
                        </Flex>
                    </TableCell>
                    <Table.Cell width="15%" align="center">
                        <Text as="div" size="2">2024.01.02</Text>
                    </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                    <Table.RowHeaderCell>
                    <Text as="div" size="4">*공지사항*</Text>
                    </Table.RowHeaderCell>
                    <TableCell width="15%" align="center">
                        <Flex direction="row" gap="2">
                            <Avatar size="1" fallback="C"/>
                            <Text as="div" size="2">작성자 3</Text>
                        </Flex>
                    </TableCell>
                    <Table.Cell width="15%" align="center">
                        <Text as="div" size="2">2024.01.01</Text>
                    </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </Box>
    );
};

export default Board;