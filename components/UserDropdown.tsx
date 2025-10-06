"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = () => {
        // Implement sign-out logic here
        router.push("/sign-in");
    };

    const user = { name: "John Doe", email: "asd@asd.it" }; // Replace with actual user data

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-centergap-3 text-gray-4 hover:text-yellow-500 transition-colors"
                >
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 p-2">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-base font-medium text-gray-400">
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="cursor-pointer text-md text-gray-100 font-medium hover:bg-gray-700 focus:bg-transparent focus:text-yellow-500 transition-colors"
                >
                    <LogOut className="mr-1 h-4 w-4" /> Sign Out
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
