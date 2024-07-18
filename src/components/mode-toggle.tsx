"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

type Props = {
  className?: string
}

export function ModeToggle({ className }: Props) {
  const { setTheme } = useTheme()

  const handleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={className}>
          <Switch id="dark" onCheckedChange={handleTheme} />
          <Label className="text-slate-200 font-bold mt-2" htmlFor="dark">Dark</Label>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
