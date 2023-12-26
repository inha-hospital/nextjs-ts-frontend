import { Flex, Button, Text, Card } from "@radix-ui/themes";

const Home = () => {
    return (
        <>
            <Card asChild style={{ maxWidth: 350 }}>
                <a href="#">
                    <Text as="div" size="2" weight="bold">
                        Quick start
                    </Text>
                    <Text as="div" color="gray" size="2">
                        Start building your next project in minutes
                    </Text>
                </a>
            </Card>
            <Flex direction="column" gap="2">
                <Text>Hello from Radix Themes :)</Text>
                <Button>Let's go</Button>
            </Flex>
        </>
    );
};

export default Home;
