import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "@/types/user";
import { Button } from "./ui/button";

interface UserFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: User["status"] | "All";
  setStatusFilter: (value: User["status"] | "All") => void;
  roleFilter: User["role"] | "All";
  setRoleFilter: (value: User["role"] | "All") => void;
}

export function UserFilters({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  roleFilter,
  setRoleFilter,
}: UserFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        placeholder="Search by name or email..."
        aria-label="Search users by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="md:w-1/2"
      />

      <Select
        value={roleFilter}
        onValueChange={(value) => setRoleFilter(value || "All")}
      >
        <SelectTrigger className="w-[180px]" aria-label="Filter users by role">
          <SelectValue placeholder="All Roles" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Roles</SelectItem>
          <SelectItem value="Admin">Admin</SelectItem>
          <SelectItem value="Editor">Editor</SelectItem>
          <SelectItem value="Viewer">Viewer</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={statusFilter}
        onValueChange={(value) => setStatusFilter(value || "All")}
      >
        <SelectTrigger
          className="w-[180px]"
          aria-label="Filter users by status"
        >
          <SelectValue placeholder="All Statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Statuses</SelectItem>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={() => {
          setSearchQuery("");
          setStatusFilter("All");
          setRoleFilter("All");
        }}
      >
        Clear
      </Button>
    </div>
  );
}
