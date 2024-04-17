import {
  TableOptions,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";

export default function UsersList() {
  const columns = [
    {
      accessorKey: "id",
      header: "id",
      size: 225,
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "name",
      size: 225,
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "nickName",
      header: "nickName",
      size: 225,
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
  ];
  const data = [{ id: "1", name: "Januszk", nickName: "JanuszekKox12" }];

  const table = createSolidTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div class="bg-red-500">
      <table style={{ border: "solid black 1px" }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr style={{ border: "solid black 1px" }}>
            {headerGroup.headers.map((header) => (
              <th style={{ border: "solid black 1px" }} class="px-2">
                {header.column.columnDef.header as any}
              </th>
            ))}
          </tr>
        ))}
        {table.getRowModel().rows.map((row) => (
          <tr>
            {row.getVisibleCells().map((cell) => (
              <td style={{ border: "solid black 1px" }} class="px-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}