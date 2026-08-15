import { User } from "../types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface UserTableProps {
  users: User[];
  totalUsers: number;
  searchQuery: string;
}

export function UserTable({ users, totalUsers, searchQuery }: UserTableProps) {
  if (users.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        {totalUsers === 0
          ? "No users yet."
          : searchQuery
            ? `No results for "${searchQuery}".`
            : "No users match the selected filters."}
      </div>
    );
  }

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">User</TableHead>
            <TableHead className="w-[150px] text-left">Role</TableHead>
            <TableHead className="w-[150px] text-left">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="w-[300px]">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-[150px] text-left">{user.role}</TableCell>
              <TableCell className="w-[150px] text-left">
                <Badge
                  variant={user.status === "Active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
