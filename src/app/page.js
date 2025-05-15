"use client";
import { useState, useEffect } from "react";
import {
  Code,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle, toggleVariants } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function ShadcnUIShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(33);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const componentSections = [
    { id: "form-controls", title: "Form Controls", components: ["Button", "Input", "Textarea", "Select", "Checkbox", "Radio Group", "Switch", "Slider", "Toggle"] },
    { id: "navigation", title: "Navigation", components: ["Tabs", "Breadcrumb", "Navigation Menu", "Menubar", "Dropdown Menu"] },
    { id: "feedback", title: "Feedback", components: ["Alert", "Alert Dialog", "Toast (via useToast)", "Tooltip", "Popover"] },
    { id: "data-display", title: "Data Display", components: ["Card", "Badge", "Avatar", "Table", "Accordion", "Progress"] },
    { id: "overlay", title: "Overlay", components: ["Dialog", "Sheet", "Hover Card", "Context Menu"] },
    { id: "utility", title: "Utility", components: ["Command", "Scroll Area", "Separator"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-pink-800 to-pink-900 text-white overflow-hidden">
      {/* Header */}
      <header className={`flex items-center justify-between p-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="flex items-center space-x-2">
          <Code className="w-6 h-6 text-pink-400" />
          <span className="font-bold text-xl">Shadcn UI Showcase nhé anhhh</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
          <a href="https://github.com/shadcn/ui" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className={`flex flex-col items-center text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-500">
              Shadcn UI Components
            </span>
          </h1>
          <p className="text-lg text-pink-200 mt-4 max-w-2xl">
            Bộ sưu tập các thành phần UI của Shadcn UI
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button asChild variant="default" className="bg-pink-600 hover:bg-pink-700">
              <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                Visit Documentation
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-950">
              <a href="https://github.com/shadcn/ui" target="_blank" rel="noopener noreferrer">
                View on GitHub
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Component Showcase */}
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar Navigation */}
          <aside className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <Card className="bg-pink-800 border-pink-700 sticky top-6">
              <CardHeader>
                <CardTitle className="text-pink-300">Components</CardTitle>
                <CardDescription className="text-pink-200">Navigate to different component categories</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {componentSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block p-2 rounded-md hover:bg-pink-700 transition-colors text-pink-200 hover:text-pink-100"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Component Sections */}
          <div className={`space-y-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {componentSections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-3xl font-bold text-pink-400 mb-6">{section.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.components.includes("Button") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Button</CardTitle>
                        <CardDescription className="text-pink-200">Trigger actions with customizable buttons.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Button className="bg-pink-600 hover:bg-pink-700">Default</Button>
                          <Button variant="destructive">Destructive</Button>
                          <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-900">Outline</Button>
                          <Button variant="ghost" className="text-pink-400 hover:bg-pink-900">Ghost</Button>
                          <Button size="sm" className="bg-pink-600 hover:bg-pink-700">Small</Button>
                          <Button disabled>Disabled</Button>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/button" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Input") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Input</CardTitle>
                        <CardDescription className="text-pink-200">Collect user input with styled text fields.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Input placeholder="Type here..." />
                        <Input type="password" placeholder="Password" />
                        <Input disabled placeholder="Disabled" />
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/input" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Textarea") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Textarea</CardTitle>
                        <CardDescription className="text-pink-200">Multi-line text input for longer content.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Textarea placeholder="Enter your message..." />
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/textarea" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Select") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Select</CardTitle>
                        <CardDescription className="text-pink-200">Dropdown menu for single selection.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/select" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Checkbox") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Checkbox</CardTitle>
                        <CardDescription className="text-pink-200">Toggleable input for multiple selections.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="check1" />
                          <Label htmlFor="check1" className="text-pink-200">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="check2" disabled />
                          <Label htmlFor="check2" className="text-pink-200">Disabled</Label>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/checkbox" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Radio Group") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Radio Group</CardTitle>
                        <CardDescription className="text-pink-200">Single-selection radio buttons.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RadioGroup defaultValue="option1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option1" id="r1" />
                            <Label htmlFor="r1" className="text-pink-200">Option 1</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option2" id="r2" />
                            <Label htmlFor="r2" className="text-pink-200">Option 2</Label>
                          </div>
                        </RadioGroup>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/radio-group" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Switch") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Switch</CardTitle>
                        <CardDescription className="text-pink-200">Toggle between two states.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="switch1" />
                          <Label htmlFor="switch1" className="text-pink-200">Toggle</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="switch2" disabled />
                          <Label htmlFor="switch2" className="text-pink-200">Disabled</Label>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/switch" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Slider") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Slider</CardTitle>
                        <CardDescription className="text-pink-200">Adjustable range input.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Slider defaultValue={[50]} max={100} step={1} />
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/slider" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Toggle") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Toggle</CardTitle>
                        <CardDescription className="text-pink-200">Button-like toggle with variants.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Toggle className="bg-pink-600 hover:bg-pink-700">Toggle</Toggle>
                        <Toggle variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-900">Outline</Toggle>
                        <Toggle size="sm" className="bg-pink-600 hover:bg-pink-700">Small</Toggle>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/toggle" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Tabs") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Tabs</CardTitle>
                        <CardDescription className="text-pink-200">Organize content with tabbed navigation.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Tabs defaultValue="tab1" className="w-full">
                          <TabsList className="bg-pink-900">
                            <TabsTrigger value="tab1" className="data-[state=active]:bg-pink-600">Tab 1</TabsTrigger>
                            <TabsTrigger value="tab2" className="data-[state=active]:bg-pink-600">Tab 2</TabsTrigger>
                          </TabsList>
                          <TabsContent value="tab1" className="text-pink-200">Content for Tab 1</TabsContent>
                          <TabsContent value="tab2" className="text-pink-200">Content for Tab 2</TabsContent>
                        </Tabs>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/tabs" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Breadcrumb") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Breadcrumb</CardTitle>
                        <CardDescription className="text-pink-200">Show navigation hierarchy.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Breadcrumb>
                          <BreadcrumbList>
                            <BreadcrumbItem>
                              <BreadcrumbLink href="#" className="text-pink-400 hover:text-pink-300">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-pink-400" />
                            <BreadcrumbItem>
                              <BreadcrumbLink href="#" className="text-pink-400 hover:text-pink-300">Components</BreadcrumbLink>
                            </BreadcrumbItem>
                          </BreadcrumbList>
                        </Breadcrumb>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/breadcrumb" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Navigation Menu") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Navigation Menu</CardTitle>
                        <CardDescription className="text-pink-200">Dropdown-style navigation bar.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger className="bg-pink-900 text-pink-200 hover:bg-pink-700">Menu</NavigationMenuTrigger>
                              <NavigationMenuContent className="bg-pink-800">
                                <NavigationMenuLink className="block p-2 text-pink-200 hover:bg-pink-700">Item 1</NavigationMenuLink>
                                <NavigationMenuLink className="block p-2 text-pink-200 hover:bg-pink-700">Item 2</NavigationMenuLink>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/navigation-menu" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Menubar") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Menubar</CardTitle>
                        <CardDescription className="text-pink-200">Accessible menu bar for applications.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Menubar className="bg-pink-900 border-pink-700">
                          <MenubarMenu>
                            <MenubarTrigger className="text-pink-200 hover:bg-pink-700">File</MenubarTrigger>
                            <MenubarContent className="bg-pink-800 border-pink-700">
                              <MenubarItem className="text-pink-200 hover:bg-pink-700">New</MenubarItem>
                              <MenubarItem className="text-pink-200 hover:bg-pink-700">Open</MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/menubar" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Dropdown Menu") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Dropdown Menu</CardTitle>
                        <CardDescription className="text-pink-200">Contextual menu for actions.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-900">Open</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-pink-800 border-pink-700">
                            <DropdownMenuLabel className="text-pink-200">My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-pink-700" />
                            <DropdownMenuItem className="text-pink-200 hover:bg-pink-700">Profile</DropdownMenuItem>
                            <DropdownMenuItem className="text-pink-200 hover:bg-pink-700">Settings</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/dropdown-menu" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Alert") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Alert</CardTitle>
                        <CardDescription className="text-pink-200">Display important messages or warnings.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Alert className="border-pink-700 bg-pink-900">
                          <AlertTitle className="text-pink-300">Heads up!</AlertTitle>
                          <AlertDescription className="text-pink-200">This is an alert message.</AlertDescription>
                        </Alert>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/alert" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Alert Dialog") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Alert Dialog</CardTitle>
                        <CardDescription className="text-pink-200">Modal for critical confirmations.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-900">Show Dialog</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-pink-800 border-pink-700">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-pink-300">Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription className="text-pink-200">
                                This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="bg-pink-900 hover:bg-pink-700 text-pink-200">Cancel</AlertDialogCancel>
                              <AlertDialogAction className="bg-pink-600 hover:bg-pink-700">Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/alert-dialog" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Tooltip") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Tooltip</CardTitle>
                        <CardDescription className="text-pink-200">Show additional info on hover.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button className="bg-pink-600 hover:bg-pink-700">Hover me</Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-pink-800 border-pink-700 text-pink-200">
                              <p>This is a tooltip</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/tooltip" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Popover") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Popover</CardTitle>
                        <CardDescription className="text-pink-200">Display content in a floating container.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-900">Open Popover</Button>
                          </PopoverTrigger>
                          <PopoverContent className="bg-pink-800 border-pink-700 text-pink-200">
                            <p>This is a popover content.</p>
                          </PopoverContent>
                        </Popover>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/popover" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Card") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Card</CardTitle>
                        <CardDescription className="text-pink-200">Flexible container for content.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Card className="bg-pink-900 border-pink-700">
                          <CardHeader>
                            <CardTitle className="text-pink-300">Sample Card</CardTitle>
                            <CardDescription className="text-pink-200">Card content goes here.</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-pink-200">This is a sample card content.</p>
                          </CardContent>
                        </Card>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/card" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Badge") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Badge</CardTitle>
                        <CardDescription className="text-pink-200">Small labels for status or categories.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex flex-col gap-2">
                          <Badge className="bg-pink-600 hover:bg-pink-700">Default</Badge>
                          <Badge variant="secondary" className="bg-pink-900 text-pink-200">Secondary</Badge>
                          <Badge variant="destructive">Destructive</Badge>
                          <Badge variant="outline" className="border-pink-500 text-pink-400">Outline</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/badge" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Avatar") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Avatar</CardTitle>
                        <CardDescription className="text-pink-200">Display user images or initials.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback className="bg-pink-900 text-pink-200">CN</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarFallback className="bg-pink-900 text-pink-200">JD</AvatarFallback>
                          </Avatar>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/avatar" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Table") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Table</CardTitle>
                        <CardDescription className="text-pink-200">Display data in a tabular format.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow className="border-pink-700 hover:bg-pink-900">
                              <TableHead className="text-pink-300">Name</TableHead>
                              <TableHead className="text-pink-300">Role</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="border-pink-700 hover:bg-pink-900">
                              <TableCell className="text-pink-200">John Doe</TableCell>
                              <TableCell className="text-pink-200">Developer</TableCell>
                            </TableRow>
                            <TableRow className="border-pink-700 hover:bg-pink-900">
                              <TableCell className="text-pink-200">Jane Smith</TableCell>
                              <TableCell className="text-pink-200">Designer</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/table" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Accordion") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Accordion</CardTitle>
                        <CardDescription className="text-pink-200">Collapsible content sections.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1" className="border-pink-700">
                            <AccordionTrigger className="text-pink-200 hover:text-pink-300">Section 1</AccordionTrigger>
                            <AccordionContent className="text-pink-200">Content for section 1.</AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2" className="border-pink-700">
                            <AccordionTrigger className="text-pink-200 hover:text-pink-300">Section 2</AccordionTrigger>
                            <AccordionContent className="text-pink-200">Content for section 2.</AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/accordion" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Progress") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Progress</CardTitle>
                        <CardDescription className="text-pink-200">Show task or process completion.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Progress value={progress} className="w-full [&>*]:bg-pink-600" />
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/progress" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Dialog") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Dialog</CardTitle>
                        <CardDescription className="text-pink-200">Modal for user interaction.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-900">Open Dialog</Button>
                          </DialogTrigger>
                          <DialogContent className="bg-pink-800 border-pink-700">
                            <DialogHeader>
                              <DialogTitle className="text-pink-300">Dialog Title</DialogTitle>
                              <DialogDescription className="text-pink-200">
                                This is a dialog description.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button className="bg-pink-600 hover:bg-pink-700">Close</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/dialog" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Sheet") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Sheet</CardTitle>
                        <CardDescription className="text-pink-200">Side panel for additional content.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-900">Open Sheet</Button>
                          </SheetTrigger>
                          <SheetContent className="bg-pink-800 border-pink-700 text-pink-200">
                            <p>Sheet content goes here.</p>
                          </SheetContent>
                        </Sheet>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/sheet" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Hover Card") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Hover Card</CardTitle>
                        <CardDescription className="text-pink-200">Content revealed on hover.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Button variant="link" className="text-pink-400 hover:text-pink-300">Hover me</Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="bg-pink-800 border-pink-700 text-pink-200">
                            <p>This is a hover card content.</p>
                          </HoverCardContent>
                        </HoverCard>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/hover-card" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Context Menu") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Context Menu</CardTitle>
                        <CardDescription className="text-pink-200">Right-click menu for actions.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ContextMenu>
                          <ContextMenuTrigger>
                            <div className="p-4 bg-pink-900 rounded-md text-pink-200">Right-click here</div>
                          </ContextMenuTrigger>
                          <ContextMenuContent className="bg-pink-800 border-pink-700">
                            <ContextMenuItem className="text-pink-200 hover:bg-pink-700">Action 1</ContextMenuItem>
                            <ContextMenuItem className="text-pink-200 hover:bg-pink-700">Action 2</ContextMenuItem>
                          </ContextMenuContent>
                        </ContextMenu>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/context-menu" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Command") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Command</CardTitle>
                        <CardDescription className="text-pink-200">Searchable command palette.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Command className="bg-pink-900 border-pink-700">
                          <CommandInput placeholder="Type a command..." className="text-pink-200" />
                          <CommandList className="bg-pink-900">
                            <CommandEmpty className="text-pink-200">No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions" className="text-pink-300">
                              <CommandItem className="text-pink-200 hover:bg-pink-700">Command 1</CommandItem>
                              <CommandItem className="text-pink-200 hover:bg-pink-700">Command 2</CommandItem>
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/command" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Scroll Area") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Scroll Area</CardTitle>
                        <CardDescription className="text-pink-200">Scrollable content with custom scrollbars.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-32 w-full rounded-md border border-pink-700">
                          <div className="p-4 text-pink-200">
                            <p>Scrollable content goes here.</p>
                            <p>More content...</p>
                            <p>Even more content...</p>
                            <p>Keep scrolling...</p>
                          </div>
                        </ScrollArea>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/scroll-area" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  {section.components.includes("Separator") && (
                    <Card className="bg-pink-800 border-pink-700">
                      <CardHeader>
                        <CardTitle className="text-pink-300">Separator</CardTitle>
                        <CardDescription className="text-pink-200">Visual divider for content.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-pink-200">Section 1</p>
                          <Separator className="my-2 bg-pink-700" />
                          <p className="text-pink-200">Section 2</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-pink-400">
                          <a href="https://ui.shadcn.com/docs/components/separator" target="_blank" rel="noopener noreferrer">
                            View Docs
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`p-6 text-center text-pink-300 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="py-4 border-t border-pink-700 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Shadcn UI Showcase. Powered by <a href="https://ui.shadcn.com" className="text-pink-400 hover:text-pink-300">Shadcn UI</a>.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors flex items-center gap-1">
                <ExternalLink className="w-4 h-4" />
                <span>Documentation</span>
              </a>
              <a href="https://github.com/shadcn/ui" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors flex items-center gap-1">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}