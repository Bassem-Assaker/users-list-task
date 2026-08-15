import { useState, useMemo } from "react";
import { dummyUsers } from "./data/dummyUsers";
import { UserFilters } from "./components/UserFilters";
import { UserTable } from "./components/UserTable";
import { User } from "./types/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<User["status"] | "All">(
    "All",
  );
  const [roleFilter, setRoleFilter] = useState<User["role"] | "All">("All");

  const filteredUsers = useMemo(() => {
    return dummyUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase().trim());

      const matchesStatus =
        statusFilter === "All" || user.status === statusFilter;
      const matchesRole = roleFilter === "All" || user.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [searchQuery, statusFilter, roleFilter]);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>User Directory</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <UserFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
          />

          <UserTable
            users={filteredUsers}
            totalUsers={dummyUsers.length}
            searchQuery={searchQuery}
          />
        </CardContent>
      </Card>
    </div>
  );
}
