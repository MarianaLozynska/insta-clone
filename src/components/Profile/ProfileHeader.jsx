import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="As a Programmer"
          src="/profilepic.png"
          alt="As a programmer logo"
        />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "center", sm: "flex-start" }}
          justifyContent={{ base: "center", column: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>Asaprogrammer_</Text>
          <Flex gap={4} alignItems={"center"} justifySelf={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "WhiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex gap={{ base: 2, sm: 4 }} alignItems={"center"}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontweight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontweight={"bold"} mr={1}>
              149
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontweight={"bold"} mr={1}>
              175
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontweight={"bold"}>
            As a programmer
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
