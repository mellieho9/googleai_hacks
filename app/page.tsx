"use client"
import CustomButton from "@/components/Button";
import { CustomCard } from "@/components/landing/Card";
import { Center, Heading, VStack, HStack } from "@chakra-ui/react";
import Link from 'next/link';

export default function Index() {

  const c1 = [
    {
      title: "Upload & Illuminate",
      description:
        "Easily upload any research paper and highlight sections that matter to you. InsightMapper does the rest, transforming dense text into clear, understandable diagrams.",
    },
    {
      title: "Key Terms, Unlocked",
      description:
        "Cut through the clutter with auto-generated key terms, making sure you grasp the essence of any paper.",
    },
  ];

  const c2 = [
    {
      title: "Stay on Track",
      description:
        "Never lose sight of unread papers. Our smart notifications gently nudge you towards your next discovery.",
    },
    {
      title: "Designed for Focus",
      description:
        "A clutter-free interface with distraction-reducing features allows you to immerse yourself in research, enhancing productivity.      ",
    },
  ];

  return (
    <Center bg="white" h="100vh" w="100vw">
      <VStack spacing="4rem">
        <VStack spacing="1rem">
          <Heading color="black">Unveiling clarity in research</Heading>
          <Link href="/auth" passHref>
          <CustomButton w="10rem" shadow="sm">
            Get started
          </CustomButton>
          </Link>
        </VStack>
        <HStack spacing={4}>
          <CustomCard heading={"Simplify Complex Ideas"} bodyContent={c1} />
          <CustomCard heading={"Your Research, Streamlined"} bodyContent={c2} />
        </HStack>
      </VStack>
    </Center>
  );
}
