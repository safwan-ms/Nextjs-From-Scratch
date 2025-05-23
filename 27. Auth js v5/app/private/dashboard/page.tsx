import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Renamed Table icon import to avoid naming conflict
import { Table as TableIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <div className="p-6 grid gap-6">
          {/* Grid layout for cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Revenue Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.87</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            {/* Subscriptions Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>

            {/* Sales Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +19% from last month
                </p>
              </CardContent>
            </Card>

            {/* Active Now Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Signups Table Card */}
          <div className="grid gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Recent Signups
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Table Component */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Table Rows */}
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>2024-04-16</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>2024-04-14</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Michael Johnson</TableCell>
                      <TableCell>michael@example.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>2024-04-13</TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
