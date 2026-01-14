"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import HireUsModal from "@/components/hire-us-modal";
import { useDisclosure } from "@heroui/use-disclosure";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import {
  ChevronDownIcon,
  GlobeIcon,
  PersonIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

export default function NavBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const menuItems = [
    { name: "Find Developers", href: "/find-developers" },
    { name: "Join Team", href: "/join-team" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About Remote", href: "/about-remote" },
    { name: "Products", href: "#products" },
  ];

  return (
    <Navbar isBlurred maxWidth="xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-inherit text-lg"
          >
            ekilie
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-2xl flex gap-3 justify-center items-center"
          >
            ekilie
          </a>
        </NavbarBrand>
        <NavbarItem>
          <Button as={Link} href="/find-developers" variant="light" size="sm">
            Find Developers
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="/join-team" variant="light" size="sm">
            Join Team
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<ChevronDownIcon />}
                variant="light"
                size="sm"
              >
                About
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="About menu"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="how-it-works"
                description="Learn how we connect clients with top remote developers"
                startContent={<TimerIcon />}
                as={Link}
                href="/how-it-works"
              >
                How It Works
              </DropdownItem>
              <DropdownItem
                key="about-remote"
                description="Our remote-first culture and philosophy"
                startContent={<GlobeIcon />}
                as={Link}
                href="/about-remote"
              >
                Remote Culture
              </DropdownItem>
              <DropdownItem
                key="products"
                description="Explore our software solutions"
                startContent={<PersonIcon />}
                as={Link}
                href="/#products"
              >
                Our Products
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            onPress={onOpen}
            color="primary"
            variant="solid"
            className="hidden sm:flex"
            size="sm"
          >
            Hire Us
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
              color="foreground"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            onPress={onOpen}
            color="primary"
            variant="solid"
            className="w-full"
            size="lg"
          >
            Hire Us
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
      
      <HireUsModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </Navbar>
  );
}
