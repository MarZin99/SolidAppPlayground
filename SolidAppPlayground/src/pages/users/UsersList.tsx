import {
  TableOptions,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";
import { User } from "../../models/user.model";
import { FiEdit } from "solid-icons/fi";
import { IoPersonAddSharp } from "solid-icons/io";

export interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  const columns = [
    {
      accessorKey: "id",
      header: "Id",
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "nickName",
      header: "Nickname",
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "edit",
      header: (props: any) => (
        <p class="hover:cursor-pointer">
          <IoPersonAddSharp />
        </p>
      ),
      cell: (props: any) => (
        <p class="hover:cursor-pointer">
          <FiEdit />
        </p>
      ),
    },
  ];

  const table = createSolidTable({
    columns,
    data: users,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div
        class="text-xl font-bold w-fit px-4 rounded-t-lg"
        style={{ "background-color": "var(--primary-light-color)" }}
      >
        Users
      </div>
      <table class="rounded-md ">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr>
            {headerGroup.headers.map((header) => (
              <th
                class="px-2 py-1 last:rounded-tr-lg"
                style={{ "background-color": "var(--primary-light-color)" }}
              >
                {header.column.columnDef.header as any}
              </th>
            ))}
          </tr>
        ))}
        {table.getRowModel().rows.map((row) => (
          <tr>
            {row.getVisibleCells().map((cell) => (
              <td
                class="px-2 border-b-gray-300 border-b-2 pt-1"
                style={{ "background-color": "var(--table-row" }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
