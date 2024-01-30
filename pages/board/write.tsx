import { Box, Button, Flex, Grid, Link, TextArea } from "@radix-ui/themes";

const Write = () => {
    return (
        <Box>
            <Grid gap="5">
                <Flex direction="column" gap="4">
                    <TextArea color="red" size="3" placeholder="제목..." />
                    <TextArea style={{height:"300px"}} color="red" size="2" placeholder="게시판..." />
                </Flex>

                <Flex gap="2">
                    <Button color="red">작성</Button>
                    <Link href="/board">
                        <Button color="red">취소</Button>
                    </Link>
                </Flex>
            </Grid>
        </Box>
    );
}

export default Write;