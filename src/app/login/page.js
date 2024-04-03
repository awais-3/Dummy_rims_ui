"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import { motion } from "framer-motion";
import { LiaCopyrightSolid } from "react-icons/lia";

// Define validation schema
const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

//Animation Box
const animatedBox = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      await router.push("/");
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        style={{
          backgroundImage: `url('./bluewaves.png')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          variants={animatedBox}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <Box
            zIndex="100"
            w={{ base: "100vw", sm: "md", lg: "lg" }}
            bg="white"
            px={{ base: "20px", sm: "40px", lg: "60px" }}
            py={{ base: "25px", sm: "40px", lg: "60px" }}
            rounded="md"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            minH={{ base: "100vh", sm: "auto" }}
          >
            <Center>
              <Image src={Logo} alt="logo" width={120} height={80} />
            </Center>
            <Center my="4">
              <Heading as="h2">Sign In</Heading>
            </Center>
            <Box>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                {...register("email")}
                mb="1"
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <Text as="span" color="red">
                    {message}
                  </Text>
                )}
              />
            </Box>

            <Box mt="10px">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                {...register("password")}
                mb="1"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <Text as="span" color="red">
                    {message}
                  </Text>
                )}
              />
            </Box>

            {/* Remember Me checkbox */}
            <Box mt="10px" display="flex" alignItems="center">
              <Checkbox
                {...register("rememberMe")}
                id="rememberMe"
                name="rememberMe"
                colorScheme="blue"
                size="md"
              >
                Remember Me
              </Checkbox>
            </Box>

            <Text
              mt="10px"
              display="flex"
              justifyContent="end"
              _hover={{ color: "blue.600", textDecoration: "underline" }}
            >
              <Link href="/forget-password">Forgot password?</Link>
            </Text>
            <Button
              colorScheme="blue"
              type="submit"
              isLoading={submitting}
              w="full"
              mt="20px"
            >
              Continue
            </Button>
            <Center mt="4" fontWeight="semibold" alignItems="center">
              <Icon as={LiaCopyrightSolid} w={6} h={6} mr="1" />
              Logo 2024
            </Center>
          </Box>
        </motion.div>
      </Flex>
    </>
  );
};

export default LoginForm;
