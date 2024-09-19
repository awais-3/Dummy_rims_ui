"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Logo from "../../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const pathname = usePathname();

  return (
    <Box>
      <Flex
        bg="white"
        color="gray.600"
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 4, lg: 8 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.200"
        align={"center"}
      >
        {/* Logo */}
        <Flex
          flex={{ base: 1, lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", lg: "start" }}
          align="center"
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", lg: "left" })}
            fontFamily={"heading"}
            color="gray.800"
          >
            <Image src={Logo} alt="logo" width={120} height={80} />
          </Text>

          {/* Desktop Navbar Links */}
          <Flex display={{ base: "none", lg: "flex" }} ml={10}>
            <DesktopNav pathname={pathname} />
          </Flex>
        </Flex>

        {/* User Related */}
        <Stack
          flex={{ base: 1, lg: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={{ base: 3, md: 4 }}
          align={"center"}
        >
          {/* Notification Menu */}
          <Menu>
            <MenuButton
              as={Button}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Box fontSize={{ base: "24px", lg: "26px" }}>
                <IoIosNotificationsOutline />
              </Box>
            </MenuButton>
            <MenuList alignItems={"center"} zIndex="20">
              <MenuItem>Awais likes your photo</MenuItem>
              <MenuDivider />
              <MenuItem>Awais comment on your photo</MenuItem>
              <MenuDivider />
              <MenuItem>Awais dislike your photo</MenuItem>
            </MenuList>
          </Menu>

          {/* Profile Menu */}
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size="sm"
                src={"https://ui-avatars.com/api/?name=Nikki+Proost"}
              />
            </MenuButton>
            <MenuList alignItems={"center"} zIndex="20">
              <Flex align="center" gap="6" px="4" py="6">
                <Avatar
                  size={{ base: "sm", md: "md" }}
                  src={"https://ui-avatars.com/api/?name=Nikki+Proost"}
                />
                <Flex direction="column" gap="1">
                  <Flex gap="1" align="center">
                    <Icon as={GrUserAdmin} w={4} h={4} />
                    <Box fontWeight="semibold">Admin</Box>
                  </Flex>
                  <Box>Niki Proost</Box>
                  <Box>niki.proost@energiapharma.be</Box>
                </Flex>
              </Flex>

              <MenuDivider borderColor="gray.400" />
              <MenuItem as={Link} href="/profile">
                Profile
              </MenuItem>
              <MenuItem as={Link} href="/account-settings">
                Account Settings
              </MenuItem>
              <MenuItem as={Link} href="/logout">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>

      {/*Mobile Navbar Links */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav onClose={onClose} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ pathname }) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem?.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={Link}
                p={2}
                href={navItem?.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={pathname === navItem?.href ? "blue.600" : "gray.600"}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  bg: "blue.50",
                  color: "blue.600",
                }}
                bg={pathname === navItem?.href ? "blue.50" : ""}
              >
                {navItem?.label}
                {navItem?.children && <Icon w={4} h={4} as={ChevronDownIcon} />}
              </Box>
            </PopoverTrigger>

            {navItem?.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={"white"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem?.children.map((child) => (
                    <DesktopSubNav key={child?.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Box
      as={Link}
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "blue.50" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.600" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.600"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = ({ onClose }) => {
  return (
    <Box
      bg={"white"}
      p={4}
      display={{ lg: "none" }}
      pos={"absolute"}
      top={20}
      left={0}
      zIndex={20}
      w="full"
      // bg="black"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onClose={onClose} />
      ))}
    </Box>
  );
};

const MobileNavItem = ({ label, children, href, onClose }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        href={href ?? "#"}
        justifyContent="space-between"
        display="flex"
        alignItems="center"
        px="1"
        _hover={{
          textDecoration: "none",
          bg: "gray.100",
          rounded: "4px",
        }}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          my="1"
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
        >
          {children &&
            children?.map((child) => (
              <Box
                as={Link}
                key={child?.label}
                href={child?.href}
                w="100%"
                _hover={{
                  textDecoration: "none",
                  bg: "gray.100",
                  rounded: "4px",
                }}
                py={1}
                onClick={onClose}
              >
                {child?.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Procedures",
    href: "/procedures",
  },
  {
    label: "Contacts",
    href: "/contacts",
  },
  {
    label: "Admin",
    children: [
      // {
      //   label: "Partners",
      //   href: "/partners",
      // },
      {
        label: "User Managment",
        href: "/user-management",
      },
      {
        label: "Milestones",
        href: "/milestones",
      },
      {
        label: "Forms Builder",
        href: "/formbuilder",
      },
    ],
  },
];
